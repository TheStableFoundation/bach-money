import Link from "next/link"
import Footer from "../../components/Layout/Footer"

export default function PrivacyPolicyPage() {
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
                Privacy & Security
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:mb-8 sm:text-5xl md:text-6xl dark:text-white">
              Privacy Policy
              <span className="mt-1 block text-3xl font-extralight text-gray-500 sm:mt-2 sm:text-4xl md:text-5xl dark:text-gray-400">
                for Not Wallet
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed font-light text-gray-600 sm:text-xl md:text-2xl dark:text-gray-300">
              Your privacy matters. Learn how we protect your data in our non-custodial wallet.
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
                <strong>Not Wallet</strong> is a non-custodial stablecoin crypto wallet built on the Solana blockchain
                by The Stable Foundation. We are committed to protecting your privacy and ensuring transparency about
                how your information is handled.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">
                  1. No Personal Data Collection
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Not Wallet does <strong>not</strong> collect, store, or process any personal data, such as your name,
                  email address, or phone number. All wallet keys and sensitive information remain on your device and
                  are never transmitted to our servers.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">2. Blockchain Data</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  All transactions and wallet activity are recorded on the public Solana blockchain. This data is
                  publicly accessible and not controlled by Not Wallet or The Stable Foundation.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">3. Analytics & Cookies</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Not Wallet does not use cookies or analytics tools to track your activity. We do not profile users or
                  share any data with third parties.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">4. Third-Party Services</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  If you interact with third-party services (such as dApps or Solana explorers), their privacy policies
                  apply. We encourage you to review those policies before using such services.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">5. Changes to This Policy</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                  updated effective date.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-light text-gray-900 dark:text-white">6. Contact</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  For questions or concerns about this Privacy Policy, please contact us at{" "}
                  <a
                    href="mailto:info@bach.money"
                    className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    info@bach.money
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
              Our Privacy Principles
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
                  Your Keys, Your Data
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  All sensitive information stays on your device, never transmitted to our servers.
                </p>
              </div>

              <div className="group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  No Tracking
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  We don't use cookies, analytics, or any tracking mechanisms.
                </p>
              </div>

              <div className="group text-center sm:col-span-2 lg:col-span-1">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 transition-colors group-hover:bg-gray-100 sm:mb-6 sm:h-16 sm:w-16 dark:bg-gray-900/50 dark:group-hover:bg-gray-800/50">
                  <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Full Transparency
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base dark:text-gray-400">
                  Open source code means you can verify our privacy practices.
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
