import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "2348000000000"; // Replace with real Naingate WhatsApp number
const PREFILLED = encodeURIComponent("Hello Naingate Insurance, I'd like to speak with an advisor.");

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-105 hover:bg-[#1ebe5d]"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
