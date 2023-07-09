import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    // Title
    { title: "Ilham Wahabi" },
    { property: "og:title", content: "Ilham Wahabi" },
    { name: "twitter:title", content: "Ilham Wahabi" },
    { name: "application-name", content: "Ilham Wahabi" },
    { name: "apple-mobile-web-app-title", content: "Ilham Wahabi" },

    // Description
    { name: "description", content: "Website pribadi tempat berbagi" },
    { property: "og:description", content: "Website pribadi tempat berbagi" },
    { name: "twitter:description", content: "Website pribadi tempat berbagi" },

    // URL
    { rel: "canonical", href: `https://ilhamwahabi.com` },
    { property: "og:url", content: `https://ilhamwahabi.com` },
    { name: "twitter:url", content: `https://ilhamwahabi.com` },

    // Keywords
    { name: "keywords", content: "ilhamwahabi" },

    // Image
    {
      property: "og:image",
      content: "https://i.ibb.co/6mzTs13/Google-Play-Header.png",
    },
    {
      name: "twitter:image",
      content: "https://i.ibb.co/6mzTs13/Google-Play-Header.png",
    },

    // Others
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@ilhamwahabigx" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "ilhamwahabi" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-4xl">
        Selamat datang di{" "}
        <span className="text-[#F6983F]">ilhamwahabi.com</span>
      </h1>
      <p className="mt-16 text-base md:text-2xl text-center">
        Masih bingung mau diisi apa
      </p>
      <p className="mt-4 text-base md:text-2xl text-center">
        Silakan liat-liat yang lain dulu aja ya
      </p>
    </div>
  );
}
