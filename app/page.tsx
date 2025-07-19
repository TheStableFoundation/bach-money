import { Metadata } from "next"
import Link from "next/link"
import Footer from "../components/Layout/Footer"
import { LP_GRID_ITEMS } from "../lp-items"

export const metadata: Metadata = {
  title: "BACH Money - A decentralized stablecoin platform",
  description:
    "The Stable Foundation is a decentralized autonomous organization (DAO) built on the Solana blockchain, designed to revolutionize the global music industry and its derivatives through community-driven governance, transparency, and innovation.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://bach.money/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://station.jup.ag/assets/images/full-routing-banner-98ca8b117cc86aa7d4fadf45b56d5a7c.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      {/* Minimal announcement banner */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-3">
          <div className="text-center">
            <Link
              href="/airdrop"
              className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              BACH Token Airdrop: Claim up to 10.99 BACH
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero section */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <span className="inline-block rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                Open Source • Decentralized • EU-Built
              </span>
            </div>

            <h1 className="mb-8 text-5xl font-light tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              BACH&nbsp;
              <span className="mt-2 text-4xl font-extralight text-gray-500 md:text-5xl lg:text-6xl">Money</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed font-light text-gray-600 md:text-2xl">
              A decentralized stablecoin platform built for transparency and community governance.
            </p>

            <div className="mb-12">
              <p className="mb-6 text-gray-500">
                Governed by{" "}
                <a
                  href="https://solscan.io/token/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-dotted border-gray-300 font-medium text-gray-700 transition-colors hover:text-gray-900"
                >
                  €BACH token
                </a>
                , a fixed-supply deflationary governance token of The Stable Foundation DAO.
                <br />
                <a
                  href="https://explorer.solana.com/address/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block border-b border-dotted border-[var(--purple-accent)] font-medium text-[var(--purple-bg-gradient-from)] transition-colors hover:text-[var(--purple-accent)]"
                >
                  View on Solana Explorer
                </a>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/timeline"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                View Timeline
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </Link>
              <Link
                href="/tokenomics"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Tokenomics
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="border-t border-gray-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-light text-gray-900 md:text-4xl">Built for the future</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-500">
              Combining Nordic design principles with blockchain technology for a transparent, community-driven
              platform.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
            {LP_GRID_ITEMS.map((item) => (
              <div key={item.title} className="group text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100">
                  <div className="h-8 w-8">{item.icon}</div>
                </div>
                <h3 className="mb-4 text-xl font-medium text-gray-900">{item.title}</h3>
                <p className="leading-relaxed text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open source section */}
      <section className="border-t border-gray-100 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8">
            <svg className="mx-auto mb-6 h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="mb-4 text-3xl font-light text-gray-900">Open Source by Design</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-500">
              Transparency and community collaboration are at the heart of everything we build. Explore our codebase and
              contribute to the future of decentralized finance.
            </p>
            <a
              href="https://github.com/TheStableFoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
