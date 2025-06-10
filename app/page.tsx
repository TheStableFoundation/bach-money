import { Metadata } from "next"

import Link from "next/link"
import Footer from "components/Layout/Footer"
import { LP_GRID_ITEMS } from "lp-items"

export const metadata: Metadata = {
  title: "BACH Money - A decentralized stablecoin platform",
  description:
    "The Stable Foundation is a decentralized autonomous organization (DAO) built on the Solana blockchain, designed to revolutionize the global music industry and its derivatives through community-driven governance, transparency, and innovation.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://bach.money/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://station.jup.ag/assets/images/full-routing-banner-98ca8b117cc86aa7d4fadf45b56d5a7c.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-yellow-100 border-b-2 border-yellow-300 dark:bg-yellow-900">
        <div className="mx-auto flex max-w-screen-xl items-center justify-center px-4 py-4 text-center">
          <Link
            href="/airdrop"
            className="inline-block rounded-lg bg-yellow-300 px-5 py-2 font-semibold text-yellow-900 shadow hover:bg-yellow-400 transition"
          >
            🎉 BACH Token Airdrop: Claim up to 10.99 BACH to your NotWallet! &rarr;
          </Link>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center flex flex-col items-center justify-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white text-center">
              BACH Money
            </h1>
            <h2 className="mb-4 text-2xl text-center">A decentralized stablecoin platform.</h2>
            <p className="text-center">
              Governed by{" "}
              <a
                href="https://solscan.io/token/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700 font-semibold"
              >
                €BACH token
              </a>
              , a{" "}
              <span className="font-bold text-red-600 italic underline">
                fixed-supply deflationary
              </span>{" "}
              governance token of The Stable Foundation (the DAO).
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex size-10 items-center justify-center rounded-full p-1.5 text-blue-700 lg:size-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 mb-16">
        <div className="mx-auto mt-6 flex max-w-(--breakpoint-xl) flex-col items-center justify-center px-4 text-center lg:px-6">
          <Link
            href="/timeline"
            className="inline-block rounded-lg bg-blue-100 px-5 py-2 font-semibold text-blue-900 shadow hover:bg-blue-200 transition"
          >
            📅 View the BACH Money Timeline
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
