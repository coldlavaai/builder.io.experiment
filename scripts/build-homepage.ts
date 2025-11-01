import 'dotenv/config';

const BUILDER_API_KEY = process.env.BUILDER_PRIVATE_KEY!;
const BUILDER_PUBLIC_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

async function createHomepage() {
  console.log('Creating homepage in Builder.io...');

  // Update the existing entry you have open
  const entryId = 'b0989a0b59b6495b8eef7bf8f6c73643';

  const homepage = {
    name: 'Green Star Solar Homepage',
    data: {
      url: '/',
      title: 'Green Star Solar - Homepage',
      blocks: [
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Navigation',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Hero Section (Editable)',
            options: {
              badge: 'Premium Solar Solutions',
              heading: 'Smart Energy Solutions',
              highlightedText: 'Designed Around You',
              subheading: 'Bespoke solar energy systems designed to perfectly match your unique requirements. Save money, reduce your carbon footprint, and achieve true energy independence.',
              ctaText: 'Get Free Survey',
              ctaLink: '#contact',
              secondaryCtaText: 'Explore Systems',
              secondaryCtaLink: '#systems',
              heroImage: '/images/hero-house.webp',
              stat1Value: '15+',
              stat1Label: 'Years Experience',
              stat2Value: '250+',
              stat2Label: 'Happy Customers'
            }
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'About Section (Editable)',
            options: {
              heading: 'Why Choose GreenStar Solar?',
              content: 'We are a family-run business with over 15 years of experience in renewable energy. Our team of certified engineers and installers are dedicated to providing bespoke solar solutions that match your unique requirements.',
              stat1Value: '15+',
              stat1Label: 'Years Experience',
              stat2Value: '250+',
              stat2Label: 'Happy Customers',
              stat3Value: '100%',
              stat3Label: 'Satisfaction Rate'
            }
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Systems Section (Editable)',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Process Section (Editable)',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Gallery Section (Editable)',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Testimonials Section (Editable)',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Contact Section (Editable)',
            options: {
              heading: 'Get In Touch',
              subheading: 'Ready to start your solar journey? Contact us today for a free consultation and quote.',
              email: 'info@greenstarsolar.co.uk',
              phone: '+44 1234 567890',
              address: 'Green Street, Solar City, SC1 2AB'
            }
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Footer',
            options: {}
          }
        }
      ]
    },
    published: 'published',
    modelId: 'buildertest'
  };

  try {
    const response = await fetch(`https://builder.io/api/v1/write/${BUILDER_PUBLIC_KEY}/buildertest/${entryId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${BUILDER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(homepage)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to create homepage: ${response.status} ${error}`);
    }

    const result = await response.json();
    console.log('✅ Homepage created successfully!');
    console.log('View it at: https://builder.io/content/' + result.id);
    console.log('Live at: https://builder-io-experiment.vercel.app/');

    return result;
  } catch (error) {
    console.error('❌ Error creating homepage:', error);
    throw error;
  }
}

createHomepage();
