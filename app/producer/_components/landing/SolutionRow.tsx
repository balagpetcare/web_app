"use client";

const items = [
  {
    title: "Unique\nSerial & Batch",
    sub: "Generate individual product identifiers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="pl-row-icon">
        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9h6v6H9z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "QR Label\nPrinting",
    sub: "Secure, high-quality label integration.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="pl-row-icon">
        <path d="M6 9V2h12v7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 14h12v8H6z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Consumer\nVerification Page",
    sub: "Branded public scan results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="pl-row-icon">
        <rect x="6" y="2" width="12" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Duplicate\nScan Alerts",
    sub: "Instant warnings for suspicious activity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="pl-row-icon">
        <path d="M3 11l18-5v12L3 14v-3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 14v4a2 2 0 004 0v-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

export default function SolutionRow() {
  return (
    <section className="pl-section pl-solution-row" aria-label="Solution highlights">
      <div className="pl-container">
        <div className="pl-solution-row-title">OUR SOLUTION</div>
        <div className="pl-solution-row-grid">
          {items.map((it, idx) => (
            <div key={idx} className="pl-solution-row-card">
              <div className="pl-solution-row-icon">{it.icon}</div>
              <div className="pl-solution-row-text">
                <div className="pl-solution-row-name">{it.title}</div>
                <div className="pl-solution-row-sub">{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

