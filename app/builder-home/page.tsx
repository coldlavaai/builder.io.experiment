"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import { useEffect, useState, createContext } from "react";
import DayNightBackground from "@/components/DayNightBackground";

// Import the registry to register components
import "../../builder-registry";

// Create a simple loading context for the background (local, not exported)
const LoadingContext = createContext({ isLoaded: true, assemblyComplete: true });

// Initialize Builder
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function BuilderHomePage() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the Builder.io content
    builder
      .get("page", {
        url: "/builder-home",
      })
      .promise()
      .then((data) => {
        setContent(data);
        setLoading(false);
      });
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground text-xl">Loading GreenStar homepage...</div>
      </div>
    );
  }

  // Show the content from Builder.io
  if (content || isPreviewingInBuilder) {
    return (
      <LoadingContext.Provider value={{ isLoaded: true, assemblyComplete: true }}>
        <div className="min-h-screen relative">
          <DayNightBackground />
          <div className="relative z-10">
            <BuilderComponent model="page" content={content} />
          </div>
        </div>
      </LoadingContext.Provider>
    );
  }

  // Fallback if no content
  return (
    <div className="min-h-screen bg-background text-foreground p-12 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Builder.io Page Not Found</h1>
        <p className="text-muted-foreground">No content found for this URL</p>
      </div>
    </div>
  );
}
