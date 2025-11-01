"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import { useEffect, useState } from "react";

// Import the registry to register components
import "../builder-registry";

// Initialize Builder
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function HomePage() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the Builder.io content for homepage
    builder
      .get("buildertest", {
        url: "/",
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
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Show the content from Builder.io if it exists
  if (content || isPreviewingInBuilder) {
    return (
      <div className="min-h-screen">
        <BuilderComponent model="buildertest" content={content} />
      </div>
    );
  }

  // Fallback content if no Builder.io content exists yet
  return (
    <div className="min-h-screen bg-gray-900 text-white p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-primary">
          Welcome to Green Star Solar
        </h1>
        <div className="bg-white/10 p-8 rounded-lg border border-primary/30">
          <h2 className="text-2xl font-semibold mb-4">🎨 Build Your Homepage in Builder.io</h2>
          <p className="text-lg mb-4">
            Your homepage is now ready to edit in Builder.io!
          </p>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-white">Next steps:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Go to Builder.io dashboard</li>
              <li>You should already have a "BuilderTEST" entry open</li>
              <li>Set the Page URL to: <code className="bg-black/30 px-2 py-1 rounded">/</code></li>
              <li>Drag components from the left sidebar (Navigation, Hero section editable, About section editable, etc.)</li>
              <li>Click "Publish Update"</li>
              <li>Refresh this page to see your homepage!</li>
            </ol>
            <div className="mt-6 p-4 bg-primary/20 rounded border border-primary/30">
              <p className="text-sm">
                <strong>Your available components:</strong>
              </p>
              <ul className="text-xs mt-2 space-y-1">
                <li>• Navigation</li>
                <li>• Hero section editable</li>
                <li>• About section editable</li>
                <li>• Systems section</li>
                <li>• Process section</li>
                <li>• Gallery section</li>
                <li>• Testimonials section</li>
                <li>• Contact section editable</li>
                <li>• Footer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
