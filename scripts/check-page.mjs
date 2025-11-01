#!/usr/bin/env node

const BUILDER_API_KEY = '7e2435d7147943e2b1357a6f89ec14f9';

async function checkPage() {
  const response = await fetch(
    `https://cdn.builder.io/api/v3/content/page?apiKey=${BUILDER_API_KEY}&url=/builder-home&limit=1&offset=0`,
    {
      headers: {
        'Authorization': `Bearer ${BUILDER_API_KEY}`,
      },
    }
  );

  const data = await response.json();
  const page = data.results[0];

  console.log('Page Name:', page.name);
  console.log('Has Blocks:', page.data.blocks !== undefined);
  console.log('Block Count:', page.data.blocks ? page.data.blocks.length : 0);

  if (page.data.blocks && page.data.blocks.length > 0) {
    console.log('\nComponents:');
    page.data.blocks.forEach((block, i) => {
      console.log(`  ${i + 1}. ${block.component?.name || 'Unknown'}`);
    });
  }
}

checkPage();
