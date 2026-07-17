"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { StrandType } from "@/data/products";
import { getRollerChainItems, STRAND_LABELS } from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Link from "next/link";
import SprocketFilter from "./sprocket-filter";

const STRANDS: StrandType[] = ["1R", "2R", "3R"];

function buildRollerQuoteMessage(rsModel: string): string {
  return [
    "Halo Promis, saya ingin penawaran:",
    `- Roller Chain: ${rsModel}`,
  ].join("\n");
}

function buildConnectingLinkQuoteMessage(clModel: string): string {
  return [
    "Halo Promis, saya ingin penawaran:",
    `- Connecting Link: ${clModel}`,
  ].join("\n");
}

function SubsectionHeading({
  letter,
  title,
  id,
}: {
  letter: string;
  title: string;
  id?: string;
}) {
  return (
    <h3 id={id} className="scroll-mt-36 flex items-baseline gap-2 text-lg font-bold lg:text-xl">
      <span className="text-primary">{letter}.</span>
      {title}
    </h3>
  );
}

export default function RollerChainCatalog() {
  return (
    <div className="flex flex-col gap-10 lg:gap-12">
      <Tabs defaultValue="1R" className="w-full">
        <TabsList className="mb-2 grid w-full grid-cols-3">
          {STRANDS.map((strand) => (
            <TabsTrigger
              key={strand}
              value={strand}
              className="text-xs sm:text-sm"
            >
              {STRAND_LABELS[strand]}
            </TabsTrigger>
          ))}
        </TabsList>

        {STRANDS.map((strand) => (
          <TabsContent key={strand} value={strand} className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <SubsectionHeading
                letter="A"
                title="Roller Chain"
                id={strand === "1R" ? "roller-chain-a" : undefined}
              />
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {getRollerChainItems(strand).map((item) => (
                  <li
                    key={item.rsModel}
                    className="border-border flex items-center justify-between gap-3 rounded-lg border px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold">{item.rsModel}</p>
                      <p className="text-muted-foreground truncate text-xs">
                        {item.pitch}
                      </p>
                    </div>
                    <Button size="sm" variant="outline" className="shrink-0" asChild>
                      <Link
                        href={buildWhatsAppUrl(
                          buildRollerQuoteMessage(item.rsModel),
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Minta Penawaran
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <SubsectionHeading
                letter="B"
                title="Connecting Link"
                id={strand === "1R" ? "roller-chain-b" : undefined}
              />
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {getRollerChainItems(strand).map((item) => (
                  <li
                    key={item.clModel}
                    className="border-border flex items-center justify-between gap-3 rounded-lg border px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold">{item.clModel}</p>
                      <p className="text-muted-foreground truncate text-xs">
                        Pasangan {item.rsModel}
                      </p>
                    </div>
                    <Button size="sm" variant="outline" className="shrink-0" asChild>
                      <Link
                        href={buildWhatsAppUrl(
                          buildConnectingLinkQuoteMessage(item.clModel),
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Minta Penawaran
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="flex flex-col gap-4">
        <SubsectionHeading
          letter="C"
          title="Sprocket"
          id="roller-sprocket"
        />
        <SprocketFilter />
      </div>
    </div>
  );
}
