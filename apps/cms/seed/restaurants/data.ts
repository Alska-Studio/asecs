import type { Restaurant } from 'apps/_shared/src/payload-types';

export interface RestaurantData {
  name: string;
  category: string;
  description: string;
  cuisine: string;
  dishesServed: string;
  dietaryOptions: NonNullable<Restaurant['businessData']>['dietaryOptions']
  priceRange: NonNullable<Restaurant['businessData']>['priceRange'];
};

// Real restaurants from Asecs Jönköping
export const restaurants: RestaurantData[] = [
  {
    name: 'Caffè Nero',
    category: 'Café',
    description: 'Italiensk kaffekedja som serverar premium kaffe och lätta måltider.',
    cuisine: 'Italiensk/Kaffe',
    dishesServed: 'kaffe, cappuccino, latte, panini, sallader, bakverk, croissanter',
    dietaryOptions: ['vegetarian', 'vegan'],
    priceRange: '$$'
  },
  {
    name: 'Bada Bing Burger',
    category: 'Snabbmat',
    description: 'Burger-restaurang med amerikanska klassiker och moderna smaker.',
    cuisine: 'Amerikansk',
    dishesServed: 'hamburgare, pommes, kyckling, milkshakes, onion rings',
    dietaryOptions: ['vegetarian'],
    priceRange: '$$'
  },
  {
    name: 'Espresso House',
    category: 'Café',
    description: 'Nordisk kaffekedja med mysig atmosfär och färska bakverk.',
    cuisine: 'Skandinavisk/Kaffe',
    dishesServed: 'kaffe, te, smoothies, mackor, sallader, muffins',
    dietaryOptions: ['vegetarian', 'vegan', 'gluten-free'],
    priceRange: '$$'
  },
  {
    name: 'House of Ramen',
    category: 'Restaurang',
    description: 'Japansk ramen-restaurang med autentiska japanska smakor.',
    cuisine: 'Japansk',
    dishesServed: 'ramen, gyoza, teriyaki, miso soppa, sushi',
    dietaryOptions: ['vegetarian'],
    priceRange: '$$$'
  },
  {
    name: 'Holy Kebab',
    category: 'Snabbmat',
    description: 'Traditionell kebab-restaurang med mellanöstern specialiteter.',
    cuisine: 'Turkisk/Mellanöstern',
    dishesServed: 'kebab, falafel, shawarma, hummus, pita',
    dietaryOptions: ['vegetarian', 'halal'],
    priceRange: '$'
  },
  {
    name: 'SEN Street Kitchen',
    category: 'Snabbmat',
    description: 'Modern street food med asiatiska och internationella influenser.',
    cuisine: 'Street food',
    dishesServed: 'street tacos, bao buns, poke bowls, spring rolls',
    dietaryOptions: ['vegetarian', 'vegan'],
    priceRange: '$$'
  }
];
