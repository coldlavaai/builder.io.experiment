'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface AboutBuilderProps {
  heading?: string;
  content?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
}

const AboutBuilder = ({
  heading = 'Why Choose GreenStar Solar?',
  content = 'We are a family-run business with over 15 years of experience in renewable energy. Our team of certified engineers and installers are dedicated to providing bespoke solar solutions that match your unique requirements. From initial consultation to installation and aftercare, we guide you through every step of your solar journey.',
  stat1Value = '15+',
  stat1Label = 'Years Experience',
  stat2Value = '250+',
  stat2Label = 'Happy Customers',
  stat3Value = '100%',
  stat3Label = 'Satisfaction Rate',
}: AboutBuilderProps) => {
  const features = [
    'MCS Certified Installers',
    'Bespoke System Design',
    '25-Year Panel Warranty',
    'Comprehensive Aftercare',
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card/50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {heading}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {content}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-3 gap-6"
          >
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat1Value}
              </div>
              <div className="text-sm text-muted-foreground">{stat1Label}</div>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat2Value}
              </div>
              <div className="text-sm text-muted-foreground">{stat2Label}</div>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat3Value}
              </div>
              <div className="text-sm text-muted-foreground">{stat3Label}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBuilder;
