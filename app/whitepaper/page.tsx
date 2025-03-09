import Link from "next/link"
import React from "react"

const WhitepaperPage: React.FC = () => {
  return (
    <>
      <section className="bg-red-500 dark:bg-gray-900">
        <div className="mx-auto max-w-(--breakpoint-xl) px-2 py-2">
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="mb-2 text-xl font-bold dark:text-white">This is work-in-progress whitepaper.</h3>
            <Link href={"https://docs.google.com/document/d/1bJ1IuGPzM0ls3Bp8V5MGwnj5te1Y3nQBcfgyxke8Yks/edit?usp=sharing"} target="_blank">
              View the whitepaper and contribute
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              BACH Money
            </h1>
            <h2 className="text-2xlmd:text-lg mb-6 max-w-2xl lg:mb-8 lg:text-xl dark:text-gray-400">
              A decentralized stablecoin platform.
            </h2>
            <h2 className="text-2xlmd:text-lg mb-6 max-w-2xl lg:mb-8 lg:text-xl dark:text-gray-400">Abstract</h2>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              We present Bach Money, a decentralized crypto stablecoin platform powered by the Solana blockchain. Over
              the short history of cryptocurrency, we have seen that its price volatility prevents mass adoption. It
              makes it hard to plan a budget, pay for necessities, and perform daily financial activities. Stablecoins
              like USDS, USDC, and EURC, among others, are the answer to mass adoption.
            </p>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              However, crypto's original purpose, some of them are self-custody and decentralization, is hampered by the
              fact that most stablecoins in the market are centralized. Bach Money's mission is to build a decentralized
              stablecoin platform to track real-world commodity prices, such as gold, silver, the US dollar, the Euro,
              and other major Fiat currencies, through an overcollateralized debt position.
            </p>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              The $BACH token acts as the community's government token, allowing it to vote on proposals, decide which
              real-world assets to track, and govern itself. The non-profit foundation will act as a bootstrapping tool
              for the decentralized autonomous organization (DAO) and use native Solana governance programs. The
              foundation will be registered in the Sweish juridical system as ideeel foreningen. Its main activities are
              related to culture, science, and education in Sweden and Indonesia, which are its pilot main activities
              territories. The foundation will use the Pareto principle to maintain the budget. The foundation will
              carry business opportunities to fund its activities. The fields will be information technology, the music
              industry, and artificial intelligence, among other things.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhitepaperPage
