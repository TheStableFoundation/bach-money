import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import React from "react"
import Footer from "../../components/Layout/Footer"

export const generateMetadata = () => ({
  title: "Bach Money Updates",
  description:
    "Read the latest updates, news, and insights from the Bach Money team. Stay informed about platform launches, community updates, and stablecoin trends.",
})

interface PostMeta {
  title: string
  date: string
  slug: string
}

function getAllPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), "posts")
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir)

  const posts: PostMeta[] = []
  for (const file of files) {
    const filePath = path.join(postsDir, file)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContent)
    if (data.slug && data.title && data.date) {
      posts.push({
        title: data.title,
        date: data.date,
        slug: data.slug,
      })
    }
  }
  // Sort by date descending
  posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  return posts
}

export default function PostListPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-light tracking-tight text-gray-900 md:text-5xl">Posts</h1>
            <ul className="space-y-8">
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="group rounded-lg border border-gray-100 bg-gray-50 px-6 py-6 transition-shadow hover:shadow-md"
                >
                  <Link
                    href={`/post/${post.slug}`}
                    className="block text-2xl font-medium text-gray-900 transition-colors hover:text-purple-700"
                  >
                    {post.title}
                  </Link>
                  <div className="mt-2 text-sm text-gray-500">{post.date}</div>
                </li>
              ))}
              {posts.length === 0 && <li className="text-gray-500">No posts found.</li>}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
