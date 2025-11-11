<script lang="ts">
  import { css } from '@agapi/ui/panda/css';
  import { Section } from '@agapi/ui/section';
  import { Columns } from '$lib/components/layouts';
  import { StoreFilter } from '../store-filter';
  import { StoresGrid } from '../stores-grid';
  import {
    contentRootStyles,
    contentContainerStyles,
    filterSidebar,
    notchStyles
  } from './stores-content.styles';
  import type { StoresContentProps, FilterOption, StoreTypeMapping } from './stores-content.types';
  import { AnimateOnEntry } from '$lib/components/animation';

  const {
    stores,
    initialStoreTypeFilters,
    initialLocationFilters,
    onFilterChange,
    css: cssProp
  }: StoresContentProps = $props();

  // Default filter configurations
  const defaultStoreTypeFilters: FilterOption[] = [
    { id: 'klader', label: 'Kläder', checked: false },
    { id: 'smycken', label: 'Smycken', checked: false },
    { id: 'skonhet', label: 'Skönhet', checked: false },
    { id: 'teknik', label: 'Teknik', checked: true },
    { id: 'livsstil', label: 'Livsstil', checked: true },
    { id: 'halsa', label: 'Hälsa', checked: false },
    { id: 'matbutik', label: 'Matbutik', checked: false },
    { id: 'tjanster', label: 'Tjänster', checked: false }
  ];

  const defaultLocationFilters: FilterOption[] = [
    { id: 'i-kopcentret', label: 'I köpcentret', checked: true },
    { id: 'pa-omradet', label: 'På området', checked: false }
  ];

  // Store type to category keyword mapping
  const storeTypeMappings: StoreTypeMapping[] = [
    { filterId: 'klader', keywords: ['mode', 'kläder', 'fashion', 'clothing'] },
    { filterId: 'teknik', keywords: ['teknik', 'elektronik', 'tech', 'electronics'] },
    { filterId: 'skonhet', keywords: ['skönhet', 'kosmetika', 'beauty', 'cosmetics'] },
    { filterId: 'smycken', keywords: ['smycken', 'guld', 'jewelry', 'gold'] },
    { filterId: 'halsa', keywords: ['hälsa', 'apotek', 'health', 'pharmacy'] },
    { filterId: 'matbutik', keywords: ['livsmedel', 'mat', 'food', 'grocery'] },
    { filterId: 'livsstil', keywords: ['hem', 'hobby', 'sport', 'böcker', 'home', 'books', 'lifestyle'] },
    { filterId: 'tjanster', keywords: ['tjänster', 'service', 'services'] }
  ];

  // Filter state management
  let storeTypeFilters = $state<FilterOption[]>(
    initialStoreTypeFilters ?? defaultStoreTypeFilters
  );

  let locationFilters = $state<FilterOption[]>(
    initialLocationFilters ?? defaultLocationFilters
  );

  let storesSection: HTMLElement;

  function handleStoreTypeFilterChange(optionId: string, checked: boolean) {
    storeTypeFilters = storeTypeFilters.map(filter =>
      filter.id === optionId ? { ...filter, checked } : filter
    );
  }

  function handleLocationFilterChange(optionId: string, checked: boolean) {
    locationFilters = locationFilters.map(filter =>
      filter.id === optionId ? { ...filter, checked } : filter
    );
  }

  /**
   * Checks if a store matches any of the given type filters
   */
  function matchesStoreType(store: typeof stores[0], activeTypes: string[]): boolean {
    if (activeTypes.length === 0) return true;

    const category = store.category?.toLowerCase() || '';

    return activeTypes.some(type => {
      const mapping = storeTypeMappings.find(m => m.filterId === type);
      if (!mapping) return false;

      return mapping.keywords.some((keyword: string) => category.includes(keyword));
    });
  }

  /**
   * Checks if a store matches any of the given location filters
   */
  function matchesLocation(store: typeof stores[0], activeLocations: string[]): boolean {
    if (activeLocations.length === 0) return true;

    // TODO: Add location data to stores when available
    // For now, assume all stores are in the shopping center
    return activeLocations.includes('i-kopcentret');
  }

  // Apply filters to stores
  const filteredStores = $derived(
    (() => {
      const activeStoreTypes = storeTypeFilters
        .filter(f => f.checked)
        .map(f => f.id);

      const activeLocations = locationFilters
        .filter(f => f.checked)
        .map(f => f.id);

      const filtered = stores.filter((store: typeof stores[0]) =>
        matchesStoreType(store, activeStoreTypes) &&
        matchesLocation(store, activeLocations)
      );

      return filtered;
    })()
  );

  // Call onFilterChange when filtered stores change
  $effect(() => {
    onFilterChange?.(filteredStores);
  });
</script>

<Section
  colorVariant="default"
  rootStyles={css.raw(contentRootStyles, cssProp)}
  containerStyles={css.raw(contentContainerStyles)}
  containerWidth="full"
>
  <div class={notchStyles}></div>
  <Columns
    template={{ base: '1fr', lg: '280px 1fr' }}
    gap="normal"
    align="start"
  >
    <!-- Filters Sidebar -->
    <aside class={filterSidebar} aria-label="Store filters">
      <AnimateOnEntry direction="up" duration={0.6} delay={0.2} blur={true} stagger={{ enabled: true, delay: 0.11 }}>

        <StoreFilter
        title="Butikstyp"
        options={storeTypeFilters}
        onFilterChange={handleStoreTypeFilterChange}
        />
        <StoreFilter
        title="Plats"
        options={locationFilters}
        onFilterChange={handleLocationFilterChange}
        />
      </AnimateOnEntry>
    </aside>

    <!-- Stores Grid -->
    <section bind:this={storesSection} style="scroll-margin-top: 100px;" aria-label="Store results" id="stores">
      <StoresGrid stores={filteredStores} />
    </section>
  </Columns>
</Section>

