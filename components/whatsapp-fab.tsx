import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsappFab() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 z-40 inline-flex min-h-11 items-center gap-2 border border-[var(--line)] bg-navy px-4 text-xs tracking-[0.14em] text-cream uppercase md:hidden"
    >
      <MessageCircle strokeWidth={1.5} aria-hidden="true" size={18} />
      WhatsApp
    </a>
  );
}
