"use client";

const steps = [
  { step: "STEP 1", title: "Company Setup" },
  { step: "STEP 2", title: "Generate Serials" },
  { step: "STEP 3", title: "Print QR Labels" },
  { step: "STEP 4", title: "Scan & Verify" }
];

export default function HowItWorksShowcase() {
  return (
    <section className="pl-section pl-how-show" aria-labelledby="pl-how-show-title">
      <div className="pl-container">
        <div className="pl-how-show-header">
          <div className="pl-how-show-kicker">HOW IT WORKS</div>
          <h2 id="pl-how-show-title" className="pl-how-show-title">
            STEP-BY-STEP WORKFLOW
          </h2>
        </div>

        <div className="pl-how-show-grid">
          {steps.map((s) => (
            <div key={s.step} className="pl-how-show-card">
              <div className="pl-how-show-step">
                <span className="pl-how-show-step-pill">{s.step}</span>
              </div>
              <div className="pl-how-show-stage" aria-hidden>
                <div className="pl-how-show-stage-top" />
                <div className="pl-how-show-stage-mid" />
                <div className="pl-how-show-stage-bot" />
                <div className="pl-how-show-glow" />
              </div>
              <div className="pl-how-show-name">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

