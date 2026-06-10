import { initializeApp } from "firebase/app";
import {
  Timestamp,
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnySrlQ10MrEjth3RG-ud2jUhq5hu-RSA",
  authDomain: "echo-ff2d5.firebaseapp.com",
  projectId: "echo-ff2d5",
  storageBucket: "echo-ff2d5.firebasestorage.app",
  messagingSenderId: "325176591036",
  appId: "1:325176591036:web:761703a0dfdd35fbef46b9",
  measurementId: "G-V4TMLVGEBC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const note = (id, title, date, content, associatedLiterature = "", status = "Confirmed") => ({
  id,
  title,
  associatedLiterature,
  content,
  status,
  meetingDate: Timestamp.fromDate(new Date(`${date}T09:00:00+10:00`)),
  createdAt: Timestamp.fromDate(new Date(`${date}T09:00:00+10:00`)),
  updatedAt: Timestamp.fromDate(new Date("2026-06-09T09:00:00+10:00")),
});

const modules = {
  "02_meetings": [
    note(
      "2026-04-29_react2026_status_briefing",
      "REACT2026 Status Briefing and Research Positioning",
      "2026-04-29",
      `## Meeting Focus

Prepared the first REACT2026 / PerFRDiff status briefing and clarified the research framing.

## Main Decisions

- Avoid claiming first-method status for personalised facial reaction generation.
- Position the work as personality-aware personalised weight editing for multiple appropriate facial reaction generation.
- Keep EEG as a later extension because Big-Five is lower-dimensional and easier to interpret.
- Use PerFRDiff as the closest personalised baseline, but keep the contribution narrower than generic personalised generation.

## Evidence

- Related-work positioning document completed.
- REACT2026 status slides, QA notes, and demo evidence pack prepared.
- Tiny validation figures were selected for presentation support.

## Current Risk

The claim needs to stay conservative: the open question is how explicit Big-Five traits should enter a PerFRDiff-style PCSM/PWSG or weight-shift pipeline, not whether personalised generation exists.`
    ),
    note(
      "2026-04-30_kalin_followup_pack",
      "Kalin Follow-Up Pack and Supervisor Communication",
      "2026-04-30",
      `## Meeting Focus

Converted the technical progress into a Kalin-facing update pack and follow-up email material.

## Prepared Materials

- PPT-ready REACT2026 / PerFRDiff slide content.
- Chinese presentation script for rehearsing the technical explanation.
- Evidence figures: tiny validation loss curves and baseline-to-extension roadmap.
- Follow-up email attachment summarising status and next steps.

## Research Message

The project shifted from a narrow PerFRDiff-only reproduction story toward a REACT2025/2026 baseline-plus-extension plan:

1. prove the official-style data and model path is runnable,
2. lock a clean no-personality baseline,
3. evaluate Big-Five conditioning before touching EEG.

## Follow-Up

Use this pack as the supervisor-facing explanation of why the project is now organised around REACT2026 personality-aware reaction generation.`
    ),
    note(
      "2026-06-03_group_meeting_update",
      "Group Meeting Update: Baseline, Big-Five, and Guardrails",
      "2026-06-03",
      `## Meeting Focus

Prepared group-meeting notes after the Generic V0 baseline was locked and Big-Five V1 was scoped.

## Current Position

- Generic V0 is the clean no-personality/no-EEG control.
- Big-Five V1 is allowed to use train/validation listener traits only.
- Test personality must not be used for training, validation selection, or model selection.
- EEG remains audit-only.

## What To Report

The useful progress is experimental discipline:

- baseline is separated from personality experiments,
- outputs are isolated by experiment folder,
- controls include shuffled traits and later zero-trait conditions,
- official challenge claims are avoided until official evaluation is available.

## Next Discussion Point

Whether the first Big-Five adapter should be residual, FiLM, or pre-GRU concatenation.`
    ),
    note(
      "2026-06-05_review_and_next_step_planning",
      "Review Planning: Candidate Matrix and Next Experiment",
      "2026-06-05",
      `## Meeting Focus

Consolidated the Big-Five candidate evidence and translated it into the next planning decision.

## Current Readout

- Generic V0 remains the locked baseline.
- V1.1 FiLM true Big-Five is the best personality candidate so far.
- Residual Big-Five is deprioritized.
- V1.2 pooled personal-history conditioning is paused after a negative 3-seed diagnostic.
- Listener-ID baseline should not be reported without a real identity key.

## Important Qualification

The Big-Five signal is moderate, not decisive. FiLM improves local full-validation MSE/MAE over Generic V0, but no personality model dominates all official-style metrics.

## Next Action

Prioritise a matched-protocol FiLM matrix with true, shuffled, zero, and official-scale Big-Five. Add chunked official-style evaluation before attempting another full validation metric run.`
    ),
    note(
      "2026-06-08_wednesday_group_meeting_prep",
      "Wednesday Group Meeting Prep: 5-Seed Big-Five Controls",
      "2026-06-08",
      `## Meeting Focus

Prepared the June 10 group-meeting message after the 5-seed Big-Five FiLM extension and full-validation export.

## One-Sentence Progress

The project moved from a runnable engineering baseline to a controlled experimental comparison for Big-Five conditioning.

## What Changed

- Generic V0 remains the clean no-personality / no-EEG baseline.
- Big-Five V1 now includes official-scale, zero, shuffled, and no-condition identity controls.
- 5 matched seeds were completed on full local train/validation.
- Full validation exports passed the required [10, T, 25] prediction shape.

## Clean Claim

Official-scale listener Big-Five FiLM is the current main local-validation candidate. It consistently outperforms shuffled and no-condition controls across five matched seeds, and remains best after full validation export.

## Caveat

This is not an official challenge result. Official-style metric alignment remains the next key step.`
    ),
  ],
  "03_literature": [
    note(
      "2026-04-29_related_work_positioning",
      "Related Work Positioning: MAFRG, PerFRDiff, Big-Five, EEG",
      "2026-04-29",
      `## Literature Position

The project is positioned around multiple appropriate facial reaction generation, with PerFRDiff as the closest personalised baseline.

## Key Distinctions

- ReactFace / ReactDiff: strong for MAFRG quality, synchrony, diversity, and appropriateness, but not explicit Big-Five-conditioned personalisation.
- PerFRDiff / PerReactor: personalised reaction generation exists, so the project must not claim first personalised generation.
- Personality recognition and EEG work: relevant for person-level signals, but mostly recognition/assessment rather than reaction generation.

## Research Gap

The valid gap is how explicit Big-Five personality traits should be integrated into a PerFRDiff-style personalised cognitive style and weight-editing pipeline.

## Contribution Statement

Investigate personality-aware personalised weight editing for multiple appropriate facial reaction generation.`
    ),
    note(
      "2026-06-02_react_guideline_and_metric_framing",
      "REACT2025/2026 Guideline and Metric Framing",
      "2026-06-02",
      `## Guideline Notes

The challenge task is offline/online multiple appropriate facial reaction generation. Final exports must produce ten plausible listener facial reaction sequences.

## Output Target

- Prediction shape: [10, T, 25]
- The 25 channels include 15 AUs, valence/arousal, and 8 expression probabilities.
- The submitted code should include Python source, checkpoint, runnable README, train/eval/generation commands, and validation results where available.

## Evaluation Readout

Ranking focuses on FRDist and FRDiv, with broader evaluation for appropriateness, diversity, realism, and synchrony.

## Practical Implication

Local masked MSE/MAE is useful for development, but official-style metrics are still required before making benchmark-level claims.`
    ),
    note(
      "2026-06-04_official_baseline_review",
      "Official REACT2026 Baseline Review",
      "2026-06-04",
      `## Source Review

The official baseline was extracted and connected to the local train/validation data bridge.

## Findings

- The official baseline includes a Big-Five conditioning path through perfrdiff_rewrite_weight.
- The default Big-Five route uses 3DMM personality, combining listener Big-Five with personal 3DMM history.
- Official diffusion/person-specific pretrained checkpoints are still missing.
- The public pretrained package currently contains post_processor and swin_transformer resources only.

## Interpretation

Official baseline reproduction is blocked by missing weights, but the local dataloader and forward paths are usable for smoke tests.

## Literature Value

This baseline clarifies how the organisers expect personality-aware conditioning to be wired, while still requiring careful local ablation before claiming improvement.`
    ),
    note(
      "2026-06-05_personality_conditioning_review",
      "Personality Conditioning Review: Residual, FiLM, History",
      "2026-06-05",
      `## Review Question

Which Big-Five conditioning design is most promising for the current stage?

## Compared Designs

- Residual adapter: simple and conservative, but weaker than FiLM in the current sweep.
- FiLM adapter: best current Big-Five V1.1 candidate by local full-validation evidence.
- Pre-GRU concatenation: tested but weaker in the same-budget design sweep.
- FiLM + pooled personal history: functional, but worse than no-personality in the small V1.2 diagnostic.

## Decision

Keep FiLM V1.1 as the primary personality branch. Pause V1.2 pooled history and EEG until a better conditioning policy is designed.

## Evidence Status

The signal is promising but moderate. It supports continued Big-Five work, not a final claim that personality conditioning solves the challenge.`
    ),
    note(
      "2026-06-08_official_baseline_update_review",
      "Official Baseline Update Review",
      "2026-06-08",
      `## Source Update

The latest official REACT2026 baseline repository was audited without merging it into the current experiment code.

## Useful Findings

- The official baseline PDF is now available in the repository.
- Personalized configs expose 3dmm_only, personality_only, and 3dmm_personality modes.
- Official Big-Five normalization maps 1-5 scores to 0-1 using (value - 1.0) / 4.0.
- EEG loading and EEG metrics are now clearer in the official code.
- The official evaluation path is better documented through compute_metrics.py and simple baseline metrics.

## Why It Matters

The official normalization supports the current official-scale Big-Five FiLM branch. The updated code also confirms that metric alignment should be the next technical priority, not another broad architecture sweep.

## Decision

Do not change Generic V0 or rerun completed 5-seed experiments just because the official repo changed. Treat the update as alignment evidence for Big-Five scaling and future official-style metric work.`
    ),
  ],
  "04_research_notes": [
    note(
      "2026-04-27_tiny_feasibility_and_go_nogo",
      "Tiny Feasibility: Diffusion, Rewrite, Metric Path",
      "2026-04-27",
      `## What Was Tested

Synthetic tiny validation was used to test whether the PerFRDiff-style paths can run locally.

## Results

- Tiny diffusion train/eval path ran and showed loss decrease.
- Tiny rewrite path ran, with a checkpoint handoff issue documented.
- Metric scripts required a Windows single-process fallback.
- Environment and data manifests were documented.

## Decision

Engineering feasibility is positive, but this is not paper-level reproduction. The next step should move from synthetic tiny data to official-style real train/validation data.

## Guardrail

Do not present tiny results as benchmark evidence. They only prove the path can execute and produce learning signals.`
    ),
    note(
      "2026-05-11_real_data_mini_learning_signal",
      "Real-Data Mini Learning Signal: Train/Val Path",
      "2026-05-11",
      `## What Was Completed

The official-style REACT2025 train/validation data path was made runnable.

## Evidence

- Validation dataloader smoke passed.
- One-batch validation forward smoke passed with finite outputs.
- Train archive integrity and modality alignment passed.
- 5-step train smoke completed with checkpoint save/reload.
- 5-sample and 20-sample real-data mini-overfit runs showed loss decrease.

## Key Numbers

- 5-sample overfit: epoch loss moved from 11.858826 to 1.033172.
- 20-sample overfit: epoch loss moved from 4.750627 to 1.300286.

## Interpretation

The real-data training loop has a learning signal. This still does not prove full reproduction or official challenge performance.`
    ),
    note(
      "2026-06-01_react2026_metadata_audit",
      "REACT2026 Metadata Audit: Personality and EEG",
      "2026-06-01",
      `## Audit Focus

Inspect the newly received REACT2026 metadata and decide how it can be used safely.

## Findings

- Train listener personality: 1660 rows with Big-Five columns and no missing cells.
- Validation listener personality: 571 rows with Big-Five columns and no missing cells.
- Test personality must not be used for training or model selection.
- Train and validation EEG files are locally organised, but not integrated.

## Policy

Big-Five train/validation labels can support a controlled V1 experiment. EEG remains audit-only. Test personality is forbidden for training and validation selection.

## Artifact State

Personality and EEG schema files were created, but kept disabled until explicit experiment code uses them safely.`
    ),
    note(
      "2026-06-02_generic_v0_baseline_lock",
      "Generic V0 Baseline Lock",
      "2026-06-02",
      `## Baseline Role

Generic V0 is the clean internal comparison baseline for all later personality-aware experiments.

## Model

- Input: speaker audio features [768] plus speaker facial attributes [25].
- Input dimension: 793.
- Model: GRU + Linear, hidden_dim 256.
- Output: listener facial attributes [25].
- Loss: masked MSE.
- Personality: not used.
- EEG: not used.

## Result

- Train rows: 1660.
- Validation rows: 571.
- Best validation MSE: 0.0982815317.
- Full validation export rows: 571.
- Export MSE mean: 0.1023991498.
- Export MAE mean: 0.2188075783.
- Prediction shape rule [10, T, 25] passed.

## Decision

Do not overwrite outputs/generic_v0_full. Future Big-Five branches must compare against this locked run unless a new baseline is explicitly documented.`
    ),
    note(
      "2026-06-04_official_baseline_and_cuda128",
      "Official Baseline Smoke and CUDA 12.8 Environment",
      "2026-06-04",
      `## Official Baseline Work

The official REACT2026 baseline was extracted into an isolated folder and connected to the local data bridge.

## Smoke Results

- Dataloader smoke passed with personal_condition_mode=3dmm_personality.
- Train rows: 1660.
- Validation rows: 571.
- Listener Big-Five shape: [5].
- Forward smoke passed with EEG disabled and test split not loaded.
- Official motion_diffusion scratch one-step training passed.

## Blocker

Official diffusion/person-specific pretrained checkpoints are still missing, so official pretrained reproduction is blocked.

## CUDA Fix

A separate .venv_cuda128 environment was created for RTX 5080:

- torch 2.8.0+cu128.
- CUDA runtime 12.8.
- GPU sanity and CUDA train-step smoke passed.

## Decision

Use .venv_cuda128 for GPU-backed smoke and short training runs. Keep official baseline outputs as smoke evidence only.`
    ),
    note(
      "2026-06-05_bigfive_candidate_matrix",
      "Big-Five Candidate Matrix and Ablation Notes",
      "2026-06-05",
      `## Candidate State

Generic V0 remains the locked clean baseline. V1.1 FiLM true Big-Five is the best current personality candidate.

## Full Validation Export

| Model | MSE | MAE |
|---|---:|---:|
| Generic V0 | 0.102399 | 0.218808 |
| Residual true Big-Five | 0.102822 | 0.221199 |
| FiLM true Big-Five | 0.101807 | 0.215893 |

## Official-Style 120-Row Readout

- Generic V0: FRC 0.451583, FRD 130.376306, TLCC 46.558334, MAE 0.170949.
- V1.1 FiLM: FRC 0.470702, FRD 129.339933, TLCC 46.075001, MAE 0.170975.

## Control Evidence

FiLM true Big-Five beats shuffled FiLM on average, but the effect is moderate:

- MSE win rate: 54.82%.
- MAE win rate: 54.41%.

## Decision

FiLM V1.1 remains the candidate branch, but it is not strong enough to replace Generic V0 as the main baseline. V1.2 pooled history is paused. EEG remains audit-only.`
    ),
    note(
      "2026-06-06_matched_protocol_5seed",
      "Big-Five V1 Matched-Protocol 5-Seed Result",
      "2026-06-06",
      `## Purpose

Extended the matched-protocol Big-Five FiLM check from one seed to five seeds.

## Protocol

- Conditions: true Big-Five, shuffled Big-Five, zero Big-Five, official-scale true Big-Five.
- Seeds: 20260631 to 20260635.
- Train subset: fixed 300 rows per seed.
- Validation rows: 571.
- Crop length: 256.
- Device: CUDA.

## Cropped Validation Readout

| Run | Mean best val MSE | Mean best val MAE |
|---|---:|---:|
| official-scale true Big-Five | 0.101138 | 0.216503 |
| z-score true Big-Five | 0.101238 | 0.217398 |
| zero Big-Five | 0.101594 | 0.217566 |
| shuffled Big-Five | 0.103601 | 0.219267 |

## Decision

True Big-Five beats shuffled across five seeds, but zero remains strong. Do not promote over Generic V0 yet. Keep official-scale as a high-priority ablation.`
    ),
    note(
      "2026-06-06_fulltrain_controlled_3seed",
      "Big-Five FiLM Full-Train Controlled 3-Seed Result",
      "2026-06-06",
      `## Purpose

Scaled Big-Five V1 FiLM from 300-row pilots to full local train/validation.

## Protocol

- Train rows: 1660.
- Validation rows: 571.
- Seeds: 20260661, 20260662, 20260663.
- Conditions: official-scale true, z-score true, zero, shuffled.
- Epochs: 10.
- Device: CUDA.

## Main Result

Official-scale true Big-Five had the best three-seed mean cropped validation MSE and MAE:

- MSE: 0.096667.
- MAE: 0.206050.

Full-sequence best-seed export also showed Big-Five branches beating Generic V0 for the first time locally:

- best z-score MSE: 0.100813.
- best official-scale MSE: 0.101438.
- Generic V0 MSE: 0.102399.

## Decision

Promote Big-Five FiLM to a serious candidate branch, but not an official result. Official-style metrics remain a caveat.`
    ),
    note(
      "2026-06-08_no_condition_identity_control",
      "No-Condition Identity Control Result",
      "2026-06-08",
      `## Purpose

Added the missing matched-capacity control: a FiLM branch that keeps the architecture family but does not receive listener Big-Five content during forward.

## Control Definition

- Condition: no_condition_identity.
- Train/validation personality files are loaded only for join and guard checks.
- Forward uses forward_without_condition.
- Test personality and EEG are not loaded.

## Key Result

Official-scale true Big-Five beats no-condition identity under seed-aware hierarchical MSE:

- mean delta: -0.001466.
- 95% CI: [-0.002245, -0.000619].
- seed wins: 3/3.

## Caveat

The 120-sample official-style proxy favored no-condition identity on several metrics, so this remains local validation evidence rather than a final personality-causality claim.

## Decision

No-condition identity strengthens the Big-Five interpretation, but must stay in every result table.`
    ),
    note(
      "2026-06-08_branch_promotion_memo",
      "Official-Scale Big-Five FiLM Branch Promotion Memo",
      "2026-06-08",
      `## Short Decision

Promote official-scale Big-Five FiLM as the current main V1 candidate branch, while keeping the claim conservative.

## Clean Wording

Official-scale Big-Five FiLM is the strongest current local candidate under matched validation MSE, not an official challenge improvement yet.

## Evidence

Official-scale beats the key controls under seed-aware matched validation MSE:

| Comparison | Mean delta | 95% CI | Seed wins |
|---|---:|---|---:|
| official-scale - no-condition identity | -0.001466 | [-0.002245, -0.000619] | 3/3 |
| official-scale - shuffled | -0.002347 | [-0.003162, -0.001391] | 3/3 |
| official-scale - zero | -0.001188 | [-0.002006, -0.000339] | 3/3 |

## Caveat

Official-style proxy metrics still complicate the interpretation, especially because no-condition identity is strong there.

## Next Step

Keep Generic V0 locked, keep official-scale FiLM as main V1 candidate, keep zero/shuffled/no-condition controls, and focus next on official-style metric alignment.`
    ),
    note(
      "2026-06-08_full_export_5seed",
      "Big-Five V1 Full-Validation Export 5-Seed Result",
      "2026-06-08",
      `## Purpose

Extended full-validation prediction export from three seeds to five seeds for the main Big-Five V1 FiLM controls.

## Export Checks

- Validation rows per run: 571.
- Reactions per sample: 10.
- Required output shape: [10, T, 25].
- All finite: true.
- All prediction shapes OK: true.

## 5-Seed Full-Sequence Aggregate

| Condition | Mean MSE | Mean MAE |
|---|---:|---:|
| official-scale true Big-Five | 0.102098 | 0.209444 |
| zero Big-Five | 0.102750 | 0.212741 |
| no-condition identity | 0.103249 | 0.213226 |
| shuffled Big-Five | 0.104126 | 0.211850 |

## Readout

Official-scale true Big-Five remains the best mean-MSE branch after exporting full validation sequences. It clearly beats no-condition identity and shuffled Big-Five on full-export MSE under seed-aware checks.

## Clean Claim

Official-scale listener Big-Five FiLM is the current main local-validation candidate, with strong evidence over shuffled and no-condition controls and directional evidence over zero on full-sequence export.`
    ),
    note(
      "2026-06-08_official_baseline_update_audit",
      "Official Baseline Update Audit",
      "2026-06-08",
      `## Scope

Audited the latest official baseline repository update without merging it into the current experiment code.

## Key Findings

- Official baseline PDF is now present.
- Personalized configs support personality_only and 3dmm_personality.
- Official Big-Five normalization uses (value - 1.0) / 4.0, matching the official-scale branch.
- EEG loading and EEG metrics are clearer, but EEG should remain audit-only.
- Official-style metric path is clearer and should become the next technical focus.

## Decision

The update supports the current direction and does not invalidate Generic V0 or the Big-Five V1 result. The next priority is official-style metric alignment for Generic V0 and Big-Five V1 predictions.`
    ),
  ],
  "05_weekly_progress": [
    note(
      "2026-04-25_week_environment_data_pipeline",
      "Week of Apr 25: Environment, Data Pipeline, Tiny Validation",
      "2026-04-25",
      `## Completed

- Set up environment, runbook, data pipeline, storage notes, and reproducibility audit.
- Built tiny synthetic configurations for diffusion and rewrite paths.
- Documented baseline results, checkpoint handoff, and metric fallback.

## Verification

Tiny diffusion/rewrite paths ran locally and produced loss movement. Metric path was made runnable with a single-process fallback on Windows.

## Status

Green for engineering feasibility, yellow for reproduction claims.`
    ),
    note(
      "2026-04-29_week_positioning_reporting",
      "Week of Apr 29: Positioning and Reporting Pack",
      "2026-04-29",
      `## Completed

- Wrote related-work positioning.
- Prepared REACT2026 status slides and Chinese speaking notes.
- Built a Kalin-facing PPT pack and follow-up email materials.

## Decision

Frame the contribution as personality-aware personalised weight editing, not first personalised reaction generation.

## Next Step

Move from synthetic tiny validation to official-style train/validation data checks.`
    ),
    note(
      "2026-05-05_week_official_data_audit",
      "Week of May 5: Official Data Audit and Smoke Tests",
      "2026-05-05",
      `## Completed

- Audited REACT2025 guideline data, checkpoints, and baseline dataloader.
- Ran validation dataloader and forward smoke.
- Verified train archive integrity and local extraction.

## Verification

Official-style modality keys and shapes were readable. Forward outputs were finite.

## Risk

Official pretrained checkpoints remained incomplete or unavailable, so reproduction had to stay bounded.`
    ),
    note(
      "2026-05-11_week_real_data_overfit",
      "Week of May 11: Real-Data Mini Overfit",
      "2026-05-11",
      `## Completed

- Ran train mini smoke and checkpoint save/reload.
- Completed 5-sample and 20-sample real-data mini-overfit tests.

## Verification

- 5 samples: loss decreased from 11.858826 to 1.033172.
- 20 samples: loss decreased from 4.750627 to 1.300286.

## Status

The training loop has a real-data learning signal, but no full training or official evaluation claim yet.`
    ),
    note(
      "2026-06-01_week_metadata_generic_v0",
      "Week of Jun 1: Metadata Audit and Generic V0 Lock",
      "2026-06-01",
      `## Completed

- Audited train/validation Big-Five metadata and EEG packages.
- Locked Generic Baseline V0 as the clean no-personality/no-EEG control.
- Exported 571 validation predictions with [10, T, 25] shape.

## Key Metrics

- Best Generic V0 validation MSE: 0.0982815317.
- Full export MSE mean: 0.1023991498.
- Full export MAE mean: 0.2188075783.

## Decision

Big-Five experiments must be separate and must not overwrite Generic V0.`
    ),
    note(
      "2026-06-04_week_official_baseline_bigfive_smoke",
      "Week of Jun 4: Official Baseline, CUDA Fix, Big-Five Smoke",
      "2026-06-04",
      `## Completed

- Extracted official REACT2026 baseline and built a data bridge.
- Ran official dataloader and forward smoke with Big-Five path visible.
- Fixed RTX 5080 CUDA environment with torch 2.8.0+cu128.
- Ran Big-Five Adapter V1 20-sample smoke and controlled pilot.

## Decision

The Big-Five pipeline is unblocked, but the first pilot was not enough to claim improvement. Continue with controlled multi-seed designs.`
    ),
    note(
      "2026-06-05_week_bigfive_decision_matrix",
      "Week of Jun 5: Big-Five Candidate Matrix and Ablations",
      "2026-06-05",
      `## Completed

- Completed residual, FiLM, and pre-GRU design comparison.
- Promoted FiLM V1.1 as the current Big-Five candidate.
- Audited and paused pooled personal-history V1.2 after negative diagnostics.
- Added zero-trait and official-scale ablation support.

## Current Ranking

1. Generic V0 remains the locked clean baseline.
2. V1.1 FiLM true Big-Five is the best personality candidate.
3. Residual Big-Five is deprioritized.
4. V1.2 pooled history remains paused.

## Next Step

Run a matched-protocol 5-seed FiLM matrix and make official-style evaluation chunked before full validation metric attempts.`
    ),
    note(
      "2026-06-08_week_5seed_branch_promotion",
      "Week of Jun 8: 5-Seed Big-Five Branch Promotion",
      "2026-06-08",
      `## Completed

- Extended Big-Five FiLM comparison to five matched full-train seeds.
- Added and evaluated no-condition identity as a matched-capacity control.
- Exported full validation predictions for all five seeds and controls.
- Audited the latest official baseline repository update.
- Prepared Wednesday group-meeting notes and report figure guidance.

## Current Main Result

Official-scale listener Big-Five FiLM is now the main local-validation V1 candidate.

5-seed cropped validation:

- official-scale MSE: 0.097068.
- zero MSE: 0.097980.
- no-condition MSE: 0.098257.
- shuffled MSE: 0.099136.

5-seed full export:

- official-scale MSE: 0.102098.
- zero MSE: 0.102750.
- no-condition MSE: 0.103249.
- shuffled MSE: 0.104126.

## Caveat

This is still not an official challenge result. Official-style metric alignment is the next gate before stronger claims.`
    ),
  ],
};

async function seed() {
  let written = 0;

  for (const [moduleId, notes] of Object.entries(modules)) {
    await setDoc(
      doc(db, "research_data", moduleId),
      {
        updated_at: new Date().toISOString(),
        seeded_by: "seed-research-updates-2026-06-09",
      },
      { merge: true }
    );

    for (const item of notes) {
      const { id, ...payload } = item;
      await setDoc(doc(db, "research_data", moduleId, "notes", id), payload, { merge: true });
      written += 1;
    }

    const snapshot = await getDocs(collection(db, "research_data", moduleId, "notes"));
    console.log(`${moduleId}: wrote ${notes.length}, total notes now ${snapshot.size}`);
  }

  console.log(`seed complete: ${written} notes written`);
}

seed().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
