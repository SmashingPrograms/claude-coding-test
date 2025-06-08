import { motion } from 'framer-motion';
import { pageVariants } from '../animations/variants';

export function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-display text-deep-sea mb-4">About Our Collection</h1>
        <p className="text-xl text-gray-600">
          Preserving maritime history for future generations
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg max-w-none"
      >
        <p>
          Welcome to the Maritime Heritage Collection, a digital repository dedicated to preserving
          and showcasing the rich history of maritime artifacts and their significance in shaping
          our understanding of the past.
        </p>

        <h2 className="text-2xl font-display text-deep-sea mt-8 mb-4">Our Mission</h2>
        <p>
          Our mission is to document, preserve, and share the stories of maritime artifacts that
          have played crucial roles in human history. From ancient navigation tools to modern
          maritime innovations, each item in our collection tells a unique story of human
          ingenuity and exploration.
        </p>

        <h2 className="text-2xl font-display text-deep-sea mt-8 mb-4">The Collection</h2>
        <p>
          Our collection spans thousands of years of maritime history, featuring artifacts from
          various eras and regions. Each item is carefully documented with detailed information
          about its origin, significance, and historical context.
        </p>

        <h2 className="text-2xl font-display text-deep-sea mt-8 mb-4">Research & Education</h2>
        <p>
          We are committed to supporting research and education in maritime history. Our digital
          platform provides access to detailed information about each artifact, making it a
          valuable resource for researchers, students, and history enthusiasts.
        </p>

        <div className="bg-beach-sand rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-display text-deep-sea mb-4">Get Involved</h2>
          <p>
            We welcome contributions from researchers, collectors, and maritime history
            enthusiasts. If you have information about maritime artifacts or would like to
            contribute to our collection, please don't hesitate to contact us.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
} 