'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Home, Building2, Sun, ArrowRight, Zap } from 'lucide-react';
import BatteryIcon from '@/components/icons/BatteryIcon';
import { useIsMobile, useIsTouch } from '@/hooks/useMediaQuery';

interface SystemsBuilderProps {
  service1Title?: string;
  service1Description?: string;
  service1Features?: string;
  service1Image?: string;
  service1Link?: string;
  service2Title?: string;
  service2Description?: string;
  service2Features?: string;
  service2Image?: string;
  service2Link?: string;
  service3Title?: string;
  service3Description?: string;
  service3Features?: string;
  service3Image?: string;
  service3Link?: string;
  service4Title?: string;
  service4Description?: string;
  service4Features?: string;
  service4Image?: string;
  service4Link?: string;
}

const SystemsBuilder = ({
  service1Title = 'Solar Panels for Home',
  service1Description = 'Transform your home with our premium residential solar panel installations. Reduce your electricity bills and increase your property value.',
  service1Features = 'Free energy assessment, Custom system design, 25-year warranty, Smart monitoring',
  service1Image = '/images/home-bg-1.png',
  service1Link = '/solar-panels-home',
  service2Title = 'Battery Storage for Home',
  service2Description = 'Store excess solar energy and use it when you need it most. Achieve energy independence with our advanced battery solutions.',
  service2Features = '24/7 backup power, Peak shaving, Seamless integration, Smart controls',
  service2Image = '/images/home-bg-2.png',
  service2Link = '/battery-storage-home',
  service3Title = 'Solar Panels for Business',
  service3Description = 'Reduce operational costs and demonstrate environmental responsibility with commercial solar installations.',
  service3Features = 'ROI analysis, Scalable solutions, Tax incentives, Minimal downtime',
  service3Image = '/images/business-bg-1.png',
  service3Link = '/solar-panels-business',
  service4Title = 'Battery Storage for Business',
  service4Description = 'Ensure business continuity and optimize energy costs with commercial-grade battery storage systems.',
  service4Features = 'Demand response, Grid independence, Load management, Remote monitoring',
  service4Image = '/images/business-bg-2.png',
  service4Link = '/battery-storage-business',
}: SystemsBuilderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();
  const isTouch = useIsTouch();

  const iconMap = {
    'Solar Panels for Home': Sun,
    'Battery Storage for Home': BatteryIcon,
    'Solar Panels for Business': Building2,
    'Battery Storage for Business': Zap,
  };

  const services = [
    {
      icon: iconMap[service1Title as keyof typeof iconMap] || Sun,
      title: service1Title,
      description: service1Description,
      features: service1Features.split(', '),
      image: service1Image,
      link: service1Link,
    },
    {
      icon: iconMap[service2Title as keyof typeof iconMap] || BatteryIcon,
      title: service2Title,
      description: service2Description,
      features: service2Features.split(', '),
      image: service2Image,
      link: service2Link,
    },
    {
      icon: iconMap[service3Title as keyof typeof iconMap] || Building2,
      title: service3Title,
      description: service3Description,
      features: service3Features.split(', '),
      image: service3Image,
      link: service3Link,
    },
    {
      icon: iconMap[service4Title as keyof typeof iconMap] || Zap,
      title: service4Title,
      description: service4Description,
      features: service4Features.split(', '),
      image: service4Image,
      link: service4Link,
    },
  ];

  return (
    <section id="systems" ref={ref} className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          >
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-accent"></div>
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent font-semibold text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em]">
              Our Solutions
            </span>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </motion.div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Tailored Solar & Storage{' '}
            <span className="bg-gradient-to-r from-accent via-primary-light to-accent bg-clip-text text-transparent">Systems</span>
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-white/60 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Whether you're a homeowner or business owner, we have the perfect renewable energy solution for your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} isInView={isInView} isMobile={isMobile} isTouch={isTouch} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 md:mt-20"
        >
          <p className="text-white/60 mb-6 md:mb-8 text-xs md:text-sm font-light">
            Not sure which system is right for you?
          </p>
          <motion.a
            whileHover={!isTouch ? { scale: 1.02 } : {}}
            whileTap={!isTouch ? { scale: 0.98 } : {}}
            href="#contact"
            className="inline-block relative px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base overflow-hidden group"
            style={{
              background: 'rgba(140, 198, 63, 0.15)',
              backdropFilter: isMobile ? 'blur(10px)' : 'blur(20px)',
              WebkitBackdropFilter: isMobile ? 'blur(10px)' : 'blur(20px)',
              border: '1px solid rgba(140, 198, 63, 0.3)',
              boxShadow: '0 8px 32px rgba(140, 198, 63, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              minHeight: isMobile ? '56px' : 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <span className="relative z-10 tracking-wide text-white drop-shadow-lg">Schedule Free Consultation</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// Premium Minimal Card Component
const ServiceCard = ({ service, index, isInView, isMobile, isTouch }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={service.link}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={!isTouch ? () => setIsHovered(true) : undefined}
      onMouseLeave={!isTouch ? () => setIsHovered(false) : undefined}
      className="group relative rounded-3xl overflow-hidden cursor-pointer h-full block"
      style={{
        boxShadow: isHovered && !isTouch
          ? '0 25px 70px rgba(212, 175, 55, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.2)'
          : '0 8px 30px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        transition: 'box-shadow 0.4s ease',
      }}
    >
      {/* Background Image with Subtle Zoom */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${service.image}')`,
          }}
          animate={{
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {/* Gradient overlay - creates depth */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"
          animate={{
            opacity: isHovered ? 0.85 : 0.95,
          }}
          transition={{ duration: 0.4 }}
        />
        {/* Accent gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-primary/20 to-transparent"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 md:p-8 h-full min-h-[360px] md:min-h-[440px] flex flex-col">
        {/* Glass morphism icon container */}
        <motion.div
          className="mb-4 md:mb-6"
          animate={{
            scale: isHovered ? 1.1 : 1,
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary relative z-10" />
          </div>
        </motion.div>

        {/* Title with premium typography */}
        <motion.h3
          className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
          animate={{
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {service.title}
        </motion.h3>

        <p className="text-white/70 mb-4 md:mb-6 leading-relaxed text-xs md:text-sm font-light">
          {service.description}
        </p>

        {/* Features List with premium styling */}
        <ul className="space-y-2 md:space-y-3.5 mb-5 md:mb-8 flex-grow">
          {service.features.map((feature: string, idx: number) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? {
                opacity: 1,
                x: 0,
              } : { opacity: 0, x: -10 }}
              transition={{
                delay: index * 0.1 + idx * 0.05,
                duration: 0.3,
              }}
              className="flex items-center space-x-2 text-white/80 text-xs md:text-sm group/item"
            >
              <motion.div
                className="flex-shrink-0 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gradient-to-r from-primary to-primary-light shadow-lg"
                animate={{
                  scale: isHovered ? 1.3 : 1,
                }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
              />
              <span className="group-hover/item:text-white transition-colors">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Glass morphism CTA button */}
        <motion.div
          className="inline-flex items-center space-x-2 self-start group/btn"
          animate={{
            x: isHovered ? 8 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white font-semibold text-xs md:text-sm border-b-2 border-primary/50 group-hover/btn:border-primary transition-colors pb-1">
            Learn More
          </span>
          <motion.div
            animate={{
              x: isHovered ? 4 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Premium accent line on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export default SystemsBuilder;
