import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog | Persecution Expert Insights",
  description:
    "Articles on when persecution expert evidence can add value beyond general country information in UK asylum and immigration appeals.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${SITE_NAME} Blog`,
          url: `${SITE_URL}/blog`,
          inLanguage: "en-GB",
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            url: `${SITE_URL}/blog/${post.slug}`,
            image: post.image ? `${SITE_URL}${post.image}` : undefined,
          })),
        }}
      />
      <PageShell
        title="Persecution Expert Blog"
        subtitle="Practitioner-facing articles on persecution expert evidence, country information, and instructing specialists for UK tribunal matters."
        breadcrumbs={crumbs}
      >
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-ember px-6 py-3 text-sm font-semibold text-white hover:bg-ember-deep"
          >
            How to refer
          </Link>
          <Link
            href="/guides"
            className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-rule px-6 py-3 text-sm font-semibold text-ink hover:border-ember hover:text-ember"
          >
            Browse guides
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-body">Articles will appear here shortly.</p>
        ) : (
          <ul className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="overflow-hidden rounded-[4px] border border-rule bg-panel"
              >
                {post.image ? (
                  <Link href={`/blog/${post.slug}`} className="relative block h-52 w-full">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </Link>
                ) : null}
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-body/70">
                    <time dateTime={post.updated || post.date}>
                      {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="mx-2">·</span>
                    <span className="normal-case tracking-normal">{post.readingTime}</span>
                  </p>
                  <h2 className="mt-3 font-display text-xl text-ink">
                    <Link href={`/blog/${post.slug}`} className="hover:text-ember">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-body">{post.description}</p>
                  <p className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-ember hover:text-ember-deep"
                    >
                      Read article →
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </PageShell>
    </>
  );
}
