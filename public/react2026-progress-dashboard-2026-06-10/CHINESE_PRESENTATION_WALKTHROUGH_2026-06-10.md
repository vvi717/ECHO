# REACT2026 Progress Dashboard 中文讲解稿 - 2026-06-10

用途：这份稿子是给你自己看的中文讲稿。网页本身保持全英文，给导师看；你可以按这份稿子的逻辑，用英文向导师解释每一页。

核心口径：这不是 official challenge result，而是 local validation / export evidence。我的贡献是把项目从“能跑”推进到“有安全边界、有 clean baseline、有受控 Big-Five 实验证据、并且能导出符合挑战格式的预测结果”。

安全 claim：不要说 `Big-Five definitely works`，不要说 `This is the official result`，也不要说它在所有设置里稳定显著击败所有 control。更稳的英文说法是：

> The current evidence suggests that listener Big-Five conditioning is a promising V1 direction under local validation and export checks, but I am not claiming this as an official challenge-level result yet.

如果提到 `official-scale`，第一次出现时要立刻定义：

> Here, official-scale only means the Big-Five scores are normalized from the official 1-5 scale to 0-1. It does not mean this is an official leaderboard result.

如果导师注意到 bar chart 的 y-axis 或数值差异比较小，可以主动补一句：

> The absolute MSE differences are small, so I treat this as a consistent controlled signal rather than a large performance jump.

---

## 开场 30 秒

可以这样讲：

这份网页主要汇报我这周在 REACT2026 listener facial reaction generation 上的进展。任务目标是根据 speaker behaviour 生成 10 条可能的 listener facial reaction sequence，输出格式是 `[10, T, 25]`。我这周的重点不是单纯多跑训练，而是把实验设计变得更可解释：先锁定一个不使用 personality、不使用 EEG 的 clean baseline，然后在这个基线上测试 listener Big-Five conditioning 是否真的带来稳定提升。

我要强调的是，目前结果是本地 validation 和 export 层面的证据，还不是官方 challenge 排名结果。下一步需要和官方 baseline 代码里的 evaluation metrics 对齐。

研究贡献一句话：

我建立了一个安全、可复现、受控的 Big-Five conditioning 实验流程，并且在 5 个 matched seeds 上观察到 official-scale listener Big-Five FiLM 相比 shuffled / no-condition controls 有更稳定的正向信号。

---

## Page 01 - Overview

网页标题：`From runnable baseline to controlled Big-Five evidence`

这一页要表达什么：

这一页是总览页。它告诉导师：项目已经不是停留在 smoke test 或“代码能跑”的阶段，而是有了 clean baseline、controlled Big-Five experiment、5-seed validation，以及 full validation export。

你可以这样讲：

这一页是整个项目目前状态的 summary。我这周主要完成了三件事。第一，我把 Generic V0 锁定成 clean baseline，它不使用 personality，也不使用 EEG。这样后面任何 Big-Five 的提升都有一个干净的参照组。第二，我实现并训练了 Big-Five V1 的 controlled comparison，包括 true Big-Five、zero Big-Five、shuffled Big-Five 和 no-condition identity。第三，我把实验从单次或少量 seed 扩展到 5 个 matched seeds，并且完成了 571 个 validation samples 的 full-sequence export。

页面上四个数字怎么解释：

- `5`：Big-Five V1 的主要实验已经在 5 个 matched seeds 上做了对照。这里 matched 的意思是不同条件使用同一组 seed，减少随机性造成的不公平比较。
- `571`：每次 full validation export 都覆盖 571 个 validation samples，不是只看少量样本。
- `[10,T,25]`：导出的预测结果符合 challenge 要求，每个输入生成 10 条 reaction，每条长度是 T，每帧 25 维 facial attributes。
- `0`：训练中没有使用 test personality，也没有使用 EEG。这是安全边界。

这一页的研究贡献：

这页的贡献是“实验状态可控”。我不是只报告一个模型分数，而是先说明 baseline、数据边界、输出格式和验证规模都已经建立起来了。

如果导师问“这是不是官方结果？”：

你可以回答：不是。目前是 local validation / full-export evidence。它说明方法方向有希望，但还需要 official-style metric alignment 之后才能做更强的 challenge-level claim。

---

## Page 02 - Workflow

网页标题：`Complete project flow`

这一页要表达什么：

这一页展示从 challenge target 到当前实验设计的完整流程。导师能看到你不是随机加模块，而是按任务目标一步一步推进。

你可以这样讲：

这一页解释整个 pipeline。REACT2026 的目标是从 speaker behaviour 生成 listener reaction。我的 clean baseline 使用 speaker audio features 和 speaker facial attributes 作为输入，预测 listener facial attributes。之后我加入 Big-Five conditioning，测试 listener personality 是否能帮助模型生成更合适的 listener response。

每一步怎么讲：

1. `Challenge target`

任务是根据 speaker behaviour 生成 10 条 plausible listener facial reactions。这个任务天然是一对多的，因为同一个 speaker 行为可能对应多个合理的 listener 反应。

2. `Clean baseline`

Generic V0 是一个不使用 personality、不使用 EEG 的基线。它只使用 speaker 端信息，所以它是后续 personality 方法的干净对照。

3. `Personality conditioning`

Big-Five V1 的假设是：listener 的 Big-Five trait 可能影响 listener 的反应风格。例如有些 listener 可能更外向，面部反应幅度或模式可能不同。因此我把 Big-Five 作为 conditioning signal 加入模型。

4. `Controls and leakage checks`

这里很关键。我没有只训练 true Big-Five 模型，而是加入 zero、shuffled、no-condition controls。这样可以判断提升到底是不是来自真实 personality，而不是来自模型容量增加、随机 trait 或 adapter 本身。

5. `Export and next decision`

最后一步是导出 `[10,T,25]` 格式的 full validation predictions，然后和官方 evaluation path 对齐。也就是说，我现在已经有可提交格式的本地预测结果，但还需要官方指标校准。

这一页的研究贡献：

这页体现的是“从任务定义到实验设计的闭环”。我的工作不仅是训练模型，还包括数据安全、baseline、控制实验和导出格式验证。

---

## Page 03 - Experiment Design

网页标题：`Controlled experiment design`

这一页要表达什么：

这一页是研究设计的核心。它告诉导师：Big-Five V1 的结果不是孤立分数，而是通过多个 control 来判断是否可解释。

你可以这样讲：

这一页是我认为最重要的实验设计页。因为 personality conditioning 很容易出现误判：模型可能不是学到了 personality，而只是因为多了一个 adapter、多了参数，或者随机输入也能提升。因此我设计了四组对照。

四个实验怎么解释：

1. `Official-scale Big-Five`

这是主实验。它使用 listener 的真实 Big-Five traits，并且按照官方代码确认的方式，把 1-5 分数归一化到 0-1。这里的 `official-scale` 只表示归一化方式来自官方口径，不表示 official leaderboard result。这个分支目前是 Big-Five V1 的主要候选。

2. `Zero Big-Five`

这个 control 把 Big-Five vector 置零。它用来检查：如果只是多了 FiLM adapter 的容量，模型是不是也会提升。如果 true Big-Five 明显好于 zero，说明真实 trait 信息可能有额外贡献。

3. `Shuffled Big-Five`

这个 control 把 Big-Five trait 打乱。它用来检查：是不是随便给一个 personality vector 都能提升。如果 true Big-Five 好于 shuffled，说明 trait 和 listener 的对应关系是有用的。

4. `No-condition identity`

这个 control 保留结构或通路，但不提供 personality conditioning。它用来检查：是不是 FiLM pathway 本身就带来了提升，而不是 personality 信息。

页面下面三个 note 怎么讲：

- `Protected baseline`：Generic V0 不再被改动，作为 clean comparison baseline。
- `Data boundary`：train 用 train personality，validation 用 validation personality 做 evaluation，test personality 不进入 training 或 model selection。
- `Current caveat`：本地验证结果有希望，但还不能直接当成官方结果；而且 MSE 的绝对差异不大，所以要讲成 consistent controlled signal，不要讲成 large performance jump。

这一页的研究贡献：

这页的贡献是“可解释的实验设计”。我不是简单地说 Big-Five 有用，而是通过 controls 来排除几个常见的伪提升来源。

---

## Page 04 - Evidence Explorer

网页标题：`Evidence explorer`

这一页要表达什么：

这一页展示 5 个 matched seeds 下的 cropped-validation evidence。导师可以切换 MSE ranking、MAE ranking 和 hierarchical confidence interval。

你可以这样讲：

这一页是主要 evidence。这里我不是只跑一个 seed，而是用 5 个 matched seeds 比较四个条件。结果显示 official-scale true Big-Five 在 cropped-validation MSE 上是最好的。

表格怎么讲：

- official-scale true Big-Five: MSE `0.097068`, MAE `0.205434`
- zero Big-Five: MSE `0.097980`, MAE `0.208921`
- no-condition identity: MSE `0.098257`, MAE `0.209627`
- shuffled Big-Five: MSE `0.099136`, MAE `0.208335`

你可以这样解释：

MSE 越低越好。从结果看，true Big-Five 的 mean MSE 最低。更重要的是，它不是只比一个 control 好，而是同时优于 zero、shuffled 和 no-condition。尤其是 shuffled control 很关键，因为它说明不是任意 personality vector 都有效，而是正确匹配 listener 的 trait 更有帮助。

这里的语气要稳：可以说 `true Big-Five is the best in the 5-seed mean cropped-validation comparison`，不要说 `Big-Five definitely works`。

关于 chart tabs：

- `MSE ranking`：显示主要指标上各条件排序，true Big-Five 最好。
- `MAE ranking`：作为 sanity metric，也支持 true Big-Five 方向。但不要说所有 control 的 MAE 排序和 MSE 完全一致，因为 control 之间的排序不是核心 claim。
- `Hierarchical CI`：这是更严谨的比较。负值表示 true Big-Five 更好。如果 confidence interval 在 0 以下，说明这个方向在 seed-aware bootstrap 下比较稳定。不要说 `statistically proven`，更稳的说法是 `provides additional evidence that the MSE deltas are consistently negative in cropped validation`。

这一页的研究贡献：

这页的贡献是“从单次结果推进到多 seed controlled evidence”。我可以更有底气地说：Big-Five conditioning 在本地 validation 上有稳定信号，而不是随机 seed 的偶然结果。

如果导师问“这个 improvement 大吗？”：

你可以回答：不大，绝对 MSE improvement 是 modest。cropped validation 上 true Big-Five 相比 zero 大约低 `0.000912` MSE，相比 shuffled 大约低 `0.002068` MSE；full export 上相比 zero 大约低 `0.000652` MSE，相比 shuffled 大约低 `0.002028` MSE。所以重点不是“提升很大”，而是 matched controls 下方向一致，control design 排除了一些替代解释。下一步会用 official metrics 判断这个信号是否在 challenge-style evaluation 下仍然成立。

---

## Page 05 - Full Export

网页标题：`Full-validation export check`

这一页要表达什么：

这一页说明模型不仅在 cropped validation 上有结果，也能完成完整 validation set 的 prediction export，并且输出格式、有限值检查都通过。

你可以这样讲：

这一页验证的是工程完整性和结果可用性。很多模型在 cropped sequence 上能训练，但不一定能稳定导出完整 validation set。因此我做了 full validation export：每个 run 覆盖 571 个 validation samples，每个 sample 输出 10 条 reaction，形状是 `[10,T,25]`。

表格怎么讲：

- official-scale true Big-Five: MSE `0.102098`, MAE `0.209444`
- zero Big-Five: MSE `0.102750`, MAE `0.212741`
- no-condition identity: MSE `0.103249`, MAE `0.213226`
- shuffled Big-Five: MSE `0.104126`, MAE `0.211850`

你可以这样解释：

在 full validation export 上，true Big-Five 仍然是 mean MSE 最好的分支。这说明它不是只在 cropped validation 中表现好，完整序列导出后方向仍然保持。但这一页更应该讲成工程完整性和 submission-shape check，不要讲成最终官方评估结论。

页面上的 conservative detail 怎么讲：

这里要谨慎。true Big-Five 对比 zero Big-Five 是正向的，但 full-export 的 MSE confidence interval 对 zero comparison 稍微跨过 0。所以我不会夸大这个结论。更强的 claim 应该是：true Big-Five 在 full export 里最稳的证据来自 shuffled 和 no-condition controls；zero control 是 directionally positive，但需要谨慎表述。

这一页的研究贡献：

这页的贡献是“结果从训练验证推进到可导出的预测文件”。这对 challenge 很重要，因为最终不是只看训练 loss，而是要生成符合 `[10,T,25]` 的多反应输出。

如果导师问“为什么 full export MSE 比 cropped validation 高？”：

你可以回答：full export 覆盖完整序列和全部 validation samples，难度更高，也更接近真实评估；cropped validation 更适合训练过程中的局部比较。因此 full export 更适合检查最终可用性。

---

## Page 06 - Next Steps

网页标题：`Next research steps`

这一页要表达什么：

这一页不是 meeting plan，而是说明下一步研究如何从 local evidence 走向更可靠的 final claim。

你可以这样讲：

这一页是下一步计划。现在 Big-Five V1 已经有比较稳定的 local validation evidence，所以我不打算盲目继续大训练。更合理的下一步是把当前结果和官方 baseline 代码、baseline paper、official metrics 对齐。

四个 next steps 怎么讲：

1. `Official metric alignment`

我需要把当前导出的 predictions 和官方 baseline 代码里的 metrics 对齐。官方代码里有 `compute_metrics.py` 和 baseline reaction metrics。下一步要确认我的本地评估和官方-style evaluation 口径一致。

2. `Baseline paper cross-check`

官方 baseline paper 已经发布在仓库里。我需要仔细读它，确认任务定义、评估指标、baseline 设置和我现在网页里的 claim 是否一致。如果有措辞需要调整，我会更新。

3. `V1 candidate package`

如果 official metric alignment 没有发现问题，我会把当前 Big-Five V1 candidate 固定下来，包括 configs、seeds、summary、export checks 和 result tables。这样它就可以作为后续实验和论文写作的一个稳定版本。

4. `EEG boundary`

虽然官方代码现在有 EEG loader 和 EEG metrics，但我暂时不把 EEG 加进训练。原因是当前主线是 facial reaction generation + Big-Five conditioning。EEG 如果太早加入，会让实验变量变多，降低可解释性。所以 EEG 继续 audit-only。

右侧 `What this page demonstrates` 怎么讲：

这部分是给导师看的总结：

- `Progress`：项目现在已经有 clean baseline、controlled Big-Five comparison、5 matched seeds 和 full validation export。
- `Evidence`：主分支在 cropped validation 和 full export 中都优于 shuffled 和 no-condition controls；zero-control 方向是正的，但 full export 里要更谨慎。
- `Caveat`：现在还不是 official challenge result，必须等 official metric path 对齐后再做更强 claim。

这一页的研究贡献：

这页的贡献是“研究节奏可控”。我知道现在不应该继续堆训练，而是应该先做 evaluation alignment 和 result packaging。这样后续的结论更可信，也更适合写进 thesis / paper。

---

## 最后总结 45 秒

可以这样收尾：

总结来说，我这周的主要进展是把 REACT2026 项目从工程可运行推进到了受控证据链阶段。我先锁定了 Generic V0 作为 clean no-personality/no-EEG baseline，然后围绕 listener Big-Five 设计了 true、zero、shuffled 和 no-condition controls。现在 official-scale Big-Five FiLM 是一个 promising local-validation candidate：它在 matched cropped-validation comparison 中表现最好，并且 full validation export 也保持 mean MSE 最低。所有导出都符合 `[10,T,25]` 格式，而且没有使用 test personality 或 EEG。

我的当前结论是：listener Big-Five conditioning 是一个有希望的 V1 方向，但现在仍然是 local validation / export evidence。最强证据来自 shuffled 和 no-condition controls；zero-control 在 full export 中是 positive but cautious。下一步我会优先做 official metric alignment，并结合新发布的 official baseline paper 调整实验 claim。只有在这个步骤完成后，我才会把它表述成更接近 challenge-level 的结果。

---

## 你可以强调的研究贡献

1. 建立了 clean baseline：Generic V0 不使用 personality、不使用 EEG，作为后续实验参照。
2. 建立了安全数据边界：test personality 不进入训练或 model selection。
3. 提出了可解释的 Big-Five V1 实验设计：true / zero / shuffled / no-condition controls。
4. 做了 5-seed matched comparison：减少单 seed 偶然性。
5. 完成 full validation export：571 samples，每个输出 `[10,T,25]`。
6. 保持谨慎结论：明确区分 local validation evidence 和 official challenge result。
7. 下一步方向明确：official metric alignment、baseline paper cross-check、V1 candidate packaging。

---

## 最容易被导师问到的问题

### Q1: 你的主要发现是什么？

主要发现是 official-scale listener Big-Five FiLM 在本地 validation 中比 shuffled 和 no-condition controls 更稳定，说明 listener personality 可能对 facial reaction generation 有帮助。

### Q2: 这是不是说明 Big-Five 一定有效？

还不能这么说。目前是 local validation evidence，不是 official challenge result。下一步需要和官方 metric 对齐，并看这个优势在 official-style evaluation 下是否保持。

### Q3: 为什么不直接加入 EEG？

因为 EEG 会引入新的 modality 和新的不确定性。现在 Big-Five V1 还在建立主要证据链，如果同时加入 EEG，会让实验更难解释。所以 EEG 先 audit-only。

### Q4: 为什么需要 shuffled control？

shuffled control 用来证明不是任意 personality vector 都能提升。如果 true Big-Five 好于 shuffled，说明 personality 和 listener 的正确对应关系可能有用。

### Q5: 你的下一步最重要是什么？

最重要的是 official metric alignment。也就是确认我的 local evaluation 和官方 baseline 的 evaluation 口径一致，然后再决定如何包装 V1 candidate。

### Q6: Where is Generic V0 in this table?

可以这样答：

> Generic V0 is protected as the clean no-personality/no-EEG baseline. The plots here focus on controlled ablations inside Big-Five V1. The next step is to package the V1 candidate and compare it under the aligned official-style metrics.

不要直接说 `Big-Five beats Generic V0`，除非你现场展示已经对齐的 Generic V0 official-style metric 表。

### Q7: Can you show the five seeds?

可以打开 backup 文件：

- `SEED_LEVEL_BACKUP_TABLE_2026-06-10.md`
- `SEED_LEVEL_BACKUP_TABLE_2026-06-10.csv`

这两个文件放在 dashboard 同一个文件夹里。它们包含 cropped validation 和 full validation export 的 per-seed MSE / MAE，以及 true Big-Five 相对 zero / shuffled / no-condition 的 delta。
