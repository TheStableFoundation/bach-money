"use client";
import React from "react";
import TimelineView from "components/Timeline";
import { useRouter } from "next/navigation";

export default function TimelinePage() {
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
      <div style={{ marginTop: "3rem", marginBottom: "2rem", padding: "1rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "2rem", textAlign: "center" }}>
          BACH Money Timeline
        </h1>
        <TimelineView />
      </div>
      <footer style={{ marginTop: "2.5rem", color: "#4c566a", fontSize: "0.95rem", padding: "0 1rem", textAlign: "center" }}>
        Powered by The Stable Foundation &mdash; Solana Blockchain
      </footer>
    </main>
  );
}
