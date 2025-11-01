import 'dotenv/config';
import { createClient } from '@sanity/client';

const BUILDER_API_KEY = process.env.BUILDER_PRIVATE_KEY!;
const BUILDER_PUBLIC_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

// Initialize Sanity client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN
});

async function fetchSanityContent() {
  console.log('📥 Fetching content from Sanity...');

  const [heroData, aboutData, contactData, navigationData, footerData] = await Promise.all([
    sanityClient.fetch(`*[_type == "heroSection"][0]`),
    sanityClient.fetch(`*[_type == "aboutSection"][0]`),
    sanityClient.fetch(`*[_type == "contactSection"][0]`),
    sanityClient.fetch(`*[_type == "navigationSection"][0]`),
    sanityClient.fetch(`*[_type == "footerSection"][0]`)
  ]);

  console.log('✅ Sanity content fetched');
  return { heroData, aboutData, contactData, navigationData, footerData };
}

async function createBuilderPage(sanityContent: any) {
  console.log('🏗️  Building page in Builder.io...');

  const { heroData, aboutData, contactData, navigationData, footerData } = sanityContent;

  // Build the component structure with real data
  const pageData = {
    name: 'Green Star Solar - Homepage',
    data: {
      title: 'Green Star Solar - Premium Solar Solutions',
      url: '/',
      blocks: [
        // Navigation
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'navigation-block',
          component: {
            name: 'Navigation',
            options: {
              data: navigationData
            }
          }
        },
        // Hero Section
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'hero-block',
          component: {
            name: 'Hero Section (Editable)',
            options: {
              badge: 'Premium Solar Solutions',
              heading: 'Smart Energy Solutions',
              highlightedText: 'Designed Around You',
              subheading: heroData?.subheading || 'Bespoke solar energy systems designed to perfectly match your unique requirements. Save money, reduce your carbon footprint, and achieve true energy independence.',
              ctaText: heroData?.ctaText || 'Get Free Survey',
              ctaLink: heroData?.ctaLink || '#contact',
              secondaryCtaText: heroData?.secondaryCtaText || 'Explore Systems',
              secondaryCtaLink: heroData?.secondaryCtaLink || '#systems',
              heroImage: '/images/hero-house.webp',
              stat1Value: '15+',
              stat1Label: 'Years Experience',
              stat2Value: '250+',
              stat2Label: 'Happy Customers'
            }
          }
        },
        // About Section
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'about-block',
          component: {
            name: 'About Section (Editable)',
            options: {
              heading: aboutData?.heading || 'Why Choose GreenStar Solar?',
              content: aboutData?.content || 'We are a family-run business with over 15 years of experience in renewable energy.',
              stat1Value: '15+',
              stat1Label: 'Years Experience',
              stat2Value: '250+',
              stat2Label: 'Happy Customers',
              stat3Value: '100%',
              stat3Label: 'Satisfaction Rate'
            }
          }
        },
        // Systems Section
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'systems-block',
          component: {
            name: 'Systems Section (Editable)',
            options: {
              service1Title: 'Solar Panels for Home',
              service1Description: 'Transform your home with our premium residential solar panel installations.',
              service1Features: 'Free energy assessment, Custom system design, 25-year warranty, Smart monitoring',
              service1Image: '/images/home-bg-1.png',
              service1Link: '/solar-panels-home',
              service2Title: 'Battery Storage for Home',
              service2Description: 'Store excess solar energy and use it when you need it most.',
              service2Features: '24/7 backup power, Peak shaving, Seamless integration, Smart controls',
              service2Image: '/images/home-bg-2.png',
              service2Link: '/battery-storage-home',
              service3Title: 'Solar Panels for Business',
              service3Description: 'Reduce operational costs and demonstrate environmental responsibility.',
              service3Features: 'ROI analysis, Scalable solutions, Tax incentives, Minimal downtime',
              service3Image: '/images/business-bg-1.png',
              service3Link: '/solar-panels-business',
              service4Title: 'Battery Storage for Business',
              service4Description: 'Ensure business continuity and optimize energy costs.',
              service4Features: 'Demand response, Grid independence, Load management, Remote monitoring',
              service4Image: '/images/business-bg-2.png',
              service4Link: '/battery-storage-business'
            }
          }
        },
        // Process Section
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'process-block',
          component: {
            name: 'Process Section (Editable)',
            options: {
              step1Title: 'Personal Consultation',
              step1Description: 'We begin with a face to face consultation to understand your energy usage, goals, and budget.',
              step1BackContent: 'Our surveyors carry out a full structural and wind load assessment.',
              step2Title: 'Bespoke Design',
              step2Description: 'There is no one size fits all solution. Each system is tailored to your specific energy consumption.',
              step2BackContent: 'Using premium components and industry leading software.',
              step3Title: 'Expert Installation',
              step3Description: 'With over 15 years experience, our qualified installation team completes every project with precision.',
              step3BackContent: 'We ensure full compliance, safety, and reliability.',
              step4Title: 'System Handover',
              step4Description: 'Upon completion, you\'ll receive a comprehensive handover pack.',
              step4BackContent: 'We assist you through this process to ensure a seamless transition.',
              step5Title: 'Ongoing Support',
              step5Description: 'Our relationship doesn\'t end once your system is installed.',
              step5BackContent: 'We remain available for advice, system checks, and performance reviews.'
            }
          }
        },
        // Gallery Section
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'gallery-block',
          component: {
            name: 'Gallery Section (Editable)',
            options: {
              project1Image: '/gallery/greenstar-1.jpg',
              project1Title: 'Residential Solar + Battery',
              project1Location: 'Alton, Hampshire',
              project1Capacity: '7.2kW System',
              project1Details: '16 x DMEG 450w Panels | 10.36kWh Battery | 92% bill reduction',
              project2Image: '/gallery/greenstar-2.jpg',
              project2Title: 'Premium Solar Installation',
              project2Location: 'Farnborough, Hampshire',
              project2Capacity: '8.55kW System',
              project2Details: '18 x AIKO 475w Panels | 11.52kWh Battery | 115% bill reduction',
              project3Image: '/gallery/greenstar-3.jpg',
              project3Title: 'In-Roof Solar System',
              project3Location: 'Bournemouth, Hampshire',
              project3Capacity: '5.22kW System',
              project3Details: '12 x AIKO 460w In-Roof Panels | 8.06kWh Battery | 72% bill reduction',
              project4Image: '/gallery/greenstar-4.jpg',
              project4Title: 'Residential Solar System',
              project4Location: 'Guildford, Surrey',
              project4Capacity: '5.92kW System',
              project4Details: '13 x AIKO 455w Panels | 5.1kWh Battery | 103% bill reduction',
              project5Image: '/gallery/greenstar-5.jpg',
              project5Title: 'Large-Scale Residential',
              project5Location: 'Salisbury, Wiltshire',
              project5Capacity: '12.35kW System',
              project5Details: '26 x AIKO 475w Panels | 10.24kWh Battery | 134% bill reduction',
              project6Image: '/gallery/greenstar-6.jpg',
              project6Title: 'High-Capacity System',
              project6Location: 'Brockenhurst, Hampshire',
              project6Capacity: '9.5kW System',
              project6Details: '20 x AIKO 475w Panels | 23.04kWh Dual Battery | 164% bill reduction'
            }
          }
        },
        // Testimonials Section
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'testimonials-block',
          component: {
            name: 'Testimonials Section (Editable)',
            options: {
              review1Name: 'Phill Ballard',
              review1Text: 'Great service from beginning to end and at a great price. From Jon\'s initial visit through to install - Greenstar provided first rate service.',
              review1Rating: 5,
              review2Name: 'Steve Wolstenholme',
              review2Text: '5 star treatment from start to finish, couldn\'t of asked for anything else.',
              review2Rating: 5,
              review3Name: 'Max Copeland',
              review3Text: 'Very impressed with Greenstar Solar. Professional and efficient team. Installation was smooth and quick.',
              review3Rating: 5,
              review4Name: 'Martyn Brayshaw',
              review4Text: 'Communication from start to finish has been exemplary. They explained everything in simple terms.',
              review4Rating: 5,
              review5Name: 'Jim Godfrey',
              review5Text: 'Excellent service in all respects. Cost was less than expected. Very pleased!',
              review5Rating: 5,
              review6Name: 'Simon Wright',
              review6Text: 'Great experience working with Greenstar, good communication throughout and fitters were very clean and polite.',
              review6Rating: 5
            }
          }
        },
        // Contact Section
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'contact-block',
          component: {
            name: 'Contact Section (Editable)',
            options: {
              heading: contactData?.heading || 'Get In Touch',
              subheading: contactData?.subheading || 'Ready to start your solar journey? Contact us today for a free consultation and quote.',
              email: contactData?.email || 'info@greenstarsolar.co.uk',
              phone: contactData?.phone || '+44 1234 567890',
              address: contactData?.address || 'Green Street, Solar City, SC1 2AB'
            }
          }
        },
        // Footer
        {
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'footer-block',
          component: {
            name: 'Footer (Editable)',
            options: {
              logoUrl: 'https://irp.cdn-website.com/8f142869/dms3rep/multi/Greenstar_Solar_Logo_WHITE.TAG_HZ-3x.png',
              companyDescription: footerData?.companyDescription || 'Leading the way in renewable energy solutions.',
              phone: '023 8212 3763',
              email: 'info@greenstarsolar.co.uk',
              location: 'United Kingdom',
              facebookUrl: 'https://www.facebook.com/profile.php?id=61572185340265',
              instagramUrl: 'https://www.instagram.com/greenstar_solar/',
              copyright: `© ${new Date().getFullYear()} Greenstar Solar · Company No. 16038912 · All rights reserved.`
            }
          }
        }
      ]
    },
    published: 'published'
  };

  try {
    // First, try to update the existing entry
    const entryId = 'b0989a0b59b6495b8eef7bf8f6c73643';

    const response = await fetch(
      `https://cdn.builder.io/api/v3/content/buildertest/${entryId}?apiKey=${BUILDER_PUBLIC_KEY}&includeUnpublished=true`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${BUILDER_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pageData)
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to update Builder.io page: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ Homepage migrated to Builder.io successfully!');
    console.log('🔗 Edit in Builder.io: https://builder.io/content/' + entryId);
    console.log('🌐 Live at: https://builder-io-experiment.vercel.app/');

    return result;
  } catch (error) {
    console.error('❌ Error migrating to Builder.io:', error);
    throw error;
  }
}

async function migrate() {
  try {
    const sanityContent = await fetchSanityContent();
    await createBuilderPage(sanityContent);
    console.log('\n🎉 Migration complete! Your client can now edit the site in Builder.io');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrate();
