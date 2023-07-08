import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    // Title
    { title: "Tentang | Ilham Wahabi" },
    { property: "og:title", content: "Tentang | Ilham Wahabi" },
    { name: "twitter:title", content: "Tentang | Ilham Wahabi" },
    { name: "application-name", content: "Tentang | Ilham Wahabi" },
    { name: "apple-mobile-web-app-title", content: "Tentang | Ilham Wahabi" },

    // Description
    { name: "description", content: "Siapa tuh? Yuk kenalan dulu 👋" },
    { property: "og:description", content: "Siapa tuh? Yuk kenalan dulu 👋" },
    { name: "twitter:description", content: "Siapa tuh? Yuk kenalan dulu 👋" },

    // URL
    { rel: "canonical", href: `https://ilhamwahabi.com/about` },
    { property: "og:url", content: `https://ilhamwahabi.com/about` },
    { name: "twitter:url", content: `https://ilhamwahabi.com/about` },

    // Keywords
    { name: "keywords", content: "ilhamwahabi,tentang" },

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

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-xl md:text-4xl">
        Salam kenal, aku <span className="text-[#F6983F]">Ilham Wahabi</span> 👋
      </h1>
      <div className="mt-8 lg:mt-12 text-left space-y-4 text-base md:text-xl flex flex-col items-start w-full">
        <p>Aku seorang frontend developer berlokasi di Bandung, Indonesia.</p>
        <p>
          Lagi tertarik seputar SEO, accessibility, dan performance
          optimization.
        </p>
        <p>
          Dulu berkuliah di Institut Teknologi Bandung jurusan Teknik
          Informatika.
        </p>
        <p>Selain ngoding suka baca buku dan main badminton.</p>
        <p>
          Sekarang lagi <em>sabbatical leave</em>, kalau ada opportunity bisa
          beritahu aja ya.
        </p>
      </div>
    </div>
  );
}
