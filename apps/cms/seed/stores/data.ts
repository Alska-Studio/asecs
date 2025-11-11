// Real stores from Asecs Jönköping
export const stores = [
  {
    name: 'Åhléns',
    category: 'Varuhus',
    description: 'Ett varuhus som erbjuder ett brett sortiment av mode, skönhet och heminredning.',
    products: 'mode, skönhet, heminredning, accessoarer'
  },
  {
    name: 'H&M',
    category: 'Mode',
    description: 'Internationell modekedja med kläder för hela familjen.',
    products: 'damkläder, herrkläder, barnkläder, accessoarer'
  },
  {
    name: 'Lindex',
    category: 'Mode',
    description: 'Modekedja med kläder för kvinnor och barn.',
    products: 'damkläder, barnkläder, underkläder, accessoarer'
  },
  {
    name: 'Gina Tricot',
    category: 'Mode',
    description: 'Modebutik för kvinnor med fokus på trendiga kläder.',
    products: 'damkläder, accessoarer, smycken'
  },
  {
    name: 'Bik Bok',
    category: 'Mode',
    description: 'Modebutik med fokus på unga kvinnor.',
    products: 'damkläder, underkläder, accessoarer'
  },
  {
    name: 'MQ Marqet',
    category: 'Mode',
    description: 'Modebutik med kläder för både kvinnor och män.',
    products: 'damkläder, herrkläder, accessoarer'
  },
  {
    name: 'Clas Ohlson',
    category: 'Teknik',
    description: 'Erbjuder produkter inom hem, teknik och fritid.',
    products: 'elektronik, verktyg, heminredning, fritidsprodukter'
  },
  {
    name: 'Elgiganten Megastore',
    category: 'Teknik',
    description: 'Elektronikbutik med ett stort utbud av hemelektronik.',
    products: 'TV, datorer, telefoner, hushållsmaskiner'
  },
  {
    name: 'Kicks',
    category: 'Skönhet',
    description: 'Skönhetsbutik med kosmetika, hudvård och parfym.',
    products: 'kosmetika, hudvård, parfym, hårvård'
  },
  {
    name: 'Albrekts Guld',
    category: 'Smycken',
    description: 'Specialiserad på smycken i guld och silver.',
    products: 'guldsmycken, silversmycken, ringar, halsband'
  }
];

export interface StoreData {
  name: string;
  category: string;
  description: string;
  products: string;
}
