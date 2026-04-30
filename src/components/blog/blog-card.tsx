import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { BlogThumbnail } from "./blog-thumbnail";
import type { BlogPost } from "@/data/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogCard({
  post,
  large = false,
}: {
  post: BlogPost;
  large?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[20px] border border-border bg-bg-elevated/60 transition-colors hover:border-text-muted/40 ${
        large ? "lg:col-span-2" : ""
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]">
            <BlogThumbnail variant={post.variant} />
          </div>
        </div>
        <div className="space-y-4 p-6 sm:p-7">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-text-muted">
            <span>{post.category}</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              {post.readTime} min
            </span>
          </div>
          <h3
            className={`font-display font-medium leading-tight ${
              large
                ? "text-[clamp(1.5rem,2.4vw,2rem)]"
                : "text-[clamp(1.15rem,1.6vw,1.4rem)]"
            }`}
          >
            {post.title}
          </h3>
          <p className="text-sm leading-relaxed text-text-muted line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between border-t border-border/60 pt-4">
            <span className="text-xs text-text-muted">
              {formatDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-accent">
              Leer
              <ArrowUpRight className="h-3 w-3 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
