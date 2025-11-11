<script lang="ts">
  import { Badge } from '@agapi/ui/badge';
  import { container, indicator } from './opening-hours.styles';
  import { calculateOpeningStatus, getMockOpeningHours } from './opening-hours.utils';
  import type { OpeningHoursProps } from './opening-hours.types';

  const {
    locationId,
    schedule,
    currentTime,
    viewAllHref,
    css: cssProp
  }: OpeningHoursProps = $props();

  // TODO: Fetch default hours from collection based on locationId
  // For now, use mock data or provided schedule
  const defaultHours = $derived(getMockOpeningHours());
  
  // Use provided schedule or fall back to default mock schedule
  const effectiveSchedule = $derived(schedule || defaultHours.weeklySchedule);
  const overrides = $derived(defaultHours.overrides);

  // Calculate opening status
  const status = $derived(
    calculateOpeningStatus(effectiveSchedule, currentTime, overrides)
  );
  
  const currentIndicatorColor = $derived(
    status.currentStatus.isOpen ? '#67be7b' : '#ff3e13'
  );
  
  const nextIndicatorColor = '#67be7b'; // Green for "opens at"
</script>

<div class={container}>
  <!-- Current status badge -->
  <Badge
    size="md"
    colorVariant="primary.vibrant"
  >
    {#snippet icon()}
      <div class={indicator} style="background-color: {currentIndicatorColor};"></div>
    {/snippet}
    {status.currentStatus.message}
  </Badge>

  <!-- Next status badge (if available) -->
  {#if status.nextStatus}
    <Badge
      size="md"
      colorVariant="primary.vibrant"
    >
      {#snippet icon()}
        <div class={indicator} style="background-color: {nextIndicatorColor};"></div>
      {/snippet}
      {status.nextStatus.message}
    </Badge>
  {/if}

  <!-- View all opening hours badge/button -->
  {#if viewAllHref}
    <a href={viewAllHref}>
      <Badge
        size="md"
        colorVariant="primary.subdued"
      >
        Se alla öppettider
      </Badge>
    </a>
  {/if}
</div>

<!--
  TODO: Opening Hours System Implementation
  
  Phase 1: Create Payload CMS Collection
  - Create an OpeningHours global or collection with:
    - Default weekly schedule (Monday-Sunday)
    - Special date overrides (holidays, events)
    - Location/store association
  
  Phase 2: API Integration
  - Implement fetchDefaultOpeningHours() in utils
  - Add API route: /api/opening-hours/[locationId]
  - Handle caching and error states
  
  Phase 3: Component Enhancement
  - Add loading state while fetching hours
  - Add error fallback for failed fetches
  - Support multiple locations/stores
  - Add real-time updates (revalidate on mount)
  
  Phase 4: Advanced Features
  - Admin UI for managing hours in Payload CMS
  - Support for store-specific overrides
  - Handle timezone differences
  - Show reason for special hours (holidays, etc.)
-->
