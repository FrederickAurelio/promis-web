import { WHATSAPP_LINK } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="rounded-full shadow-lg animate-pulse hover:animate-none transition-all duration-200 cursor-pointer hover:scale-105"
              src="/whatsapp.svg"
              alt="Whatsapp"
              priority
              width={50}
              height={50}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent
          removeArrow={true}
          className="bg-secondary text-secondary-foreground"
          side="left"
          align="center"
          sideOffset={12}
        >
          <p className="text-sm">Hubungi kami melalui WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
