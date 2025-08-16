"use client"

export default function EmailContact() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 dark:bg-gray-900/50">
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Email Us</h3>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        For general inquiries, support, or partnership opportunities
      </p>
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900/50">
        <button
          onClick={() => {
            const user = "info"
            const domain = "bach.money"
            window.location.href = `mailto:${user}@${domain}`
          }}
          className="font-mono text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          Click to reveal email
        </button>
      </div>
    </div>
  )
}
