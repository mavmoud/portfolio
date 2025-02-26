"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import PostHogPageView from "@/components/posthog/PostHogPageView";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let id = localStorage.getItem("id");

    if (!id) {
      id = crypto?.randomUUID
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2, 11);
      localStorage.setItem("id", id);
    }

    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) {
      throw new Error("posthog key is not defined");
    }
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: false,
    });
    posthog.identify(id);
  }, []);

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
}
