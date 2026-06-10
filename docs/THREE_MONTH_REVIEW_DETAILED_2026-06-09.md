# Three-Month Review Detailed Progress Report

Date: 2026-06-09  
Student: Wei Liu  
Project area: Multimodal affective AI, personalised facial reaction generation, PerFRDiff / REACT-style modelling  
Working title: Personality-aware personalised facial reaction generation with Big-Five conditioning

## 1. Executive Summary

Over the first three months, I moved from orientation and research framing into a working experimental pipeline for personalised facial reaction generation. The project started with literature positioning and PerFRDiff feasibility checks, then progressed through real REACT/MARS data access, dataset audits, baseline smoke tests, small real-data overfit checks, a locked Generic V0 baseline, official REACT2026 baseline auditing, and finally controlled Big-Five personality-conditioning experiments.

The main technical outcome is that I now have a reproducible local research workflow rather than only a conceptual plan. I can load real train and validation data, run baseline training and validation export, join train/validation listener Big-Five personality metadata, train controlled Big-Five branches, export predictions in the required `[10, T, 25]` format, and compare branches with zero, shuffled, and no-condition controls.

The current research claim is intentionally conservative:

> Official-scale listener Big-Five FiLM is the current main local-validation candidate. It consistently outperforms shuffled, zero, and no-condition controls across five matched seeds under local validation MSE, and remains best after full validation export. However, this is not yet an official challenge result, and official-style metric alignment remains the next key step.

Alongside the technical work, I adapted well to Monash, established a regular supervision and documentation rhythm, engaged with the research community through meetings and progress preparation, and became aware of available university support services including library help, study skills, English support, EndNote/reference support, and annual leave arrangements.

## 2. High-Level Timeline

| Period | Main focus | Concrete outcome |
|---|---|---|
| Month 1 | Research orientation, literature positioning, PerFRDiff feasibility, project management workflow | Clearer research gap, safer contribution framing, ECHO research workspace, tiny feasibility validation |
| Month 2 | Real data path, REACT/MARS dataset audit, train/val smoke tests, mini-overfit checks | Real-data loading, forward path, train-step path, checkpoint reload, 5-sample and 20-sample learning signal |
| Month 3 | Generic V0 baseline, REACT2026 baseline audit, Big-Five V1 design and controlled experiments | Locked no-personality baseline, official-scale Big-Five FiLM candidate, 5-seed matched controls, full validation export |

## 3. Month 1: Orientation, Literature Framing, and Feasibility

### 3.1 Adaptation to the research environment

In the first stage, I focused on adapting to the Monash research environment and understanding what counts as credible research progress. Instead of jumping directly into model changes, I worked on reading, scoping, documenting, and identifying what evidence would be needed before making any contribution claim.

The main personal and research workflow outcomes were:

- I established a regular working rhythm around literature notes, implementation logs, supervisor updates, and experiment summaries.
- I started using a structured project log style so that each experiment has a goal, inputs, actions, verification, result, decision, and next step.
- I built and updated the ECHO research workspace website to organise meeting logs, literature review, research notes, weekly progress, and generated documentation.
- I learned to separate engineering feasibility, baseline reproduction, local validation evidence, and official challenge claims.

### 3.2 Related-work positioning

A key early task was to position the project against existing work in multiple appropriate facial reaction generation and personalised reaction generation.

The important conclusion from `RELATED_WORK_POSITIONING.md` was that I should not claim first-method status for personalised facial reaction generation. PerFRDiff and PerReactor already study personalised facial reaction generation. The more defensible research gap is narrower:

> How should explicit Big-Five personality traits be integrated into a PerFRDiff-style personalised cognitive style and weight-editing pipeline?

This changed the framing of the project. Instead of saying that the project invents personalised reaction generation, the project became focused on personality-aware personalised weight editing and controlled evidence for whether Big-Five conditioning helps.

Concrete positioning decisions:

- Avoid claiming to be the first personalised facial reaction generation method.
- Treat PerFRDiff as the closest baseline.
- Treat Big-Five personality as the first explicit individual-level conditioning signal to test.
- Defer EEG because it is higher-dimensional, noisier, and harder to interpret.
- Prioritise a Big-Five-first adapter before any EEG adapter.

### 3.3 PerFRDiff baseline audit and tiny feasibility

Before using PerFRDiff as a research base, I audited the original code and built a constrained tiny-feasibility path. The purpose was to test whether the project could run end to end locally without pretending that tiny synthetic results were paper-level reproduction.

Completed early feasibility work included:

- PerFRDiff repository audit and pinned environment setup.
- Minimal Windows compatibility fixes for local execution.
- Synthetic shape-faithful tiny data preparation.
- Tiny diffusion training and evaluation.
- Tiny rewrite-weight training and evaluation.
- Single-process metric fallback where Windows multiprocessing was fragile.
- Explicit checkpoint handoff documentation for diffusion/rewrite paths.

The supervisor update summary described this stage as YELLOW:

- Engineering viability was confirmed.
- Official assets and paper-level reproduction remained blocked.
- The tiny results were useful for checking code paths, not for claiming benchmark performance.

### 3.4 Supervisor and group communication material

During the first stage, I also prepared communication material for supervisor discussion:

- Weekly supervisor update drafts.
- Evidence packs describing what had been verified.
- Research direction notes.
- Follow-up email drafts.
- Early slides and speaker notes for group discussion.

This helped me turn technical progress into research communication. It also made it easier to ask concrete supervisor questions instead of giving vague progress updates.

## 4. Month 2: Real REACT/MARS Data Path and Baseline Feasibility

### 4.1 Dataset access and storage strategy

The second stage focused on moving from synthetic tiny checks to real REACT/MARS-style data. The key dataset status file was `DATASET_ACCESS_STATUS.md`.

Important data-access milestones:

- REACT/MARS train and validation data access was received through an organiser OneDrive link.
- The visible folder was labelled `REACT2025` and contained train and validation archives.
- The initial policy was not to download everything blindly, but to download and inspect smaller feature archives first.
- Raw downloads were moved away from default browser download locations to dedicated data directories.
- The large raw video/audio archives were deferred where not required for first-stage feature checks.

The initial asset status was:

| Asset | Status at the time |
|---|---|
| REACT2025 train split | Available |
| REACT2025 validation split | Available |
| REACT2025 guideline documents | Downloaded and copied |
| REACT2026 personality data | Pending at first, later train/val personality became usable |
| REACT2026 EEG data | Pending / audit-only |
| REACT2026 baseline repo | Not public at first, later audited |

### 4.2 Small archive and modality inspection

I inspected the smaller dataset archives before attempting heavier runs.

Confirmed modalities and shapes:

- 25-D facial attributes.
- 58-D coefficients, with squeeze handling where the raw array was `[T, 1, 58]`.
- Speaker/listener archive pairing.
- Validation `facial-attributes`, `coefficients`, `audio-features`, and `video-face-crop`.
- Train `facial-attributes`, `coefficients`, `audio-features`, and `video-face-crop`.

Important compatibility finding:

- The official REACT2025 guideline layout is not directly the same as the old PerFRDiff expected layout.
- Official baseline routes do not require old CSV/neighbour matrices in the same way.
- Old PerFRDiff strict reproduction would need conversion or symlink layers.

This was important because it stopped the project from wasting time forcing incompatible layouts too early.

### 4.3 Validation dataloader and forward smoke

After the data audit, I verified the official-style validation path.

Completed validation checks:

- Validation split dataloader initialisation.
- Cross-modality alignment.
- One-batch forward smoke.
- Prediction shape checks.
- Finite-value checks.
- Validation train-step smoke.

The validation forward path demonstrated that the official validation data could be read and passed through a model path with correctly shaped outputs.

### 4.4 Train split audit and train-step smoke

I then moved from validation-only checks to the train split.

Train split checks completed:

- Train archives copied to D drive.
- Train archive integrity checked.
- Train extraction completed.
- Train modality alignment passed.
- Train dataloader smoke passed.
- A 5-step training smoke passed.
- Checkpoint save and reload passed.

This established a real-data training loop:

```text
real train data -> dataloader -> forward -> loss -> backward -> optimizer step -> checkpoint -> checkpoint reload
```

### 4.5 Five-sample real-data overfit

The 5-sample overfit was one of the first strong indicators that the real-data training path had a learning signal.

Source: `REACT2025_5SAMPLE_OVERFIT_RESULT_2026-05-11.md`

Protocol:

- Dataset: official `baseline_react2025` train split.
- Samples: 5 fixed train samples.
- Epochs: 10.
- Optimizer steps: 50.
- Device: CPU.
- Task: online facial reaction generation.

Input shapes:

| Tensor | Shape |
|---|---|
| Speaker audio | `(1, 60, 768)` |
| Speaker emotion | `(1, 60, 25)` |
| Speaker 3DMM | `(1, 60, 58)` |
| Listener emotion target | `(1, 30, 25)` |

Result:

```text
EPOCH_LOSS_START 11.858826
EPOCH_LOSS_FINAL 1.033172
EPOCH_LOSS_DELTA -10.825654
MINI_OVERFIT_OK
```

This confirmed:

- fixed train samples load correctly;
- model forward works;
- loss computation works;
- backward pass works;
- optimizer update works;
- checkpoint save and reload work;
- there is a clear learning signal on a fixed tiny subset.

### 4.6 Twenty-sample real-data overfit

I then expanded the mini-overfit from 5 samples to 20 samples.

Source: `REACT2025_20SAMPLE_OVERFIT_RESULT_2026-05-11.md`

Protocol:

- Samples: 20 fixed train samples.
- Epochs: 10.
- Optimizer steps: 200.
- Device: CPU.
- Learning rate: `1e-4`.

Result:

```text
EPOCH_LOSS_START 4.750627
EPOCH_LOSS_FINAL 1.300286
EPOCH_LOSS_DELTA -3.450340
MINI_OVERFIT_OK
```

This confirmed that the learning signal remained visible when moving from 5 samples to 20 samples. The loss was not strictly monotonic, which is expected for a stochastic diffusion-style path and small subsets, but the overall trend was clearly downward.

### 4.7 What Month 2 proved and did not prove

Month 2 proved:

- The real train and validation data path was usable.
- The baseline model path could consume real data.
- The train loop could perform forward, backward, optimizer, checkpoint save, and checkpoint reload.
- Small fixed subsets showed learning signal.
- The project could move beyond synthetic feasibility.

Month 2 did not prove:

- paper-level reproduction;
- official test-set performance;
- official pretrained checkpoint reproduction;
- full baseline training quality;
- personality or EEG effectiveness.

This distinction became important later, because it kept the project from over-claiming early smoke-test results.

## 5. Month 3: Generic V0, Official Baseline Audit, and Big-Five V1 Experiments

### 5.1 Generic Baseline V0

At the start of Month 3, I locked a clean local baseline called Generic Baseline V0.

Source: `GENERIC_V0_AND_BIGFIVE_V1_EXECUTION_SUMMARY_2026-06-02.md`

Purpose:

- provide a clean no-personality and no-EEG internal comparison baseline;
- avoid modifying the baseline during later Big-Five experiments;
- create a reproducible reference point for local validation and export.

Key Generic V0 outputs:

- `outputs/generic_v0_full/checkpoints/generic_v0_best.pt`
- `outputs/generic_v0_full/training_summary.json`
- `outputs/generic_v0_full_predictions/export_summary.json`
- `outputs/generic_v0_full_predictions/sanity_metrics.json`

Key metrics:

| Item | Value |
|---|---:|
| Train rows | 1660 |
| Validation rows | 571 |
| Epochs | 3 |
| Best epoch | 3 |
| Best validation MSE | 0.09828153169817394 |
| Validation export rows | 571 |
| Export MSE mean | 0.10239914980849117 |
| Export MAE mean | 0.21880757834781908 |

Export requirements:

- prediction shape rule: `[10, T, 25]`;
- all finite: true;
- all prediction shapes OK: true.

Decision:

- Generic V0 stays locked.
- Do not overwrite `outputs/generic_v0_full`.
- Use Generic V0 as the clean internal reference baseline.

### 5.2 Big-Five Adapter V1 decision

After Generic V0 was locked, I wrote the Big-Five Adapter V1 experiment decision document.

Experiment matrix:

| Branch | Purpose |
|---|---|
| Generic Baseline V0 | no-personality and no-EEG control |
| Big-Five Adapter V1 | real train/validation Big-Five conditioning |
| Shuffled Big-Five | checks whether arbitrary extra features or capacity help |
| Listener-ID baseline | checks whether identity memorisation explains gains |

Data policy:

- Train and validation personality labels are allowed.
- Test personality labels are forbidden for training and model selection.
- EEG remains audit-only and excluded from V1.

This was an important research-design step because the goal was not merely to add Big-Five features, but to test whether real listener personality adds value beyond extra capacity or random traits.

### 5.3 Official REACT2026 baseline audit

On 2026-06-04, I audited the official REACT2026 baseline package.

Source: `EXPERIMENT_LOG_2026-06.md` and `REACT2026_OFFICIAL_BASELINE_AUDIT_2026-06-04.md`

Actions completed:

- Extracted the official baseline into an isolated local folder.
- Created a non-destructive data bridge using directory junctions.
- Linked official baseline `external` resources to existing PerFRDiff external resources.
- Added dataloader smoke script.
- Ran dataloader-only smoke with `personal_condition_mode=3dmm_personality`.
- Explicitly disabled EEG.
- Avoided test split loading.

Dataloader smoke result:

| Split | Dataset rows | Checked samples | Speaker audio | Listener facial | Listener Big-Five |
|---|---:|---:|---|---|---|
| train | 1660 | 2 | `[256, 768]` | `[256, 25]` | `[5]` |
| val | 571 | 2 | `[256, 768]` | `[256, 25]` | `[5]` |

Key findings:

- The official baseline includes a Big-Five conditioning path through `perfrdiff_rewrite_weight`.
- Listener Big-Five loads correctly as a 5-D tensor.
- The official default Big-Five route uses `3dmm_personality`.
- Train and validation personality can be read through the data bridge.
- EEG was explicitly disabled for the smoke test.

Blocker found:

- The public pretrained package did not include all diffusion/person-specific checkpoints required for strict official reproduction.
- Local smoke checkpoints could not be used as substitutes because architecture shapes did not match.

Decision:

- Do not force mismatched local checkpoints into the official baseline.
- Do not treat official smoke output as a model result.
- Continue using Generic V0 as the locked internal comparison baseline.

### 5.4 CUDA 12.8 environment for RTX 5080

I also fixed the GPU environment blocker for the local RTX 5080.

Problem:

- Old environment used `torch 2.0.1+cu118`.
- Local GPU was `NVIDIA GeForce RTX 5080`, capability `(12, 0)` / `sm_120`.
- The old PyTorch build did not support `sm_120`.

Actions:

- Created `.venv_cuda128`.
- Installed PyTorch CUDA 12.8 wheels:
  - `torch==2.8.0+cu128`
  - `torchvision==0.23.0+cu128`
  - `torchaudio==2.8.0+cu128`
- Installed project dependencies.
- Added missing dependencies such as `shortuuid` and `beartype`.
- Verified CUDA matrix multiplication and `pip check`.

Verification:

| Item | Value |
|---|---|
| PyTorch | `2.8.0+cu128` |
| CUDA runtime | `12.8` |
| GPU | `NVIDIA GeForce RTX 5080` |
| Capability | `(12, 0)` |
| `sm_120` support | pass |
| CUDA matrix multiplication | pass |
| Official baseline GPU smoke | pass |

Decision:

- Use `.venv_cuda128` for GPU-backed smoke and future short training runs.
- Keep the old `.venv` as the previous known working environment.

### 5.5 Big-Five Adapter V1 smoke

The first Big-Five Adapter V1 smoke was designed to test whether train and validation personality could be joined safely to the existing manifests.

Actions:

- Added `scripts/bigfive_v1_lib.py`.
- Added `scripts/smoke_bigfive_adapter_v1.py`.
- Loaded train listener personality.
- Loaded validation listener personality.
- Joined personality to manifests by split, session, clip id, and listener role.
- Computed train-only personality normalisation statistics.
- Ran one CUDA train batch and one CUDA validation batch.

Smoke result:

| Item | Value |
|---|---:|
| Train rows loaded | 20 |
| Validation rows loaded | 20 |
| Train listener personality rows available | 1660 |
| Validation listener personality rows available | 571 |
| Personality tensor shape | `[4, 5]` |
| Train input shape | `[4, 256, 793]` |
| Train target shape | `[4, 256, 25]` |
| Train prediction shape | `[4, 256, 25]` |
| Validation prediction shape | `[4, 256, 25]` |
| Train loss | 0.22829177975654602 |
| Train MAE | 0.3290156424045563 |
| Validation loss | 0.12109174579381943 |
| Validation MAE | 0.25104740262031555 |

Leakage guards:

- test personality loaded: false;
- train split only: true;
- validation split only: true;
- EEG loaded: false;
- Generic V0 modified: false.

Decision:

- Big-Five V1 dataloader and adapter smoke was unblocked.
- Next step should be a controlled pilot, not a large uncontrolled run.

### 5.6 Big-Five controlled pilot and design sweep

After the smoke test, I moved into controlled pilots. The important point was that I did not simply add personality and report a number. I introduced comparison branches to test alternative explanations.

Controlled branches included:

- no personality;
- true Big-Five;
- shuffled Big-Five;
- listener-ID scaffold.

Later design sweeps and FiLM variants explored how Big-Five should enter the model. The best direction became a FiLM-style conditioning path rather than a simple concatenation-only approach.

### 5.7 Full-train controlled three-seed FiLM result

On 2026-06-06, I ran full-train controlled three-seed FiLM experiments.

Source: `BIGFIVE_V1_FILM_FULLTRAIN_CONTROLLED_3SEED_RESULT_2026-06-06.md`

Protocol:

- Train rows: 1660.
- Validation rows: 571.
- Conditions:
  - official-scale true Big-Five;
  - z-score true Big-Five;
  - zero Big-Five;
  - shuffled Big-Five.
- Seeds: 3.
- Epochs: 10.
- EEG: not used.
- Test personality: not used.

Cropped validation aggregate:

| Condition | Mean best val MSE | Mean best val MAE |
|---|---:|---:|
| official-scale true Big-Five | 0.096667 | 0.206050 |
| true z-score Big-Five | 0.097180 | 0.207308 |
| zero Big-Five | 0.097834 | 0.208520 |
| shuffled Big-Five | 0.098993 | 0.209508 |

Full-sequence export aggregate:

| Condition | Mean MSE | Std MSE | Mean MAE |
|---|---:|---:|---:|
| official-scale true Big-Five | 0.101740 | 0.000592 | 0.210241 |
| zero Big-Five | 0.102201 | 0.000573 | 0.211426 |
| Generic V0 full | 0.102399 | 0.000000 | 0.218808 |
| z-score true Big-Five | 0.102736 | 0.001457 | 0.211908 |
| shuffled Big-Five | 0.103386 | 0.000761 | 0.212237 |

Interpretation:

- Official-scale was the best all-seed full-export branch by mean MSE and MAE.
- True z-score had a strong single seed but was less stable.
- Zero remained close and needed to stay as a control.
- The result was local validation evidence, not an official challenge result.

### 5.8 No-condition identity control

On 2026-06-08, I added a no-condition identity control because a deep-review concern was that the gain might come from the FiLM pathway or extra capacity rather than personality content.

Source: `BIGFIVE_V1_NO_CONDITION_IDENTITY_CONTROL_RESULT_2026-06-08.md`

Control design:

- run: `film_no_condition_identity`;
- model family: FiLM;
- forward path: `forward_without_condition`;
- train and validation personality can still be loaded for join and guard checks only;
- no personality signal is used by the forward path.

Full-train protocol:

| Item | Value |
|---|---:|
| Train rows | 1660 |
| Validation rows | 571 |
| Seeds | 3 |
| Epochs | 10 |
| Hidden dim | 128 |
| Crop length | 256 |
| Batch size | 8 |

Safety:

- test personality loaded: false;
- EEG loaded: false;
- Generic V0 modified: false;
- official challenge result: false.

Cropped validation aggregate:

| Run | Mean best val MSE | Mean best val MAE |
|---|---:|---:|
| official-scale true Big-Five | 0.096667 | 0.206050 |
| true z-score Big-Five | 0.097180 | 0.207308 |
| zero Big-Five | 0.097834 | 0.208520 |
| no-condition identity | 0.098109 | 0.208789 |
| shuffled Big-Five | 0.098993 | 0.209508 |

Hierarchical validation readout:

| Comparison | Metric | Mean delta | 95% CI | Seed wins |
|---|---|---:|---|---:|
| official-scale - no-condition identity | MSE | -0.001466 | [-0.002245, -0.000619] | 3/3 |
| official-scale - shuffled | MSE | -0.002347 | [-0.003162, -0.001391] | 3/3 |
| official-scale - zero | MSE | -0.001188 | [-0.002006, -0.000339] | 3/3 |

Important caveat:

- No-condition identity was strong in the 120-sample official-style proxy.
- Therefore official-style proxy metrics still need alignment before stronger claims.

Blockwise diagnostics:

| Condition | All 25 MSE | AU MSE | VA MSE | Expression MSE |
|---|---:|---:|---:|---:|
| official-scale true Big-Five | 0.101172 | 0.119681 | 0.078240 | 0.072201 |
| no-condition identity | 0.102286 | 0.121403 | 0.075099 | 0.073238 |
| true z-score Big-Five | 0.101455 | 0.119162 | 0.078067 | 0.074101 |
| zero Big-Five | 0.101988 | 0.121244 | 0.075582 | 0.072485 |
| shuffled Big-Five | 0.102999 | 0.122204 | 0.076983 | 0.073493 |

Interpretation:

- Official-scale was best on all-25 and expression MSE.
- True z-score was best on AU MSE.
- No-condition identity was best on VA MSE.
- Official-scale's advantage over no-condition was mainly AU/expression, not valence-arousal.

### 5.9 Five-seed matched Big-Five extension

After the three-seed result and no-condition identity control, I extended the main comparison to five matched seeds.

Source: `BIGFIVE_V1_FILM_MATCHED_5SEED_EXTENSION_RESULT_2026-06-08.md`

Protocol:

- Model: Big-Five V1 FiLM adapter.
- Train rows: 1660.
- Validation rows: 571.
- Combined seeds: `20260661`, `20260662`, `20260663`, `20260664`, `20260665`.
- Conditions:
  - official-scale true Big-Five;
  - zero Big-Five;
  - shuffled Big-Five;
  - no-condition identity.
- Epochs: 10.
- Crop length: 256.
- Batch size: 8.
- Hidden dim: 128.
- Device: CUDA.

Safety:

- test personality loaded: false;
- EEG loaded: false;
- Generic V0 modified: false;
- official challenge result: false;
- train personality join: 1660 / 1660;
- validation personality join: 571 / 571.

Five-seed cropped validation aggregate:

| Run | Mean best val MSE | Mean best val MAE |
|---|---:|---:|
| official-scale true Big-Five | 0.097068 | 0.205434 |
| zero Big-Five | 0.097980 | 0.208921 |
| no-condition identity | 0.098257 | 0.209627 |
| shuffled Big-Five | 0.099136 | 0.208335 |

Seed-aware hierarchical bootstrap:

| Comparison | Metric | Mean delta | 95% CI | Seed wins |
|---|---|---:|---|---:|
| official-scale - no-condition identity | MSE | -0.001215 | [-0.001856, -0.000582] | 5/5 |
| official-scale - no-condition identity | MAE | -0.004166 | [-0.008551, -0.000205] | 4/5 |
| official-scale - shuffled | MSE | -0.002088 | [-0.002836, -0.001326] | 5/5 |
| official-scale - shuffled | MAE | -0.002901 | [-0.005338, -0.000642] | 4/5 |
| official-scale - zero | MSE | -0.000938 | [-0.001612, -0.000282] | 5/5 |
| official-scale - zero | MAE | -0.003564 | [-0.007103, -0.000398] | 4/5 |

Interpretation:

- Official-scale listener Big-Five FiLM has stronger five-seed local validation support.
- It beats zero, shuffled, and no-condition identity controls on MSE with 5/5 seed wins.
- Confidence intervals are below zero for MSE against all three controls.
- This remains local validation evidence, not an official challenge result.

### 5.10 Full-validation export five-seed extension

After the cropped validation result, I exported full validation predictions for the five-seed comparison.

Source: `BIGFIVE_V1_FULL_EXPORT_5SEED_RESULT_2026-06-08.md`

Protocol:

- Validation rows per run: 571.
- Seeds: five matched seeds.
- Conditions:
  - official-scale true Big-Five;
  - zero Big-Five;
  - shuffled Big-Five;
  - no-condition identity.
- Reactions per sample: 10.
- Required output shape: `[10, T, 25]`.

Safety:

- all finite: true;
- all prediction shapes OK: true;
- test personality loaded: false;
- EEG loaded: false;
- official challenge result: false;
- Generic V0 modified: false.

Five-seed full-sequence export aggregate:

| Condition | Mean MSE | Mean MAE | Mean diversity |
|---|---:|---:|---:|
| official-scale true Big-Five | 0.102098 | 0.209444 | 0.008144 |
| zero Big-Five | 0.102750 | 0.212741 | 0.008444 |
| no-condition identity | 0.103249 | 0.213226 | 0.008241 |
| shuffled Big-Five | 0.104126 | 0.211850 | 0.008181 |

Seed-aware full-export check:

| Comparison | Metric | Mean delta | 95% CI | Seed wins |
|---|---|---:|---|---:|
| official-scale - no-condition identity | MSE | -0.001146 | [-0.002039, -0.000344] | 5/5 |
| official-scale - shuffled | MSE | -0.002039 | [-0.002948, -0.001154] | 5/5 |
| official-scale - zero | MSE | -0.000656 | [-0.001501, 0.000161] | 4/5 |

Interpretation:

- Full-sequence export was consistent with cropped-validation direction.
- Official-scale true Big-Five remained best by mean MSE.
- It clearly beat no-condition and shuffled controls on full-export MSE.
- The zero-control comparison was positive but more conservative because the full-export MSE CI slightly crossed zero.

### 5.11 Official baseline repository update audit

On 2026-06-08, I checked the updated official `reactmultimodalchallenge/baseline_react2026` repository.

Source: `REACT2026_OFFICIAL_BASELINE_UPDATE_AUDIT_2026-06-08.md`

Findings:

- The official repo now includes `REACT_2026_Baseline (1).pdf`.
- New config sections were added:
  - `generic_online`;
  - `generic_offline`;
  - `personalized_online`;
  - `personalized_offline`;
  - `shared`.
- Official personalized PerFRDiff supports:
  - `3dmm_only`;
  - `personality_only`;
  - `3dmm_personality`.
- Official Big-Five columns are:
  - `Extraversion`;
  - `Agreeableness`;
  - `Conscientiousness`;
  - `Neuroticism`;
  - `Openness`.
- Official Big-Five normalization is `(score - 1.0) / 4.0`.
- This matches the current official-scale branch.
- Official code includes EEG dataloader support and EEG metrics.
- EEG remains audit-only for this project stage.
- Official-style metric code is available in:
  - `framework/utils/compute_metrics.py`;
  - `framework/utils/baseline_reaction_metrics.py`.

Decision:

- No completed training code or experiment outputs were changed.
- Generic V0 remains locked.
- Big-Five V1 remains valid local validation/export evidence.
- The next useful step is official metric alignment, not another large training run.

## 6. Research Management and Communication Outputs

### 6.1 ECHO research workspace

In parallel with the experiments, I maintained the ECHO project management website for research progress tracking.

The workspace now includes:

- Meetings and logs.
- Literature review.
- Research notes.
- Weekly progress.
- Firestore-backed module notes.
- Research timeline.
- Current candidate status.
- Three-month review HTML page.
- 3-month review reference copy and printable interface.

Recent ECHO updates included:

- Updating the timeline through 2026-06-08.
- Marking Official-Scale FiLM as the main V1 candidate.
- Marking Metric Alignment as the next gate.
- Adding 30 seeded Firestore research notes.
- Adding a `/three-month-review` page with review Q&A, draft response, copy button, and print support.

### 6.2 Wednesday group meeting preparation

I prepared a group meeting packet for 2026-06-10.

The one-sentence progress statement was:

> This week, the project moved from a runnable engineering baseline to a controlled experimental comparison for Big-Five conditioning.

The clean meeting claim was:

> Official-scale listener Big-Five FiLM is the current main local-validation candidate. It consistently outperforms shuffled and no-condition controls across five matched seeds, and remains best after full validation export. However, this is not yet an official challenge result, and official-style metric alignment remains the next key step.

The meeting material included:

- project target and required output shape `[10, T, 25]`;
- Generic V0 locked baseline status;
- Big-Five V1 controlled experiment design;
- five-seed cropped-validation evidence;
- five-seed full-validation export evidence;
- caveats and supervisor questions;
- suggested slide flow;
- English and Chinese speaking notes.

## 7. Review Questions and Direct Answers

### 7.1 Have I adapted to Monash?

Yes. I have adapted well to the Monash research environment, academic expectations, and day-to-day research rhythm. I have built a structured workflow for reading, implementation, experiment logging, supervisor updates, and progress presentation. I do not have any major concern about settling in.

### 7.2 Have I integrated into the research community?

Yes. I have been integrating through regular supervisor interaction, group-meeting preparation, research discussion, literature review, and progress sharing. I have also learned how to present work with evidence, caveats, and next-step questions.

### 7.3 Is my research direction clear?

Yes. The research direction is now clear:

> personality-aware personalised facial reaction generation, focused first on Big-Five conditioning in a PerFRDiff/REACT-style pipeline.

The project has moved from a broad interest in multimodal affective AI to a concrete experimental question:

> Does explicit listener Big-Five conditioning improve personalised facial reaction generation beyond baseline, zero, shuffled, and no-condition controls?

### 7.4 Are resources and equipment sufficient?

Yes. The resources and equipment are sufficient for the current stage. I have access to local project storage, real train/validation data, a working CUDA 12.8 environment for the RTX 5080, the ECHO documentation workflow, and university support channels. Larger official reproduction or long-running training may still benefit from university compute/storage later, but there is no immediate blocker for the current research stage.

### 7.5 Do I meet my supervisor regularly?

Yes. I have regular supervisor contact and prepare structured materials for discussion, including weekly updates, evidence summaries, decision notes, and meeting-prep documents.

### 7.6 Is supervisor guidance sufficient?

Yes. Supervisor guidance has been sufficient and useful. It helped me keep the project scoped, avoid premature claims, prioritise strong controls, and separate engineering feasibility from research evidence.

### 7.7 Have I considered internship opportunities?

Yes. I am aware that internship or industry engagement may be useful. At this stage, my immediate priority is to stabilise the research direction, strengthen the experimental evidence, align official metrics, and prepare clearer research outputs. I will keep internship options in mind as the project becomes more mature.

### 7.8 Do I know about library, study skills, English support, and EndNote support?

Yes. I am aware that Monash provides library services, study skills support, English language support, and EndNote or referencing help. I know these services are available if I need support for literature search, academic writing, study planning, English communication, or reference management.

### 7.9 Do I know my annual leave rights?

Yes. I understand that annual leave is available under university candidature arrangements and should be planned responsibly with supervisor communication and project timing in mind.

## 8. Current Research Status

### 8.1 What is solid now

The project has solid evidence for:

- a working real-data train/validation path;
- baseline training feasibility;
- checkpoint save/reload feasibility;
- Generic V0 locked no-personality baseline;
- train/validation Big-Five personality joining;
- Big-Five adapter smoke tests;
- controlled Big-Five V1 experiments;
- official-scale FiLM as the current best local-validation candidate;
- five-seed matched control evidence;
- full validation export in required `[10, T, 25]` format;
- conservative interpretation and caveat tracking.

### 8.2 What should not be claimed yet

I should not claim:

- official challenge improvement;
- paper-level PerFRDiff reproduction;
- final benchmark performance;
- definitive personality causality;
- EEG-conditioned generation;
- test-set personality training;
- official test-set evaluation.

### 8.3 Main caveats

Current caveats:

- Official-style metric alignment is still the next gate.
- The no-condition identity branch was strong in a 120-sample official-style proxy.
- Some improvements are block-specific rather than uniform across AU, VA, and expression dimensions.
- Official pretrained diffusion/person-specific checkpoints were not fully available in the public package at the time of audit.
- EEG remains audit-only and has not been used for V1.

## 9. Next Three-Month Plan

### 9.1 Metric alignment

The next priority is to align local validation/export metrics with official-style evaluation. This includes:

- auditing official metric code;
- checking input/output assumptions;
- comparing local proxy metrics with official metric definitions;
- deciding which metrics should drive branch selection;
- avoiding over-reliance on MSE alone if official metrics emphasise FRC, FRD, TLCC, FRVar, or related scores.

### 9.2 Final V1 candidate package

If metric alignment supports the current direction, the next step is to prepare a clean V1 candidate package:

- official-scale Big-Five FiLM checkpoint selection;
- full validation exports;
- clear configuration files;
- prediction shape verification;
- finite-value verification;
- control comparison table;
- report-ready figures.

### 9.3 Controlled reporting

Future reports should keep the following controls in every result table:

- Generic V0;
- official-scale true Big-Five;
- zero Big-Five;
- shuffled Big-Five;
- no-condition identity;
- possibly true z-score Big-Five where useful.

### 9.4 Writing and supervision questions

The next writing goal is to convert logs into a structured research report:

- background and research gap;
- data and task definition;
- baseline and controls;
- Big-Five conditioning design;
- local validation results;
- full export results;
- official metric caveats;
- next experiment plan.

Suggested supervisor questions:

1. Is official-scale Big-Five FiLM safe to present as the current V1 local-validation candidate?
2. Is the no-condition identity control sufficient for checking whether FiLM capacity alone explains the gain?
3. Should the next priority be official-style metric alignment or final V1 export preparation?
4. How should blockwise AU, VA, and expression diagnostics be presented?
5. When should EEG move from audit-only to a real experimental branch?

## 10. Source Logs and Evidence Files

The report is based on the following project logs and generated documents.

### Research framing

- `RELATED_WORK_POSITIONING.md`
- `SUPERVISOR_UPDATE_WEEKLY.md`
- `GO_NO_GO_DECISION.md`
- `EXTENSION_PLAN.md`

### Data and baseline feasibility

- `DATASET_ACCESS_STATUS.md`
- `REACT2025_SMALL_ARCHIVE_INSPECTION_2026-05-08.md`
- `REACT2025_BASELINE_DATALOADER_AUDIT_2026-05-08.md`
- `REACT2025_VAL_DATALOADER_SMOKE_RESULT_2026-05-08.md`
- `REACT2025_VAL_FORWARD_SMOKE_RESULT_2026-05-08.md`
- `REACT2025_VAL_TRAIN_STEP_SMOKE_RESULT_2026-05-08.md`
- `REACT2025_TRAIN_ARCHIVE_INTEGRITY_REPORT_2026-05-08.md`
- `REACT2025_TRAIN_MINI_SMOKE_RESULT_2026-05-11.md`
- `REACT2025_5SAMPLE_OVERFIT_RESULT_2026-05-11.md`
- `REACT2025_20SAMPLE_OVERFIT_RESULT_2026-05-11.md`

### Generic V0 and Big-Five V1

- `GENERIC_BASELINE_V0_LOCK_2026-06-02.md`
- `GENERIC_BASELINE_V0_RESULT_2026-06-02.md`
- `GENERIC_V0_AND_BIGFIVE_V1_EXECUTION_SUMMARY_2026-06-02.md`
- `BIG_FIVE_ADAPTER_V1_EXPERIMENT_DECISION_2026-06-02.md`
- `BIG_FIVE_ADAPTER_V1_IMPLEMENTATION_PLAN_2026-06-02.md`
- `BIGFIVE_ADAPTER_V1_SMOKE_RESULT_2026-06-04.md`
- `BIGFIVE_ADAPTER_V1_CONTROLLED_PILOT_RESULT_2026-06-04.md`
- `BIGFIVE_ADAPTER_V1_DESIGN_SWEEP_RESULT_2026-06-04.md`
- `BIGFIVE_ADAPTER_V1_FULLVAL_MULTISEED_RESULT_2026-06-04.md`
- `BIGFIVE_ADAPTER_V1_1_FILM_CONFIRMATORY_RESULT_2026-06-05.md`
- `BIGFIVE_V1_CONTROL_EVIDENCE_2026-06-05.md`
- `BIGFIVE_V1_MATCHED_PROTOCOL_ABLATION_RESULT_2026-06-05.md`
- `BIGFIVE_V1_MATCHED_PROTOCOL_5SEED_RESULT_2026-06-06.md`
- `BIGFIVE_V1_FILM_FULLTRAIN_CONTROLLED_3SEED_RESULT_2026-06-06.md`
- `BIGFIVE_V1_NO_CONDITION_IDENTITY_AND_HIERARCHICAL_PREP_2026-06-08.md`
- `BIGFIVE_V1_NO_CONDITION_IDENTITY_CONTROL_RESULT_2026-06-08.md`
- `BIGFIVE_V1_BRANCH_PROMOTION_MEMO_2026-06-08.md`
- `BIGFIVE_V1_FILM_MATCHED_5SEED_EXTENSION_RESULT_2026-06-08.md`
- `BIGFIVE_V1_FULL_EXPORT_5SEED_RESULT_2026-06-08.md`
- `BIGFIVE_V1_5SEED_REPORT_FIGURE_NOTES_2026-06-08.md`

### Official baseline and meeting preparation

- `REACT2026_OFFICIAL_BASELINE_AUDIT_2026-06-04.md`
- `CUDA128_GPU_ENV_RESULT_2026-06-04.md`
- `REACT2026_REVIEW_NOTES_2026-06-05.md`
- `REACT2026_OFFICIAL_BASELINE_UPDATE_AUDIT_2026-06-08.md`
- `WEDNESDAY_GROUP_MEETING_PREP_2026-06-10.md`
- `EXPERIMENT_LOG_2026-06.md`

## 11. Short Version for Review Form

Over the first three months, I adapted well to Monash and established a clear research workflow. I moved from literature review and research framing into runnable engineering validation for personalised facial reaction generation. I first audited PerFRDiff and related MAFRG work, then clarified that the defensible research gap is not generic personalised reaction generation, but Big-Five-aware personalised weight editing in a PerFRDiff-style pipeline.

Technically, I validated the real REACT/MARS train and validation data path, including dataloader checks, forward smoke tests, train-step smoke tests, checkpoint save/reload, and 5-sample and 20-sample mini-overfit experiments. I then locked Generic Baseline V0 as a no-personality/no-EEG comparison baseline, audited the official REACT2026 baseline, fixed the CUDA 12.8 GPU environment for the RTX 5080, and implemented controlled Big-Five V1 experiments.

The current main result is that official-scale listener Big-Five FiLM is the strongest local-validation candidate under matched controls. Across five matched seeds, it outperforms zero, shuffled, and no-condition identity controls on cropped validation MSE, and remains best by mean MSE after full validation export. I am keeping the claim conservative because official-style metric alignment is still required before claiming official challenge improvement.

I have regular supervisor contact, sufficient guidance, adequate current resources, and no major concern about adaptation. I am aware of Monash support services including library, study skills, English support, EndNote/reference support, and annual leave arrangements. I have considered internship options, but my immediate priority is to stabilise the research evidence and prepare the next-stage report.
