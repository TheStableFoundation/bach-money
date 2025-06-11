"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function TokenomicsPage() {
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
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem" }}>
          €BACH Tokenomics
        </h1>
        <p style={{ fontSize: "1.15rem", color: "#4c566a", marginBottom: "1.5rem" }}>
          The €BACH token is the governance and utility token of The Stable Foundation DAO.
        </p>
        {/* Pie chart */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "2rem" }}>
          <svg
            width="220"
            height="220"
            viewBox="0 0 220 220"
            style={{ display: "block", aspectRatio: "1 / 1" }}
          >
            {/* Community 60% */}
            <circle
              r="100"
              cx="110"
              cy="110"
              fill="transparent"
              stroke="#a3be8c"
              strokeWidth="40"
              strokeDasharray={`${2 * Math.PI * 100 * 0.6} ${2 * Math.PI * 100 * 0.4}`}
              strokeDashoffset={0}
              transform="rotate(-90 110 110)"
            />
            {/* Team 21.266% */}
            <circle
              r="100"
              cx="110"
              cy="110"
              fill="transparent"
              stroke="#5e81ac"
              strokeWidth="40"
              strokeDasharray={`${2 * Math.PI * 100 * 0.21266} ${2 * Math.PI * 100 * (1 - 0.21266)}`}
              strokeDashoffset={-2 * Math.PI * 100 * 0.6}
              transform="rotate(-90 110 110)"
            />
            {/* Investors 18.044% */}
            <circle
              r="100"
              cx="110"
              cy="110"
              fill="transparent"
              stroke="#b48ead"
              strokeWidth="40"
              strokeDasharray={`${2 * Math.PI * 100 * 0.18044} ${2 * Math.PI * 100 * (1 - 0.18044)}`}
              strokeDashoffset={-2 * Math.PI * 100 * (0.6 + 0.21266)}
              transform="rotate(-90 110 110)"
            />
            {/* Advisors 0.69% */}
            <circle
              r="100"
              cx="110"
              cy="110"
              fill="transparent"
              stroke="#ebcb8b"
              strokeWidth="40"
              strokeDasharray={`${2 * Math.PI * 100 * 0.0069} ${2 * Math.PI * 100 * (1 - 0.0069)}`}
              strokeDashoffset={-2 * Math.PI * 100 * (0.6 + 0.21266 + 0.18044)}
              transform="rotate(-90 110 110)"
            />
            <text x="110" y="110" textAnchor="middle" dy="0.3em" fontSize="1.3rem" fill="#2e3440" fontWeight="bold">
              €BACH
            </text>
          </svg>
          <div style={{ display: "flex", gap: "2rem", marginTop: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ display: "inline-block", width: 18, height: 18, background: "#a3be8c", borderRadius: 4 }} />
              <span style={{ color: "#2e3440" }}>Community 60%</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ display: "inline-block", width: 18, height: 18, background: "#5e81ac", borderRadius: 4 }} />
              <span style={{ color: "#2e3440" }}>Team &amp; Employees 21.266%</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ display: "inline-block", width: 18, height: 18, background: "#b48ead", borderRadius: 4 }} />
              <span style={{ color: "#2e3440" }}>Investors 18.044%</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ display: "inline-block", width: 18, height: 18, background: "#ebcb8b", borderRadius: 4 }} />
              <span style={{ color: "#2e3440" }}>Advisors 0.69%</span>
            </div>
          </div>
        </div>
        <ul style={{ textAlign: "left", margin: "0 auto 1.5rem auto", maxWidth: 500, color: "#4c566a", fontSize: "1.05rem", lineHeight: 1.7 }}>
          <li>
            • <b>Pre-mine:</b> All tokens were minted at genesis and distributed to the DAO treasury and community.
          </li>
          <li>
            • <b>Fixed Supply:</b> 15,000,000 tokens (no inflation, deflationary via burns)
          </li>
          <li>
            • <b>Community Allocation:</b> 60% of the total supply is allocated for the community (airdrops, incentives, ecosystem growth).
          </li>
          <li>
            • <b>Team &amp; Employees:</b> 21.266% allocated to team members and future employees, 4-year vesting.
          </li>
          <li>
            • <b>Investors:</b> 18.044% allocated to investors, 4-year vesting.
          </li>
          <li>
            • <b>Advisors:</b> 0.69% allocated to advisors, 4-year vesting.
          </li>
          <li>
            • <b>Deflationary:</b> Regular token burns, including annual midsummer burns, reduce supply over time.
          </li>
          <li>
            • <b>Governance:</b> Used for voting on proposals, protocol upgrades, and treasury management.
          </li>
          <li>
            • <b>Utility:</b> Required for participation in airdrops, liquidity mining, and ecosystem incentives.
          </li>
          <li>
            • <b>Transparency:</b> All token movements and burns are visible on the Solana blockchain.
          </li>
        </ul>
        <p style={{ fontSize: "1.05rem", color: "#4c566a", marginBottom: "1.5rem" }}>
          <a
            href="https://solscan.io/token/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#5e81ac", textDecoration: "underline", fontWeight: 600 }}
          >
            View €BACH token on Solscan
          </a>
        </p>
        <p style={{ fontSize: "0.95rem", color: "#4c566a" }}>
          For more details, see the whitepaper or join the community.
        </p>
      </div>
      <footer style={{ marginTop: "2.5rem", color: "#4c566a", fontSize: "0.95rem", padding: "0 1rem", textAlign: "center" }}>
        Powered by The Stable Foundation &mdash; Solana Blockchain
      </footer>
    </main>
  );
}
