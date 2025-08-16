"use client"

export default function PhoneContact() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 dark:bg-gray-900/50">
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </div>
      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Call Us</h3>
      <p className="mb-6 text-gray-600 dark:text-gray-300">Speak directly with our team during business hours (CET)</p>
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900/50">
        <button
          onClick={() => {
            const countryCode = "+46"
            const number = "728538288"
            window.location.href = `tel:${countryCode}${number}`
          }}
          className="font-mono text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          Click to reveal phone
        </button>
      </div>
    </div>
  )
}
