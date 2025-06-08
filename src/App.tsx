import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { historicalItems } from './data/historicalItems'
import type { HistoricalItem } from './data/historicalItems'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const cardVariants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    }
  },
  tap: {
    scale: 0.98,
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  },
};

const footerVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  },
};

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'catalog' | 'about' | 'contact'>('home')
  const [selectedItem, setSelectedItem] = useState<HistoricalItem | null>(null)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-4xl mx-auto px-4 py-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-deep-sea mb-6"
            >
              Maritime Heritage Collection
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg mb-8"
            >
              Discover the fascinating world of maritime history through our carefully curated collection of artifacts and historical items.
            </motion.p>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {historicalItems.slice(0, 4).map((item) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="card cursor-pointer"
                  onClick={() => {
                    setSelectedItem(item)
                    setCurrentPage('catalog')
                  }}
                >
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-2"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600"
                  >
                    {item.description.substring(0, 100)}...
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )
      case 'catalog':
        return (
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-6xl mx-auto px-4 py-8"
          >
            {selectedItem ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="card"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedItem(null)}
                  className="btn btn-secondary mb-6"
                >
                  ← Back to Catalog
                </motion.button>
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold mb-4"
                >
                  {selectedItem.title}
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-beach-sand/10 p-6 rounded-lg"
                  >
                    <h2 className="text-xl font-bold mb-4">Details</h2>
                    <dl className="space-y-2">
                      <dt className="font-semibold">Era:</dt>
                      <dd>{selectedItem.era}</dd>
                      <dt className="font-semibold">Location:</dt>
                      <dd>{selectedItem.location}</dd>
                      <dt className="font-semibold">Date:</dt>
                      <dd>{selectedItem.date}</dd>
                      <dt className="font-semibold">Condition:</dt>
                      <dd>{selectedItem.condition}</dd>
                      <dt className="font-semibold">Dimensions:</dt>
                      <dd>{selectedItem.dimensions}</dd>
                    </dl>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 className="text-xl font-bold mb-4">Description</h2>
                    <p className="mb-4">{selectedItem.description}</p>
                    <h3 className="text-lg font-bold mb-2">Materials</h3>
                    <ul className="list-disc list-inside mb-4">
                      {selectedItem.materials.map((material, index) => (
                        <motion.li
                          key={material}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          {material}
                        </motion.li>
                      ))}
                    </ul>
                    <h3 className="text-lg font-bold mb-2">Provenance</h3>
                    <p>{selectedItem.provenance}</p>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <>
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold mb-6"
                >
                  Catalog
                </motion.h1>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {historicalItems.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={cardVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="card cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-bold mb-2"
                      >
                        {item.title}
                      </motion.h2>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-600 mb-4"
                      >
                        {item.description.substring(0, 100)}...
                      </motion.p>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-between text-sm text-gray-500"
                      >
                        <span>{item.era}</span>
                        <span>{item.category}</span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </motion.div>
        )
      case 'about':
        return (
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-4xl mx-auto px-4 py-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-6"
            >
              About Our Collection
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-4"
              >
                Welcome to the Maritime Heritage Collection, a digital repository dedicated to preserving and sharing the rich history of maritime exploration, trade, and culture.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-4"
              >
                Our collection spans thousands of years of maritime history, from ancient navigation tools to Victorian-era artifacts. Each item in our catalog has been carefully documented and preserved to ensure its historical significance is maintained for future generations.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                We are committed to making maritime history accessible to everyone, from casual enthusiasts to serious researchers. Our digital catalog provides detailed information about each artifact, including its provenance, condition, and historical context.
              </motion.p>
            </motion.div>
          </motion.div>
        )
      case 'contact':
        return (
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-4xl mx-auto px-4 py-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <form className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue h-32"
                  ></textarea>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-shell">
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
              {['home', 'catalog', 'about', 'contact'].map((page, index) => (
                <motion.button
                  key={page}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(page as any)}
                  className={`nav-link ${currentPage === page ? 'text-ocean-blue' : ''}`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
      </div>
      </motion.nav>

      <main className="py-8">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <motion.footer 
        variants={footerVariants}
        initial="initial"
        animate="animate"
        className="bg-deep-sea text-white py-8"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-4">Maritime Heritage</h3>
              <p className="text-gray-300">
                Preserving the rich history of maritime exploration and culture.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['catalog', 'about', 'contact'].map((page, index) => (
                  <motion.li
                    key={page}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage(page as any)}
                      className="text-gray-300 hover:text-white"
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-300">
                Email: info@maritimeheritage.org<br />
                Phone: (555) 123-4567
              </p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300"
          >
            <p>&copy; 2024 Maritime Heritage Collection. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
      </div>
  )
}

export default App
