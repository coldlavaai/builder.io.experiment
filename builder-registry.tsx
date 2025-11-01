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

// Register the Builder.io-editable Hero component
Builder.registerComponent(HeroBuilder, {
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

Builder.registerComponent(About, {
  name: "About Section",
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

Builder.registerComponent(Contact, {
  name: "Contact Section",
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

// Export for use in other files
export default builder;
