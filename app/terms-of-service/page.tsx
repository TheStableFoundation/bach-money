import { Metadata } from "next"
import Link from "next/link"
import Footer from "../../components/Layout/Footer"

export const metadata: Metadata = {
  title: "Terms of Service | NotWallet Crypto by The Stable Foundation",
  description:
    "Read the terms of service for NotWallet Crypto, a non-custodial stablecoin crypto wallet built on Solana. Understand your rights and responsibilities.",
  openGraph: {
    title: "Terms of Service | NotWallet Crypto by The Stable Foundation",
    description:
      "Read the terms of service for NotWallet Crypto, a non-custodial stablecoin crypto wallet built on Solana. Understand your rights and responsibilities.",
    url: "https://bach.money/terms-of-service",
    type: "website",
    images: [
      {
        url: "https://bach.money/app-icon-v2.svg",
        width: 1024,
        height: 1024,
        alt: "BACH Money Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | NotWallet Crypto by The Stable Foundation",
    description:
      "Read the terms of service for NotWallet Crypto, a non-custodial stablecoin crypto wallet built on Solana. Understand your rights and responsibilities.",
    images: ["https://bach.money/app-icon-v2.svg"],
  },
}

export default function TermsOfServicePage() {
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
                Legal Agreement
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:mb-8 sm:text-5xl md:text-6xl dark:text-white">
              Terms of Service
              <span className="mt-1 block text-3xl font-extralight text-gray-500 sm:mt-2 sm:text-4xl md:text-5xl dark:text-gray-400">
                for NotWallet Crypto
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed font-light text-gray-600 sm:text-xl md:text-2xl dark:text-gray-300">
              Please read these terms carefully before using our non-custodial wallet application.
            </p>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 dark:border-gray-700 dark:bg-gray-800/50">
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                <strong>Effective Date:</strong> {new Date().getFullYear()}-01-01
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                These Terms of Service govern your use of <strong>NotWallet Crypto</strong>, a non-custodial
                cryptocurrency wallet application developed by The Stable Foundation for the Solana blockchain. By using
                NotWallet Crypto, you agree to these terms.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  By downloading, installing, or using NotWallet Crypto, you acknowledge that you have read, understood,
                  and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use
                  the application.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">2. Non-Custodial Nature</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  NotWallet Crypto is a <strong>non-custodial</strong> wallet. This means:
                </p>
                <ul className="mt-4 space-y-2 text-lg text-gray-600 dark:text-gray-300">
                  <li>• You have complete control and responsibility for your private keys and seed phrases</li>
                  <li>• We do not store, have access to, or can recover your private keys</li>
                  <li>• You are solely responsible for backing up and securing your wallet</li>
                  <li>• Lost private keys or seed phrases cannot be recovered by The Stable Foundation</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">3. User Responsibilities</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  As a user of NotWallet Crypto, you are responsible for:
                </p>
                <ul className="mt-4 space-y-2 text-lg text-gray-600 dark:text-gray-300">
                  <li>• Securing your device and wallet credentials</li>
                  <li>• Verifying all transaction details before confirmation</li>
                  <li>• Complying with all applicable laws and regulations in your jurisdiction</li>
                  <li>• Understanding the risks associated with cryptocurrency transactions</li>
                  <li>• Keeping your app updated to the latest version</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">4. Prohibited Uses</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">You may not use NotWallet Crypto for:</p>
                <ul className="mt-4 space-y-2 text-lg text-gray-600 dark:text-gray-300">
                  <li>• Any illegal activities or transactions</li>
                  <li>• Money laundering, terrorist financing, or other illicit financial activities</li>
                  <li>• Violating any applicable laws or regulations</li>
                  <li>• Attempting to hack, reverse engineer, or compromise the application</li>
                  <li>• Creating multiple accounts to circumvent restrictions</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">5. Risks and Disclaimers</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Cryptocurrency transactions involve significant risks, including but not limited to:
                </p>
                <ul className="mt-4 space-y-2 text-lg text-gray-600 dark:text-gray-300">
                  <li>• Volatile market prices and potential loss of value</li>
                  <li>• Irreversible transactions</li>
                  <li>• Network congestion and failed transactions</li>
                  <li>• Smart contract vulnerabilities</li>
                  <li>• Regulatory changes that may affect cryptocurrency use</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">6. Limitation of Liability</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  The Stable Foundation shall not be liable for any direct, indirect, incidental, special, or
                  consequential damages resulting from your use of NotWallet Crypto, including but not limited to loss
                  of funds, lost profits, or loss of data. Your use of the application is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">7. Age Restrictions</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  You must be at least 18 years old to use NotWallet Crypto. By using the application, you represent and
                  warrant that you are of legal age to form a binding contract.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">8. Updates and Modifications</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We may update these Terms of Service from time to time. Any changes will be posted on this page with
                  an updated effective date. Your continued use of NotWallet Crypto after any modifications constitutes
                  acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">9. Termination</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  You may stop using NotWallet Crypto at any time by deleting the application from your device. These
                  terms will remain in effect regarding your prior use of the application.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">10. Governing Law</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction
                  where The Stable Foundation is incorporated, without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">11. Contact Information</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a
                    href="mailto:legal@bach.money"
                    className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    legal@bach.money
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} The Stable Foundation. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key principles section */}
      <section className="border-t border-gray-100 py-16 sm:py-20 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="mb-12 text-2xl font-light text-gray-900 sm:mb-16 sm:text-3xl md:text-4xl dark:text-white">
              Key Principles
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
                  Your Responsibility
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  You control your private keys and are responsible for securing your wallet.
                </p>
              </div>

              <div className="group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Legal Compliance
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  You must comply with all applicable laws and regulations in your jurisdiction.
                </p>
              </div>

              <div className="group text-center sm:col-span-2 lg:col-span-1">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Use at Your Own Risk
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Cryptocurrency involves risks. Understand them before using the wallet.
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
