'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Calendar, Zap } from 'lucide-react';

interface GalleryBuilderProps {
  project1Image?: string;
  project1Title?: string;
  project1Location?: string;
  project1Capacity?: string;
  project1Details?: string;
  project2Image?: string;
  project2Title?: string;
  project2Location?: string;
  project2Capacity?: string;
  project2Details?: string;
  project3Image?: string;
  project3Title?: string;
  project3Location?: string;
  project3Capacity?: string;
  project3Details?: string;
  project4Image?: string;
  project4Title?: string;
  project4Location?: string;
  project4Capacity?: string;
  project4Details?: string;
  project5Image?: string;
  project5Title?: string;
  project5Location?: string;
  project5Capacity?: string;
  project5Details?: string;
  project6Image?: string;
  project6Title?: string;
  project6Location?: string;
  project6Capacity?: string;
  project6Details?: string;
}

const GalleryBuilder = ({
  project1Image = '/gallery/greenstar-1.jpg',
  project1Title = 'Residential Solar + Battery',
  project1Location = 'Alton, Hampshire',
  project1Capacity = '7.2kW System',
  project1Details = '16 x DMEG 450w Panels | 10.36kWh Battery | 92% bill reduction',
  project2Image = '/gallery/greenstar-2.jpg',
  project2Title = 'Premium Solar Installation',
  project2Location = 'Farnborough, Hampshire',
  project2Capacity = '8.55kW System',
  project2Details = '18 x AIKO 475w Panels | 11.52kWh Battery | 115% bill reduction',
  project3Image = '/gallery/greenstar-3.jpg',
  project3Title = 'In-Roof Solar System',
  project3Location = 'Bournemouth, Hampshire',
  project3Capacity = '5.22kW System',
  project3Details = '12 x AIKO 460w In-Roof Panels | 8.06kWh Battery | 72% bill reduction',
  project4Image = '/gallery/greenstar-4.jpg',
  project4Title = 'Residential Solar System',
  project4Location = 'Guildford, Surrey',
  project4Capacity = '5.92kW System',
  project4Details = '13 x AIKO 455w Panels | 5.1kWh Battery | 103% bill reduction',
  project5Image = '/gallery/greenstar-5.jpg',
  project5Title = 'Large-Scale Residential',
  project5Location = 'Salisbury, Wiltshire',
  project5Capacity = '12.35kW System',
  project5Details = '26 x AIKO 475w Panels | 10.24kWh Battery | 134% bill reduction',
  project6Image = '/gallery/greenstar-6.jpg',
  project6Title = 'High-Capacity System',
  project6Location = 'Brockenhurst, Hampshire',
  project6Capacity = '9.5kW System',
  project6Details = '20 x AIKO 475w Panels | 23.04kWh Dual Battery | 164% bill reduction',
}: GalleryBuilderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const projects = [
    { image: project1Image, title: project1Title, location: project1Location, capacity: project1Capacity, details: project1Details },
    { image: project2Image, title: project2Title, location: project2Location, capacity: project2Capacity, details: project2Details },
    { image: project3Image, title: project3Title, location: project3Location, capacity: project3Capacity, details: project3Details },
    { image: project4Image, title: project4Title, location: project4Location, capacity: project4Capacity, details: project4Details },
    { image: project5Image, title: project5Title, location: project5Location, capacity: project5Capacity, details: project5Details },
    { image: project6Image, title: project6Title, location: project6Location, capacity: project6Capacity, details: project6Details },
  ];

  return (
    <section id="gallery" ref={ref} className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent font-semibold text-sm uppercase tracking-[0.2em]">
              Our Projects
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </motion.div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Recent{' '}
            <span className="bg-gradient-to-r from-accent via-primary-light to-accent bg-clip-text text-transparent">Installations</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            Explore our portfolio of successful solar installations across the UK
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => toggleCard(index)}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
              className="group cursor-pointer perspective-1000"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="relative aspect-[4/3] w-full"
                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_20px_60px_rgba(140,198,63,0.4)] border border-white/10 group-hover:border-[#8cc63f]/50"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  <motion.div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70" />

                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
                      <span className="text-white/90 text-xs font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3" style={{ color: '#8CC63F' }} />
                        {project.location.split(',')[0]}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-white text-xs font-medium">Tap to flip</span>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-primary/30 overflow-hidden p-4"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="h-full flex flex-col text-white overflow-y-auto">
                    <div className="flex-1 overflow-y-auto">
                      <h3 className="text-lg font-bold mb-2 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                        {project.title}
                      </h3>

                      <div className="space-y-1.5 mb-3 text-xs">
                        <div className="flex items-center space-x-2 text-white/90">
                          <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/90">
                          <Zap className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span>{project.capacity}</span>
                        </div>
                      </div>

                      <div className="bg-primary/20 rounded-lg p-2 border border-primary/30">
                        <div className="text-primary/90 text-[10px] uppercase tracking-wider mb-0.5">Details</div>
                        <div className="font-medium text-xs">{project.details}</div>
                      </div>
                    </div>
                    <div className="text-right mt-2 pt-2 border-t border-white/10 flex-shrink-0">
                      <span className="text-primary/80 text-[10px] font-medium">← Click to return</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/gallery"
              className="inline-block relative px-6 py-3 md:px-10 md:py-4 rounded-full font-semibold text-sm md:text-lg overflow-hidden group"
              style={{
                background: 'rgba(212, 175, 55, 0.15)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 8px 32px rgba(212, 175, 55, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <span className="relative z-10 tracking-wide text-white drop-shadow-lg">View Full Gallery</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-block relative px-6 py-3 md:px-12 md:py-4 rounded-full font-semibold text-sm md:text-lg overflow-hidden group"
              style={{
                background: 'rgba(140, 198, 63, 0.15)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(140, 198, 63, 0.3)',
                boxShadow: '0 8px 32px rgba(140, 198, 63, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <span className="relative z-10 tracking-wide text-white drop-shadow-lg">Start Your Project</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryBuilder;
