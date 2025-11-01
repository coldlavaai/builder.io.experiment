'use client';

interface HeroBuilderSimpleProps {
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

const HeroBuilderSimple = ({
  badge = 'Premium Solar Solutions',
  heading = 'Smart Energy Solutions',
  highlightedText = 'Designed Around You',
  subheading = 'Bespoke solar energy systems designed to perfectly match your unique requirements.',
  ctaText = 'Get Free Survey',
  ctaLink = '#contact',
  secondaryCtaText = 'Explore Systems',
  secondaryCtaLink = '#systems',
  heroImage = '/images/hero-house.webp',
  stat1Value = '15+',
  stat1Label = 'Years Experience',
  stat2Value = '250+',
  stat2Label = 'Happy Customers',
}: HeroBuilderSimpleProps) => {
  const imageUrl = typeof heroImage === 'string' ? heroImage : heroImage?.url || '/images/hero-house.webp';

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 20px 50px',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(140, 198, 63, 0.15)',
              padding: '8px 20px',
              borderRadius: '20px',
              marginBottom: '24px',
              border: '1px solid rgba(140, 198, 63, 0.3)',
              fontSize: '14px',
              color: 'white'
            }}>
              ☀️ {badge}
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: 'white',
              lineHeight: '1.1'
            }}>
              {heading}
            </h1>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #8cc63f 0%, #6fa832 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '24px',
              lineHeight: '1.1'
            }}>
              {highlightedText}
            </h2>

            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              {subheading}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a
                href={ctaLink}
                style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #8cc63f 0%, #6fa832 100%)',
                  color: 'white',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(140, 198, 63, 0.3)'
                }}
              >
                {ctaText} →
              </a>

              <a
                href={secondaryCtaLink}
                style={{
                  padding: '16px 32px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                {secondaryCtaText}
              </a>
            </div>

            <div style={{ display: 'flex', gap: '40px' }}>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#8cc63f' }}>
                  {stat1Value}
                </div>
                <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  {stat1Label}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#8cc63f' }}>
                  {stat2Value}
                </div>
                <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  {stat2Label}
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div style={{ position: 'relative' }}>
            <img
              src={imageUrl}
              alt="Solar Installation"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '24px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBuilderSimple;
