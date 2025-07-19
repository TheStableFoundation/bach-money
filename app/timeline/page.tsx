import { Metadata } from "next"
import Link from "next/link"
import Footer from "../../components/Layout/Footer"
import TimelineView from "../../components/Timeline"

export const metadata: Metadata = {
  title: "BACH Money Timeline | The Stable Foundation",
  description:
    "Explore the journey of BACH Money and The Stable Foundation from inception to the future of decentralized finance. Discover key milestones and our vision for stablecoins on Solana.",
  openGraph: {
    title: "BACH Money Timeline | The Stable Foundation",
    description:
      "Explore the journey of BACH Money and The Stable Foundation from inception to the future of decentralized finance. Discover key milestones and our vision for stablecoins on Solana.",
    url: "https://bach.money/timeline",
    type: "website",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://station.jup.ag/assets/images/full-routing-banner-98ca8b117cc86aa7d4fadf45b56d5a7c.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BACH Money Timeline | The Stable Foundation",
    description:
      "Explore the journey of BACH Money and The Stable Foundation from inception to the future of decentralized finance. Discover key milestones and our vision for stablecoins on Solana.",
    images: ["https://station.jup.ag/assets/images/full-routing-banner-98ca8b117cc86aa7d4fadf45b56d5a7c.png"],
  },
}

export default function TimelinePage() {
  return (
    <>
      {/* Header with back navigation */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 sm:px-0 sm:py-0 sm:hover:bg-transparent"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>

      {/* Hero section */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 sm:text-sm">
                Our Journey
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:mb-8 sm:text-5xl md:text-6xl">
              BACH Money
              <span className="mt-1 block text-3xl font-extralight text-gray-500 sm:mt-2 sm:text-4xl md:text-5xl">
                Timeline
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed font-light text-gray-600 sm:text-xl md:text-2xl">
              From the Big Bang to the future of decentralized finance. Explore our journey through time.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="border-t border-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-2xl font-light text-gray-900 sm:text-3xl">Key Milestones</h2>
                <p className="text-base text-gray-500 sm:text-lg">
                  A cosmic perspective on our journey from the universe's beginning to decentralized finance.
                </p>
              </div>

              <div className="flex justify-center">
                <TimelineView />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="border-t border-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-2xl font-light text-gray-900 sm:text-3xl">Join Our Journey</h2>
            <p className="mx-auto mb-6 max-w-2xl text-base text-gray-500 sm:mb-8 sm:text-lg">
              Be part of the next chapter in decentralized finance. Explore our platform and see what we're building.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/tokenomics"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:w-auto"
              >
                View Tokenomics
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto"
              >
                Learn More
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
