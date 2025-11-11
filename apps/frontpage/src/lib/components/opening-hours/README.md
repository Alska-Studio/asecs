# Opening Hours Component

A flexible opening hours display component with support for default schedules and special date overrides.

## Current Status: Mock Implementation

⚠️ **Currently using mock data**. The component is architected to support a real collection-based system but uses hardcoded data for now.

## Usage

### Basic Usage (with mock data)

```svelte
<script>
  import { OpeningHours } from '$lib/components/opening-hours';
</script>

<OpeningHours
  locationId="asecs-main"
  viewAllHref="/opening-hours"
/>
```

### With Custom Schedule

```svelte
<OpeningHours
  schedule={[
    { day: 1, open: '10:00', close: '20:00' }, // Monday
    { day: 2, open: '10:00', close: '20:00' }, // Tuesday
    // ... rest of week
  ]}
  viewAllHref="/opening-hours"
/>
```

### For Testing (specific time)

```svelte
<OpeningHours
  locationId="store-123"
  currentTime={new Date('2024-12-24T14:00:00')}
  viewAllHref="/opening-hours"
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `locationId` | `string` | No | Store/location identifier (for future collection fetching) |
| `schedule` | `DaySchedule[]` | No | Manual schedule override (bypasses default system) |
| `currentTime` | `Date` | No | Current time (defaults to now, useful for testing) |
| `viewAllHref` | `string` | No | URL for "See all opening hours" link |
| `css` | `SystemStyleObject` | No | Custom CSS styles |

## Architecture

### Current Mock System

```typescript
// Mock data structure
{
  locationId: 'asecs-main',
  weeklySchedule: [
    { day: 1, open: '10:00', close: '20:00' },
    // ... Monday to Sunday
  ],
  overrides: [
    // Special dates (holidays, events)
    { date: '2024-12-24', hours: null, reason: 'Julafton' }
  ]
}
```

### Planned Real System

#### Phase 1: Collection Structure

Create a Payload CMS global or collection:

```typescript
{
  slug: 'opening-hours',
  fields: [
    {
      name: 'locationId',
      type: 'text',
      required: true
    },
    {
      name: 'defaultSchedule',
      type: 'array',
      fields: [
        { name: 'day', type: 'select', options: ['monday', 'tuesday', ...] },
        { name: 'open', type: 'text' },
        { name: 'close', type: 'text' }
      ]
    },
    {
      name: 'specialDates',
      type: 'array',
      fields: [
        { name: 'date', type: 'date' },
        { name: 'open', type: 'text' },
        { name: 'close', type: 'text' },
        { name: 'closed', type: 'checkbox' },
        { name: 'reason', type: 'text' }
      ]
    }
  ]
}
```

#### Phase 2: API Integration

```typescript
// In opening-hours.utils.ts
export async function fetchDefaultOpeningHours(locationId: string) {
  const response = await fetch(`/api/opening-hours/${locationId}`);
  return await response.json();
}
```

#### Phase 3: Component Integration

```svelte
<script>
  import { onMount } from 'svelte';
  import { fetchDefaultOpeningHours } from './opening-hours.utils';
  
  let openingHours = $state(null);
  
  onMount(async () => {
    openingHours = await fetchDefaultOpeningHours(locationId);
  });
</script>
```

## Features

### Current Features
- ✅ Calculate open/closed status
- ✅ Show next opening time
- ✅ Support for custom schedules
- ✅ Special date overrides (in mock)
- ✅ Swedish language formatting
- ✅ Visual status indicators (red/green dots)

### Planned Features
- 🔜 Fetch from Payload CMS collection
- 🔜 Real-time status updates
- 🔜 Holiday calendar integration
- 🔜 Multiple location support
- 🔜 Timezone support
- 🔜 Loading and error states
- 🔜 Cache and revalidation

## Status Messages

The component displays intelligent status messages:

- **Open**: "Öppet till 20:00"
- **Closed (opens today)**: "Stängt nu" + "Öppnar idag 10:00"
- **Closed (opens tomorrow)**: "Stängt nu" + "Öppnar imorgon 10:00"
- **Closed (opens later)**: "Stängt nu" + "Öppnar måndag 10:00"
- **Special closure**: "Julafton" + "Öppnar måndag 10:00"

## Day Numbers

Days are represented as numbers (JavaScript Date convention):
- 0 = Sunday
- 1 = Monday
- 2 = Tuesday
- 3 = Wednesday
- 4 = Thursday
- 5 = Friday
- 6 = Saturday

## Mock Data

Current mock schedule (see `getMockOpeningHours()` in utils):
- Mon-Thu: 10:00-20:00
- Friday: 10:00-21:00 (extended)
- Saturday: 10:00-18:00
- Sunday: 11:00-17:00

## TODO List

### Backend (Payload CMS)
- [ ] Create OpeningHours collection/global
- [ ] Add fields for default schedule
- [ ] Add fields for special date overrides
- [ ] Create admin UI for managing hours
- [ ] Add validation for time formats
- [ ] Support location/store relationships

### Frontend API
- [ ] Create `/api/opening-hours/[locationId]` endpoint
- [ ] Implement `fetchDefaultOpeningHours()` function
- [ ] Add caching strategy
- [ ] Handle error states
- [ ] Add loading indicators

### Component Enhancement
- [ ] Add loading state UI
- [ ] Add error fallback UI
- [ ] Implement real-time updates
- [ ] Add timezone support
- [ ] Show holiday/special hour reasons
- [ ] Add accessibility improvements

### Testing
- [ ] Unit tests for calculation logic
- [ ] Tests for special date handling
- [ ] Tests for edge cases (midnight, etc.)
- [ ] Visual regression tests
- [ ] Integration tests with mock API

## Design Tokens

The component uses the following design tokens:
- Badge colors: `primary.vibrant`, `primary.subdued`
- Indicator colors: Custom (green: #67be7b, red: #ff3e13)
- Spacing: Handled by Badge component
- Typography: Handled by Badge component

## Dependencies

- `@agapi/ui/badge` - For badge styling
- `opening-hours.utils` - Calculation logic
- `opening-hours.styles` - Component styles



