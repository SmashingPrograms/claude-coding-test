import { motion } from 'framer-motion';
import { pageVariants, staggerContainer } from '../animations/variants';
import { HistoricalItemCard } from '../HistoricalItemCard';
import type { HistoricalItem, Page } from '../../types';

interface HomeProps {
  items: HistoricalItem[];
  setCurrentPage: (page: Page) => void;
  setSelectedItem: (item: HistoricalItem) => void;
}

export function Home({ items, setCurrentPage, setSelectedItem }: HomeProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-display text-deep-sea mb-4">
          Maritime Heritage Collection
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the rich history of maritime artifacts and their significance in shaping our understanding of the past.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {items.slice(0, 4).map((item) => (
          <HistoricalItemCard
            key={item.id}
            item={item}
            onClick={() => {
              setSelectedItem(item);
              setCurrentPage('catalog');
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
} 