// Diagnose Builder.io page structure
import 'dotenv/config';

const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '7e2435d7147943e2b1357a6f89ec14f9';
const PRIVATE_API_KEY = process.env.BUILDER_PRIVATE_KEY || 'bpk-6365ba728c6041c49f2615017b1bffb0';
const PAGE_ID = '5f26eecd59074eafa780d72323721ed8';

async function diagnoseBuilderPage() {
  console.log('🔍 Diagnosing Builder.io page structure...\n');
  console.log(`Using Public Key: ${PUBLIC_API_KEY.substring(0, 10)}...`);
  console.log(`Using Private Key: ${PRIVATE_API_KEY.substring(0, 10)}...\n`);

  // 1. Try to list all pages using PUBLIC key
  console.log('1️⃣ Fetching all pages in the "page" model (using PUBLIC key)...');
  try {
    const listResponse = await fetch('https://cdn.builder.io/api/v3/content/page?apiKey=' + PUBLIC_API_KEY, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (listResponse.ok) {
      const pages = await listResponse.json();
      console.log('✅ Found pages:', JSON.stringify(pages, null, 2));
      console.log('\n');
    } else {
      const error = await listResponse.text();
      console.log('❌ Failed to list pages:', listResponse.status, error);
      console.log('\n');
    }
  } catch (error) {
    console.error('❌ Error listing pages:', error.message);
    console.log('\n');
  }

  // 2. Try to fetch the specific page by ID using v3 API (PUBLIC key)
  console.log('2️⃣ Fetching specific page by ID using v3 API (PUBLIC key)...');
  try {
    const fetchResponse = await fetch(`https://cdn.builder.io/api/v3/content/page/${PAGE_ID}?apiKey=${PUBLIC_API_KEY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (fetchResponse.ok) {
      const page = await fetchResponse.json();
      console.log('✅ Found page:', JSON.stringify(page, null, 2));
      console.log('\n');
    } else {
      const error = await fetchResponse.text();
      console.log('❌ Failed to fetch page:', fetchResponse.status, error);
      console.log('\n');
    }
  } catch (error) {
    console.error('❌ Error fetching page:', error.message);
    console.log('\n');
  }

  // 3. Try using the query parameter approach (PUBLIC key)
  console.log('3️⃣ Fetching page by query (url match, PUBLIC key)...');
  try {
    const queryResponse = await fetch(`https://cdn.builder.io/api/v3/content/page?apiKey=${PUBLIC_API_KEY}&query.data.url=/builder-experiment`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (queryResponse.ok) {
      const result = await queryResponse.json();
      console.log('✅ Query result:', JSON.stringify(result, null, 2));
      console.log('\n');
    } else {
      const error = await queryResponse.text();
      console.log('❌ Failed to query page:', queryResponse.status, error);
      console.log('\n');
    }
  } catch (error) {
    console.error('❌ Error querying page:', error.message);
    console.log('\n');
  }

  // 4. Try to fetch using Write API with PRIVATE key
  console.log('4️⃣ Fetching page using Write API (PRIVATE key)...');
  try {
    const writeApiResponse = await fetch(`https://builder.io/api/v1/write/page/${PAGE_ID}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${PRIVATE_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (writeApiResponse.ok) {
      const page = await writeApiResponse.json();
      console.log('✅ Write API result:', JSON.stringify(page, null, 2));
      console.log('\n');
    } else {
      const error = await writeApiResponse.text();
      console.log('❌ Write API failed:', writeApiResponse.status, error);
      console.log('\n');
    }
  } catch (error) {
    console.error('❌ Error with Write API:', error.message);
    console.log('\n');
  }

  console.log('📋 Diagnosis complete!');
}

diagnoseBuilderPage().catch(console.error);
