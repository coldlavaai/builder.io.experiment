#!/usr/bin/env node

/**
 * Create a Builder.io page that replicates the GreenStar homepage
 * This creates an exact replica with all components in order
 */

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
const BUILDER_PRIVATE_KEY = process.env.BUILDER_PRIVATE_KEY || BUILDER_API_KEY;

if (!BUILDER_API_KEY) {
  console.error('❌ NEXT_PUBLIC_BUILDER_API_KEY not found in environment');
  process.exit(1);
}

// The page structure matching the GreenStar homepage
const pageContent = {
  name: 'GreenStar Homepage (Builder.io Updated)',
  data: {
    url: '/builder-home',
    title: 'GreenStar Solar - Builder.io Visual Editor Demo',
    description: 'Fully editable GreenStar homepage built with Builder.io visual editor',
    blocks: [
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Navigation',
          options: {
            data: null, // Will fetch from Sanity
          },
        },
      },
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Hero Section',
          options: {
            data: null, // Will fetch from Sanity
          },
        },
      },
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'About Section',
          options: {
            data: null, // Will fetch from Sanity
          },
        },
      },
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Systems Section',
          options: {
            data: [], // Will fetch from Sanity
          },
        },
      },
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Process Section',
          options: {
            data: [], // Will fetch from Sanity
          },
        },
      },
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Gallery Section',
          options: {
            data: [], // Will fetch from Sanity
          },
        },
      },
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Testimonials Section',
          options: {
            data: [], // Will fetch from Sanity
          },
        },
      },
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Contact Section',
          options: {
            data: null, // Will fetch from Sanity
          },
        },
      },
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Footer',
          options: {
            data: null, // Will fetch from Sanity
          },
        },
      },
    ],
  },
  published: 'published',
};

async function createBuilderPage() {
  console.log('🚀 Creating GreenStar homepage in Builder.io...\n');

  try {
    const response = await fetch('https://builder.io/api/v1/write/page', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${BUILDER_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pageContent),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Builder.io API error: ${response.status} - ${error}`);
    }

    const result = await response.json();

    console.log('✅ Page created successfully!\n');
    console.log('📄 Page Details:');
    console.log(`   Name: ${pageContent.name}`);
    console.log(`   URL: ${pageContent.data.url}`);
    console.log(`   Components: ${pageContent.blocks.length}`);
    console.log(`\n🌐 View your page:`);
    console.log(`   Local: http://localhost:3000${pageContent.data.url}`);
    console.log(`   Builder.io Editor: https://builder.io/content/${result.id}`);
    console.log(`\n✨ All components are now drag & drop editable!`);

    return result;
  } catch (error) {
    console.error('❌ Error creating page:', error.message);
    process.exit(1);
  }
}

// Run the script
createBuilderPage();
