import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const photos = [
  {
    url: '/images/nglanggeran.jpeg',
    caption: 'Nglanggeran With You',
  },
  {
    url: '/images/the-day.jpeg',
    caption: 'One Day, or Day One?',
  },
  {
    url: '/images/pantai.jpeg',
    caption: 'When Everyone Noticed',
  },
  {
    url: '/images/sija.jpeg',
    caption: 'Cute Photos',
  },
  {
    url: '/images/photobooth.jpeg',
    caption: 'After Keraton Walk',
  },
  {
    url: '/images/andong.jpeg',
    caption: 'Climbing Andong at Valentine\'s Day',
  },
];

export function PhotoGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-20 px-6 bg-[#FFF8F3]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#8B2635] mb-4">
            Our Story in <span className="italic">Moments</span>
          </h2>
          <p className="font-['Inter'] text-lg text-[#A0354B] opacity-70 max-w-2xl mx-auto">
            Every photograph is a memory, every memory is a treasure
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(index)}
              onTouchEnd={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <ImageWithFallback
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-80 md:h-96 object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#8B2635]/90 via-[#8B2635]/50 to-transparent flex items-end justify-center p-6 rounded-2xl"
                >
                  <p className="font-['Playfair_Display'] text-xl md:text-2xl text-white italic text-center">
                    {photo.caption}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
