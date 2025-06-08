"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {
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
        <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "1.5rem" }}>
          About The Stable Foundation
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#4c566a", marginBottom: "1.5rem" }}>
          The Stable Foundation is a decentralized autonomous organization (DAO) building a next-generation stablecoin platform on the Solana blockchain. Our mission is to empower communities with transparent, decentralized, and accessible financial tools, starting with stablecoins that track real-world assets.
        </p>
        <div
          style={{
            background: "#fef9c3",
            color: "#92400e",
            borderRadius: "0.75rem",
            padding: "1rem 1.5rem",
            fontWeight: 600,
            margin: "0 auto 2rem auto",
            display: "inline-block",
            fontSize: "1.05rem",
          }}
        >
          TL;DR: We’re building a Consensys-like company on Solana, from the EU.
        </div>
        <p style={{ fontSize: "1.05rem", color: "#4c566a", marginBottom: "1.2rem" }}>
          We believe in open source, community-driven governance, and the power of decentralized finance to create a fairer, more inclusive global economy. Our platform is designed to be transparent, secure, and adaptable, supporting a range of stablecoins and DeFi applications.
        </p>
        <p style={{ fontSize: "1.05rem", color: "#4c566a" }}>
          The Stable Foundation is headquartered in the European Union, with a focus on regulatory compliance, innovation, and collaboration across borders. Join us as we build the future of decentralized finance on Solana.
        </p>
      </div>
      <footer style={{ marginTop: "2.5rem", color: "#4c566a", fontSize: "0.95rem", padding: "0 1rem" }}>
        Powered by The Stable Foundation &mdash; Solana Blockchain
      </footer>
    </main>
  );
}
