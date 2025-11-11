<script lang="ts">
  import { css } from '@agapi/ui/panda/css';
  import { Section } from '@agapi/ui/section';
  import { Columns } from '$lib/components/layouts';
  import { CollectionGrid } from '$lib/payload/collections/collection-grid';

  import { StoreFilter } from '$lib/payload/components/stores';

  import {
    contentRootStyles,
    contentContainerStyles,
    filterSidebar
  } from './collection-content.styles';
  import type { CollectionContentProps, FilterGroup, FilterMapping } from './collection-content.types';
  import { AnimateOnEntry } from '$lib/components/animation';

  const {
    items,
    collectionType,
    collectionLabel,
    filterGroups: initialFilterGroups,
    typeMappings = [],
    onFilterChange,
    css: cssProp
  }: CollectionContentProps = $props();

  // Create reactive state for each filter group
  let filterGroups = $state<FilterGroup[]>(
    initialFilterGroups.map(group => ({
      ...group,
      options: group.options.map(opt => ({ ...opt }))
    }))
  );

  let itemsSection: HTMLElement;

  function handleFilterChange(groupId: string, optionId: string, checked: boolean) {
    filterGroups = filterGroups.map(group =>
      group.id === groupId
        ? {
            ...group,
            options: group.options.map(opt =>
              opt.id === optionId ? { ...opt, checked } : opt
            )
          }
        : group
    );
  }

  /**
   * Checks if an item matches the type filters (first filter group)
   */
  function matchesTypeFilters(item: typeof items[0], activeTypes: string[]): boolean {
    if (activeTypes.length === 0) return true;

    // Get tags from item
    const tags = item.tags?.map(t => t.name.toLowerCase()) || [];
    const tagString = tags.join(' ');
    const category = (item as any).category?.toLowerCase() || '';
    const searchText = `${tagString} ${category}`;

    return activeTypes.some(type => {
      const mapping = typeMappings.find(m => m.filterId === type);
      if (!mapping) return false;

      return mapping.keywords.some((keyword: string) =>
        searchText.includes(keyword.toLowerCase())
      );
    });
  }

  /**
   * Checks if an item matches dietary/special filters (second filter group if exists)
   */
  function matchesSpecialFilters(item: typeof items[0], activeFilters: string[]): boolean {
    if (activeFilters.length === 0) return true;

    const dietaryOptions = (item as any).businessData?.dietaryOptions || [];

    return activeFilters.some(filter => dietaryOptions.includes(filter));
  }

  /**
   * Checks if an item matches location filters
   */
  function matchesLocationFilters(item: typeof items[0], activeLocations: string[]): boolean {
    if (activeLocations.length === 0) return true;

    const isExternal = (item as any).isExternal === true;

    if (activeLocations.includes('i-kopcentret') && !isExternal) return true;
    if (activeLocations.includes('pa-omradet') && isExternal) return true;

    return false;
  }

  // Apply filters to items
  const filteredItems = $derived(
    (() => {
      // Get active filters from each group
      const typeGroup = filterGroups[0]; // First group is always type filters
      const activeTypes = typeGroup?.options.filter(f => f.checked).map(f => f.id) || [];

      // Second group could be dietary/special filters or location
      const secondGroup = filterGroups[1];
      const secondGroupIsLocation = secondGroup?.id === 'location';

      const activeSpecialFilters = !secondGroupIsLocation
        ? secondGroup?.options.filter(f => f.checked).map(f => f.id) || []
        : [];

      // Last group is typically location
      const locationGroup = filterGroups[filterGroups.length - 1];
      const activeLocations = locationGroup?.options.filter(f => f.checked).map(f => f.id) || [];

      const filtered = items.filter((item: typeof items[0]) => {
        const matchesType = matchesTypeFilters(item, activeTypes);
        const matchesSpecial = matchesSpecialFilters(item, activeSpecialFilters);
        const matchesLocation = matchesLocationFilters(item, activeLocations);

        return matchesType && matchesSpecial && matchesLocation;
      });

      return filtered;
    })()
  );

  // Call onFilterChange when filtered items change
  $effect(() => {
    onFilterChange?.(filteredItems);
  });
</script>

<Section
  colorVariant="default"
  rootStyles={css.raw(contentRootStyles, cssProp)}
  containerStyles={css.raw(contentContainerStyles)}
  containerWidth="full"
>
  <Columns
    template={{ base: '1fr', lg: '280px 1fr' }}
    gap="normal"
    align="start"
  >
    <!-- Filters Sidebar -->
    <aside class={filterSidebar} aria-label="{collectionType} filters">
      <AnimateOnEntry direction="up" duration={0.6} delay={0.2} blur={true} stagger={{ enabled: true, delay: 0.11 }}>
        {#each filterGroups as group (group.id)}
          <StoreFilter
            title={group.title}
            options={group.options}
            onFilterChange={(optionId, checked) => handleFilterChange(group.id, optionId, checked)}
          />
        {/each}
      </AnimateOnEntry>
    </aside>

    <!-- Items Grid -->
    <section bind:this={itemsSection} style="scroll-margin-top: 100px;" aria-label="{collectionType} results" id={collectionType}>
      <CollectionGrid
        items={filteredItems as any}
        {collectionType}
        {collectionLabel}
      />
    </section>
  </Columns>
</Section>

