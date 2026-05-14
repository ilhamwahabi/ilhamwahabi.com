const POSTHOG_API_HOST = "us.i.posthog.com";
const POSTHOG_ASSET_HOST = "us-assets.i.posthog.com";

const HOP_BY_HOP_HEADERS = [
  "connection",
  "content-encoding",
  "content-length",
  "host",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
];

const getTargetHost = (pathname: string) =>
  pathname.startsWith("/static/") || pathname.startsWith("/array/")
    ? POSTHOG_ASSET_HOST
    : POSTHOG_API_HOST;

const cleanHeaders = (headers: Headers) => {
  const cleanedHeaders = new Headers(headers);

  HOP_BY_HOP_HEADERS.forEach((header) => cleanedHeaders.delete(header));

  return cleanedHeaders;
};

export async function proxyPostHogRequest(request: Request) {
  const incomingUrl = new URL(request.url);
  const proxiedPathname = incomingUrl.pathname.replace(/^\/ingest/, "") || "/";
  const targetHost = getTargetHost(proxiedPathname);
  const targetUrl = new URL(
    `${proxiedPathname}${incomingUrl.search}`,
    `https://${targetHost}`,
  );

  const requestHeaders = cleanHeaders(request.headers);
  requestHeaders.set("host", targetHost);

  const forwardedHost = request.headers.get("host");
  if (forwardedHost) {
    requestHeaders.set("x-forwarded-host", forwardedHost);
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    requestHeaders.set("x-forwarded-for", forwardedFor);
  }

  const requestInit: RequestInit = {
    method: request.method,
    headers: requestHeaders,
  };

  if (!["GET", "HEAD"].includes(request.method)) {
    requestInit.body = await request.arrayBuffer();
  }

  const response = await fetch(targetUrl, requestInit);
  const responseHeaders = cleanHeaders(response.headers);

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  });
}
