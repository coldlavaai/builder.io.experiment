'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsBuilderProps {
  review1Name?: string;
  review1Text?: string;
  review1Rating?: number;
  review2Name?: string;
  review2Text?: string;
  review2Rating?: number;
  review3Name?: string;
  review3Text?: string;
  review3Rating?: number;
  review4Name?: string;
  review4Text?: string;
  review4Rating?: number;
  review5Name?: string;
  review5Text?: string;
  review5Rating?: number;
  review6Name?: string;
  review6Text?: string;
  review6Rating?: number;
}

const TestimonialsBuilder = ({
  review1Name = 'Phill Ballard',
  review1Text = 'Great service from beginning to end and at a great price. From Jon\'s initial visit through to install - Greenstar provided first rate service. Already self sufficient with excess sent to the grid!',
  review1Rating = 5,
  review2Name = 'Steve Wolstenholme',
  review2Text = '5 star treatment from start to finish, couldn\'t of asked for anything else.',
  review2Rating = 5,
  review3Name = 'Max Copeland',
  review3Text = 'Very impressed with Greenstar Solar. Professional and efficient team. Installation was smooth and quick. Great price and couldn\'t be happier!',
  review3Rating = 5,
  review4Name = 'Martyn Brayshaw',
  review4Text = 'Communication from start to finish has been exemplary. They explained everything in simple terms and made us feel confident.',
  review4Rating = 5,
  review5Name = 'Jim Godfrey',
  review5Text = 'Excellent service in all respects. Cost was less than expected. Only used less than a kilowatt of power since installation. Very pleased!',
  review5Rating = 5,
  review6Name = 'Simon Wright',
  review6Text = 'Great experience working with Greenstar, good communication throughout and fitters were very clean and polite. Highly recommended.',
  review6Rating = 5,
}: TestimonialsBuilderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const reviews = [
    { name: review1Name, text: review1Text, rating: review1Rating },
    { name: review2Name, text: review2Text, rating: review2Rating },
    { name: review3Name, text: review3Text, rating: review3Rating },
    { name: review4Name, text: review4Text, rating: review4Rating },
    { name: review5Name, text: review5Text, rating: review5Rating },
    { name: review6Name, text: review6Text, rating: review6Rating },
  ];

  const reviewsPerPage = isMobile ? 4 : 6;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section ref={ref} id="testimonials" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-8 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent font-semibold text-sm uppercase tracking-[0.2em]">
              Testimonials
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </motion.div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            What Our{' '}
            <span className="bg-gradient-to-r from-accent via-primary-light to-accent bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            Real reviews from real homeowners who have made the switch with Green Star Solar
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-white/80 font-semibold text-sm md:text-base">5.0 on Google</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-white/80 font-semibold text-sm md:text-base">4.7 on Trustpilot</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {currentReviews.map((review, index) => (
            <motion.div
              key={`${currentPage}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 shadow-lg hover:shadow-[0_20px_50px_rgba(140,198,63,0.4)] transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

                <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity hidden md:flex">
                  <Quote className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>

                <div className="relative z-10">
                  <div className="flex space-x-0.5 md:space-x-1 mb-2 md:mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-4 group-hover:text-white transition-colors">
                    "{review.text}"
                  </p>

                  <div className="pt-3 md:pt-4 border-t border-white/10">
                    <div className="font-semibold text-white text-xs md:text-sm mb-1">
                      {review.name}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevPage}
            className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 border-white/20 hover:border-primary/50 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`transition-all ${
                  index === currentPage
                    ? 'w-8 h-2 bg-gradient-to-r from-primary to-primary-light shadow-lg'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                } rounded-full`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextPage}
            className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 border-white/20 hover:border-primary/50 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBuilder;
