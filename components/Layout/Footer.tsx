import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="gap-6 md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://bach.money/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bach Money</span>
            </a>
            <p className="mt-6">This is not financial advice. The information provided on this website is for informational purposes only.</p>
            <Link
              href="https://www.birdeye.so/token/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf"
              className="mr-3"
              target="_blank"
            >
              <Image
                src={"/birdeye/Birdeye-Logo_Black-full-logo-400x400.png"}
                width={100}
                height={100}
                alt="Birdeye Logo"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-2">
                  <Link href="/about">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/timeline">
                    Timeline
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/whitepaper">
                    Whitepaper <span className="text-xs text-red-400 dark:text-red-500">WIP</span>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="https://docs.bach.money/" target="_blank" rel="noopener noreferrer">
                    Documentation <span className="text-xs text-red-400 dark:text-red-500">WIP</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Ecosystem</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-2">
                  <Link href="/wallet" title="Not Wallet no-custodial Solana crypto stablecoin wallet">
                    Non-custodial Wallet <span className="text-xs text-red-400 dark:text-red-500">Beta</span>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="https://bachmoney-stats.5mb.app/" target="_blank" rel="noopener noreferrer">
                    Stats
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="https://app.bach.money/" target="_blank" rel="noopener noreferrer">
                    Launch dApp <span className="text-xs text-red-400 dark:text-red-500">WIP</span>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="https://api.musik88.com/login" target="_blank" rel="noopener noreferrer">
                    Universe API <span className="text-xs text-red-400 dark:text-red-500">Beta</span>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="https://musik88.com" target="_blank" rel="noopener noreferrer">
                    Universe UI <span className="text-xs text-red-400 dark:text-red-500">Beta</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 text-left block">
            © {new Date().getFullYear()} The Stable Foundation. Powered by{" "}
            <a
              href="https://smbcloud.xyz/"
              className="text-red-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              smbCloud
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex items-center gap-4 sm:mt-0 sm:justify-end w-full sm:w-auto">
            <span>We love open source ❤️</span>
            <a
              href="https://github.com/TheStableFoundation"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/company/thestablefoundation/about/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
