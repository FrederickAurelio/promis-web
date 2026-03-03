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
    <main className="relative flex min-h-[calc(100vh-100px)] items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[20rem] font-bold text-foreground">404</h1>
      </div>

      <div className="text-center max-w-lg animate-in fade-in zoom-in duration-500">
        <Badge
          variant="outline"
          className="mb-4 px-3 py-1 text-sm font-medium border-primary/20 text-primary"
        >
          404 Error
        </Badge>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Halaman tidak ditemukan
        </h1>

        <p className="mt-6 text-base leading-7 text-muted-foreground">
          Maaf, kami tidak dapat menemukan halaman yang Anda cari. Mungkin
          tautan tersebut sudah kedaluwarsa atau terjadi kesalahan pengetikan.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.back()}
            className="w-full sm:w-auto gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>

          <Button asChild size="lg" className="w-full sm:w-auto gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Beranda Utama
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <Separator className="max-w-[200px]" />
          <p className="text-sm text-muted-foreground">
            Butuh bantuan?{" "}
            <Link
              href="/contact"
              className="font-medium text-primary hover:underline underline-offset-4"
            >
              Hubungi kami
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
