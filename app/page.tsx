import { Metadata } from "next"
import { Button } from "components/Button/Button"

import Footer from "components/Layout/Footer"
import { LP_GRID_ITEMS } from "lp-items"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "BACH Money - The BACH Protocol Foundation",
  description:
    "The BACH Protocol is a decentralized autonomous organization (DAO) built on the Solana blockchain, designed to revolutionize the global music industry and its derivatives through community-driven governance, transparency, and innovation.",
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
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              BACH Money
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              The BACH Money, governed by the BACH Protocol Foundation, is a decentralized autonomous organization (DAO)
              built on the Solana blockchain, designed to revolutionize the global music industry and its derivatives
              through community-driven governance, transparency, and innovation. By leveraging Solana's high-speed,
              low-cost infrastructure, BACH Protocol empowers fans, artists, and industry stakeholders to collaborate,
              create, and monetize music in a decentralized ecosystem.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6">
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
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6">
          <div className="flex gap-6 items-center justify-center text-center">
            <Link
              href="https://www.birdeye.so/token/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf"
              className="mr-3"
              target="_blank"
            >
              <Image src={"/birdeye/Birdeye-Logo_Black-full-logo-400x400.png"} width={200} height={200} alt="Birdeye Logo" />
            </Link>
            <Link href="https://jup.ag/tokens/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf" target="_blank">
              <Image src={"/jupiter/logo-with-text-bright.svg"} width={200} height={200} alt="Jupiter Logo" />
            </Link>

          </div>
        </div>
      </section>
      <section className="bg-red-500 dark:bg-gray-900">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="my-3.5">Always do your own research and never invest more than you can afford to lose.</p>
            <p className="my-3.5">Crypto investments are highly volatile and risky.</p>
            <p className="my-3.5">Not available for US/UK citizens.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
