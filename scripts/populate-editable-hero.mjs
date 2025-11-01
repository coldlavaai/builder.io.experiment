// Populate Builder.io with editable Hero section
import 'dotenv/config';

const PRIVATE_API_KEY = process.env.BUILDER_PRIVATE_KEY || 'bpk-6365ba728c6041c49f2615017b1bffb0';
const PAGE_ID = 'f3a3dc6856744cd7993f6856f0482a01'; // The existing page

async function populateEditableHero() {
  console.log('🚀 Populating Builder.io page with editable Hero section...\n');

  // Define the page structure with the editable Hero component
  const pageData = {
    data: {
      title: 'GreenStar Solar - Editable Homepage',
      description: 'Fully editable GreenStar homepage',
      url: '/builder-experiment',
      blocks: [
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'editable-hero-1',
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
              stat2Label: 'Happy Customers',
            }
          },
          responsiveStyles: {
            large: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              width: '100%',
            }
          }
        }
      ]
    }
  };

  try {
    // Use PATCH to update the existing page
    const response = await fetch(`https://builder.io/api/v1/write/page/${PAGE_ID}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${PRIVATE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pageData)
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Response status:', response.status);
      console.error('Response body:', error);
      throw new Error(`Builder.io API error: ${response.status} - ${error}`);
    }

    const result = await response.json();
    console.log('✅ Successfully populated Builder.io page with editable Hero!\n');
    console.log('📝 Content added:');
    console.log('   - Hero Section with ALL editable fields');
    console.log('   - Badge: "Premium Solar Solutions"');
    console.log('   - Heading: "Smart Energy Solutions"');
    console.log('   - Highlighted: "Designed Around You"');
    console.log('   - Subheading paragraph');
    console.log('   - 2 CTA buttons');
    console.log('   - Hero image');
    console.log('   - 2 statistic cards\n');
    console.log('🎨 Open Builder.io visual editor:');
    console.log('   https://builder.io/content/' + PAGE_ID + '/edit\n');
    console.log('💡 You can now click on ANY text or image to edit it!');
    console.log('   - Click on headings to change text');
    console.log('   - Click on the hero image to upload a new one');
    console.log('   - Click on buttons to change their text and links');
    console.log('   - Click on stats to update values and labels\n');

    return result;
  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

populateEditableHero().catch(console.error);
