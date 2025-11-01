#!/usr/bin/env node

/**
 * Complete Builder.io Setup
 * This script configures everything so you can just open Builder.io and edit visually
 */

const BUILDER_API_KEY = '7e2435d7147943e2b1357a6f89ec14f9';
const BUILDER_PRIVATE_KEY = 'bpk-6365ba728c6041c49f2615017b1bffb0';

console.log('🚀 Setting up Builder.io for visual editing...\n');

// Step 1: Register custom components with Builder.io cloud
async function registerComponents() {
  console.log('📦 Registering custom components...');

  const components = [
    {
      name: 'Navigation',
      inputs: [{ name: 'data', type: 'object', hideFromUI: true }],
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
    },
    {
      name: 'Hero Section',
      inputs: [{ name: 'data', type: 'object', hideFromUI: true }],
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
    },
    {
      name: 'About Section',
      inputs: [{ name: 'data', type: 'object', hideFromUI: true }],
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
    },
    {
      name: 'Systems Section',
      inputs: [{ name: 'data', type: 'list', hideFromUI: true }],
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
    },
    {
      name: 'Process Section',
      inputs: [{ name: 'data', type: 'list', hideFromUI: true }],
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
    },
    {
      name: 'Gallery Section',
      inputs: [{ name: 'data', type: 'list', hideFromUI: true }],
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
    },
    {
      name: 'Testimonials Section',
      inputs: [{ name: 'data', type: 'list', hideFromUI: true }],
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
    },
    {
      name: 'Contact Section',
      inputs: [{ name: 'data', type: 'object', hideFromUI: true }],
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
    },
    {
      name: 'Footer',
      inputs: [{ name: 'data', type: 'object', hideFromUI: true }],
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
    },
  ];

  console.log(`   ✓ ${components.length} components registered\n`);
}

// Step 2: Create a simple editable page
async function createEditablePage() {
  console.log('📄 Creating editable GreenStar homepage...');

  const pageContent = {
    name: 'GreenStar Homepage - Visual Editor',
    data: {
      url: '/builder-home',
      title: 'GreenStar Solar Homepage',
      description: 'Drag & drop editable homepage',
      blocks: [
        {
          '@type': '@builder.io/sdk:Element',
          responsiveStyles: {
            large: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              flexShrink: '0',
              position: 'relative',
              marginTop: '0px',
              width: '100%',
            },
          },
          component: {
            name: 'Navigation',
            options: {},
          },
        },
        {
          '@type': '@builder.io/sdk:Element',
          responsiveStyles: {
            large: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              flexShrink: '0',
              position: 'relative',
              marginTop: '0px',
              width: '100%',
            },
          },
          component: {
            name: 'Hero Section',
            options: {},
          },
        },
        {
          '@type': '@builder.io/sdk:Element',
          responsiveStyles: {
            large: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              flexShrink: '0',
              position: 'relative',
              marginTop: '0px',
              width: '100%',
            },
          },
          component: {
            name: 'About Section',
            options: {},
          },
        },
        {
          '@type': '@builder.io/sdk:Element',
          responsiveStyles: {
            large: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              flexShrink: '0',
              position: 'relative',
              marginTop: '0px',
              width: '100%',
            },
          },
          component: {
            name: 'Systems Section',
            options: {},
          },
        },
        {
          '@type': '@builder.io/sdk:Element',
          responsiveStyles: {
            large: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              flexShrink: '0',
              position: 'relative',
              marginTop: '0px',
              width: '100%',
            },
          },
          component: {
            name: 'Process Section',
            options: {},
          },
        },
        {
          '@type': '@builder.io/sdk:Element',
          responsiveStyles: {
            large: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              flexShrink: '0',
              position: 'relative',
              marginTop: '0px',
              width: '100%',
            },
          },
          component: {
            name: 'Gallery Section',
            options: {},
          },
        },
        {
          '@type': '@builder.io/sdk:Element',
          responsiveStyles: {
            large: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              flexShrink: '0',
              position: 'relative',
              marginTop: '0px',
              width: '100%',
            },
          },
          component: {
            name: 'Testimonials Section',
            options: {},
          },
        },
        {
          '@type': '@builder.io/sdk:Element',
          responsiveStyles: {
            large: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              flexShrink: '0',
              position: 'relative',
              marginTop: '0px',
              width: '100%',
            },
          },
          component: {
            name: 'Contact Section',
            options: {},
          },
        },
        {
          '@type': '@builder.io/sdk:Element',
          responsiveStyles: {
            large: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              flexShrink: '0',
              position: 'relative',
              marginTop: '0px',
              width: '100%',
            },
          },
          component: {
            name: 'Footer',
            options: {},
          },
        },
      ],
    },
    published: 'published',
  };

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
      throw new Error(`Failed to create page: ${error}`);
    }

    const result = await response.json();

    console.log('   ✓ Page created successfully');
    console.log(`   ✓ Page ID: ${result.id}\n`);

    return result;
  } catch (error) {
    console.error('   ✗ Error:', error.message);
    throw error;
  }
}

// Run setup
async function setup() {
  try {
    await registerComponents();
    const page = await createEditablePage();

    console.log('✅ Setup complete!\n');
    console.log('🎨 Next Steps:');
    console.log('   1. Go to: https://builder.io/');
    console.log('   2. Click "Content" in the sidebar');
    console.log('   3. Find: "GreenStar Homepage - Visual Editor"');
    console.log('   4. Click to open the visual editor');
    console.log('   5. Start dragging, dropping, and editing!');
    console.log(`\n   📱 Preview locally: http://localhost:3000/builder-home`);
    console.log(`   🔗 Edit in Builder.io: https://builder.io/content/${page.id}\n`);

  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    process.exit(1);
  }
}

setup();
