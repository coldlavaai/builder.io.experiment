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
  const isPreviewing = useIsPreviewing();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const url = window.location.pathname;
    console.log("Fetching Builder content for URL:", url);
    console.log("Is previewing:", isPreviewing);

    builder.get("BuilderTEST", { url })
      .promise()
      .then((data) => {
        console.log("Builder content fetched:", data);
        setContent(data);
      })
      .catch((err) => {
        console.error("Error fetching Builder content:", err);
      });
  }, [isPreviewing]);

  console.log("Rendering with content:", content);
  console.log("Is previewing:", isPreviewing);

  return (
    <PageWrapper>
      {isPreviewing && !content && (
        <div style={{ padding: "40px", color: "white", background: "rgba(0,0,0,0.5)" }}>
          Loading preview...
        </div>
      )}
      <BuilderComponent model="BuilderTEST" content={content} />
    </PageWrapper>
  );
}
