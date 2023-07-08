import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Tentang | Ilham Wahabi" },
    {
      name: "description",
      content: "Welcome to Ilham Wahabi personal website",
    },
  ];
};

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center p-16">
      <h1 className="text-center text-3xl md:text-4xl">
        Salam kenal, aku <span className="text-[#F6983F]">Ilham Wahabi</span> 👋
      </h1>
      <div className="mt-12 text-left space-y-4 text-xl flex flex-col items-start w-full">
        <p>Aku seorang frontend developer berlokasi di Bandung, Indonesia.</p>
        <p>
          Lagi tertarik seputar SEO, accessibility, dan performance
          optimization.
        </p>
        <p>
          Dulu berkuliah di Institut Teknologi Bandung jurusan Teknik
          Informatika.
        </p>
        <p>Selain ngoding suka baca buka dan main badminton.</p>
        <p>
          Sekarang lagi <em>sabbatical leave</em>, kalau ada opportunity bisa
          beritahu aja ya.
        </p>
      </div>
    </div>
  );
}
