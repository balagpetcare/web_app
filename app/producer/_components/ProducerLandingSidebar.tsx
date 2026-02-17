"use client";

/**
 * Producer landing left sidebar — banner + 7 feature icons (white outline).
 * Restores the design: dark strip (#1A1B22) with abstract top banner and vertical icon list.
 */
export default function ProducerLandingSidebar() {
  const iconKeys = ["layers", "shield", "arch", "padlock", "cube", "grid", "dollar"];
  const icons = [
    /* 1. Three stacked diamonds (layers) */
    <svg className="pl-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden key="layers">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>,
    /* 2. Shield */
    <svg className="pl-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden key="shield">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>,
    /* 3. Arch / gateway with pillars */
    <svg className="pl-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21h18M3 21V9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12M6 21v-6M10 21v-6M14 21v-6M18 21v-6M4 9V6M8 9V6M12 9V6M16 9V6M20 9V6" />
    </svg>,
    /* 4. Padlock */
    <svg className="pl-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>,
    /* 5. Cube / box */
    <svg className="pl-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>,
    /* 6. Grid of squares */
    <svg className="pl-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="4" height="4" rx="1" />
      <rect x="9" y="14" width="4" height="4" rx="1" />
      <rect x="14" y="14" width="7" height="4" rx="1" />
    </svg>,
    /* 7. Dollar */
    <svg className="pl-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>,
  ];

  return (
    <aside className="pl-sidebar" aria-label="Producer features">
      <div className="pl-sidebar-banner" aria-hidden />
      <div className="pl-sidebar-icons">
        {icons.map((icon, i) => (
          <div key={iconKeys[i]} className="pl-sidebar-icon-wrap">
            {icon}
          </div>
        ))}
      </div>
    </aside>
  );
}
