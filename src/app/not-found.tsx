"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";

// shadcn components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-[calc(100vh-100px)] items-center justify-center overflow-hidden px-6 py-24">
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-[0.03] select-none">
        <h1 className="text-foreground text-[20rem] font-bold">404</h1>
      </div>

      <div className="animate-in fade-in zoom-in max-w-lg text-center duration-500">
        <Badge
          variant="outline"
          className="border-primary/20 text-primary mb-4 px-3 py-1 text-sm font-medium"
        >
          404 Error
        </Badge>

        <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-5xl">
          Halaman tidak ditemukan
        </h1>

        <p className="text-muted-foreground mt-6 text-base leading-7">
          Maaf, kami tidak dapat menemukan halaman yang Anda cari. Mungkin
          tautan tersebut sudah kedaluwarsa atau terjadi kesalahan pengetikan.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.back()}
            className="w-full gap-2 sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Button>

          <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
            <Link href="/">
              <Home className="h-4 w-4" />
              Beranda Utama
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <Separator className="max-w-[200px]" />
          <p className="text-muted-foreground text-sm">
            Butuh bantuan?{" "}
            <Link
              href="/contact"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              Hubungi kami
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
