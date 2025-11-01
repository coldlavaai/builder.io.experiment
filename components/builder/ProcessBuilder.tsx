'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Search, Lightbulb, Wrench, FileCheck, HeartHandshake } from 'lucide-react';

interface ProcessBuilderProps {
  step1Title?: string;
  step1Description?: string;
  step1BackContent?: string;
  step2Title?: string;
  step2Description?: string;
  step2BackContent?: string;
  step3Title?: string;
  step3Description?: string;
  step3BackContent?: string;
  step4Title?: string;
  step4Description?: string;
  step4BackContent?: string;
  step5Title?: string;
  step5Description?: string;
  step5BackContent?: string;
}

const ProcessBuilder = ({
  step1Title = 'Personal Consultation',
  step1Description = 'We begin with a face to face consultation to understand your energy usage, goals, and budget.',
  step1BackContent = 'Our surveyors carry out a full structural and wind load assessment to ensure your roof is sound and suitable for installation.',
  step2Title = 'Bespoke Design',
  step2Description = 'There is no one size fits all solution. Each system is tailored to your specific energy consumption.',
  step2BackContent = 'Using premium components and industry leading software, we create a system that meets your needs today while preparing you for tomorrow.',
  step3Title = 'Expert Installation',
  step3Description = 'With over 15 years experience, our qualified installation team completes every project with precision and care.',
  step3BackContent = 'We ensure full compliance, safety, and reliability so your system performs optimally for years to come.',
  step4Title = 'System Handover',
  step4Description = "Upon completion, you'll receive a comprehensive handover pack including your MCS certificate and DNO approval letter.",
  step4BackContent = "We assist you through this process to ensure a seamless transition. Our team provides full guidance on using your monitoring app.",
  step5Title = 'Ongoing Support',
  step5Description = "Our relationship doesn't end once your system is installed. Greenstar offers continued support.",
  step5BackContent = 'We ensure any issues are resolved quickly and efficiently. We remain available for advice, system checks, and performance reviews.',
}: ProcessBuilderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const steps = [
    { number: '01', icon: Search, title: step1Title, description: step1Description, backContent: step1BackContent },
    { number: '02', icon: Lightbulb, title: step2Title, description: step2Description, backContent: step2BackContent },
    { number: '03', icon: Wrench, title: step3Title, description: step3Description, backContent: step3BackContent },
    { number: '04', icon: FileCheck, title: step4Title, description: step4Description, backContent: step4BackContent },
    { number: '05', icon: HeartHandshake, title: step5Title, description: step5Description, backContent: step5BackContent },
  ];

  return (
    <section id="process" ref={ref} className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          >
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-accent"></div>
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent font-semibold text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em]">
              Our Process
            </span>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </motion.div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            We're With You{' '}
            <span className="bg-gradient-to-r from-accent via-primary-light to-accent bg-clip-text text-transparent">Every Step</span>
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            A highly personalised approach with ongoing personal support throughout your solar journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-light to-primary/30"></div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary to-primary-light"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-6 md:space-y-10 lg:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <motion.div
                    onClick={() => toggleCard(index)}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`group cursor-pointer perspective-1000 ${
                      index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                    }`}
                    style={{ perspective: '1000px' }}
                  >
                    <motion.div
                      className="relative w-full"
                      animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Front of card */}
                      <div
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-[0_25px_70px_rgba(140,199,64,0.3)] transition-all duration-500 border border-white/10 hover:border-primary/30 relative overflow-hidden"
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 mb-5">
                          <div className="flex items-start gap-4 mb-4">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="bg-gradient-to-br from-primary to-primary-dark text-white text-lg md:text-xl font-bold w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl relative overflow-hidden"
                            >
                              <span className="relative z-10">{step.number}</span>
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.div>
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight pt-2" style={{ fontFamily: 'var(--font-heading)' }}>
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-white/70 leading-relaxed text-xs md:text-sm font-light mb-4">
                            {step.description}
                          </p>
                        </div>

                        <div className="relative z-10 text-right">
                          <span className="text-primary/60 text-xs font-medium">Click to learn more →</span>
                        </div>

                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Back of card */}
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-primary/30 overflow-hidden"
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-4 mb-4">
                              <div className="bg-gradient-to-br from-primary to-primary-dark text-white text-lg md:text-xl font-bold w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl">
                                <span>{step.number}</span>
                              </div>
                              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-white/80 leading-relaxed text-xs md:text-sm font-light mb-4">
                              {step.backContent}
                            </p>
                          </div>
                          <div className="text-right mt-4">
                            <span className="text-primary/80 text-xs font-medium">← Click to return</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  className="relative flex-shrink-0 z-20 group/icon hidden lg:block"
                >
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-white via-white to-white/90 backdrop-blur-xl rounded-xl lg:rounded-2xl flex items-center justify-center shadow-2xl border-4 border-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10"></div>
                    <step.icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary relative z-10" />
                  </div>
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-xl lg:rounded-2xl blur-md"
                  ></motion.div>
                </motion.div>

                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-white/60 mb-8 text-xl font-light">
            Ready to start your solar journey?
          </p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-block relative px-6 py-3 md:px-12 md:py-5 rounded-full font-semibold text-sm md:text-lg overflow-hidden group"
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
            <span className="relative z-10 tracking-wide text-white drop-shadow-lg">Book Your Free Survey</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessBuilder;
