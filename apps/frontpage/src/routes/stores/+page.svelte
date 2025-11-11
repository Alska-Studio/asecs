<script lang="ts">
  import type { PageData } from './$types';
  import type { FilterGroup, FilterMapping } from '$lib/payload/collections/collection-content';

  import { css } from '@agapi/ui/panda/css';
  import { CollectionHero } from '$lib/payload/collections/collection-hero';
  import { CollectionContent } from '$lib/payload/collections/collection-content';

  interface Props {
    data: PageData;
  }


  const { data }: Props = $props();
  const pageContainer = css({
    backgroundColor: 'surface.default.background',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  });

  // Store-specific filter configuration
  const filterGroups: FilterGroup[] = [
    {
      id: 'storetype',
      title: 'Butikstyp',
      options: [
        { id: 'klader', label: 'Kläder', checked: false },
        { id: 'smycken', label: 'Smycken', checked: false },
        { id: 'skonhet', label: 'Skönhet', checked: false },
        { id: 'teknik', label: 'Teknik', checked: false },
        { id: 'livsstil', label: 'Livsstil', checked: false },
        { id: 'halsa', label: 'Hälsa', checked: false },
        { id: 'matbutik', label: 'Matbutik', checked: false },
        { id: 'tjanster', label: 'Tjänster', checked: false }
      ]
    },
    {
      id: 'location',
      title: 'Plats',
      options: [
        { id: 'i-kopcentret', label: 'I köpcentret', checked: false },
        { id: 'pa-omradet', label: 'På området', checked: false }
      ]
    }
  ];

  const typeMappings: FilterMapping[] = [
    { filterId: 'klader', keywords: ['mode', 'kläder', 'fashion', 'clothing'] },
    { filterId: 'teknik', keywords: ['teknik', 'elektronik', 'tech', 'electronics'] },
    { filterId: 'skonhet', keywords: ['skönhet', 'kosmetika', 'beauty', 'cosmetics'] },
    { filterId: 'smycken', keywords: ['smycken', 'guld', 'jewelry', 'gold'] },
    { filterId: 'halsa', keywords: ['hälsa', 'apotek', 'health', 'pharmacy'] },
    { filterId: 'matbutik', keywords: ['livsmedel', 'mat', 'food', 'grocery'] },
    { filterId: 'livsstil', keywords: ['hem', 'hobby', 'sport', 'böcker', 'home', 'books', 'lifestyle'] },
    { filterId: 'tjanster', keywords: ['tjänster', 'service', 'services'] }
  ];
</script>

<svelte:head>
  <title>Butiker - Asecs</title>
</svelte:head>

<div class={pageContainer}>
  <!-- Hero Section -->
  <CollectionHero
    title="Butiker från"
    titleAlternate="A till Ö"
    richText="<p>Upptäck alla våra butiker på Asecs. Från mode och skönhet till teknik och livsstil – här hittar du allt du behöver.</p>"
    backgroundImage="https://picsum.photos/id/168/1920/800"
    openingHours={[
      { day: 1, open: '10:00', close: '20:00' },  // Monday
      { day: 2, open: '10:00', close: '20:00' },  // Tuesday
      { day: 3, open: '10:00', close: '20:00' },  // Wednesday
      { day: 4, open: '10:00', close: '20:00' },  // Thursday
      { day: 5, open: '10:00', close: '21:00' },  // Friday
      { day: 6, open: '10:00', close: '18:00' },  // Saturday
      { day: 0, open: '11:00', close: '17:00' }  // Sunday
    ]}
    actions={[
      {
        label: 'Se alla butiker',
        onClick: () => {
          document.getElementById('stores')?.scrollIntoView({ behavior: 'smooth' });
        },
        icon: 'storefront'
      },
      {
        label: 'Hitta i karta',
        href: '#map',
        variant: 'primary',
        icon: 'map-pin'
      }
    ]}
  />

  <!-- Main Content -->
  <CollectionContent
    items={data.stores as any || []}
    collectionType="stores"
    collectionLabel="butiker"
    {filterGroups}
    {typeMappings}
  />

  <!-- TODO: Add Footer component when available -->
</div>
