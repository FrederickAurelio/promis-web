"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { StrandType } from "@/data/products";
import {
  getTeethList,
  getTeethRange,
  STRAND_LABELS,
  TRANSMISSION_PITCHES,
} from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const STRANDS: StrandType[] = ["1R", "2R", "3R"];

function buildSprocketQuoteMessage(
  teeth: number,
  pitchLabel: string,
  strand: StrandType,
): string {
  return [
    "Halo Promis, saya ingin penawaran:",
    `- Sprocket Transmisi: ${teeth}T`,
    `- Pitch: ${pitchLabel}`,
    `- Tipe: ${STRAND_LABELS[strand]}`,
  ].join("\n");
}

export default function SprocketFilter() {
  const [strand, setStrand] = useState<StrandType>("1R");
  const [pitchId, setPitchId] = useState(TRANSMISSION_PITCHES[0].id);
  const [selectedTeeth, setSelectedTeeth] = useState<number | null>(null);

  const selectedPitch = useMemo(
    () => TRANSMISSION_PITCHES.find((p) => p.id === pitchId),
    [pitchId],
  );

  const teethList = useMemo(() => getTeethList(strand), [strand]);
  const teethRange = useMemo(() => getTeethRange(strand), [strand]);

  useEffect(() => {
    setSelectedTeeth(null);
  }, [strand, pitchId]);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="sprocket-strand">Pilih Tipe</Label>
          <Select
            value={strand}
            onValueChange={(v) => setStrand(v as StrandType)}
          >
            <SelectTrigger id="sprocket-strand" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {STRANDS.map((s) => (
                <SelectItem key={s} value={s}>
                  {STRAND_LABELS[s]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="sprocket-pitch">Pilih Pitch</Label>
          <Select value={pitchId} onValueChange={setPitchId}>
            <SelectTrigger id="sprocket-pitch" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TRANSMISSION_PITCHES.map((pitch) => (
                <SelectItem key={pitch.id} value={pitch.id}>
                  {pitch.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <p className="text-muted-foreground text-sm">
        Pilih jumlah gigi ({teethRange.min}T – {teethRange.max}T) untuk{" "}
        {STRAND_LABELS[strand]} · {selectedPitch?.label}
      </p>

      <div className="flex flex-wrap gap-2">
        {teethList.map((teeth) => {
          const isSelected = selectedTeeth === teeth;
          return (
            <button
              key={teeth}
              type="button"
              onClick={() => setSelectedTeeth(teeth)}
              className={cn(
                "min-w-[3.25rem] rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                isSelected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/40 hover:bg-muted/50",
              )}
            >
              {teeth}T
            </button>
          );
        })}
      </div>

      {selectedTeeth !== null && selectedPitch && (
        <div className="bg-muted/50 flex flex-col gap-4 rounded-xl px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
              Pilihan Anda
            </p>
            <p className="mt-1 font-semibold">
              Sprocket Transmisi {selectedTeeth}T
            </p>
            <p className="text-muted-foreground text-sm">
              {selectedPitch.label} · {STRAND_LABELS[strand]}
            </p>
          </div>
          <Button size="lg" className="shrink-0 font-semibold" asChild>
            <Link
              href={buildWhatsAppUrl(
                buildSprocketQuoteMessage(
                  selectedTeeth,
                  selectedPitch.label,
                  strand,
                ),
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-5" />
              Minta Penawaran
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
