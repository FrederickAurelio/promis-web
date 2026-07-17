import { WHATSAPP_LINK } from "@/constant";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `${WHATSAPP_LINK}?text=${encoded}`;
}
