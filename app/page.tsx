"use client";
import { BuilderComponent } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import PageWrapper from "@/components/PageWrapper";

// Import the registry to register components
import "../builder-registry";

// Initialize Builder
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function HomePage() {
  return (
    <PageWrapper>
      <BuilderComponent model="buildertest" />
    </PageWrapper>
  );
}
