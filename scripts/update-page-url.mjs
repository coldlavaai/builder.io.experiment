// Update Builder.io page URL to /builder-experiment
import 'dotenv/config';

const PRIVATE_API_KEY = process.env.BUILDER_PRIVATE_KEY || 'bpk-6365ba728c6041c49f2615017b1bffb0';
const PAGE_ID = 'f3a3dc6856744cd7993f6856f0482a01'; // The most recent page with all components

async function updatePageUrl() {
  console.log('🔧 Updating Builder.io page URL to /builder-experiment...\n');

  // Update just the URL field
  const updateData = {
    data: {
      url: '/builder-experiment'
    }
  };

  try {
    const response = await fetch(`https://builder.io/api/v1/write/page/${PAGE_ID}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${PRIVATE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Response status:', response.status);
      console.error('Response body:', error);
      throw new Error(`Builder.io API error: ${response.status} - ${error}`);
    }

    const result = await response.json();
    console.log('✅ Successfully updated page URL!');
    console.log('   Page ID:', PAGE_ID);
    console.log('   New URL: /builder-experiment\n');
    console.log('🎨 Visual editor URL: https://builder.io/content/' + PAGE_ID + '/edit');

    return result;
  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

updatePageUrl().catch(console.error);
