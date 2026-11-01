* {
  box-sizing: border-box;
}

:root {
  --bg: #08111f;
  --bg-2: #0d1b2d;
  --panel: rgba(12, 18, 28, 0.82);
  --panel-strong: rgba(15, 24, 39, 0.94);
  --card: rgba(18, 27, 42, 0.86);
  --card-soft: rgba(24, 34, 51, 0.8);
  --ink: #edf5ff;
  --muted: #9fb2cb;
  --primary: #7c9cff;
  --primary-2: #5eead4;
  --success: #5fe1b5;
  --warning: #ffcc6d;
  --danger: #ff7c7c;
  --border: rgba(148, 163, 184, 0.18);
  --shadow: 0 22px 60px rgba(1, 4, 10, 0.52);
  --radius: 22px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", "Noto Sans SC", "Segoe UI", sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at top left, rgba(124, 156, 255, 0.18), transparent 26%),
    radial-gradient(circle at bottom right, rgba(94, 234, 212, 0.12), transparent 28%),
    linear-gradient(135deg, var(--bg), var(--bg-2));
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, select, textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.page-shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  min-height: 100vh;
}

.sidebar {
  background: rgba(9, 15, 25, 0.8);
  border-right: 1px solid var(--border);
  padding: 24px 18px;
}

.brand-box {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 26px;
}

.brand-mark {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #071621;
  font-weight: 800;
  box-shadow: 0 12px 28px rgba(124, 156, 255, 0.28);
}

.brand-name {
  font-weight: 700;
  letter-spacing: 0.04em;
}

.brand-box small {
  color: var(--muted);
}

.side-nav {
  display: grid;
  gap: 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.8rem 0.9rem;
  border: 1px solid transparent;
  border-radius: 12px;
  color: var(--muted);
  transition: 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(124, 156, 255, 0.08);
  border-color: rgba(124, 156, 255, 0.2);
  color: var(--ink);
}

.side-card {
  margin-top: 22px;
  background: rgba(17, 25, 38, 0.86);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px 16px;
}

.side-card.compact {
  padding-bottom: 14px;
}

.label {
  margin: 0 0 10px;
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.stat-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.stat-row:last-child {
  border-bottom: none;
}

.stat-row strong {
  font-size: 1.4rem;
  letter-spacing: -0.05em;
}

.stat-row span {
  color: var(--muted);
}

.quick-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-tab {
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
  color: var(--muted);
  border-radius: 999px;
  padding: 0.5rem 0.7rem;
  transition: 0.2s ease;
}

.filter-tab:hover,
.filter-tab.active {
  color: var(--ink);
  border-color: rgba(124, 156, 255, 0.32);
  background: linear-gradient(135deg, rgba(124, 156, 255, 0.12), rgba(94, 234, 212, 0.08));
}

.main-panel {
  padding: 18px 20px 32px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0 20px;
}

.topbar-left h1 {
  margin: 12px 0 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.42rem 0.72rem;
  border-radius: 999px;
  border: 1px solid rgba(124, 156, 255, 0.3);
  background: rgba(124, 156, 255, 0.08);
  color: #dfe9ff;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  box-shadow: 0 0 18px rgba(94, 234, 212, 0.72);
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn {
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0.82rem 1.2rem;
  font-weight: 600;
  transition: 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #081621;
  box-shadow: 0 18px 34px rgba(94, 234, 212, 0.18);
}

.btn-ghost {
  background: rgba(255,255,255,0.02);
  border-color: var(--border);
  color: var(--ink);
}

.hero-banner {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
  padding: 22px 20px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(15, 23, 36, 0.76);
  box-shadow: 0 16px 30px rgba(2, 6, 23, 0.18);
}

.hero-text p {
  margin: 0;
  color: var(--muted);
  font-size: 1.04rem;
}

.banner-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.mini-metric {
  padding: 16px 14px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
}

.mini-metric span {
  display: block;
  color: var(--muted);
  font-size: 0.75rem;
  margin-bottom: 8px;
}

.mini-metric strong {
  font-size: 1.6rem;
  letter-spacing: -0.05em;
}

.section-block {
  margin-top: 30px;
  padding: 24px 0 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.section-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.38rem 0.68rem;
  border-radius: 999px;
  border: 1px solid rgba(124, 156, 255, 0.2);
  background: rgba(124, 156, 255, 0.08);
  color: #dfe9ff;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-header h2 {
  margin: 8px 0 0;
  font-size: clamp(1.7rem, 3vw, 2.5rem);
  letter-spacing: -0.05em;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: min(100%, 340px);
  padding: 0.78rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
}

.search-box input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--ink);
}

.search-box input::placeholder {
  color: var(--muted);
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.resource-card {
  background: rgba(17, 25, 38, 0.84);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px 18px 16px;
  transition: 0.2s ease;
}

.resource-card:hover {
  transform: translateY(-2px);
  border-color: rgba(124, 156, 255, 0.24);
}

.resource-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.badge {
  display: inline-flex;
  padding: 0.35rem 0.7rem;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
}

.badge.free {
  background: rgba(95, 225, 181, 0.12);
  border-color: rgba(95, 225, 181, 0.22);
  color: #bbf8de;
}

.badge.paid {
  background: rgba(255, 204, 109, 0.12);
  border-color: rgba(255, 204, 109, 0.2);
  color: #ffe5a7;
}

.badge.tool {
  background: rgba(124, 156, 255, 0.1);
  border-color: rgba(124, 156, 255, 0.22);
  color: #dfeaff;
}

.badge.post {
  background: rgba(94, 234, 212, 0.1);
  border-color: rgba(94, 234, 212, 0.2);
  color: #d4fffb;
}

.resource-region {
  font-size: 0.76rem;
  color: var(--muted);
}

.resource-card h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
  line-height: 1.4;
}

.resource-card p {
  margin: 0;
  color: var(--muted);
}

.resource-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  color: var(--primary-2);
  font-weight: 600;
}

.table-wrap {
  background: rgba(17, 25, 38, 0.8);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  vertical-align: top;
}

th {
  font-size: 0.8rem;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(255,255,255,0.02);
}

tbody tr:hover {
  background: rgba(255,255,255,0.02);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-size: 0.76rem;
  border: 1px solid rgba(95, 225, 181, 0.18);
  background: rgba(95, 225, 181, 0.1);
  color: #baf7dd;
}

.status-pill.warn {
  border-color: rgba(255, 204, 109, 0.2);
  background: rgba(255, 204, 109, 0.08);
  color: #ffe6a4;
}

.status-pill.danger {
  border-color: rgba(255, 124, 124, 0.2);
  background: rgba(255, 124, 124, 0.08);
  color: #ffc1c1;
}

.action-link,
.inline-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0.45rem 0.7rem;
  font-size: 0.82rem;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.03);
  color: var(--ink);
}

.inline-action.delete {
  border-color: rgba(255, 124, 124, 0.24);
  color: #ffb4b4;
}

.resource-form {
  background: rgba(17, 25, 38, 0.8);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

label {
  display: grid;
  gap: 8px;
  color: var(--muted);
}

label span {
  font-size: 0.9rem;
}

input, select, textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  color: var(--ink);
  padding: 0.8rem 0.9rem;
  outline: none;
}

input:focus, select:focus, textarea:focus {
  border-color: rgba(124, 156, 255, 0.38);
  box-shadow: 0 0 0 3px rgba(124, 156, 255, 0.1);
}

textarea {
  resize: vertical;
  min-height: 96px;
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 18px;
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.guide-card {
  background: rgba(15, 21, 33, 0.8);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px 20px;
}

.guide-num {
  display: inline-flex;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(124, 156, 255, 0.12), rgba(94, 234, 212, 0.1));
  border: 1px solid rgba(124, 156, 255, 0.18);
  color: var(--primary-2);
  font-weight: 700;
}

.guide-card h3 {
  margin: 16px 0 8px;
  font-size: 1.2rem;
}

.guide-card p {
  margin: 0;
  color: var(--muted);
}

.detail-page-shell {
  grid-template-columns: 220px minmax(0, 1fr);
}

.detail-sidebar {
  padding-top: 28px;
}

.detail-panel {
  padding: 18px 22px 40px;
}

.detail-content {
  margin-top: 18px;
  display: grid;
  gap: 18px;
}

.detail-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.detail-badges {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.detail-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.38rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
  color: var(--muted);
  font-size: 0.76rem;
}

.detail-card {
  background: rgba(17, 25, 38, 0.8);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
}

.detail-summary {
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 1.05rem;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.meta-grid small {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
}

.meta-grid strong {
  font-size: 1.14rem;
}

.detail-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.notes-card h3 {
  margin: 0 0 12px;
}

.empty-state {
  padding: 24px;
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  color: var(--muted);
  background: rgba(255,255,255,0.02);
}

@media (max-width: 980px) {
  .page-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .hero-banner,
  .resource-grid,
  .guide-grid,
  .form-grid,
  .meta-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .section-header,
  .topbar,
  .detail-header-row,
  .topbar-actions,
  .form-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    min-width: 0;
    width: 100%;
  }

  .main-panel {
    padding: 14px 14px 28px;
  }

  .topbar-actions .btn,
  .form-actions .btn,
  .detail-actions .btn {
    width: 100%;
  }
}
