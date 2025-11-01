'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sun, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface HeroBuilderProps {
  badge?: string;
  heading?: string;
  highlightedText?: string;
  subheading?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  heroImage?: string | { url?: string };
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
}

const HeroBuilder = ({
  badge = 'Premium Solar Solutions',
  heading = 'Smart Energy Solutions',
  highlightedText = 'Designed Around You',
  subheading = 'Bespoke solar energy systems designed to perfectly match your unique requirements. Save money, reduce your carbon footprint, and achieve true energy independence.',
  ctaText = 'Get Free Survey',
  ctaLink = '#contact',
  secondaryCtaText = 'Explore Systems',
  secondaryCtaLink = '#systems',
  heroImage = '/images/hero-house.webp',
  stat1Value = '15+',
  stat1Label = 'Years Experience',
  stat2Value = '250+',
  stat2Label = 'Happy Customers',
}: HeroBuilderProps) => {
  // Handle Builder.io image format (can be string or object)
  const imageUrl = typeof heroImage === 'string'
    ? heroImage
    : heroImage?.url || '/images/hero-house.webp';

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-24">
      {/* Very subtle text shadow overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="container mx-auto px-8 md:px-12 relative z-10 mt-0 md:mt-16">
        <div className="grid lg:grid-cols-2 gap-20 md:gap-28 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-white max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 md:space-x-3 mb-6 md:mb-8"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-primary via-primary-light to-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent font-semibold text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em]">
                {badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-[1.1] tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {heading}<br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                {highlightedText}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm md:text-base lg:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed font-light"
            >
              {subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={ctaLink}
                className="group relative px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs md:text-sm overflow-hidden"
                style={{
                  background: 'rgba(140, 198, 63, 0.15)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(140, 198, 63, 0.3)',
                  boxShadow: '0 8px 32px rgba(140, 198, 63, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center space-x-2">
                  <span className="tracking-wide text-white drop-shadow-lg">{ctaText}</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300 text-white drop-shadow-lg" />
                </span>
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderColor: 'rgba(140,198,63,0.8)',
                  boxShadow: '0 20px 40px rgba(140,198,63,0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                href={secondaryCtaLink}
                className="group relative bg-white/5 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs md:text-sm border-2 border-white/20 transition-all shadow-xl"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <span className="flex items-center space-x-2">
                  <span className="tracking-wide">{secondaryCtaText}</span>
                  <Sun className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Hero Image with Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[400px] mx-auto">
              {/* Main Image Card */}
              <div
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 w-full"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <Image
                  src={imageUrl}
                  alt="Solar Installation"
                  fill
                  priority
                  quality={95}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#8cc63f]/30 via-transparent to-[#8cc63f]/30 z-10" />
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="absolute top-10 -left-10 p-5 rounded-2xl border border-white/20 shadow-2xl hover:shadow-[0_20px_60px_rgba(140,198,63,0.4)] cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%), rgba(18, 18, 18, 0.85)',
                }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-[#8cc63f] to-[#7ab52f] bg-clip-text text-transparent mb-1">
                  {stat1Value}
                </div>
                <div className="text-[10px] text-white font-semibold">{stat1Label}</div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8cc63f] to-[#7ab52f] opacity-0 hover:opacity-20 rounded-3xl blur transition-opacity" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="absolute bottom-10 -right-10 p-5 rounded-2xl border border-white/20 shadow-2xl hover:shadow-[0_20px_60px_rgba(140,198,63,0.4)] cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%), rgba(18, 18, 18, 0.85)',
                }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-[#8cc63f] to-[#7ab52f] bg-clip-text text-transparent mb-1">
                  {stat2Value}
                </div>
                <div className="text-[10px] text-white font-semibold">{stat2Label}</div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8cc63f] to-[#7ab52f] opacity-0 hover:opacity-20 rounded-3xl blur transition-opacity" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBuilder;
