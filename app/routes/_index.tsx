import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Ilham Wahabi" },
    {
      name: "description",
      content: "Welcome to Ilham Wahabi personal website",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center p-16">
      <h1 className="text-center text-3xl md:text-4xl">
        Welcome to <span className="text-[#F6983F]">ilhamwahabi.com</span>
      </h1>
      <p className="mt-16 text-2xl">Masih bingung mau diisi apa</p>
      <p className="mt-4 text-2xl">Silakan liat-liat yang lain dulu aja ya</p>
    </div>
  );
}
