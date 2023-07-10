export const getMeta = ({
  title,
  description,
  url,
  keywords,
  image,
}: {
  title: string;
  description: string;
  url: string;
  keywords: string;
  image?: string;
}) => {
  const metaTitle = title ? `${title} | Ilham Wahabi` : "Ilham Wahabi";
  const metaUrl = `https://ilhamwahabi.com${url}`;
  const metaKeywords = `ilhamwahabi,${keywords}`;
  const metaImage = image || "https://i.ibb.co/6mzTs13/Google-Play-Header.png";

  return [
    // Title
    { title: metaTitle },
    { property: "og:title", content: metaTitle },
    { name: "twitter:title", content: metaTitle },
    { name: "application-name", content: metaTitle },
    { name: "apple-mobile-web-app-title", content: metaTitle },

    // Description
    { name: "description", content: description },
    { property: "og:description", content: description },
    { name: "twitter:description", content: description },

    // URL
    { rel: "canonical", href: metaUrl },
    { property: "og:url", content: metaUrl },
    { name: "twitter:url", content: metaUrl },

    // Keywords
    { name: "keywords", content: metaKeywords },

    // Image
    { property: "og:image", content: metaImage },
    { name: "twitter:image", content: metaImage },

    // Others
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@ilhamwahabigx" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "ilhamwahabi" },
  ];
};
