"use client";
import { builder, Builder } from "@builder.io/react";

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Import all page section components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Systems from "./components/Systems";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Import Builder.io editable components
import HeroBuilder from "./components/builder/HeroBuilder";
import HeroBuilderSimple from "./components/builder/HeroBuilderSimple";
import AboutBuilder from "./components/builder/AboutBuilder";
import ContactBuilder from "./components/builder/ContactBuilder";
import SystemsBuilder from "./components/builder/SystemsBuilder";
import ProcessBuilder from "./components/builder/ProcessBuilder";
import GalleryBuilder from "./components/builder/GalleryBuilder";
import TestimonialsBuilder from "./components/builder/TestimonialsBuilder";
import NavigationBuilder from "./components/builder/NavigationBuilder";
import FooterBuilder from "./components/builder/FooterBuilder";
import SimpleTestComponent from "./components/builder/SimpleTestComponent";

// Register components with Builder.io
// This makes them available in the visual editor

Builder.registerComponent(Navigation, {
  name: "Navigation",
  inputs: [
    {
      name: "data",
      type: "object",
      helperText: "Navigation will fetch data from Sanity by default",
    },
  ],
});

// Register the Builder.io-editable Hero component (simplified version)
Builder.registerComponent(HeroBuilderSimple, {
  name: "Hero Section (Editable)",
  inputs: [
    {
      name: "badge",
      type: "text",
      defaultValue: "Premium Solar Solutions",
      helperText: "Small badge text above the heading",
    },
    {
      name: "heading",
      type: "text",
      defaultValue: "Smart Energy Solutions",
      helperText: "Main heading text",
    },
    {
      name: "highlightedText",
      type: "text",
      defaultValue: "Designed Around You",
      helperText: "Highlighted text that appears below the heading",
    },
    {
      name: "subheading",
      type: "longText",
      defaultValue: "Bespoke solar energy systems designed to perfectly match your unique requirements. Save money, reduce your carbon footprint, and achieve true energy independence.",
      helperText: "Subheading/description paragraph",
    },
    {
      name: "ctaText",
      type: "text",
      defaultValue: "Get Free Survey",
      helperText: "Primary button text",
    },
    {
      name: "ctaLink",
      type: "text",
      defaultValue: "#contact",
      helperText: "Primary button link",
    },
    {
      name: "secondaryCtaText",
      type: "text",
      defaultValue: "Explore Systems",
      helperText: "Secondary button text",
    },
    {
      name: "secondaryCtaLink",
      type: "text",
      defaultValue: "#systems",
      helperText: "Secondary button link",
    },
    {
      name: "heroImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      defaultValue: "/images/hero-house.webp",
      helperText: "Hero image on the right side. Upload JPG, PNG, or WebP files. Recommended size: 800x800px or larger for best quality.",
    },
    {
      name: "stat1Value",
      type: "text",
      defaultValue: "15+",
      helperText: "First statistic value (e.g., 15+)",
    },
    {
      name: "stat1Label",
      type: "text",
      defaultValue: "Years Experience",
      helperText: "First statistic label",
    },
    {
      name: "stat2Value",
      type: "text",
      defaultValue: "250+",
      helperText: "Second statistic value (e.g., 250+)",
    },
    {
      name: "stat2Label",
      type: "text",
      defaultValue: "Happy Customers",
      helperText: "Second statistic label",
    },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero Section (Sanity)",
  inputs: [
    {
      name: "data",
      type: "object",
      helperText: "Hero will fetch data from Sanity by default",
    },
  ],
});

// Register editable About component
Builder.registerComponent(AboutBuilder, {
  name: "About Section (Editable)",
  inputs: [
    {
      name: "heading",
      type: "text",
      defaultValue: "Why Choose GreenStar Solar?",
    },
    {
      name: "content",
      type: "longText",
      defaultValue: "We are a family-run business with over 15 years of experience in renewable energy. Our team of certified engineers and installers are dedicated to providing bespoke solar solutions that match your unique requirements.",
    },
    {
      name: "stat1Value",
      type: "text",
      defaultValue: "15+",
    },
    {
      name: "stat1Label",
      type: "text",
      defaultValue: "Years Experience",
    },
    {
      name: "stat2Value",
      type: "text",
      defaultValue: "250+",
    },
    {
      name: "stat2Label",
      type: "text",
      defaultValue: "Happy Customers",
    },
    {
      name: "stat3Value",
      type: "text",
      defaultValue: "100%",
    },
    {
      name: "stat3Label",
      type: "text",
      defaultValue: "Satisfaction Rate",
    },
  ],
});

Builder.registerComponent(About, {
  name: "About Section (Sanity)",
  inputs: [
    {
      name: "data",
      type: "object",
      helperText: "About section will fetch data from Sanity by default",
    },
  ],
});

Builder.registerComponent(Systems, {
  name: "Systems Section",
  inputs: [
    {
      name: "data",
      type: "list",
      helperText: "Systems will fetch services from Sanity by default",
    },
  ],
});

Builder.registerComponent(Process, {
  name: "Process Section",
  inputs: [
    {
      name: "data",
      type: "list",
      helperText: "Process steps will fetch from Sanity by default",
    },
  ],
});

Builder.registerComponent(Gallery, {
  name: "Gallery Section",
  inputs: [
    {
      name: "data",
      type: "list",
      helperText: "Gallery projects will fetch from Sanity by default",
    },
  ],
});

Builder.registerComponent(Testimonials, {
  name: "Testimonials Section",
  inputs: [
    {
      name: "data",
      type: "list",
      helperText: "Testimonials will fetch from Sanity by default",
    },
  ],
});

// Register editable Contact component
Builder.registerComponent(ContactBuilder, {
  name: "Contact Section (Editable)",
  inputs: [
    {
      name: "heading",
      type: "text",
      defaultValue: "Get In Touch",
    },
    {
      name: "subheading",
      type: "longText",
      defaultValue: "Ready to start your solar journey? Contact us today for a free consultation and quote.",
    },
    {
      name: "email",
      type: "text",
      defaultValue: "info@greenstarsolar.co.uk",
    },
    {
      name: "phone",
      type: "text",
      defaultValue: "+44 1234 567890",
    },
    {
      name: "address",
      type: "text",
      defaultValue: "Green Street, Solar City, SC1 2AB",
    },
  ],
});

Builder.registerComponent(Contact, {
  name: "Contact Section (Sanity)",
  inputs: [
    {
      name: "data",
      type: "object",
      helperText: "Contact section will fetch data from Sanity by default",
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    {
      name: "data",
      type: "object",
      helperText: "Footer will fetch data from Sanity by default",
    },
  ],
});

// Register editable Systems component
Builder.registerComponent(SystemsBuilder, {
  name: "Systems Section (Editable)",
  inputs: [
    { name: "service1Title", type: "text", defaultValue: "Solar Panels for Home" },
    { name: "service1Description", type: "longText", defaultValue: "Transform your home with our premium residential solar panel installations." },
    { name: "service1Features", type: "text", defaultValue: "Free energy assessment, Custom system design, 25-year warranty, Smart monitoring" },
    { name: "service1Image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/images/home-bg-1.png" },
    { name: "service1Link", type: "text", defaultValue: "/solar-panels-home" },
    { name: "service2Title", type: "text", defaultValue: "Battery Storage for Home" },
    { name: "service2Description", type: "longText", defaultValue: "Store excess solar energy and use it when you need it most." },
    { name: "service2Features", type: "text", defaultValue: "24/7 backup power, Peak shaving, Seamless integration, Smart controls" },
    { name: "service2Image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/images/home-bg-2.png" },
    { name: "service2Link", type: "text", defaultValue: "/battery-storage-home" },
    { name: "service3Title", type: "text", defaultValue: "Solar Panels for Business" },
    { name: "service3Description", type: "longText", defaultValue: "Reduce operational costs and demonstrate environmental responsibility." },
    { name: "service3Features", type: "text", defaultValue: "ROI analysis, Scalable solutions, Tax incentives, Minimal downtime" },
    { name: "service3Image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/images/business-bg-1.png" },
    { name: "service3Link", type: "text", defaultValue: "/solar-panels-business" },
    { name: "service4Title", type: "text", defaultValue: "Battery Storage for Business" },
    { name: "service4Description", type: "longText", defaultValue: "Ensure business continuity and optimize energy costs." },
    { name: "service4Features", type: "text", defaultValue: "Demand response, Grid independence, Load management, Remote monitoring" },
    { name: "service4Image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/images/business-bg-2.png" },
    { name: "service4Link", type: "text", defaultValue: "/battery-storage-business" },
  ],
});

// Register editable Process component
Builder.registerComponent(ProcessBuilder, {
  name: "Process Section (Editable)",
  inputs: [
    { name: "step1Title", type: "text", defaultValue: "Personal Consultation" },
    { name: "step1Description", type: "longText", defaultValue: "We begin with a face to face consultation to understand your energy usage, goals, and budget." },
    { name: "step1BackContent", type: "longText", defaultValue: "Our surveyors carry out a full structural and wind load assessment to ensure your roof is sound and suitable for installation." },
    { name: "step2Title", type: "text", defaultValue: "Bespoke Design" },
    { name: "step2Description", type: "longText", defaultValue: "There is no one size fits all solution. Each system is tailored to your specific energy consumption." },
    { name: "step2BackContent", type: "longText", defaultValue: "Using premium components and industry leading software, we create a system that meets your needs today while preparing you for tomorrow." },
    { name: "step3Title", type: "text", defaultValue: "Expert Installation" },
    { name: "step3Description", type: "longText", defaultValue: "With over 15 years experience, our qualified installation team completes every project with precision and care." },
    { name: "step3BackContent", type: "longText", defaultValue: "We ensure full compliance, safety, and reliability so your system performs optimally for years to come." },
    { name: "step4Title", type: "text", defaultValue: "System Handover" },
    { name: "step4Description", type: "longText", defaultValue: "Upon completion, you'll receive a comprehensive handover pack including your MCS certificate and DNO approval letter." },
    { name: "step4BackContent", type: "longText", defaultValue: "We assist you through this process to ensure a seamless transition. Our team provides full guidance on using your monitoring app." },
    { name: "step5Title", type: "text", defaultValue: "Ongoing Support" },
    { name: "step5Description", type: "longText", defaultValue: "Our relationship doesn't end once your system is installed. Greenstar offers continued support." },
    { name: "step5BackContent", type: "longText", defaultValue: "We ensure any issues are resolved quickly and efficiently. We remain available for advice, system checks, and performance reviews." },
  ],
});

// Register editable Gallery component
Builder.registerComponent(GalleryBuilder, {
  name: "Gallery Section (Editable)",
  inputs: [
    { name: "project1Image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/gallery/greenstar-1.jpg" },
    { name: "project1Title", type: "text", defaultValue: "Residential Solar + Battery" },
    { name: "project1Location", type: "text", defaultValue: "Alton, Hampshire" },
    { name: "project1Capacity", type: "text", defaultValue: "7.2kW System" },
    { name: "project1Details", type: "text", defaultValue: "16 x DMEG 450w Panels | 10.36kWh Battery | 92% bill reduction" },
    { name: "project2Image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/gallery/greenstar-2.jpg" },
    { name: "project2Title", type: "text", defaultValue: "Premium Solar Installation" },
    { name: "project2Location", type: "text", defaultValue: "Farnborough, Hampshire" },
    { name: "project2Capacity", type: "text", defaultValue: "8.55kW System" },
    { name: "project2Details", type: "text", defaultValue: "18 x AIKO 475w Panels | 11.52kWh Battery | 115% bill reduction" },
    { name: "project3Image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/gallery/greenstar-3.jpg" },
    { name: "project3Title", type: "text", defaultValue: "In-Roof Solar System" },
    { name: "project3Location", type: "text", defaultValue: "Bournemouth, Hampshire" },
    { name: "project3Capacity", type: "text", defaultValue: "5.22kW System" },
    { name: "project3Details", type: "text", defaultValue: "12 x AIKO 460w In-Roof Panels | 8.06kWh Battery | 72% bill reduction" },
    { name: "project4Image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/gallery/greenstar-4.jpg" },
    { name: "project4Title", type: "text", defaultValue: "Residential Solar System" },
    { name: "project4Location", type: "text", defaultValue: "Guildford, Surrey" },
    { name: "project4Capacity", type: "text", defaultValue: "5.92kW System" },
    { name: "project4Details", type: "text", defaultValue: "13 x AIKO 455w Panels | 5.1kWh Battery | 103% bill reduction" },
    { name: "project5Image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/gallery/greenstar-5.jpg" },
    { name: "project5Title", type: "text", defaultValue: "Large-Scale Residential" },
    { name: "project5Location", type: "text", defaultValue: "Salisbury, Wiltshire" },
    { name: "project5Capacity", type: "text", defaultValue: "12.35kW System" },
    { name: "project5Details", type: "text", defaultValue: "26 x AIKO 475w Panels | 10.24kWh Battery | 134% bill reduction" },
    { name: "project6Image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/gallery/greenstar-6.jpg" },
    { name: "project6Title", type: "text", defaultValue: "High-Capacity System" },
    { name: "project6Location", type: "text", defaultValue: "Brockenhurst, Hampshire" },
    { name: "project6Capacity", type: "text", defaultValue: "9.5kW System" },
    { name: "project6Details", type: "text", defaultValue: "20 x AIKO 475w Panels | 23.04kWh Dual Battery | 164% bill reduction" },
  ],
});

// Register editable Testimonials component
Builder.registerComponent(TestimonialsBuilder, {
  name: "Testimonials Section (Editable)",
  inputs: [
    { name: "review1Name", type: "text", defaultValue: "Phill Ballard" },
    { name: "review1Text", type: "longText", defaultValue: "Great service from beginning to end and at a great price. From Jon's initial visit through to install - Greenstar provided first rate service. Already self sufficient with excess sent to the grid!" },
    { name: "review1Rating", type: "number", defaultValue: 5 },
    { name: "review2Name", type: "text", defaultValue: "Steve Wolstenholme" },
    { name: "review2Text", type: "longText", defaultValue: "5 star treatment from start to finish, couldn't of asked for anything else." },
    { name: "review2Rating", type: "number", defaultValue: 5 },
    { name: "review3Name", type: "text", defaultValue: "Max Copeland" },
    { name: "review3Text", type: "longText", defaultValue: "Very impressed with Greenstar Solar. Professional and efficient team. Installation was smooth and quick. Great price and couldn't be happier!" },
    { name: "review3Rating", type: "number", defaultValue: 5 },
    { name: "review4Name", type: "text", defaultValue: "Martyn Brayshaw" },
    { name: "review4Text", type: "longText", defaultValue: "Communication from start to finish has been exemplary. They explained everything in simple terms and made us feel confident." },
    { name: "review4Rating", type: "number", defaultValue: 5 },
    { name: "review5Name", type: "text", defaultValue: "Jim Godfrey" },
    { name: "review5Text", type: "longText", defaultValue: "Excellent service in all respects. Cost was less than expected. Only used less than a kilowatt of power since installation. Very pleased!" },
    { name: "review5Rating", type: "number", defaultValue: 5 },
    { name: "review6Name", type: "text", defaultValue: "Simon Wright" },
    { name: "review6Text", type: "longText", defaultValue: "Great experience working with Greenstar, good communication throughout and fitters were very clean and polite. Highly recommended." },
    { name: "review6Rating", type: "number", defaultValue: 5 },
  ],
});

// Register editable Navigation component
Builder.registerComponent(NavigationBuilder, {
  name: "Navigation (Editable)",
  inputs: [
    { name: "logoUrl", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://irp.cdn-website.com/8f142869/dms3rep/multi/Greenstar_Solar_Logo_WHITE.TAG_HZ-3x.png" },
    { name: "ctaText", type: "text", defaultValue: "Get Free Quote" },
    { name: "ctaLink", type: "text", defaultValue: "/#contact" },
  ],
});

// Register editable Footer component
Builder.registerComponent(FooterBuilder, {
  name: "Footer (Editable)",
  inputs: [
    { name: "logoUrl", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"], defaultValue: "https://irp.cdn-website.com/8f142869/dms3rep/multi/Greenstar_Solar_Logo_WHITE.TAG_HZ-3x.png" },
    { name: "companyDescription", type: "longText", defaultValue: "Leading the way in renewable energy solutions. We help homes and businesses transition to clean, sustainable solar power." },
    { name: "phone", type: "text", defaultValue: "023 8212 3763" },
    { name: "email", type: "text", defaultValue: "info@greenstarsolar.co.uk" },
    { name: "location", type: "text", defaultValue: "United Kingdom" },
    { name: "facebookUrl", type: "text", defaultValue: "https://www.facebook.com/profile.php?id=61572185340265" },
    { name: "instagramUrl", type: "text", defaultValue: "https://www.instagram.com/greenstar_solar/" },
    { name: "copyright", type: "text", defaultValue: `© ${new Date().getFullYear()} Greenstar Solar · Company No. 16038912 · All rights reserved.` },
  ],
});

// Register simple test component
Builder.registerComponent(SimpleTestComponent, {
  name: "TEST - Simple Component",
  inputs: [
    { name: "text", type: "text", defaultValue: "This is a test! If you can see this, Builder.io is working!" }
  ],
});

// Export for use in other files
export default builder;
