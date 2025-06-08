import { motion } from 'framer-motion';
import { navVariants } from './animations/variants';
import type { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const pages: Page[] = ['home', 'catalog', 'about', 'contact'];

  return (
    <motion.nav 
      variants={navVariants}
      initial="initial"
      animate="animate"
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <h1 className="text-xl font-bold text-deep-sea">Maritime Heritage</h1>
          </motion.div>
          <div className="flex items-center space-x-8">
            {pages.map((page, index) => (
              <motion.button
                key={page}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(page)}
                className={`nav-link ${currentPage === page ? 'text-ocean-blue' : ''}`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 