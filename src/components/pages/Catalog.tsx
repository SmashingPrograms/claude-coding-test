import { motion } from 'framer-motion';
import { pageVariants, staggerContainer } from '../animations/variants';
import { HistoricalItemCard } from '../HistoricalItemCard';
import type { HistoricalItem } from '../../types';

interface CatalogProps {
  items: HistoricalItem[];
  selectedItem: HistoricalItem | null;
  setSelectedItem: (item: HistoricalItem | null) => void;
}

export function Catalog({ items, selectedItem, setSelectedItem }: CatalogProps) {
  if (selectedItem) {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="max-w-4xl mx-auto px-4 py-8"
      >
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedItem(null)}
          className="mb-6 text-ocean-blue hover:text-deep-sea transition-colors"
        >
          ← Back to Catalog
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="aspect-w-16 aspect-h-9 bg-beach-sand">
            <div className="w-full h-full flex items-center justify-center text-deep-sea">
              <span className="text-6xl">🏺</span>
            </div>
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-display text-deep-sea mb-4">{selectedItem.title}</h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Era</p>
                <p className="text-lg">{selectedItem.era}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg">{selectedItem.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="text-lg">{selectedItem.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-lg">{selectedItem.date}</p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-deep-sea mb-2">Description</h2>
              <p className="text-gray-700">{selectedItem.description}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-deep-sea mb-2">Significance</h2>
              <p className="text-gray-700">{selectedItem.significance}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Condition</p>
                <p className="text-lg">{selectedItem.condition}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Dimensions</p>
                <p className="text-lg">{selectedItem.dimensions}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Materials</p>
                <p className="text-lg">{selectedItem.materials}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Provenance</p>
                <p className="text-lg">{selectedItem.provenance}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-display text-deep-sea mb-8"
      >
        Historical Artifacts Catalog
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {items.map((item) => (
          <HistoricalItemCard
            key={item.id}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
} 