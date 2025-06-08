import { motion } from 'framer-motion';
import { cardVariants } from './animations/variants';
import type { HistoricalItem } from '../types';

interface HistoricalItemCardProps {
  item: HistoricalItem;
  onClick?: () => void;
}

export function HistoricalItemCard({ item, onClick }: HistoricalItemCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className="card cursor-pointer"
    >
      <div className="aspect-w-16 aspect-h-9 bg-beach-sand rounded-t-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-deep-sea">
          <span className="text-4xl">🏺</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-deep-sea mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.era}</p>
        <p className="text-gray-700 line-clamp-2">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-ocean-blue">{item.location}</span>
          <span className="text-sm text-coral">{item.category}</span>
        </div>
      </div>
    </motion.div>
  );
} 