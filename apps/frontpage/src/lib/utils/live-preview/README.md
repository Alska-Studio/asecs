# Live Preview Utilities

Clean, reusable utilities for Payload CMS live preview integration with SvelteKit and Svelte 5.

## Features

✅ **Real-time Updates** - See changes as you type in Payload admin
✅ **Svelte 5 Ready** - Built with `$state` and `$derived` runes
✅ **Type-safe** - Full TypeScript support
✅ **Modular** - Separated concerns for easy maintenance
✅ **Debug Mode** - Detailed logging in development

## Setup

### 1. Environment Variables

Create a `.env` file in your app directory:

```bash
# Required: Payload CMS server URL
PUBLIC_PAYLOAD_SERVER_URL=http://localhost:3000
```

### 2. Basic Usage

```svelte
<script lang="ts">
	import { createLivePreviewStore } from '$lib/utils/live-preview';
	import LivePreviewBanner from '$lib/components/LivePreviewBanner.svelte';

	// Check if in preview mode
	const isPreview = $page.url.searchParams.get('preview') === 'true';

	// Create live preview store
	let livePreview = null;
	if (isPreview && data.page) {
		livePreview = createLivePreviewStore({
			initialData: data.page,
			// Optional: override defaults
			serverURL: 'http://localhost:3000',
			depth: 2,
			debug: true
		});
	}

	// Use reactive data
	const pageData = $derived(livePreview?.data || data.page);

	// Cleanup on unmount
	onDestroy(() => livePreview?.cleanup());
</script>

<!-- Show preview banner -->
{#if isPreview && livePreview}
	<LivePreviewBanner {...livePreview} />
{/if}
```

## API Reference

### `createLivePreviewStore(options)`

Creates a reactive store for live preview data.

#### Options

- `initialData` (required) - Initial page/content data
- `serverURL` (optional) - Payload server URL (defaults to env var)
- `depth` (optional) - Relationship depth (default: 2)
- `debug` (optional) - Enable debug logging (default: dev mode)

#### Returns

A reactive store with:
- `data` - Current page data (reactive)
- `isLoading` - Loading state (reactive)
- `isConnected` - Connection state (reactive)
- `updateCount` - Number of updates received (reactive)
- `lastUpdate` - Last update timestamp (reactive)
- `formattedLastUpdate` - Formatted time string
- `cleanup()` - Cleanup function

### `transformPayloadToPage(data)`

Transforms Payload CMS data to your Page interface.

### `needsTransformation(data)`

Checks if data needs transformation from Payload format.

## Architecture

```
live-preview/
├── constants.ts       # Configuration and constants
├── transformer.ts     # Data transformation utilities
├── store.svelte.ts   # Reactive store implementation
└── index.ts          # Public API exports
```

### Constants

Centralized configuration in `constants.ts`:
- Server URL from environment
- Default depth settings
- Preview banner styles
- Parameter names

### Transformer

The transformer handles conversion between Payload's data structure and your app's Page interface:
- Maps `content` blocks
- Transforms `blockType` to `component`
- Ensures proper meta data structure

### Store

The reactive store (`store.svelte.ts`):
- Uses Svelte 5's `$state` for reactivity
- Handles Payload postMessage events
- Manages connection lifecycle
- Provides debug logging

## Troubleshooting

### Preview not updating?

1. Check console for `[LivePreviewStore]` logs
2. Verify `PUBLIC_PAYLOAD_SERVER_URL` is correct
3. Ensure Payload admin is on the configured URL
4. Check CORS settings in Payload config

### Data structure issues?

The transformer automatically handles:
- Payload's `content` → our `content` array
- Payload's `blockType` → our `component` field
- Missing meta fields with defaults

### Debug mode

Enable detailed logging:

```javascript
createLivePreviewStore({
	initialData: data,
	debug: true // Force debug mode
})
```

## Payload Configuration

Ensure your Payload collection has live preview configured:

```typescript
// collections/Pages.ts
export const Pages = {
	slug: 'pages',
	admin: {
		livePreview: {
			url: ({ data, locale }) => {
				const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:5176'
				const slug = data?.slug || 'home'
				return `${baseUrl}/cms/${slug}?preview=true&locale=${locale?.code || 'en'}`
			}
		}
	},
	versions: {
		drafts: true // Required for live preview
	}
	// ... rest of config
}
```

## Best Practices

1. **Always cleanup** - Call `cleanup()` in `onDestroy()`
2. **Check for preview mode** - Only initialize when needed
3. **Use derived state** - Leverage Svelte 5's `$derived` for reactive data
4. **Handle missing data** - Provide fallbacks for undefined fields
5. **Test thoroughly** - Verify updates work across all block types




