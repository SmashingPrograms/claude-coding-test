export interface HistoricalItem {
  id: string;
  title: string;
  description: string;
  era: string;
  location: string;
  category: string;
  date: string;
  significance: string;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  dimensions: string;
  materials: string[];
  provenance: string;
}

export const historicalItems: HistoricalItem[] = [
  {
    id: '1',
    title: 'Ancient Maritime Compass',
    description: 'A beautifully preserved maritime compass from the early Age of Exploration. This artifact represents a crucial advancement in navigation technology that enabled global maritime trade.',
    era: '15th Century',
    location: 'Mediterranean Sea',
    category: 'Navigation',
    date: '1420-1450',
    significance: 'One of the earliest surviving examples of its kind',
    condition: 'Good',
    dimensions: '12cm x 12cm x 3cm',
    materials: ['Brass', 'Iron', 'Glass'],
    provenance: 'Recovered from a sunken merchant vessel off the coast of Sicily'
  },
  {
    id: '2',
    title: 'Victorian Seashell Collection',
    description: 'An exquisite collection of seashells meticulously cataloged by a Victorian naturalist. Each shell is carefully labeled with its scientific name and collection date.',
    era: 'Victorian Era',
    location: 'English Channel',
    category: 'Natural History',
    date: '1850-1880',
    significance: 'Rare complete collection from a notable naturalist',
    condition: 'Excellent',
    dimensions: 'Various sizes',
    materials: ['Shell', 'Paper', 'Wood'],
    provenance: 'Donated by the family of Dr. James Montgomery'
  },
  {
    id: '3',
    title: 'Ancient Fishing Net Fragment',
    description: 'A remarkably preserved fragment of an ancient fishing net, demonstrating early maritime technology and fishing practices.',
    era: 'Bronze Age',
    location: 'Aegean Sea',
    category: 'Fishing',
    date: '2000-1500 BCE',
    significance: 'Earliest known example of net fishing technology',
    condition: 'Fair',
    dimensions: '45cm x 30cm',
    materials: ['Plant fiber', 'Stone weights'],
    provenance: 'Archaeological excavation in Crete'
  },
  {
    id: '4',
    title: 'Maritime Trade Ledger',
    description: 'A detailed ledger documenting maritime trade routes and cargo manifests from the Golden Age of Sail.',
    era: '18th Century',
    location: 'Atlantic Ocean',
    category: 'Documentation',
    date: '1750-1780',
    significance: 'Comprehensive record of colonial trade routes',
    condition: 'Good',
    dimensions: '30cm x 20cm x 5cm',
    materials: ['Leather', 'Paper', 'Ink'],
    provenance: 'Acquired from the archives of the East India Company'
  },
  {
    id: '5',
    title: 'Ancient Diving Bell',
    description: 'A primitive diving bell used for underwater exploration and pearl diving in ancient times.',
    era: 'Classical Period',
    location: 'Persian Gulf',
    category: 'Diving',
    date: '300-200 BCE',
    significance: 'Early example of underwater exploration technology',
    condition: 'Poor',
    dimensions: '60cm diameter',
    materials: ['Bronze', 'Leather'],
    provenance: 'Recovered from ancient shipwreck site'
  }
]; 