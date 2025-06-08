import { motion } from 'framer-motion';
import { footerVariants } from './animations/variants';

export function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="initial"
      animate="animate"
      className="bg-white shadow-inner py-8 mt-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-deep-sea mb-4">Maritime Heritage</h3>
            <p className="text-gray-600">
              Preserving and celebrating our maritime history through artifacts and stories.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-deep-sea mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-ocean-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ocean-blue transition-colors">Collection</a></li>
              <li><a href="#" className="text-gray-600 hover:text-ocean-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-deep-sea mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li>123 Maritime Way</li>
              <li>Coastal City, CC 12345</li>
              <li>contact@maritimeheritage.org</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Maritime Heritage Collection. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
} 