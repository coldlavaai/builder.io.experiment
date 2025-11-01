// Populate Builder.io with ALL editable sections
import 'dotenv/config';

const PRIVATE_API_KEY = process.env.BUILDER_PRIVATE_KEY || 'bpk-6365ba728c6041c49f2615017b1bffb0';
const PAGE_ID = '5f26eecd59074eafa780d72323721ed8'; // User's visual editor page

async function populateEditableHero() {
  console.log('🚀 Populating Builder.io page with ALL editable sections...\n');

  // Define the page structure with ALL editable components
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
        },
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'editable-about-1',
          component: {
            name: 'About Section (Editable)',
            options: {
              heading: 'Why Choose GreenStar Solar?',
              content: 'We are a family-run business with over 15 years of experience in renewable energy. Our team of certified engineers and installers are dedicated to providing bespoke solar solutions that match your unique requirements. From initial consultation to installation and aftercare, we guide you through every step of your solar journey.',
              stat1Value: '15+',
              stat1Label: 'Years Experience',
              stat2Value: '250+',
              stat2Label: 'Happy Customers',
              stat3Value: '100%',
              stat3Label: 'Satisfaction Rate',
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
        },
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'editable-contact-1',
          component: {
            name: 'Contact Section (Editable)',
            options: {
              heading: 'Get In Touch',
              subheading: 'Ready to start your solar journey? Contact us today for a free consultation and quote.',
              email: 'info@greenstarsolar.co.uk',
              phone: '+44 1234 567890',
              address: 'Green Street, Solar City, SC1 2AB',
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
