import Link from "next/link"
import Footer from "../../components/Layout/Footer"

const WHITEPAPER_URL =
  "https://docs.google.com/document/d/1bJ1IuGPzM0ls3Bp8V5MGwnj5te1Y3nQBcfgyxke8Yks/edit?usp=sharing"

export default function WhitepaperPage() {
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
              <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 sm:text-sm dark:border-orange-800/30 dark:bg-orange-900/20 dark:text-orange-400">
                🚧 Work in Progress
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:mb-8 sm:text-5xl md:text-6xl dark:text-white">
              BACH Money
              <span className="mt-1 block text-3xl font-extralight text-gray-500 sm:mt-2 sm:text-4xl md:text-5xl dark:text-gray-400">
                Whitepaper
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed font-light text-gray-600 sm:text-xl md:text-2xl dark:text-gray-300">
              A comprehensive overview of our decentralized stablecoin platform on Solana.
            </p>

            <div className="mb-8">
              <a
                href={WHITEPAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:w-auto dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                View & Contribute
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract section */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="mb-8 text-2xl font-light text-gray-900 sm:text-3xl md:text-4xl dark:text-white">Abstract</h2>

            <div className="prose prose-gray dark:prose-invert max-w-none text-left">
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  We present Bach Money, a decentralized crypto stablecoin platform powered by the Solana blockchain.
                  Over the short history of cryptocurrency, we have seen that its price volatility prevents mass
                  adoption. It makes it hard to plan a budget, pay for necessities, and perform daily financial
                  activities. Stablecoins like USDS, USDC, and EURC, among others, are the answer to mass adoption.
                </p>

                <p>
                  However, crypto's original purpose, some of them are self-custody and decentralization, is hampered by
                  the fact that most stablecoins in the market are centralized. Bach Money's mission is to build a
                  decentralized stablecoin platform to track real-world commodity prices, such as gold, silver, the US
                  dollar, the Euro, and other major Fiat currencies, through an overcollateralized debt position.
                </p>

                <p>
                  The $BACH token acts as the community's government token, allowing it to vote on proposals, decide
                  which real-world assets to track, and govern itself. The non-profit foundation will act as a
                  bootstrapping tool for the decentralized autonomous organization (DAO) and use native Solana
                  governance programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation section */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="mb-8 text-2xl font-light text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              The Stable Foundation
            </h2>

            <div className="prose prose-gray dark:prose-invert max-w-none text-left">
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  The foundation will be registered in the Swedish juridical system as ideell förening. Its main
                  activities are related to culture, science, and education in Sweden and Indonesia, which are its pilot
                  main activities territories. The foundation will use the Pareto principle to maintain the budget.
                </p>

                <p>
                  The foundation will carry business opportunities to fund its activities. The fields will be
                  information technology, the music industry, and artificial intelligence, among other things.
                </p>
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
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Decentralized
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Built on Solana with community governance and transparency at its core.
                </p>
              </div>

              <div className="group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Multi-Asset
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Track multiple real-world assets including fiat currencies and commodities.
                </p>
              </div>

              <div className="group text-center sm:col-span-2 lg:col-span-1">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Overcollateralized
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Secured by overcollateralized debt positions for maximum stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-2xl font-light text-gray-900 sm:text-3xl dark:text-white">Join the Development</h2>
            <p className="mx-auto mb-6 max-w-2xl text-base text-gray-500 sm:mb-8 sm:text-lg dark:text-gray-400">
              This whitepaper is a living document. Help us shape the future of decentralized stablecoins by
              contributing your ideas and feedback.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={WHITEPAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:w-auto dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                View & Contribute
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
