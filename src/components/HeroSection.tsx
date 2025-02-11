import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-[#f4fdff]">
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Nagios Exchange
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover and share monitoring solutions with the community
        </motion.p>
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
          <img
            src="https://api.dicebear.com/7.x/shapes/svg?seed=exchange&backgroundColor=f4fdff&shape1Color=ffd700&shape2Color=000000&shape3Color=ffd700"
            alt="Exchange Community"
            className="w-[500px] h-[500px] object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
