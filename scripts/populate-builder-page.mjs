// Populate Builder.io page with all GreenStar sections
import 'dotenv/config';

const BUILDER_API_KEY = process.env.BUILDER_PRIVATE_KEY || 'bpk-6365ba728c6041c49f2615017b1bffb0';
const PAGE_ID = '5f26eecd59074eafa780d72323721ed8'; // From your URL
const MODEL_NAME = 'page'; // The model name

async function populateBuilderPage() {
  console.log('🚀 Populating Builder.io page with GreenStar sections...\n');

  // Define the page structure with all components in order
  const pageData = {
    id: PAGE_ID,
    modelId: MODEL_NAME,
    name: 'builder.experiment',
    published: 'published',
    meta: {
      kind: 'page',
      lastPreviewUrl: 'https://builder-io-experiment.vercel.app/builder-experiment'
    },
    data: {
      url: '/builder-experiment',
      blocks: [
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'builder-nav',
          component: {
            name: 'Navigation',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'builder-hero',
          component: {
            name: 'Hero Section',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'builder-about',
          component: {
            name: 'About Section',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'builder-systems',
          component: {
            name: 'Systems Section',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'builder-process',
          component: {
            name: 'Process Section',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'builder-gallery',
          component: {
            name: 'Gallery Section',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'builder-testimonials',
          component: {
            name: 'Testimonials Section',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'builder-contact',
          component: {
            name: 'Contact Section',
            options: {}
          }
        },
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'builder-footer',
          component: {
            name: 'Footer',
            options: {}
          }
        }
      ]
    }
  };

  try {
    // Use PATCH instead of PUT to update existing content
    const response = await fetch(`https://builder.io/api/v1/write/${MODEL_NAME}/${PAGE_ID}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${BUILDER_API_KEY}`,
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
    console.log('✅ Successfully populated Builder.io page!\n');
    console.log('📝 Page structure (9 sections):');
    console.log('   1. Navigation');
    console.log('   2. Hero Section');
    console.log('   3. About Section');
    console.log('   4. Systems Section');
    console.log('   5. Process Section');
    console.log('   6. Gallery Section');
    console.log('   7. Testimonials Section');
    console.log('   8. Contact Section');
    console.log('   9. Footer\n');
    console.log('🎨 Open Builder.io visual editor to edit content!');
    console.log('   URL: https://builder.io/content/' + PAGE_ID + '/edit\n');
    console.log('💡 Tip: Click on any section in the visual editor to edit its content.');
    console.log('   Each section will load its data from Sanity automatically.\n');

    return result;
  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

populateBuilderPage().catch(console.error);
