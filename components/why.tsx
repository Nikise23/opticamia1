import { FocusHeading } from "@/components/focus-heading";
import { ArcPair } from "@/components/arcs";

const lines = [
  "Te atendemos en el local, cara a cara.",
  "El marco lo ves puesto, con luz de verdad.",
  "Si aprieta o se tuerce, lo ajustamos acá.",
];

export function Why() {
  return (
    <section className="on-navy relative overflow-hidden bg-navy py-24 text-cream md:py-36">
      <ArcPair corner="top-right" thick="var(--cream)" />
      <div className="wrap relative">
        <p className="eyebrow">Por qué</p>
        <FocusHeading
          className="display-2 mt-5 max-w-[10ch]"
          title="Óptica Mía"
          accent="Mía"
        />
        <ul className="mt-14 max-w-[22ch] text-[clamp(1.85rem,3.4vw,3rem)] leading-[1.18] font-light">
          {lines.map((line) => (
            <li
              key={line}
              className="border-t border-[var(--line-light)] py-6"
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
