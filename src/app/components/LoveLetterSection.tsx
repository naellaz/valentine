import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function LoveLetterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 px-6 bg-gradient-to-b from-[#FFF0F0] to-[#FFF8F3]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Paper card with shadow */}
          <div className="bg-white rounded-2xl shadow-2xl shadow-[#FFB6C1]/20 p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFE4E1] to-transparent opacity-40 rounded-bl-[100%]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#FFE4E1] to-transparent opacity-40 rounded-tr-[100%]" />

            {/* Letter content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-right mb-6"
              >
                <p className="font-['Inter'] text-sm text-[#A0354B] opacity-60">
                  February 15, 2026
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-6"
              >
                <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#8B2635] italic mb-8">
                  My Dearest,
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="space-y-6 font-['Inter'] text-base md:text-lg text-[#6B4F4F] leading-relaxed"
              >
                <p>
                  I'm not always good with words, but being with you has taught me a lot about how love can feel calm and real at the same time. With you, things don't have to be perfect to feel right.
                </p>
                <p>
                  I love how our days are filled with small moments that matter—talking, laughing, just being there for each other. You've shown me that love isn't about big gestures, but about patience, understanding, and choosing each other even on ordinary days.
                </p>
                <p>
                  Being with you makes me feel safe. You make everything feel lighter, and somehow, more meaningful. I'm grateful for you, for the way you care, and for the way you stay.
                </p>
                <p>
                  Thank you for choosing me, for seeing me, for loving me in all my imperfect glory. My heart is yours, today and always.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="mt-12"
              >
                <p className="font-['Playfair_Display'] text-xl md:text-2xl text-[#8B2635] italic text-right">
                  Forever yours,
                </p>
                <div className="mt-2 text-right">
                  <div className="inline-block border-b-2 border-[#D4AF77] pb-1">
                    <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#A0354B]">
                      ♥
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
