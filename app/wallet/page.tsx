import Link from "next/link"
import Footer from "../../components/Layout/Footer"

export default function WalletPage() {
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
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 sm:text-sm dark:border-blue-800/30 dark:bg-blue-900/20 dark:text-blue-400">
                Non-custodial Wallet
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:mb-8 sm:text-5xl md:text-6xl dark:text-white">
              Not Wallet
              <span className="mt-1 block text-3xl font-extralight text-gray-500 sm:mt-2 sm:text-4xl md:text-5xl dark:text-gray-400">
                for Solana
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed font-light text-gray-600 sm:text-xl md:text-2xl dark:text-gray-300">
              A minimal, non-custodial wallet for stablecoins on Solana. Your keys, your coins.
            </p>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="mb-12 text-2xl font-light text-gray-900 sm:mb-16 sm:text-3xl md:text-4xl dark:text-white">
              Why Not Wallet?
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-16">
              <div className="group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Non-Custodial
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Your private keys never leave your device. Full control over your funds.
                </p>
              </div>

              <div className="group text-center">
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
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Solana Native
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Built specifically for Solana blockchain with optimized performance.
                </p>
              </div>

              <div className="group text-center sm:col-span-2 lg:col-span-1">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Stablecoin Focus
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Optimized interface for stablecoin transactions and management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download section */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-2xl font-light text-gray-900 sm:text-3xl dark:text-white">Get Not Wallet</h2>
            <p className="mx-auto mb-6 max-w-2xl text-base text-gray-500 sm:mb-8 sm:text-lg dark:text-gray-400">
              Available on iOS TestFlight for public beta testing, or build from source on GitHub.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="https://testflight.apple.com/join/UpvJyCQY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:w-auto dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Try Public Beta (iOS)
              </a>
              <a
                href="https://github.com/TheStableFoundation/not"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Open source section */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="mb-12 text-2xl font-light text-gray-900 sm:mb-16 sm:text-3xl md:text-4xl dark:text-white">
              Open Source & Transparent
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-16">
              <div className="group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Open Source
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Full source code available on GitHub for auditing and contributions.
                </p>
              </div>

              <div className="group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Privacy First
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  No tracking, no analytics, no data collection. Your privacy is protected.
                </p>
              </div>

              <div className="group text-center sm:col-span-2 lg:col-span-1">
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
                  Community Driven
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Built by the community, for the community. Join us in building the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
