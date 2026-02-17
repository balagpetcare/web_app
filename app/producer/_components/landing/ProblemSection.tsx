"use client";

const problems = [
  {
    title: "Counterfeit Products",
    sub: "Damaging brand reputation and losing customer trust.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="pl-problem-icon-svg">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8v8M9 11l3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Duplicate QR Codes",
    sub: "Fraudulent copies and compromised supply chains.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="pl-problem-icon-svg">
        <rect x="2" y="2" width="9" height="9" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="13" y="2" width="9" height="9" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 6h3v3H5zM14 6h3v3h-3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 15l4 4M19 15l-4 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Revenue Loss",
    sub: "Financial impact from fake goods and market dilution.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="pl-problem-icon-svg">
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16v-5M12 16v-3M17 16V8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2v2M12 2h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section id="the-problem" className="pl-section pl-problem" aria-labelledby="pl-problem-title">
      <h2 id="pl-problem-title" className="pl-problem-title">The Problem</h2>
      <div className="pl-container pl-problem-inner">
        <div className="pl-problem-grid">
          {problems.map((p, i) => (
            <div key={i} className="pl-problem-card">
              <div className="pl-problem-icon">{p.icon}</div>
              <div className="pl-problem-warn" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path fill="rgba(255,69,0,0.9)" stroke="#fff" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <path d="M12 9v4M12 16h.01" stroke="#fff" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="pl-problem-card-title">{p.title}</h3>
              <p className="pl-problem-card-sub">{p.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
