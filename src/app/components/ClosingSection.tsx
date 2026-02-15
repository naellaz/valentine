import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart } from 'lucide-react';

export function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-[#FFF8F3] to-[#FFE4E1] overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: `${Math.random() * 100}%`,
              y: '100%',
              opacity: 0,
            }}
            animate={{
              y: '-20%',
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${(i * 12.5) + Math.random() * 10}%`,
            }}
          >
            <Heart 
              className="text-[#FFB6C1]" 
              fill="currentColor" 
              size={16 + Math.random() * 16}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          {/* Animated beating heart */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <Heart 
              className="w-20 h-20 md:w-24 md:h-24 text-[#A0354B] mx-auto" 
              fill="currentColor"
              strokeWidth={0}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#8B2635] leading-tight">
            Until Forever
            <br />
            <span className="italic text-[#A0354B]">Comes</span>
          </h2>

          <p className="font-['Inter'] text-lg md:text-xl text-[#6B4F4F] max-w-2xl mx-auto leading-relaxed">
            Every sunrise with you is a blessing. Every sunset, a promise. 
            Here's to all the beautiful moments yet to come, to the laughter we'll share, 
            and to the love that continues to grow deeper with each passing day.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="pt-8"
          >
            <p className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#A0354B] italic mb-4">
              With all my love,
            </p>
            <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#8B2635]">
              Always & Forever ♥
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF77]" />
            <Heart className="w-4 h-4 text-[#D4AF77]" fill="currentColor" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF77]" />
          </div>
        </motion.div>
      </div>

      {/* Bottom padding */}
      <div className="h-20" />
    </section>
  );
}
