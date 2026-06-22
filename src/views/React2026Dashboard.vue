<template>
  <div class="min-h-screen bg-[#eef9fb] text-slate-800 dark:bg-[#000b1d] dark:text-slate-200">
    <header class="sticky top-0 z-30 border-b border-cyan-200/40 bg-white/82 px-4 py-3 shadow-[0_12px_40px_rgba(0,184,217,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/82 sm:px-6">
      <div class="mx-auto flex max-w-[96rem] flex-wrap items-center justify-between gap-3">
        <div class="flex min-w-0 items-center gap-3">
          <router-link to="/echo" class="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-cyan-200/70 bg-cyan-100/50 px-4 text-xs font-black uppercase tracking-[0.18em] text-[#1c3a4b] transition hover:border-cyan-300 hover:bg-cyan-100 dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100">
            <ArrowLeft class="h-4 w-4" />
            ECHO
          </router-link>
          <div class="min-w-0">
            <p class="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-[#00b8d9]">REACT2026 Submission Readiness</p>
            <h1 class="truncate text-lg font-black text-[#1c3a4b] dark:text-white sm:text-xl">Submission Readiness Dashboard - 2026-06-22</h1>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <a :href="dashboardPath" target="_blank" rel="noreferrer" class="tool-button">
            <ExternalLink class="h-4 w-4" />
            Open Full
          </a>
          <a :href="readmePath" target="_blank" rel="noreferrer" class="tool-button">
            <FileText class="h-4 w-4" />
            Guide
          </a>
        </div>
      </div>
    </header>

    <main class="mx-auto w-full max-w-[96rem] p-3 sm:p-4">
      <section class="mb-3 grid gap-3 rounded-2xl border border-white/80 bg-white/72 p-4 shadow-[0_18px_60px_rgba(0,184,217,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p class="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#00b8d9]">Dedicated presentation entry</p>
          <p class="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            This embedded dashboard summarizes the June 22 REACT2026 submission-readiness state: Generic V0 safe bundle, 625-row test inference, PRED-only fallback, clean-unzip smoke checks, and organiser confirmation questions.
          </p>
        </div>
        <div class="grid grid-cols-3 gap-2 text-center">
          <div class="status-cell">
            <p class="status-value">625</p>
            <p class="status-label">Test Rows</p>
          </div>
          <div class="status-cell">
            <p class="status-value">9.21 MB</p>
            <p class="status-label">Safe Bundle</p>
          </div>
          <div class="status-cell">
            <p class="status-value">V0</p>
            <p class="status-label">Safe Candidate</p>
          </div>
        </div>
      </section>

      <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)] dark:border-slate-800 dark:bg-slate-950">
        <iframe
          class="h-[calc(100dvh-13rem)] min-h-[46rem] w-full bg-white"
          :src="dashboardPath"
          title="REACT2026 progress dashboard"
        ></iframe>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ArrowLeft, ExternalLink, FileText } from 'lucide-vue-next';

const dashboardPath = '/react2026-progress-dashboard-2026-06-10/index.html';
const readmePath = '/react2026-progress-dashboard-2026-06-10/README_OPEN.md';
</script>

<style scoped>
.tool-button {
  display: inline-flex;
  min-height: 2.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 184, 217, 0.35);
  background: rgba(224, 247, 250, 0.62);
  padding: 0.6rem 1rem;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1c3a4b;
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
}

.tool-button:hover {
  border-color: rgba(0, 184, 217, 0.75);
  background: rgba(207, 250, 254, 0.9);
}

.tool-button:active {
  transform: translateY(1px);
}

.status-cell {
  border-radius: 0.75rem;
  border: 1px solid rgba(226, 232, 240, 0.9);
  background: rgba(248, 250, 252, 0.82);
  padding: 0.9rem;
}

.status-value {
  font-size: 1.45rem;
  font-weight: 900;
  line-height: 1;
  color: #1c3a4b;
}

.status-label {
  margin-top: 0.45rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #64748b;
}

:global(.dark) .tool-button {
  border-color: rgba(103, 232, 249, 0.25);
  background: rgba(103, 232, 249, 0.1);
  color: #cffafe;
}

:global(.dark) .status-cell {
  border-color: rgba(30, 41, 59, 0.96);
  background: rgba(15, 23, 42, 0.72);
}

:global(.dark) .status-value {
  color: #cffafe;
}
</style>
