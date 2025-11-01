/**
 * Populate all 9 GreenStar Solar sections to Builder.io
 * This script adds Navigation, Hero, About, Systems, Process, Gallery, Testimonials, Contact, and Footer
 * to page ID: 5f26eecd59074eafa780d72323721ed8
 */

const BUILDER_PRIVATE_KEY = process.env.BUILDER_PRIVATE_KEY || 'bpk-6365ba728c6041c49f2615017b1bffb0';
const PAGE_ID = 'f3a3dc6856744cd7993f6856f0482a01';

if (!BUILDER_PRIVATE_KEY) {
  console.error('Error: BUILDER_PRIVATE_KEY environment variable is not set');
  process.exit(1);
}

interface BlockData {
  '@type': string;
  component: {
    name: string;
    options: Record<string, any>;
  };
}

async function populateAllSections() {
  console.log('Starting to populate all 9 sections to Builder.io page...\n');

  // Define all 9 sections in order
  const blocks: BlockData[] = [
    // 1. Navigation
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Navigation (Editable)',
        options: {
          logoUrl: 'https://irp.cdn-website.com/8f142869/dms3rep/multi/Greenstar_Solar_Logo_WHITE.TAG_HZ-3x.png',
          ctaText: 'Get Free Quote',
          ctaLink: '/#contact',
        },
      },
    },
    // 2. Hero
    {
      '@type': '@builder.io/sdk:Element',
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
        },
      },
    },
    // 3. About
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'About Section (Editable)',
        options: {
          heading: 'Expert Advice And Outstanding Service',
          content: "At Greenstar Solar, we're committed to making solar energy accessible and affordable for everyone. With over 15 years of experience, we've helped hundreds of homes and businesses transition to clean, renewable energy.",
          stat1Value: '15+',
          stat1Label: 'Years Experience',
          stat2Value: '250+',
          stat2Label: 'Happy Customers',
          stat3Value: '100%',
          stat3Label: 'Satisfaction Rate',
        },
      },
    },
    // 4. Systems
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Systems Section (Editable)',
        options: {
          service1Title: 'Solar Panels for Home',
          service1Description: 'Transform your home with our premium residential solar panel installations. Reduce your electricity bills and increase your property value.',
          service1Features: 'Free energy assessment, Custom system design, 25-year warranty, Smart monitoring',
          service1Image: '/images/home-bg-1.png',
          service1Link: '/solar-panels-home',
          service2Title: 'Battery Storage for Home',
          service2Description: 'Store excess solar energy and use it when you need it most. Achieve energy independence with our advanced battery solutions.',
          service2Features: '24/7 backup power, Peak shaving, Seamless integration, Smart controls',
          service2Image: '/images/home-bg-2.png',
          service2Link: '/battery-storage-home',
          service3Title: 'Solar Panels for Business',
          service3Description: 'Reduce operational costs and demonstrate environmental responsibility with commercial solar installations.',
          service3Features: 'ROI analysis, Scalable solutions, Tax incentives, Minimal downtime',
          service3Image: '/images/business-bg-1.png',
          service3Link: '/solar-panels-business',
          service4Title: 'Battery Storage for Business',
          service4Description: 'Ensure business continuity and optimize energy costs with commercial-grade battery storage systems.',
          service4Features: 'Demand response, Grid independence, Load management, Remote monitoring',
          service4Image: '/images/business-bg-2.png',
          service4Link: '/battery-storage-business',
        },
      },
    },
    // 5. Process
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Process Section (Editable)',
        options: {
          step1Title: 'Personal Consultation',
          step1Description: 'We begin with a face to face consultation to understand your energy usage, goals, and budget.',
          step1BackContent: 'Our surveyors carry out a full structural and wind load assessment to ensure your roof is sound and suitable for installation.',
          step2Title: 'Bespoke Design',
          step2Description: 'There is no one size fits all solution. Each system is tailored to your specific energy consumption.',
          step2BackContent: 'Using premium components and industry leading software, we create a system that meets your needs today while preparing you for tomorrow.',
          step3Title: 'Expert Installation',
          step3Description: 'With over 15 years experience, our qualified installation team completes every project with precision and care.',
          step3BackContent: 'We ensure full compliance, safety, and reliability so your system performs optimally for years to come.',
          step4Title: 'System Handover',
          step4Description: "Upon completion, you'll receive a comprehensive handover pack including your MCS certificate and DNO approval letter.",
          step4BackContent: "We assist you through this process to ensure a seamless transition. Our team provides full guidance on using your monitoring app.",
          step5Title: 'Ongoing Support',
          step5Description: "Our relationship doesn't end once your system is installed. Greenstar offers continued support.",
          step5BackContent: 'We ensure any issues are resolved quickly and efficiently. We remain available for advice, system checks, and performance reviews.',
        },
      },
    },
    // 6. Gallery
    {
      '@type': '@builder.io/sdk:Element',
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
          project6Details: '20 x AIKO 475w Panels | 23.04kWh Dual Battery | 164% bill reduction',
        },
      },
    },
    // 7. Testimonials
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Testimonials Section (Editable)',
        options: {
          review1Name: 'Phill Ballard',
          review1Text: "Great service from beginning to end and at a great price. From Jon's initial visit through to install - Greenstar provided first rate service. Already self sufficient with excess sent to the grid!",
          review1Rating: 5,
          review2Name: 'Steve Wolstenholme',
          review2Text: "5 star treatment from start to finish, couldn't of asked for anything else.",
          review2Rating: 5,
          review3Name: 'Max Copeland',
          review3Text: 'Very impressed with Greenstar Solar. Professional and efficient team. Installation was smooth and quick. Great price and couldn\'t be happier!',
          review3Rating: 5,
          review4Name: 'Martyn Brayshaw',
          review4Text: 'Communication from start to finish has been exemplary. They explained everything in simple terms and made us feel confident.',
          review4Rating: 5,
          review5Name: 'Jim Godfrey',
          review5Text: 'Excellent service in all respects. Cost was less than expected. Only used less than a kilowatt of power since installation. Very pleased!',
          review5Rating: 5,
          review6Name: 'Simon Wright',
          review6Text: 'Great experience working with Greenstar, good communication throughout and fitters were very clean and polite. Highly recommended.',
          review6Rating: 5,
        },
      },
    },
    // 8. Contact
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Contact Section (Editable)',
        options: {
          heading: 'Book Your Free Survey',
          subheading: 'Ready to make the switch to solar? Contact us today for a free consultation and site assessment',
          email: 'info@greenstarsolar.co.uk',
          phone: '023 8212 3763',
          address: 'United Kingdom',
        },
      },
    },
    // 9. Footer
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Footer (Editable)',
        options: {
          logoUrl: 'https://irp.cdn-website.com/8f142869/dms3rep/multi/Greenstar_Solar_Logo_WHITE.TAG_HZ-3x.png',
          companyDescription: 'Leading the way in renewable energy solutions. We help homes and businesses transition to clean, sustainable solar power.',
          phone: '023 8212 3763',
          email: 'info@greenstarsolar.co.uk',
          location: 'United Kingdom',
          facebookUrl: 'https://www.facebook.com/profile.php?id=61572185340265',
          instagramUrl: 'https://www.instagram.com/greenstar_solar/',
          copyright: `© ${new Date().getFullYear()} Greenstar Solar · Company No. 16038912 · All rights reserved.`,
        },
      },
    },
  ];

  const pageData = {
    data: {
      blocks,
    },
  };

  try {
    console.log(`Updating page ${PAGE_ID} with all 9 sections...`);

    const response = await fetch(
      `https://builder.io/api/v1/write/page/${PAGE_ID}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${BUILDER_PRIVATE_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pageData),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to update page: ${response.status} ${response.statusText}\n${errorText}`);
    }

    const result = await response.json();
    console.log('\n✅ Successfully populated all 9 sections!');
    console.log('\nSections added:');
    console.log('1. Navigation (Editable)');
    console.log('2. Hero Section (Editable)');
    console.log('3. About Section (Editable)');
    console.log('4. Systems Section (Editable)');
    console.log('5. Process Section (Editable)');
    console.log('6. Gallery Section (Editable)');
    console.log('7. Testimonials Section (Editable)');
    console.log('8. Contact Section (Editable)');
    console.log('9. Footer (Editable)');
    console.log(`\nView your page at: https://builder.io/content/${PAGE_ID}`);
    console.log(`\nAll sections are now editable in the Builder.io visual editor!`);

    return result;
  } catch (error) {
    console.error('Error populating sections:', error);
    throw error;
  }
}

// Run the script
populateAllSections()
  .then(() => {
    console.log('\n✅ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
