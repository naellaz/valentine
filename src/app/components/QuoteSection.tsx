import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export function QuoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-br from-[#8B2635] via-[#A0354B] to-[#8B2635] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Quote className="w-16 h-16 md:w-20 md:h-20 mx-auto text-[#FFE4E1] opacity-60" fill="currentColor" strokeWidth={0} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <p className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed italic mb-6">
              "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
            </p>
            <p className="font-['Inter'] text-lg md:text-xl text-[#FFE4E1] opacity-80">
              — Maya Angelou
            </p>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed italic mb-6">
              "You are my today and all of my tomorrows."
            </p>
            <p className="font-['Inter'] text-lg md:text-xl text-[#FFE4E1] opacity-80">
              — Leo Christopher
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-12"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF77] to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
