import Header from "./Header";
import { motion } from "framer-motion";
import VaultBanner from "./VaultBanner";

function Archives() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#061220]">
      <Header />
      <main>
        <VaultBanner />
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Cortex Hub Archive
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Access historical documentation and resources
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default Archives;
