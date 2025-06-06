"use client";
import { useRouter } from "next/navigation"
import React from "react"

const WHITEPAPER_URL =
  "https://docs.google.com/document/d/1bJ1IuGPzM0ls3Bp8V5MGwnj5te1Y3nQBcfgyxke8Yks/edit?usp=sharing"

export default function WhitepaperPage() {
  const router = useRouter();
  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e5e9f0 0%, #d8dee9 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          color: "#2e3440",
          padding: "2rem",
        }}
      >
        <button
          onClick={() => router.push("/")}
          style={{
            position: "absolute",
            left: 32,
            top: 32,
            background: "#eceff4",
            color: "#4c566a",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 2px 8px 0 #4c566a11",
            transition: "background 0.2s",
            zIndex: 10,
          }}
        >
          ← Back
        </button>
        <div
          style={{
            background: "#eceff4cc",
            borderRadius: "1.5rem",
            boxShadow: "0 4px 24px 0 #4c566a22",
            padding: "2.5rem 2rem",
            maxWidth: 700,
            width: "100%",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem", color: "#bf616a" }}>
            This is a work-in-progress whitepaper.
          </h3>
          <a
            href={WHITEPAPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              background: "#5e81ac",
              color: "#eceff4",
              borderRadius: "0.75rem",
              fontWeight: 600,
              textDecoration: "none",
              marginBottom: "2.5rem",
              transition: "background 0.2s",
            }}
          >
            View the whitepaper and contribute
          </a>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, margin: "2rem 0 1rem 0" }}>
            BACH Money
          </h1>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1.5rem", color: "#4c566a" }}>
            A decentralized stablecoin platform.
          </h2>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1.5rem", color: "#4c566a" }}>
            Abstract
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#4c566a", marginBottom: "1.5rem", fontWeight: 400, lineHeight: 1.7 }}>
            We present Bach Money, a decentralized crypto stablecoin platform powered by the Solana blockchain. Over
            the short history of cryptocurrency, we have seen that its price volatility prevents mass adoption. It
            makes it hard to plan a budget, pay for necessities, and perform daily financial activities. Stablecoins
            like USDS, USDC, and EURC, among others, are the answer to mass adoption.
          </p>
          <p style={{ fontSize: "1.1rem", color: "#4c566a", marginBottom: "1.5rem", fontWeight: 400, lineHeight: 1.7 }}>
            However, crypto's original purpose, some of them are self-custody and decentralization, is hampered by the
            fact that most stablecoins in the market are centralized. Bach Money's mission is to build a decentralized
            stablecoin platform to track real-world commodity prices, such as gold, silver, the US dollar, the Euro,
            and other major Fiat currencies, through an overcollateralized debt position.
          </p>
          <p style={{ fontSize: "1.1rem", color: "#4c566a", marginBottom: "1.5rem", fontWeight: 400, lineHeight: 1.7 }}>
            The $BACH token acts as the community's government token, allowing it to vote on proposals, decide which
            real-world assets to track, and govern itself. The non-profit foundation will act as a bootstrapping tool
            for the decentralized autonomous organization (DAO) and use native Solana governance programs. The
            foundation will be registered in the Swedish juridical system as ideell förening. Its main activities are
            related to culture, science, and education in Sweden and Indonesia, which are its pilot main activities
            territories. The foundation will use the Pareto principle to maintain the budget. The foundation will
            carry business opportunities to fund its activities. The fields will be information technology, the music
            industry, and artificial intelligence, among other things.
          </p>
        </div>
        <footer style={{ marginTop: "2.5rem", color: "#4c566a", fontSize: "0.95rem", padding: "0 1rem" }}>
          Powered by The Stable Foundation &mdash; Solana Blockchain
        </footer>
      </main>
    </>
  )
}
