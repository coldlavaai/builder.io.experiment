#!/bin/bash

# Setup Vercel Environment Variables

cd "$(dirname "$0")/.."

echo "Adding environment variables to Vercel..."

# Builder.io
vercel env add NEXT_PUBLIC_BUILDER_API_KEY production <<< "7e2435d7147943e2b1357a6f89ec14f9"
vercel env add NEXT_PUBLIC_BUILDER_API_KEY preview <<< "7e2435d7147943e2b1357a6f89ec14f9"
vercel env add NEXT_PUBLIC_BUILDER_API_KEY development <<< "7e2435d7147943e2b1357a6f89ec14f9"

vercel env add BUILDER_PRIVATE_KEY production <<< "bpk-6365ba728c6041c49f2615017b1bffb0"
vercel env add BUILDER_PRIVATE_KEY preview <<< "bpk-6365ba728c6041c49f2615017b1bffb0"
vercel env add BUILDER_PRIVATE_KEY development <<< "bpk-6365ba728c6041c49f2615017b1bffb0"

# Sanity
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID production <<< "g0r3sxgj"
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID preview <<< "g0r3sxgj"
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID development <<< "g0r3sxgj"

vercel env add NEXT_PUBLIC_SANITY_DATASET production <<< "production"
vercel env add NEXT_PUBLIC_SANITY_DATASET preview <<< "production"
vercel env add NEXT_PUBLIC_SANITY_DATASET development <<< "production"

vercel env add SANITY_API_WRITE_TOKEN production <<< "skbPGvcI8xNYpsaQLB0USbwKqAjvmCtoYAxJVF4gvztyQQH6KCyKu7vgUeG9dZvIWJsj5NYc4FNjNnVmw3SsniN9tcAKkDiiUATJRgPIqZ4ndv5Nl6LjvQR4MPbhEMQMOA2hx3e7Apf0smLcX5g6zH4UhCA7oC8iHb4ztn2ok8D23g8N3pIh"
vercel env add SANITY_API_WRITE_TOKEN preview <<< "skbPGvcI8xNYpsaQLB0USbwKqAjvmCtoYAxJVF4gvztyQQH6KCyKu7vgUeG9dZvIWJsj5NYc4FNjNnVmw3SsniN9tcAKkDiiUATJRgPIqZ4ndv5Nl6LjvQR4MPbhEMQMOA2hx3e7Apf0smLcX5g6zH4UhCA7oC8iHb4ztn2ok8D23g8N3pIh"
vercel env add SANITY_API_WRITE_TOKEN development <<< "skbPGvcI8xNYpsaQLB0USbwKqAjvmCtoYAxJVF4gvztyQQH6KCyKu7vgUeG9dZvIWJsj5NYc4FNjNnVmw3SsniN9tcAKkDiiUATJRgPIqZ4ndv5Nl6LjvQR4MPbhEMQMOA2hx3e7Apf0smLcX5g6zH4UhCA7oC8iHb4ztn2ok8D23g8N3pIh"

echo "✅ Environment variables added. Triggering redeploy..."
vercel --prod --yes
