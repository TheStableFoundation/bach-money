import { Metadata } from "next"
import Link from "next/link"
import Footer from "../../components/Layout/Footer"

export const metadata: Metadata = {
  title: "BACH Token Airdrop | Not Wallet Non-custodial Stablecoin Crypto Wallet",
  description:
    "Claim up to 10.99 BACH tokens airdropped to your Not Wallet non-custodial stablecoin crypto wallet address. Register up to 5 Solana public keys and verify ownership via Not Wallet.",
  keywords:
    "BACH token, airdrop, Not Wallet, Solana, stablecoin, crypto wallet, non-custodial, claim, verification, public key, The Stable Foundation",
  openGraph: {
    title: "BACH Token Airdrop | Not Wallet Non-custodial Stablecoin Crypto Wallet",
    description:
      "Claim up to 10.99 BACH tokens airdropped to your Not Wallet non-custodial stablecoin crypto wallet address. Register up to 5 Solana public keys and verify ownership via Not Wallet.",
    url: "https://bach.money/airdrop",
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
    title: "BACH Token Airdrop | Not Wallet Non-custodial Stablecoin Crypto Wallet",
    description:
      "Claim up to 10.99 BACH tokens airdropped to your Not Wallet non-custodial stablecoin crypto wallet address. Register up to 5 Solana public keys and verify ownership via Not Wallet.",
    images: ["https://station.jup.ag/assets/images/full-routing-banner-98ca8b117cc86aa7d4fadf45b56d5a7c.png"],
  },
}

export default function AirdropPage() {
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
              <span className="inline-block rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700 sm:text-sm dark:border-green-800/30 dark:bg-green-900/20 dark:text-green-400">
                🎉 Active Airdrop
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:mb-8 sm:text-5xl md:text-6xl dark:text-white">
              BACH Token
              <span className="mt-1 block text-3xl font-extralight text-gray-500 sm:mt-2 sm:text-4xl md:text-5xl dark:text-gray-400">
                Airdrop
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed font-light text-gray-600 sm:text-xl md:text-2xl dark:text-gray-300">
              Claim up to <span className="font-medium text-blue-600 dark:text-blue-400">10.99 BACH</span> tokens
              directly to your{" "}
              <Link
                href="/wallet"
                className="border-b border-dotted border-blue-300 font-medium text-blue-600 transition-colors hover:text-blue-700 dark:border-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Not Wallet
              </Link>{" "}
              address.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements section */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="mb-8 text-2xl font-light text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              How to Claim
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-blue-900/20 dark:text-blue-400 dark:group-hover:bg-blue-900/30">
                  <span className="text-xl font-bold sm:text-2xl">1</span>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">Download</h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Get the{" "}
                  <Link
                    href="/wallet"
                    className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Not Wallet
                  </Link>{" "}
                  app
                </p>
              </div>

              <div className="group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition-colors group-hover:bg-green-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-green-900/20 dark:text-green-400 dark:group-hover:bg-green-900/30">
                  <span className="text-xl font-bold sm:text-2xl">2</span>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">Register</h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Add up to 5 unique Solana addresses
                </p>
              </div>

              <div className="group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-orange-900/20 dark:text-orange-400 dark:group-hover:bg-orange-900/30">
                  <span className="text-xl font-bold sm:text-2xl">3</span>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">Verify</h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Sign verification message for each address
                </p>
              </div>

              <div className="group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-colors group-hover:bg-purple-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-purple-900/20 dark:text-purple-400 dark:group-hover:bg-purple-900/30">
                  <span className="text-xl font-bold sm:text-2xl">4</span>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">Claim</h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Receive your BACH tokens
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
              Airdrop Details
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
                    Each eligible{" "}
                    <Link
                      href="/wallet"
                      className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Not Wallet
                    </Link>{" "}
                    address can receive up to <strong>10.99 BACH</strong> tokens
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
                    You may register up to <strong>5 unique Solana public keys</strong> (wallet addresses) for the
                    airdrop
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
                    Each public key must sign a verification message from within the{" "}
                    <Link
                      href="/wallet"
                      className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Not Wallet
                    </Link>{" "}
                    app to prove ownership
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
                  <span>Only the first 5 successfully verified public keys per user are eligible</span>
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
            <h2 className="mb-4 text-2xl font-light text-gray-900 sm:text-3xl dark:text-white">Ready to Claim?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-base text-gray-500 sm:mb-8 sm:text-lg dark:text-gray-400">
              Make sure to use your{" "}
              <Link
                href="/wallet"
                className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Not Wallet
              </Link>{" "}
              to sign the verification message for each address!
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/wallet"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:w-auto dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                Get Not Wallet
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </Link>
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
