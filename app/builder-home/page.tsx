"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import { useEffect, useState } from "react";

// Import the registry to register components
import "../../builder-registry";

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
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading GreenStar homepage...</div>
      </div>
    );
  }

  // Show the content from Builder.io
  if (content || isPreviewingInBuilder) {
    return (
      <div className="min-h-screen">
        <BuilderComponent model="page" content={content} />
      </div>
    );
  }

  // Fallback if no content
  return (
    <div className="min-h-screen bg-gray-900 text-white p-12 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Builder.io Page Not Found</h1>
        <p className="text-gray-400">No content found for this URL</p>
      </div>
    </div>
  );
}
