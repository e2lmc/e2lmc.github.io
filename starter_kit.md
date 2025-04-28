---
layout: default
---

## Starter kit

This starting kit provides a set of jupyter notebooks helping the challenge participants to better understand the use case, and how to contribute to this competition. For general information concerning the challenge and submit your solutions, you can refer to the competition [Codabench page](TODO).

### Prerequisites

Most of the notebooks provided in this repository are runnable through Google Colab or Kaggle notebook using the free-tier NVIDIA-T4 GPUs with minimal installation requirements. 

### Notebooks description

In the following, we describe the content of the jupyter notebooks : 

- **0-Basic_Competition_Information**: This notebook contains general information concerning the competition organization, phases, deadlines and terms. The content is the same as the one shared in the competition Codabench page. [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](TODO) 

- **1-How_to_interact_with_model**: This notebook aims to familiarize the participants with the tools that are used to interact with the model and perform some easy text generation tasks. [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1pmRaGgVulB391Jb26ixI8g9guBgFP836?usp=sharing)

- **2-How_to_evaluate_a_model**: Shows participants how a checkpoint can be evaluated using [`lm-evaluation-harness`](https://github.com/EleutherAI/lm-evaluation-harness) package. [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/11WLb8Wqh4ASQ-Qejs8HTFLZagVFaK01z?usp=sharing)

- **3-Reproduce_baseline_results**: This notebook shows how the baseline results (MMLU-Var on a single checkpoint) could be reproduced. It includes integrating MMLU-Var benchmark within the [`lm-evaluation-harness`](https://github.com/EleutherAI/lm-evaluation-harness) package and running it to get its result. [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1pMyQUEOi0Ng1Fm1RBhbQUOBPtE9iJGGV?usp=drive_link)

- **4-How_to_Contribute**: This notebook explains how to fully integrate a new task within [`lm-evaluation-harness`](https://github.com/EleutherAI/lm-evaluation-harness) package [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1gnkTry6OOuuPlDWm6cMinrzm58LMMxkV?usp=sharing)

- **5-Scoring**: This notebook shows firstly how the score is computed by describing its different components. Next, it provides a script which can be used locally by the participants to obtain a score for their contributions. We encourage participants to evaluate their solutions via codabench (which uses the same scoring module as the one described in this notebook). [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1sH0Pe-HS2zJyFt0yxec7dyMk0KY2ZRlz?usp=sharing)

- **6-Submission:** This notebook presents the composition of a submission bundle for [Codabench](https://www.codabench.org/) and usable parameters. 

- **7-Scientific-Alignment**: This notebook exposes how we will assess the *scientific alignment* of the proposed benchmarks using GPT4 as a judge.  [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/127EYY-edGPwivnZwkDiSXyneFdj9AObO?usp=sharing) 

Please join us on Discord for discussions and up-to-date announcements:
<br>

Join our discord <a href="">here</a>.
