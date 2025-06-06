"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function WalletPage() {
  const router = useRouter();
  return (
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
        padding: "2rem", // Added padding for main
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
          position: "relative",
          background: "#eceff4cc",
          borderRadius: "1.5rem",
          boxShadow: "0 4px 24px 0 #4c566a22",
          padding: "2.5rem 2rem",
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Solana Stablecoin Wallet
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#4c566a", marginBottom: "2rem" }}>
          A minimal, non-custodial wallet for stablecoins on Solana.<br />
          Your keys, your coins.
        </p>
        <a
          href="https://github.com/TheStableFoundation/not"
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
            transition: "background 0.2s",
          }}
        >
          View on GitHub
        </a>
      </div>
      <footer style={{ marginTop: "2.5rem", color: "#4c566a", fontSize: "0.95rem", padding: "0 1rem" }}>
        Powered by The Stable Foundation &mdash; Solana Blockchain
      </footer>
    </main>
  );
}
