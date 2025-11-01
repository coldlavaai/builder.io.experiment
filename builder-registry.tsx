"use client";
import { builder, Builder } from "@builder.io/react";

// Initialize Builder with your API key
// You'll need to set NEXT_PUBLIC_BUILDER_API_KEY in your .env.local
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Import your existing components to make them available in Builder
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Register components with Builder.io
// This makes them available in the visual editor

Builder.registerComponent(Hero, {
  name: "Hero Section",
  inputs: [
    {
      name: "data",
      type: "object",
      defaultValue: {},
      subFields: [
        {
          name: "title",
          type: "string",
          defaultValue: "Clean Energy for Your Home",
        },
        {
          name: "subtitle",
          type: "text",
          defaultValue: "Power your future with solar",
        },
      ],
    },
  ],
});

Builder.registerComponent(Gallery, {
  name: "Gallery Section",
  inputs: [
    {
      name: "data",
      type: "list",
      defaultValue: [],
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "location",
          type: "string",
        },
        {
          name: "systemSize",
          type: "string",
        },
      ],
    },
  ],
});

Builder.registerComponent(Contact, {
  name: "Contact Section",
  inputs: [],
});

Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    {
      name: "data",
      type: "object",
      defaultValue: {},
    },
  ],
});

// Export for use in other files
export default builder;
