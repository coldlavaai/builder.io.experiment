import 'dotenv/config';

const BUILDER_API_KEY = process.env.BUILDER_PRIVATE_KEY!;
const BUILDER_PUBLIC_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;
const ENTRY_ID = 'b0989a0b59b6495b8eef7bf8f6c73643';

async function populateBuilderPage() {
  console.log('🏗️  Populating Builder.io page...');

  const pageData = {
    data: {
      url: '/',
      title: 'Green Star Solar - Homepage',
      blocks: [
        {
          '@type': '@builder.io/sdk:Element',
          component: {
            name: 'Navigation (Editable)',
            options: {
              logoUrl: 'https://irp.cdn-website.com/8f142869/dms3rep/multi/Greenstar_Solar_Logo_WHITE.TAG_HZ-3x.png',
              ctaText: 'Get Free Quote',
              ctaLink: '/#contact'
            }
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
        }
      ]
    },
    name: 'Green Star Solar - Homepage',
    published: 'published'
  };

  try {
    // Try the write API endpoint
    const response = await fetch(
      `https://builder.io/api/v1/write/${BUILDER_PUBLIC_KEY}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${BUILDER_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...pageData,
          modelName: 'buildertest',
          id: ENTRY_ID
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Error: ${response.status} - ${errorText}`);
      throw new Error(`Failed: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Page populated successfully!');
    console.log('🔗 View at: https://builder.io/content/' + ENTRY_ID);
    console.log('🌐 Live at: https://builder-io-experiment.vercel.app/');

    return result;
  } catch (error) {
    console.error('❌ Error:', error);
    throw error;
  }
}

populateBuilderPage();
