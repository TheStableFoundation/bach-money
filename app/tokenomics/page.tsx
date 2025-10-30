import { Metadata } from "next"
import Link from "next/link"
import Footer from "../../components/Layout/Footer"

export const metadata: Metadata = {
  title: "€BACH Tokenomics | BACH Money",
  description:
    "Explore the tokenomics of €BACH, the governance and utility token of The Stable Foundation DAO. Learn about distribution, features, and community ownership.",
  openGraph: {
    title: "€BACH Tokenomics | BACH Money",
    description:
      "Explore the tokenomics of €BACH, the governance and utility token of The Stable Foundation DAO. Learn about distribution, features, and community ownership.",
    url: "https://bach.money/tokenomics",
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
    title: "€BACH Tokenomics | BACH Money",
    description:
      "Explore the tokenomics of €BACH, the governance and utility token of The Stable Foundation DAO. Learn about distribution, features, and community ownership.",
    images: ["https://station.jup.ag/assets/images/full-routing-banner-98ca8b117cc86aa7d4fadf45b56d5a7c.png"],
  },
}

export default function TokenomicsPage() {
  return (
    <>
      {/* Header with back navigation */}
      <section className="border-b border-gray-100 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 sm:px-0 sm:py-0 sm:hover:bg-transparent dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
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
              <span className="inline-block rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 sm:text-sm dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-400">
                Token Economics
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:mb-8 sm:text-5xl md:text-6xl dark:text-white">
              €BACH
              <span className="mt-1 block text-3xl font-extralight text-gray-500 sm:mt-2 sm:text-4xl md:text-5xl dark:text-gray-400">
                Tokenomics
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed font-light text-gray-600 sm:text-xl md:text-2xl dark:text-gray-300">
              The governance and utility token of{" "}
              <a href="https://www.thestablefoundation.org/" target="__blank">
                The Stable Foundation DAO
              </a>
              . Designed for transparency and community ownership.
            </p>
            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed font-light text-gray-600 sm:text-lg md:text-xl dark:text-gray-300">
              Early participants in the €BACH ecosystem are positioned to receive greater benefits as the network
              expands. At the same time, the project remains committed to decentralization, ensuring that opportunities
              and governance are distributed fairly as adoption increases.
            </p>
          </div>
        </div>
      </section>

      {/* Token distribution chart */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="mb-8 text-2xl font-light text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              Token Distribution
            </h2>

            <div className="mx-auto max-w-2xl">
              <div className="mb-8 flex justify-center">
                <svg width="280" height="280" viewBox="0 0 280 280" className="drop-shadow-sm">
                  {/* Community 60% */}
                  <circle
                    r="120"
                    cx="140"
                    cy="140"
                    fill="transparent"
                    stroke="#a3be8c"
                    strokeWidth="48"
                    strokeDasharray={`${2 * Math.PI * 120 * 0.6} ${2 * Math.PI * 120 * 0.4}`}
                    strokeDashoffset={0}
                    transform="rotate(-90 140 140)"
                  />
                  {/* Team 21.266% */}
                  <circle
                    r="120"
                    cx="140"
                    cy="140"
                    fill="transparent"
                    stroke="#5e81ac"
                    strokeWidth="48"
                    strokeDasharray={`${2 * Math.PI * 120 * 0.21266} ${2 * Math.PI * 120 * (1 - 0.21266)}`}
                    strokeDashoffset={-2 * Math.PI * 120 * 0.6}
                    transform="rotate(-90 140 140)"
                  />
                  {/* Investors 18.044% */}
                  <circle
                    r="120"
                    cx="140"
                    cy="140"
                    fill="transparent"
                    stroke="#b48ead"
                    strokeWidth="48"
                    strokeDasharray={`${2 * Math.PI * 120 * 0.18044} ${2 * Math.PI * 120 * (1 - 0.18044)}`}
                    strokeDashoffset={-2 * Math.PI * 120 * (0.6 + 0.21266)}
                    transform="rotate(-90 140 140)"
                  />
                  {/* Advisors 0.69% */}
                  <circle
                    r="120"
                    cx="140"
                    cy="140"
                    fill="transparent"
                    stroke="#ebcb8b"
                    strokeWidth="48"
                    strokeDasharray={`${2 * Math.PI * 120 * 0.0069} ${2 * Math.PI * 120 * (1 - 0.0069)}`}
                    strokeDashoffset={-2 * Math.PI * 120 * (0.6 + 0.21266 + 0.18044)}
                    transform="rotate(-90 140 140)"
                  />
                  <text
                    x="140"
                    y="140"
                    textAnchor="middle"
                    dy="0.3em"
                    fontSize="1.5rem"
                    fill="currentColor"
                    fontWeight="300"
                    className="text-gray-900 dark:text-white"
                  >
                    €BACH
                  </text>
                </svg>
              </div>
              <div className="mb-8 flex justify-center">
                <a
                  href="https://explorer.solana.com/address/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-dotted border-[var(--purple-accent)] font-medium text-[var(--purple-bg-gradient-from)] transition-colors hover:text-[var(--purple-accent)]"
                >
                  View €BACH on Solana Explorer
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/50">
                  <span className="h-4 w-4 rounded bg-[#a3be8c]"></span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Community</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">60%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/50">
                  <span className="h-4 w-4 rounded bg-[#5e81ac]"></span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Team</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">21.3%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/50">
                  <span className="h-4 w-4 rounded bg-[#b48ead]"></span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Investors</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">18.0%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/50">
                  <span className="h-4 w-4 rounded bg-[#ebcb8b]"></span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Advisors</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">0.7%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="mb-12 text-2xl font-light text-gray-900 sm:mb-16 sm:text-3xl md:text-4xl dark:text-white">
              Key Features
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-16">
              <div className="group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2z"
                    />
                    <path d="M12 14c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v6" />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Fixed Supply
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  15,000,000 tokens with no inflation. Deflationary through regular burns.
                </p>
              </div>

              <div className="group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Governance
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Vote on proposals, protocol upgrades, and treasury management.
                </p>
              </div>

              <div className="group text-center sm:col-span-2 lg:col-span-1">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">Utility</h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Required for airdrops, liquidity mining, and ecosystem participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details section */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="mb-8 text-2xl font-light text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              Token Details
            </h2>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left sm:p-8 dark:border-gray-700 dark:bg-gray-800/50">
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Pre-mine:</strong> All tokens were minted at genesis and distributed to the DAO treasury and
                    community.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Community Allocation:</strong> 60% of the total supply is allocated for the community
                    (airdrops, incentives, ecosystem growth).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Team & Employees:</strong> 21.266% allocated to team members and future employees, 4-year
                    vesting.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Investors:</strong> 18.044% allocated to investors, 4-year vesting.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Advisors:</strong> 0.69% allocated to advisors, 4-year vesting.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Deflationary:</strong> Regular token burns, including annual midsummer burns, reduce supply
                    over time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Transparency:</strong> All token movements and burns are visible on the Solana blockchain.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-2xl font-light text-gray-900 sm:text-3xl dark:text-white">Explore €BACH Token</h2>
            <p className="mx-auto mb-6 max-w-2xl text-base text-gray-500 sm:mb-8 sm:text-lg dark:text-gray-400">
              View the token on Solana blockchain or learn more about our platform and community.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="https://solscan.io/token/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:w-auto dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                View on Solscan
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <Link
                href="/about"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
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
