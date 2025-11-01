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

Builder.registerComponent(Hero, {
  name: "Hero Section",
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
