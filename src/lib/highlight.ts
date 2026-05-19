export const textHighlightClass =
  "box-decoration-clone rounded-md bg-gradient-to-r from-sky-100 to-cyan-50 px-1.5 py-0.5 font-semibold text-slate-900 ring-1 ring-sky-200/70";

export function withTextHighlight(...classes: string[]) {
  return [textHighlightClass, ...classes].join(" ");
}
