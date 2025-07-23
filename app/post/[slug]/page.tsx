import matter from "gray-matter"
import { marked } from "marked"
import { notFound } from "next/navigation"
import React from "react"
import fs from "fs"
import path from "path"
import Footer from "../../../components/Layout/Footer"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const postsDir = path.join(process.cwd(), "posts")
  const files = fs.readdirSync(postsDir)

  for (const file of files) {
    const filePath = path.join(postsDir, file)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)

    if (data.slug === slug) {
      // Use the post content as description, truncated to 160 chars for SEO
      const plainContent = content
        .replace(/[#_*>\-\n\r]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
      const description = plainContent.length > 160 ? plainContent.slice(0, 157) + "..." : plainContent
      return {
        title: data.title ? `${data.title} | Bach Money` : "Post | Bach Money",
        description: description || data.title || "Read the latest post from Bach Money.",
      }
    }
  }
  return {
    title: "Post | Bach Money",
    description: "Read the latest post from Bach Money.",
  }
}

function getPostBySlug(slug: string) {
  const postsDir = path.join(process.cwd(), "posts")
  const files = fs.readdirSync(postsDir)

  // Find the file with matching slug in frontmatter
  for (const file of files) {
    const filePath = path.join(postsDir, file)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)

    if (data.slug === slug) {
      return {
        title: data.title || "",
        date: data.date || "",
        content,
      }
    }
  }
  return null
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }
  const content = await marked(post.content)

  return (
    <>
      <section className="border-b border-gray-100 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="mb-2 text-4xl font-light tracking-tight text-gray-900 md:text-5xl">{post.title}</h1>
          <p className="mb-8 text-sm text-gray-500">{post.date}</p>
          <article
            className="prose prose-gray max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>
      <Footer />
    </>
  )
}
