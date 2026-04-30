import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, MessageCircle } from "lucide-react";
import { BlogThumbnail } from "@/components/blog/blog-thumbnail";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { posts, getPostBySlug, getRelatedPosts } from "@/data/blog";
import { waLink, waMessages } from "@/lib/whatsapp";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "AutoSelect Sevilla",
      url:
        process.env.NEXT_PUBLIC_SITE_URL ??
        "https://autoselect-sevilla.vercel.app",
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${
        process.env.NEXT_PUBLIC_SITE_URL ??
        "https://autoselect-sevilla.vercel.app"
      }/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <article className="container-x pb-20 pt-32">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-text-muted transition hover:text-accent"
        >
          <ArrowLeft className="h-3 w-3" /> Volver al blog
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-text-muted">
            <Badge variant="accent">{post.category}</Badge>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              {post.readTime} min de lectura
            </span>
            <span aria-hidden>·</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <h1 className="font-display mt-6 text-balance text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05]">
            {post.title}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-text-muted">
            {post.excerpt}
          </p>
        </header>

        <figure className="mt-12 overflow-hidden rounded-[20px] border border-border">
          <div className="aspect-[16/9]">
            <BlogThumbnail variant={post.variant} />
          </div>
        </figure>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div className="space-y-12">
            {post.body.map((section) => (
              <section
                key={section.heading}
                className="space-y-4 [&_p]:text-pretty [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-text/90 sm:[&_p]:text-[1.05rem]"
              >
                <h2 className="font-display text-[clamp(1.5rem,2.4vw,2rem)] font-medium">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </section>
            ))}
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[20px] border border-border bg-bg-elevated/40 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                ¿Tienes una duda concreta?
              </p>
              <p className="mt-3 text-sm text-text/90">
                Escríbenos por WhatsApp con la matrícula o el modelo que estás
                considerando. La primera opinión es gratuita.
              </p>
              <Button asChild variant="whatsapp" size="md" className="mt-5 w-full">
                <a
                  href={waLink(waMessages.general())}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> Hablar por WhatsApp
                </a>
              </Button>
            </div>

            <div className="rounded-[20px] border border-border bg-bg-elevated/40 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                Palabras clave
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {post.keywords.map((k) => (
                  <li
                    key={k}
                    className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                  >
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {related.length > 0 ? (
          <section className="mt-32">
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
              Sigue leyendo
            </p>
            <h2 className="font-display mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold">
              Otros artículos del blog
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group overflow-hidden rounded-[20px] border border-border bg-bg-elevated/40 transition-colors hover:border-text-muted/40"
                >
                  <div className="aspect-[16/10]">
                    <BlogThumbnail variant={r.variant} />
                  </div>
                  <div className="space-y-3 p-5">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-text-muted">
                      <span>{r.category}</span>
                      <span aria-hidden>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {r.readTime} min
                      </span>
                    </div>
                    <p className="font-display text-lg font-medium leading-tight">
                      {r.title}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-accent">
                      Leer
                      <ArrowUpRight className="h-3 w-3 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </>
  );
}
