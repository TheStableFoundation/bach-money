import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="gap-6 md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://bach.money/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bach Money</span>
            </a>
            <p className="mt-6">We love open source ❤️</p>
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
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
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
              href="https://discord.gg/7wm5fzF6"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
