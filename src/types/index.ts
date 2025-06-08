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

export type Page = 'home' | 'catalog' | 'about' | 'contact'; 