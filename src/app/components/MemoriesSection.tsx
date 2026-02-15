import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart, Sparkles, Star, Coffee, Music, MapPin, Mountain, Sunset, HeartHandshake, CloudRain, Utensils } from 'lucide-react';

const memories = [
  {
    icon: Heart,
    date: 'A Familiar Face, A New Feeling',
    moment: 'Our eyes met across the room',
    description: 'And suddenly, everything felt different',
  },
  {
    icon: Mountain,
    date: 'First Date',
    moment: 'Climbing our first mountain together',
    description: 'Not the highest peak, but a meaningful start',
  },
  {
    icon: Sunset,
    date: 'The Moment',
    moment: 'As the sun set by the ocean',
    description: 'You asked, and my heart answered yes',
  },
  {
    icon: HeartHandshake,
    date: 'A Safe Place',
    moment: 'In the way you treat me',
    description: 'Calm, patient, and always kind',
  },
  {
    icon: CloudRain,
    date: 'Ordinary Days',
    moment: 'Even on slow, quiet days',
    description: 'Everything felt easier with you',
  },
  {
    icon: Utensils,
    date: 'Quiet Traditions',
    moment: 'Lunches we never skip',
    description: 'Where love feels effortless',
  },
];

export function MemoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 px-6 bg-gradient-to-b from-[#FFF8F3] via-[#FFE4E1] to-[#FFF8F3]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#8B2635] mb-4">
            Cherished <span className="italic">Memories</span>
          </h2>
          <p className="font-['Inter'] text-lg text-[#A0354B] opacity-70 max-w-2xl mx-auto">
            Milestones of our journey together
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF77] via-[#FFB6C1] to-[#D4AF77] opacity-30" />

          <div className="space-y-12 md:space-y-16">
            {memories.map((memory, index) => {
              const Icon = memory.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#FFE4E1]">
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse md:justify-end' : 'md:flex-row'} flex-row`}>
                        <div className="p-2 bg-gradient-to-br from-[#FFE4E1] to-[#FFB6C1] rounded-full">
                          <Icon className="w-5 h-5 text-[#8B2635]" strokeWidth={2} />
                        </div>
                        <p className="font-['Inter'] text-sm text-[#D4AF77] uppercase tracking-wider">
                          {memory.date}
                        </p>
                      </div>
                      <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#8B2635] mb-2">
                        {memory.moment}
                      </h3>
                      <p className="font-['Inter'] text-base text-[#6B4F4F] opacity-80 leading-relaxed">
                        {memory.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#A0354B] to-[#D4AF77] rounded-full border-4 border-[#FFF8F3] shadow-md z-10" />

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
