"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import { useEffect, useState } from "react";
import PageWrapper from "@/components/PageWrapper";

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
      <PageWrapper>
        <BuilderComponent model="buildertest" content={content} />
      </PageWrapper>
    );
  }

  // Fallback content if no Builder.io content exists yet
  return (
    <PageWrapper>
      <div className="min-h-screen text-white p-12">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-primary">
            Welcome to Green Star Solar
          </h1>
          <div className="bg-white/10 p-8 rounded-lg border border-primary/30 backdrop-blur-sm">
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
                <li>Drag components from the left sidebar (in order):
                  <ul className="ml-6 mt-2 space-y-1 text-sm">
                    <li>1. Navigation</li>
                    <li>2. Hero section editable</li>
                    <li>3. About section editable</li>
                    <li>4. Systems Section (Editable)</li>
                    <li>5. Process section</li>
                    <li>6. Gallery section</li>
                    <li>7. Testimonials section</li>
                    <li>8. Contact section editable</li>
                    <li>9. Footer (Editable)</li>
                  </ul>
                </li>
                <li>Click "Publish Update"</li>
                <li>Refresh this page to see your homepage with animated background!</li>
              </ol>
              <div className="mt-6 p-4 bg-primary/20 rounded border border-primary/30">
                <p className="text-sm">
                  <strong>✨ Your page will include:</strong>
                </p>
                <ul className="text-xs mt-2 space-y-1">
                  <li>• Animated gradient background</li>
                  <li>• Parallax mouse tracking</li>
                  <li>• All your existing content pre-filled</li>
                  <li>• Click-to-edit text and images</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
