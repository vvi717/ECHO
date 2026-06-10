# REACT2026 Big-Five V1 Seed-Level Backup Table - 2026-06-10

Purpose: backup table for supervisor questions such as "Can you show the five seeds?" This file supports the HTML dashboard but is not part of the main presentation flow.

Interpretation: negative delta means the true Big-Five condition is better than the comparison condition. The main claim should remain conservative: this is local validation / export evidence, not an official challenge result.

### Cropped validation best-checkpoint metrics

| Seed | Condition | MSE | MAE | Delta MSE: true - condition | Delta MAE: true - condition |
|---|---|---:|---:|---:|---:|
| 20260661 | true Big-Five | 0.096671 | 0.204723 | 0.000000 | 0.000000 |
| 20260661 | zero Big-Five | 0.097997 | 0.206246 | -0.001326 | -0.001523 |
| 20260661 | shuffled Big-Five | 0.099287 | 0.208333 | -0.002616 | -0.003610 |
| 20260661 | no-condition identity | 0.098322 | 0.208379 | -0.001651 | -0.003656 |
| 20260662 | true Big-Five | 0.097008 | 0.206912 | 0.000000 | 0.000000 |
| 20260662 | zero Big-Five | 0.097439 | 0.206555 | -0.000431 | 0.000357 |
| 20260662 | shuffled Big-Five | 0.098535 | 0.206371 | -0.001527 | 0.000540 |
| 20260662 | no-condition identity | 0.097787 | 0.205067 | -0.000779 | 0.001845 |
| 20260663 | true Big-Five | 0.096323 | 0.206514 | 0.000000 | 0.000000 |
| 20260663 | zero Big-Five | 0.098065 | 0.212760 | -0.001741 | -0.006246 |
| 20260663 | shuffled Big-Five | 0.099158 | 0.213819 | -0.002835 | -0.007305 |
| 20260663 | no-condition identity | 0.098218 | 0.212920 | -0.001895 | -0.006406 |
| 20260664 | true Big-Five | 0.097363 | 0.205072 | 0.000000 | 0.000000 |
| 20260664 | zero Big-Five | 0.097988 | 0.205619 | -0.000625 | -0.000547 |
| 20260664 | shuffled Big-Five | 0.099678 | 0.207065 | -0.002315 | -0.001993 |
| 20260664 | no-condition identity | 0.098295 | 0.205678 | -0.000932 | -0.000606 |
| 20260665 | true Big-Five | 0.097974 | 0.203949 | 0.000000 | 0.000000 |
| 20260665 | zero Big-Five | 0.098414 | 0.213425 | -0.000439 | -0.009476 |
| 20260665 | shuffled Big-Five | 0.099021 | 0.206089 | -0.001047 | -0.002140 |
| 20260665 | no-condition identity | 0.098664 | 0.216093 | -0.000689 | -0.012144 |

### Full validation export metrics

| Seed | Condition | MSE | MAE | Delta MSE: true - condition | Delta MAE: true - condition |
|---|---|---:|---:|---:|---:|
| 20260661 | true Big-Five | 0.101215 | 0.207956 | 0.000000 | 0.000000 |
| 20260661 | zero Big-Five | 0.102887 | 0.209153 | -0.001672 | -0.001197 |
| 20260661 | shuffled Big-Five | 0.103966 | 0.211329 | -0.002752 | -0.003372 |
| 20260661 | no-condition identity | 0.102801 | 0.210443 | -0.001586 | -0.002487 |
| 20260662 | true Big-Five | 0.102568 | 0.213870 | 0.000000 | 0.000000 |
| 20260662 | zero Big-Five | 0.102231 | 0.211818 | 0.000337 | 0.002052 |
| 20260662 | shuffled Big-Five | 0.103880 | 0.211038 | -0.001312 | 0.002832 |
| 20260662 | no-condition identity | 0.102886 | 0.209375 | -0.000318 | 0.004495 |
| 20260663 | true Big-Five | 0.101438 | 0.208896 | 0.000000 | 0.000000 |
| 20260663 | zero Big-Five | 0.101485 | 0.213307 | -0.000047 | -0.004411 |
| 20260663 | shuffled Big-Five | 0.102310 | 0.214344 | -0.000872 | -0.005449 |
| 20260663 | no-condition identity | 0.102446 | 0.213032 | -0.001008 | -0.004137 |
| 20260664 | true Big-Five | 0.102284 | 0.210458 | 0.000000 | 0.000000 |
| 20260664 | zero Big-Five | 0.103915 | 0.211730 | -0.001631 | -0.001271 |
| 20260664 | shuffled Big-Five | 0.105620 | 0.213394 | -0.003336 | -0.002936 |
| 20260664 | no-condition identity | 0.104885 | 0.212275 | -0.002601 | -0.001817 |
| 20260665 | true Big-Five | 0.102984 | 0.206039 | 0.000000 | 0.000000 |
| 20260665 | zero Big-Five | 0.103233 | 0.217696 | -0.000249 | -0.011657 |
| 20260665 | shuffled Big-Five | 0.104854 | 0.209145 | -0.001870 | -0.003106 |
| 20260665 | no-condition identity | 0.103226 | 0.221006 | -0.000242 | -0.014968 |

## Safe talking points

- Do not claim that Big-Five definitely works or that this is an official leaderboard result.
- The strongest full-export evidence is against shuffled and no-condition controls.
- The zero-control full-export comparison is directionally positive but should be phrased cautiously.
- The absolute MSE differences are modest, so the important point is consistency under matched controls, not a large performance jump.
- MAE is a sanity metric; it supports the main direction, but the ordering among control baselines is not the central claim.
