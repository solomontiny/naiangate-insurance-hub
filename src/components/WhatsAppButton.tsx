import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "2348023189052"; // Naingate admin WhatsApp
const PREFILLED = encodeURIComponent("Hello, I need assistance.");

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED}`;

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-105 hover:bg-[#1ebe5d] animate-fade-in"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
