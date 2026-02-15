import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF8F3] via-[#FFE4E1] to-[#FFF0F0] px-6 py-20">
      {/* Floating hearts decoration */}
      <motion.div
        className="absolute top-20 left-[10%]"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="w-8 h-8 text-[#FFB6C1] opacity-30" fill="currentColor" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 right-[15%]"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Heart className="w-12 h-12 text-[#A0354B] opacity-20" fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[8%]"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Heart className="w-6 h-6 text-[#D4AF77] opacity-40" fill="currentColor" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-8"
        >
          <Heart className="w-16 h-16 mx-auto mb-6 text-[#A0354B]" strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl text-[#8B2635] mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          A Letter Written
          <br />
          <span className="italic">With Love</span>
        </motion.h1>

        <motion.p
          className="font-['Inter'] text-lg md:text-xl text-[#A0354B] opacity-80 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          For the one who makes every moment feel like poetry
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-[#A0354B] rounded-full opacity-40 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#A0354B] rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
