type ColorVariant = 'primary.vibrant' | 'secondary.vibrant' | 'tertiary.vibrant' | 'action.cta'

export const sampleDeals: DealData[] = [
  {
    title: '25% off på alla skor',
    description: 'Spara 25% på vårt hela skokollektion',
    badges: [
      { label: '25% OFF', colorVariant: 'primary.vibrant' as ColorVariant }
    ]
  },
  {
    title: 'Köp 2 Betala för 1',
    description: 'På utvalda produkter',
    badges: [
      { label: '2 för 1', colorVariant: 'secondary.vibrant' as ColorVariant }
    ]
  },
  {
    title: 'Sommarveckor - 30% rabatt',
    description: 'Hela sommarsortimentet',
    badges: [
      { label: '30% OFF', colorVariant: 'primary.vibrant' as ColorVariant },
      { label: 'SOMMAR', colorVariant: 'tertiary.vibrant' as ColorVariant }
    ]
  },
  {
    title: 'Student-rabatt 15%',
    description: 'Visa ditt studentkort i kassan',
    badges: [
      { label: '15% OFF', colorVariant: 'primary.variant' as ColorVariant },
      { label: 'STUDENT', colorVariant: 'secondary.vibrant' as ColorVariant }
    ]
  },
  {
    title: 'Black Friday - 50% på allt',
    description: 'Veckans bästa erbjudande',
    badges: [
      { label: '50% OFF', colorVariant: 'primary.vibrant' as ColorVariant },
      { label: 'BLACK FRIDAY', colorVariant: 'secondary.vibrant' as ColorVariant }
    ]
  }
];

export const restaurantDeals: DealData[] = [
  {
    title: 'Lunch Special - 99kr',
    description: 'Dagens lunch med kaffe och efterrätt',
    badges: [
      { label: 'LUNCH', colorVariant: 'primary.vibrant' as ColorVariant },
      { label: '99 KR', colorVariant: 'secondary.vibrant' as ColorVariant }
    ]
  },
  {
    title: 'Happy Hour 15-18',
    description: '25% rabatt på utvalda drycker',
    badges: [
      { label: 'HAPPY HOUR', colorVariant: 'tertiary.vibrant' as ColorVariant },
      { label: '25% OFF', colorVariant: 'primary.vibrant' as ColorVariant }
    ]
  },
  {
    title: 'Familje-meny 299kr',
    description: 'För 2 vuxna och 2 barn',
    badges: [
      { label: 'FAMILJ', colorVariant: 'secondary.vibrant' as ColorVariant }
    ]
  }
];

export interface DealData {
  title: string;
  description: string;
  badges: { label: string; colorVariant: ColorVariant; }[];
};
