import { Metadata } from "next"

import Footer from "components/Layout/Footer"
import TimelineView from "components/Timeline"
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
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              BACH Money
            </h1>
            <h2 className="mb-4 text-2xl">A decentralized stablecoin platform.</h2>
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
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto mt-6 flex max-w-(--breakpoint-xl) flex-col items-center justify-center px-4 text-center lg:px-6">
          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            €BACH token is a <span className="font-bold text-red-600 italic">fixed-supply deflationary</span> governance
            token of The Stable Foundation (the DAO). The DAO uses it to{" "}
            <span className="font-bold text-red-600 italic">vote on proposals</span> and to participate in the DAO's
            decision-making process.
          </p>
        </div>
        <div className="mx-auto mt-6 flex max-w-(--breakpoint-xl) flex-col items-center justify-center px-4 text-center lg:px-6">
          <TimelineView />
        </div>
      </section>
      <section className="bg-red-400 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="my-10 flex flex-col items-center justify-center text-center">
            <h3 className="mb-2 text-xl font-bold dark:text-white">Disclaimer</h3>
            <p className="my-1">
              This is not financial advice. The information provided on this website is for informational purposes only.
              Always do your own research and never invest more than you can afford to lose. Crypto investments are
              highly volatile and risky.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
