"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React from "react";

// Add SEO meta tags using next/head for client-side rendered page

export default function AirdropPage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>BACH Token Airdrop | Not Wallet Non-custodial Stablecoin Crypto Wallet</title>
        <meta
          name="description"
          content="Claim up to 10.99 BACH tokens airdropped to your Not Wallet non-custodial stablecoin crypto wallet address. Register up to 5 Solana public keys and verify ownership via Not Wallet."
        />
        <meta
          name="keywords"
          content="BACH token, airdrop, Not Wallet, Solana, stablecoin, crypto wallet, non-custodial, claim, verification, public key, The Stable Foundation"
        />
        <link rel="canonical" href="https://bach.money/airdrop" />
        <meta property="og:title" content="BACH Token Airdrop | Not Wallet Non-custodial Stablecoin Crypto Wallet" />
        <meta property="og:description" content="Claim up to 10.99 BACH tokens airdropped to your Not Wallet non-custodial stablecoin crypto wallet address. Register up to 5 Solana public keys and verify ownership via Not Wallet." />
        <meta property="og:url" content="https://bach.money/airdrop" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://station.jup.ag/assets/images/full-routing-banner-98ca8b117cc86aa7d4fadf45b56d5a7c.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BACH Token Airdrop | Not Wallet Non-custodial Stablecoin Crypto Wallet" />
        <meta name="twitter:description" content="Claim up to 10.99 BACH tokens airdropped to your Not Wallet non-custodial stablecoin crypto wallet address. Register up to 5 Solana public keys and verify ownership via Not Wallet." />
        <meta name="twitter:image" content="https://station.jup.ag/assets/images/full-routing-banner-98ca8b117cc86aa7d4fadf45b56d5a7c.png" />
      </Head>
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
            maxWidth: 500,
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1.5rem" }}>
            BACH Token Airdrop
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#4c566a", marginBottom: "1.5rem" }}>
            Claim up to <span style={{ fontWeight: 700, color: "#5e81ac" }}>10.99 BACH</span> tokens airdropped directly to your{" "}
            <a href="/wallet" style={{ color: "#5e81ac", textDecoration: "underline", fontWeight: 600 }}>
              Not Wallet non-custodial stablecoin crypto wallet
            </a>{" "}
            address!
          </p>
          <ul style={{ textAlign: "left", margin: "0 auto 1.5rem auto", maxWidth: 400, color: "#4c566a", fontSize: "1.05rem", lineHeight: 1.7 }}>
            <li>
              • Each eligible{" "}
              <a href="/wallet" style={{ color: "#5e81ac", textDecoration: "underline", fontWeight: 600 }}>
                Not Wallet
              </a>{" "}
              address can receive up to <b>10.99 BACH</b> tokens.
            </li>
            <li>
              • You may register up to <b>5 unique Solana public keys</b> (wallet addresses) for the airdrop.
            </li>
            <li>
              • Each public key must sign a verification message from within the{" "}
              <a href="/wallet" style={{ color: "#5e81ac", textDecoration: "underline", fontWeight: 600 }}>
                Not Wallet
              </a>{" "}
              app to prove ownership.
            </li>
            <li>
              • Only the first 5 successfully verified public keys per user are eligible.
            </li>
          </ul>
          <p style={{ color: "#bf616a", fontWeight: 500, marginBottom: "1.5rem" }}>
            Make sure to use your{" "}
            <a href="/wallet" style={{ color: "#5e81ac", textDecoration: "underline", fontWeight: 600 }}>
              Not Wallet
            </a>{" "}
            to sign the verification message for each address!
          </p>
          <p style={{ fontSize: "0.95rem", color: "#4c566a" }}>
            For more details and to claim your airdrop, open the{" "}
            <a href="/wallet" style={{ color: "#5e81ac", textDecoration: "underline", fontWeight: 600 }}>
              Not Wallet
            </a>{" "}
            app and follow the instructions.
          </p>
        </div>
        <footer style={{ marginTop: "2.5rem", color: "#4c566a", fontSize: "0.95rem", padding: "0 1rem" }}>
          Powered by The Stable Foundation &mdash; Solana Blockchain
        </footer>
      </main>
    </>
  );
}
