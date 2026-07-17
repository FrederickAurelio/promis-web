"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ConveyorChainSpec, ConveyorSprocket } from "@/data/products";
import {
  CONVEYOR_CHAIN_SPECS,
  CONVEYOR_CONNECTING_LINKS,
  CONVEYOR_SPROCKETS,
  getCompatibleConnectingLink,
  getCompatibleSprockets,
  getConveyorSpecKey,
  parseConveyorSpecKey,
} from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const DEFAULT_SPEC_KEY = getConveyorSpecKey("717", "EP 6L");

function buildChainQuoteMessage(label: string): string {
  return [
    "Halo Promis, saya ingin penawaran:",
    `- Conveyor Chain: ${label}`,
  ].join("\n");
}

function buildLinkQuoteMessage(spec: string): string {
  return [
    "Halo Promis, saya ingin penawaran:",
    `- Connecting Link: ${spec}`,
  ].join("\n");
}

function buildSprocketQuoteMessage(label: string): string {
  return [
    "Halo Promis, saya ingin penawaran:",
    `- Sprocket: ${label}`,
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

export default function ConveyorCatalog() {
  const [specKey, setSpecKey] = useState(DEFAULT_SPEC_KEY);
  const [linkCount, setLinkCount] = useState("");
  const [includeConnectingLink, setIncludeConnectingLink] = useState(false);
  const [includeSprocket, setIncludeSprocket] = useState(false);
  const [selectedSprocket, setSelectedSprocket] = useState("");

  const { model, type } = parseConveyorSpecKey(specKey);

  const compatibleSprockets = useMemo(
    () => getCompatibleSprockets(model),
    [model],
  );

  const connectingLink = useMemo(
    () => getCompatibleConnectingLink(model),
    [model],
  );

  const selectedSpec = useMemo(
    () =>
      CONVEYOR_CHAIN_SPECS.find((s) => s.model === model && s.type === type),
    [model, type],
  );

  function handleSpecSelect(spec: ConveyorChainSpec) {
    setSpecKey(getConveyorSpecKey(spec.model, spec.type));
    setSelectedSprocket("");
  }

  function buildConfiguratorMessage(): string {
    const lines = [
      "Halo Promis, saya ingin penawaran:",
      `- Conveyor Chain: ${selectedSpec?.label ?? `${model} ${type}`}`,
    ];

    if (linkCount.trim()) {
      lines.push(`- Jumlah link: ${linkCount.trim()}`);
    }

    if (includeConnectingLink && connectingLink) {
      lines.push(`- Connecting Link: ${connectingLink.spec}`);
    }

    if (includeSprocket && selectedSprocket) {
      lines.push(`- Sprocket: ${selectedSprocket}`);
    } else if (includeSprocket) {
      lines.push("- Sprocket: (belum dipilih)");
    }

    return lines.join("\n");
  }

  return (
    <div className="flex flex-col gap-10 lg:gap-12">
      <div className="flex flex-col gap-4">
        <SubsectionHeading letter="A" title="Conveyor Chain" id="conveyor-chain-a" />
        <div className="border-border overflow-x-auto rounded-xl border shadow-sm">
          <Table>
            <TableHeader className="bg-accent">
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-accent-foreground w-12 font-bold">
                  No
                </TableHead>
                <TableHead className="text-accent-foreground font-bold">
                  Spesifikasi
                </TableHead>
                <TableHead className="text-accent-foreground font-bold">
                  Strength (LBF)
                </TableHead>
                <TableHead className="text-accent-foreground w-[140px] text-right font-bold">
                  Aksi
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {CONVEYOR_CHAIN_SPECS.map((spec, index) => {
                const key = getConveyorSpecKey(spec.model, spec.type);
                const isSelected = specKey === key;
                return (
                  <TableRow
                    key={key}
                    className={cn(
                      "border-border/50 cursor-pointer transition-colors",
                      isSelected ? "bg-primary/5" : "hover:bg-muted/50",
                    )}
                    onClick={() => handleSpecSelect(spec)}
                  >
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-semibold">{spec.label}</TableCell>
                    <TableCell>{spec.strength}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        variant={isSelected ? "default" : "outline"}
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Link
                          href={buildWhatsAppUrl(
                            buildChainQuoteMessage(spec.label),
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Minta Penawaran
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="border-primary/30 bg-card flex flex-col gap-6 rounded-2xl border p-6 lg:p-8">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-bold">Konfigurasi Rantai Anda</h4>
          <p className="text-muted-foreground text-sm">
            Klik baris di tabel A untuk memilih model, isi jumlah link, lalu
            minta penawaran lengkap.
          </p>
        </div>

        {selectedSpec && (
          <div className="bg-muted/50 rounded-lg px-4 py-3">
            <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
              Pilihan Anda
            </p>
            <p className="mt-1 font-semibold">{selectedSpec.label}</p>
            <p className="text-muted-foreground text-sm">
              Strength {selectedSpec.strength}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="link-count">Jumlah Link / Mata Rantai</Label>
            <Input
              id="link-count"
              type="number"
              min={1}
              placeholder="Contoh: 120"
              value={linkCount}
              onChange={(e) => setLinkCount(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Aksesoris Tambahan</Label>
            <div className="flex items-start gap-3">
              <Checkbox
                id="connecting-link"
                checked={includeConnectingLink}
                onCheckedChange={(checked) =>
                  setIncludeConnectingLink(checked === true)
                }
              />
              <div className="flex flex-col gap-0.5">
                <Label htmlFor="connecting-link" className="font-medium">
                  Connecting Link
                </Label>
                {includeConnectingLink && connectingLink && (
                  <p className="text-muted-foreground text-sm">
                    {connectingLink.spec}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="sprocket"
                  checked={includeSprocket}
                  onCheckedChange={(checked) => {
                    setIncludeSprocket(checked === true);
                    if (!checked) setSelectedSprocket("");
                  }}
                />
                <Label htmlFor="sprocket" className="font-medium">
                  Sprocket
                </Label>
              </div>
              {includeSprocket && (
                <SprocketSelect
                  sprockets={compatibleSprockets}
                  value={selectedSprocket}
                  onChange={setSelectedSprocket}
                />
              )}
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="w-full py-6 text-base font-semibold lg:text-lg"
          asChild
        >
          <Link
            href={buildWhatsAppUrl(buildConfiguratorMessage())}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-5" />
            Minta Penawaran Harga Sekarang
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <SubsectionHeading letter="B" title="Connecting Link" id="conveyor-chain-b" />
        <div className="border-border overflow-x-auto rounded-xl border shadow-sm">
          <Table>
            <TableHeader className="bg-accent">
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-accent-foreground w-12 font-bold">
                  No
                </TableHead>
                <TableHead className="text-accent-foreground font-bold">
                  Spesifikasi
                </TableHead>
                <TableHead className="text-accent-foreground w-[140px] text-right font-bold">
                  Aksi
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {CONVEYOR_CONNECTING_LINKS.map((link, index) => (
                <TableRow
                  key={link.pitch}
                  className="border-border/50 hover:bg-muted/50"
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="font-semibold">{link.spec}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline" asChild>
                      <Link
                        href={buildWhatsAppUrl(
                          buildLinkQuoteMessage(link.spec),
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Minta Penawaran
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SubsectionHeading letter="C" title="Sprocket" id="conveyor-chain-c" />
        <div className="border-border overflow-x-auto rounded-xl border shadow-sm">
          <Table>
            <TableHeader className="bg-accent">
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-accent-foreground w-12 font-bold">
                  No
                </TableHead>
                <TableHead className="text-accent-foreground font-bold">
                  Spesifikasi
                </TableHead>
                <TableHead className="text-accent-foreground w-[140px] text-right font-bold">
                  Aksi
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {CONVEYOR_SPROCKETS.map((sprocket, index) => (
                <TableRow
                  key={sprocket.label}
                  className="border-border/50 hover:bg-muted/50"
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="font-semibold">{sprocket.label}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline" asChild>
                      <Link
                        href={buildWhatsAppUrl(
                          buildSprocketQuoteMessage(sprocket.label),
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Minta Penawaran
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function SprocketSelect({
  sprockets,
  value,
  onChange,
}: {
  sprockets: ConveyorSprocket[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Pilih sprocket" />
      </SelectTrigger>
      <SelectContent>
        {sprockets.map((s) => (
          <SelectItem key={s.label} value={s.label}>
            {s.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
