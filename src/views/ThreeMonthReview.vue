<template>
  <div class="min-h-screen overflow-x-hidden bg-[#f4fbfd] text-slate-800 selection:bg-[#00f5ff]/30 dark:bg-[#000b1d] dark:text-slate-200">
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,184,217,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,184,217,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]"></div>
      <div class="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/10"></div>
      <div class="absolute right-0 top-40 h-[32rem] w-[32rem] rounded-full bg-emerald-300/14 blur-3xl dark:bg-emerald-300/8"></div>
    </div>

    <main class="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav class="mb-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-[0_20px_70px_rgba(0,184,217,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
        <router-link to="/echo" class="inline-flex items-center gap-2 rounded-full border border-cyan-200/50 bg-cyan-100/50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1c3a4b] transition hover:border-cyan-300 hover:bg-cyan-100 dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100">
          <ArrowLeft class="h-4 w-4" />
          ECHO
        </router-link>
        <div class="flex flex-wrap items-center gap-2">
          <button type="button" class="action-button" @click="copyDraft">
            <Copy class="h-4 w-4" />
            {{ copied ? 'Copied' : 'Copy Draft' }}
          </button>
          <button type="button" class="action-button" @click="printPage">
            <Printer class="h-4 w-4" />
            Print
          </button>
        </div>
      </nav>

      <header class="grid gap-8 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <section>
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-white/75 px-4 py-2 text-sm font-bold text-[#1c3a4b] shadow-sm dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100">
            <BadgeCheck class="h-4 w-4" />
            Monash 3-month review reference
          </div>
          <h1 class="max-w-4xl text-5xl font-black leading-[0.96] tracking-normal text-[#153144] dark:text-white sm:text-7xl">
            Three-month review: research progress, support, and next direction.
          </h1>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A ready-to-adapt reference page for my early candidature review. It summarises onboarding, research progress, supervision, community integration, available support, and the next research direction.
          </p>
        </section>

        <aside class="rounded-2xl border border-white bg-white/78 p-6 shadow-[0_22px_80px_rgba(0,184,217,0.10)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/72">
          <p class="font-mono text-xs font-black uppercase tracking-[0.22em] text-[#00b8d9]">Current status</p>
          <div class="mt-5 grid grid-cols-2 gap-3">
            <div v-for="metric in statusMetrics" :key="metric.label" class="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-900/70">
              <p class="text-3xl font-black text-[#1c3a4b] dark:text-cyan-100">{{ metric.value }}</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{{ metric.label }}</p>
            </div>
          </div>
          <p class="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Overall answer: no major concerns. I have adapted well, the project direction is clear, supervision is regular and useful, and I know where to access university support services.
          </p>
        </aside>
      </header>

      <section class="grid gap-5 lg:grid-cols-3">
        <article v-for="item in timeline" :key="item.period" class="panel">
          <p class="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#00b8d9]">{{ item.period }}</p>
          <h2 class="mt-4 text-2xl font-black text-[#1c3a4b] dark:text-white">{{ item.title }}</h2>
          <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ item.text }}</p>
        </article>
      </section>

      <section class="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section class="panel">
          <div class="mb-6 flex items-center gap-3">
            <MessageSquareText class="h-6 w-6 text-[#00b8d9]" />
            <h2 class="text-2xl font-black text-[#1c3a4b] dark:text-white">Review questions</h2>
          </div>

          <div class="space-y-4">
            <div v-for="item in reviewQuestions" :key="item.question" class="question-row">
              <p class="text-sm font-black text-slate-900 dark:text-slate-100">{{ item.question }}</p>
              <p class="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ item.answer }}</p>
            </div>
          </div>
        </section>

        <section class="panel">
          <div class="mb-6 flex items-center justify-between gap-4">
            <div>
              <p class="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#00b8d9]">Reference copy</p>
              <h2 class="mt-2 text-2xl font-black text-[#1c3a4b] dark:text-white">Draft response</h2>
            </div>
            <FileText class="h-7 w-7 text-[#00b8d9]" />
          </div>

          <article class="prose prose-slate max-w-none rounded-xl border border-slate-200/80 bg-white/82 p-6 text-sm leading-7 dark:prose-invert dark:border-slate-800 dark:bg-slate-950/70">
            <p v-for="paragraph in reviewDraftParagraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </article>
        </section>
      </section>

      <section class="mt-8 panel">
        <div class="mb-6 flex items-center gap-3">
          <Compass class="h-6 w-6 text-[#00b8d9]" />
          <h2 class="text-2xl font-black text-[#1c3a4b] dark:text-white">Next three-month focus</h2>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <div v-for="item in nextFocus" :key="item.title" class="rounded-xl border border-slate-200/80 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/70">
            <h3 class="text-lg font-black text-slate-900 dark:text-slate-100">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ item.text }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ArrowLeft,
  BadgeCheck,
  Compass,
  Copy,
  FileText,
  MessageSquareText,
  Printer
} from 'lucide-vue-next';

const copied = ref(false);

const statusMetrics = [
  { label: 'Months', value: '3' },
  { label: 'Core track', value: 'AI' },
  { label: 'Supervision', value: 'OK' },
  { label: 'Support', value: 'OK' }
];

const timeline = [
  {
    period: 'Month 1',
    title: 'Grounding and onboarding',
    text: 'I settled into the Monash research environment, clarified the PerFRDiff and REACT challenge context, prepared related-work notes, and established a regular research workflow with supervisor guidance.'
  },
  {
    period: 'Month 2',
    title: 'Data path and baseline',
    text: 'I moved from reading and setup into runnable engineering work: dataset loading, forward checks, checkpoint reload, tiny overfit tests, Generic V0 baseline locking, and full validation export checks.'
  },
  {
    period: 'Month 3',
    title: 'Controlled Big-Five experiments',
    text: 'I built and compared Big-Five personality-conditioning branches, including official-scale FiLM, zero, shuffled, no-condition identity, and matched multi-seed validation controls.'
  }
];

const reviewQuestions = [
  {
    question: 'Have I adapted to Monash?',
    answer: 'Yes. I have adapted well to the academic environment, research expectations, and daily working rhythm. I do not have any major concern about settling in.'
  },
  {
    question: 'Have I integrated into the research community?',
    answer: 'Yes. I have been engaging through supervisor meetings, group-meeting preparation, research discussions, literature reading, and sharing progress around my project direction.'
  },
  {
    question: 'Is my research direction clear?',
    answer: 'Yes. The direction is clear: multimodal affective AI, PerFRDiff-style facial reaction generation, and controlled Big-Five personality conditioning. The next gate is metric alignment and official-style evaluation.'
  },
  {
    question: 'Are resources and equipment sufficient?',
    answer: 'Yes. The current resources are sufficient for this stage. I have access to the required software environment, local GPU experimentation, project documentation, and university support channels.'
  },
  {
    question: 'Do I meet my supervisor regularly?',
    answer: 'Yes. I have regular supervisor contact and prepare progress notes, results, and questions for discussion.'
  },
  {
    question: 'Is supervisor guidance sufficient?',
    answer: 'Yes. The guidance has been sufficient and useful. It has helped me narrow the project scope, keep stronger controls, and avoid over-claiming early experimental results.'
  },
  {
    question: 'Have I considered internship opportunities?',
    answer: 'Yes. I am aware that internship or industry engagement can be useful. At this stage my priority is to stabilise the research direction and experimental evidence, while keeping internship options in mind.'
  },
  {
    question: 'Do I know library, study skills, English support, and EndNote support?',
    answer: 'Yes. I am aware that Monash provides library support, study skills support, English language support, and EndNote or referencing help, and I know these can be used if needed.'
  },
  {
    question: 'Do I know my annual leave rights?',
    answer: 'Yes. I understand that annual leave is available under university candidature arrangements and should be planned responsibly with supervisor communication and project timing in mind.'
  }
];

const reviewDraftParagraphs = [
  'Over the first three months, I have adapted well to Monash and to the expectations of research candidature. I have established a regular working rhythm, maintained project notes, prepared meeting materials, and developed a clearer understanding of how to communicate progress, evidence, and limitations in a research setting.',
  'My research direction is now clear. The project is focused on multimodal affective AI and personalised facial reaction generation, with a particular emphasis on PerFRDiff-style modelling and controlled Big-Five personality conditioning. During this period I moved from environment setup and literature grounding into runnable experiments, including real dataset loading, baseline training, full validation export checks, and controlled multi-seed comparisons.',
  'The main technical progress has been the transition from Generic V0 baseline work to Big-Five V1 candidate evaluation. I tested official-scale FiLM conditioning against zero, shuffled, and no-condition controls. The current evidence supports official-scale Big-Five FiLM as the strongest local-validation candidate, while I am keeping the claim conservative because official-style metrics and challenge evaluation still need to be aligned before stronger conclusions can be made.',
  'I have integrated into the research community through regular supervisor meetings, research discussions, group-meeting preparation, and ongoing literature review. Supervisor guidance has been sufficient and helpful, especially in shaping the experimental controls and maintaining careful interpretation of results. The available resources and equipment are adequate for this stage of the project.',
  'I am also aware of the broader support available at Monash, including library services, study skills support, English language support, and EndNote or referencing assistance. I understand my annual leave rights and the need to plan leave responsibly with supervisor communication. I have considered internship opportunities as a future option, but my immediate priority is to consolidate the research direction and produce stronger experimental evidence.'
];

const nextFocus = [
  {
    title: 'Metric alignment',
    text: 'Align local validation with official-style evaluation so that future claims are based on the right metric protocol.'
  },
  {
    title: 'Controlled reporting',
    text: 'Keep zero, shuffled, no-condition, and Generic V0 controls in the report so the contribution is defensible.'
  },
  {
    title: 'Research writing',
    text: 'Convert the experimental log into a structured progress report with clear figures, limitations, and supervisor questions.'
  }
];

const reviewDraftText = [
  '3-Month Review Reference Draft',
  '',
  ...reviewDraftParagraphs,
  '',
  'Review Question Answers',
  ...reviewQuestions.map((item) => `${item.question}\n${item.answer}`)
].join('\n\n');

async function copyDraft() {
  await navigator.clipboard.writeText(reviewDraftText);
  copied.value = true;
  window.setTimeout(() => {
    copied.value = false;
  }, 1800);
}

function printPage() {
  window.print();
}
</script>

<style scoped>
.panel {
  border: 1px solid rgba(255, 255, 255, 0.78);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.76);
  padding: 1.5rem;
  box-shadow: 0 18px 70px rgba(0, 184, 217, 0.08);
  backdrop-filter: blur(18px);
}

.question-row {
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 0.75rem;
  background: rgba(248, 250, 252, 0.82);
  padding: 1rem;
}

.action-button {
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

.action-button:hover {
  border-color: rgba(0, 184, 217, 0.75);
  background: rgba(207, 250, 254, 0.9);
}

.action-button:active {
  transform: translateY(1px);
}

:global(.dark) .panel {
  border-color: rgba(30, 41, 59, 0.96);
  background: rgba(2, 6, 23, 0.74);
  box-shadow: none;
}

:global(.dark) .question-row {
  border-color: rgba(30, 41, 59, 0.96);
  background: rgba(15, 23, 42, 0.72);
}

:global(.dark) .action-button {
  border-color: rgba(103, 232, 249, 0.25);
  background: rgba(103, 232, 249, 0.1);
  color: #cffafe;
}

@media print {
  nav,
  .pointer-events-none {
    display: none;
  }

  main {
    max-width: none;
    padding: 0;
  }

  .panel,
  .question-row {
    break-inside: avoid;
    box-shadow: none;
  }
}
</style>
