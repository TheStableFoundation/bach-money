"use client"

import HomePage from "../components/HomePage"

export const metadata = {
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

export default function Page() {
  return <HomePage />
}
