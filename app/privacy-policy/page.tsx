"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function PrivacyPolicyPage() {
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
          textAlign: "left",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", textAlign: "center" }}>
          Privacy Policy for Not Wallet
        </h1>
        <p style={{ marginBottom: "1.2rem" }}>
          <b>Effective Date:</b> {new Date().getFullYear()}-01-01
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          <b>Not Wallet</b> is a non-custodial stablecoin crypto wallet built on the Solana blockchain by The Stable Foundation. We are committed to protecting your privacy and ensuring transparency about how your information is handled.
        </p>
        <h2 style={{ fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.7rem" }}>1. No Personal Data Collection</h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Not Wallet does <b>not</b> collect, store, or process any personal data, such as your name, email address, or phone number. All wallet keys and sensitive information remain on your device and are never transmitted to our servers.
        </p>
        <h2 style={{ fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.7rem" }}>2. Blockchain Data</h2>
        <p style={{ marginBottom: "1.2rem" }}>
          All transactions and wallet activity are recorded on the public Solana blockchain. This data is publicly accessible and not controlled by Not Wallet or The Stable Foundation.
        </p>
        <h2 style={{ fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.7rem" }}>3. Analytics & Cookies</h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Not Wallet does not use cookies or analytics tools to track your activity. We do not profile users or share any data with third parties.
        </p>
        <h2 style={{ fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.7rem" }}>4. Third-Party Services</h2>
        <p style={{ marginBottom: "1.2rem" }}>
          If you interact with third-party services (such as dApps or Solana explorers), their privacy policies apply. We encourage you to review those policies before using such services.
        </p>
        <h2 style={{ fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.7rem" }}>5. Changes to This Policy</h2>
        <p style={{ marginBottom: "1.2rem" }}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>
        <h2 style={{ fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.7rem" }}>6. Contact</h2>
        <p style={{ marginBottom: "1.2rem" }}>
          For questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@bach.money" style={{ color: "#5e81ac", textDecoration: "underline" }}>info@bach.money</a>.
        </p>
        <p style={{ marginTop: "2rem", color: "#4c566a", fontSize: "0.95rem", textAlign: "center" }}>
          &copy; {new Date().getFullYear()} The Stable Foundation. All rights reserved.
        </p>
      </div>
      <footer style={{ marginTop: "2.5rem", color: "#4c566a", fontSize: "0.95rem", padding: "0 1rem", textAlign: "center" }}>
        Powered by The Stable Foundation &mdash; Solana Blockchain
      </footer>
    </main>
  );
}
