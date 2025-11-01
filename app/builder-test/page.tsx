"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import { useEffect, useState } from "react";

// Import the registry to register components
import "../../builder-registry";

// Initialize Builder
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function BuilderTestPage() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the Builder.io content
    builder
      .get("page", {
        url: "/builder-test",
      })
      .promise()
      .then((data) => {
        setContent(data);
        setLoading(false);
      });
  }, []);

  // Show content while loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading Builder.io content...</div>
      </div>
    );
  }

  // Show the content from Builder.io if it exists
  if (content || isPreviewingInBuilder) {
    return (
      <div className="min-h-screen bg-gray-900">
        <BuilderComponent model="page" content={content} />
      </div>
    );
  }

  // Fallback content if no Builder.io content exists yet
  return (
    <div className="min-h-screen bg-gray-900 text-white p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-primary">
          Builder.io Test Page
        </h1>
        <div className="bg-white/10 p-8 rounded-lg border border-primary/30">
          <h2 className="text-2xl font-semibold mb-4">✅ Builder.io is Ready!</h2>
          <p className="text-lg mb-4">
            This page is configured to use Builder.io visual editor.
          </p>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-white">Next steps:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Go to Builder.io dashboard</li>
              <li>Create a new "Page" model</li>
              <li>Set the URL to: <code className="bg-black/30 px-2 py-1 rounded">/builder-test</code></li>
              <li>Add components from the left sidebar</li>
              <li>Click "Publish"</li>
              <li>Refresh this page to see your changes</li>
            </ol>
            <div className="mt-6 p-4 bg-primary/20 rounded border border-primary/30">
              <p className="text-sm">
                <strong>Your registered components:</strong> Navigation, Hero Section, About Section, Systems Section, Process Section, Gallery Section, Testimonials Section, Contact Section, Footer
              </p>
              <p className="text-xs mt-2 text-gray-400">
                All components will fetch real data from your Sanity CMS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
