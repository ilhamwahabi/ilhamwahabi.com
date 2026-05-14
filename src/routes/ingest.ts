import { createFileRoute } from "@tanstack/react-router";

import { proxyPostHogRequest } from "#/lib/posthog-proxy";

export const Route = createFileRoute("/ingest")({
  server: {
    handlers: {
      GET: ({ request }) => proxyPostHogRequest(request),
      POST: ({ request }) => proxyPostHogRequest(request),
      OPTIONS: () => new Response(null, { status: 204 }),
    },
  },
});
