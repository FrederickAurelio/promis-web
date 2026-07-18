import SectionContainer from "@/components/layout/section-container";
import { Button } from "@/components/ui/button";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/content/blog/posts";
import { BRAND_SHORT, WEBSITE_URL } from "@/constant";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  JsonLd,
} from "@/lib/seo";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.heroImage,
    imageAlt: post.heroAlt,
    keywords: post.keywords,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleUrl = `${WEBSITE_URL}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Beranda", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          image: `${WEBSITE_URL}${post.heroImage}`,
          author: {
            "@type": "Organization",
            name: BRAND_SHORT,
            url: WEBSITE_URL,
          },
          publisher: {
            "@type": "Organization",
            name: BRAND_SHORT,
            logo: {
              "@type": "ImageObject",
              url: `${WEBSITE_URL}/logo.png`,
            },
          },
          mainEntityOfPage: articleUrl,
          keywords: post.keywords.join(", "),
        }}
      />

      <SectionContainer className="flex flex-col gap-8 py-16 pb-28 lg:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
          <Button variant="link" className="h-auto w-fit px-0" asChild>
            <Link href="/blog">
              <ArrowLeft className="size-4" />
              Kembali ke Blog
            </Link>
          </Button>

          <header className="flex flex-col gap-3">
            <time
              dateTime={post.date}
              className="text-muted-foreground text-sm"
            >
              {new Date(post.date).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-3xl font-bold md:text-4xl">{post.title}</h1>
            <p className="text-muted-foreground text-base lg:text-lg">
              {post.description}
            </p>
          </header>

          <div className="border-border relative aspect-[16/10] overflow-hidden rounded-2xl border">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              fill
              className="object-cover"
              priority
              sizes="(min-width: 768px) 48rem, 100vw"
            />
          </div>

          <article className="flex flex-col gap-5">
            {post.content.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-foreground/90 text-base leading-relaxed lg:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </article>

          <div className="border-border bg-card flex flex-col gap-3 rounded-xl border p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium lg:text-base">
              Siap memilih spek rantai untuk pabrik Anda?
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/products">
                  Lihat Produk
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
