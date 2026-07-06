import { useState } from "react";
import { HiLink } from "react-icons/hi";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  XIcon,
  XShareButton,
} from "react-share";

const ICON_SIZE = 32;

type BlogShareButtonsProps = {
  url: string;
  title: string;
  variant?: "compact" | "full";
};

function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API may be unavailable in some contexts.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Link copied" : "Copy link"}
      aria-describedby={copied ? "copy-link-tooltip" : undefined}
      className="relative cursor-pointer border-0 bg-transparent p-0"
    >
      {copied && (
        <span
          id="copy-link-tooltip"
          role="tooltip"
          className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 z-50 w-max -translate-x-1/2 rounded-lg border border-slate-200/90 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-lg shadow-slate-300/50"
        >
          Copied!
        </span>
      )}
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center rounded-full bg-slate-500"
        style={{ width: ICON_SIZE, height: ICON_SIZE }}
      >
        <HiLink className="text-white" size={16} />
      </span>
    </button>
  );
}

function ShareIcons({ url, title }: { url: string; title: string }) {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2"
      role="group"
      aria-label="Share this post"
    >
      <CopyLinkButton url={url} />
      <XShareButton url={url} title={title} aria-label="Share on X">
        <XIcon size={ICON_SIZE} round />
      </XShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        source="ilhamwahabi.com"
        aria-label="Share on LinkedIn"
      >
        <LinkedinIcon size={ICON_SIZE} round />
      </LinkedinShareButton>
      <FacebookShareButton url={url} aria-label="Share on Facebook">
        <FacebookIcon size={ICON_SIZE} round />
      </FacebookShareButton>
    </div>
  );
}

export function BlogShareButtons({
  url,
  title,
  variant = "full",
}: BlogShareButtonsProps) {
  if (variant === "compact") {
    return <ShareIcons url={url} title={title} />;
  }

  return (
    <div className="flex flex-col items-center gap-3 pb-4 md:pb-0">
      <p className="text-center text-sm leading-6 text-slate-600">
        Found this post helpful? Share it with others.
      </p>
      <ShareIcons url={url} title={title} />
    </div>
  );
}
