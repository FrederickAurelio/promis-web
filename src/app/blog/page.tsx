import SectionContainer from "@/components/layout/section-container";
import { Badge } from "@/components/ui/badge";
import { getAllBlogPosts } from "@/content/blog/posts";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  JsonLd,
} from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog | Rantai Conveyor Industri Sawit",
  description:
    "Artikel Promis Chain seputar rantai konveyor kelapa sawit, tips spek, dan perbedaan conveyor chain vs roller chain di Indonesia.",
  path: "/blog",
  imageAlt: "Blog Promis Chain supplier rantai conveyor industri sawit",
  keywords: [
    "Promis Chain",
    "rantai conveyor kelapa sawit",
    "supplier rantai conveyor",
  ],
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Beranda", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <SectionContainer className="flex flex-col gap-10 py-20 pb-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
          <Badge className="bg-primary/10 text-primary rounded-full px-4 py-1 text-xs font-semibold tracking-wider uppercase">
            Blog
          </Badge>
          <h1 className="text-3xl font-bold md:text-4xl">
            Wawasan Conveyor Chain & Industri Sawit
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg">
            Panduan praktis seputar rantai konveyor, roller chain, dan aplikasi
            di palm oil mill — dari Tim Promis Chain.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-card border-border group flex flex-col overflow-hidden rounded-xl border transition-transform hover:scale-[101%]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={post.heroImage}
                  alt={post.heroAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <time
                  dateTime={post.date}
                  className="text-muted-foreground text-xs"
                >
                  {new Date(post.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="text-lg font-bold group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-muted-foreground mx-auto max-w-2xl text-center text-sm">
          Butuh spek produk? Lihat{" "}
          <Link href="/products" className="text-primary underline-offset-4 hover:underline">
            katalog conveyor chain
          </Link>{" "}
          atau{" "}
          <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
            hubungi kami
          </Link>
          .
        </p>
      </SectionContainer>
    </>
  );
}
