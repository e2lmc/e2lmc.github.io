<img width="1280" height="384" alt="image" src="https://github.com/user-attachments/assets/ef6d00c4-1ffc-482e-a14d-40ef12b6a3e3" />---
layout: default
---

## Starter kit

This starter kit includes a set of Jupyter notebooks designed to help participants better understand the use case and learn how to contribute to the competition. 

### Prerequisites

Most of the notebooks provided in this repository are runnable through Google Colab or Kaggle notebook using the free-tier NVIDIA-T4 GPUs with minimal installation requirements. 

### Notebooks description

In the following, we describe the content of the jupyter notebooks: 

<!-- - **0-Basic_Competition_Information**: This notebook contains general information regarding the competition organization, phases, deadlines and terms. The content is the same as the one shared in the competition Codabench page. [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](TODO)  -->

- **1-How_to_interact_with_model**: This notebook aims to familiarize the participants with the tools used to interact with the model and perform some easy text generation tasks. [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1pmRaGgVulB391Jb26ixI8g9guBgFP836?usp=sharing)

- **2-How_to_evaluate_a_model**: This notebook shows participants how a checkpoint can be evaluated using [`lm-evaluation-harness`](https://github.com/EleutherAI/lm-evaluation-harness) package. [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/11WLb8Wqh4ASQ-Qejs8HTFLZagVFaK01z?usp=sharing)

- **3-Reproduce_baseline_results**: This notebook shows how to reproduce the baseline results (MMLU-Var on a single checkpoint). It includes integrating MMLU-Var benchmark within the [`lm-evaluation-harness`](https://github.com/EleutherAI/lm-evaluation-harness) package and running it to get the results. [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1pMyQUEOi0Ng1Fm1RBhbQUOBPtE9iJGGV?usp=drive_link)[![Open In Colab](https://colab.research.google.com/drive/1WYY-YRJXySeIQijKIeBn6HQb_xNL_4eR?usp=sharing)

- **4-How_to_Contribute**: This notebook explains how to fully integrate a new task within [`lm-evaluation-harness`](https://github.com/EleutherAI/lm-evaluation-harness) package [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1gnkTry6OOuuPlDWm6cMinrzm58LMMxkV?usp=sharing)

- **5-Scoring**: This notebook first explains how the score is calculated by detailing its various components. It then provides a script that participants can use locally to evaluate their contributions. We encourage participants to assess their solutions on Codabench, which utilizes the same scoring module described in this notebook. [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1sH0Pe-HS2zJyFt0yxec7dyMk0KY2ZRlz?usp=sharing)

- **6-Submission:** This notebook presents the composition of a submission bundle for [our Hugging Face Space](https://huggingface.co/spaces/e2lmc-competition/submission) [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1fY-hkS13sf5FAJuwW2AhnLsPPV_SeX8q?usp=sharing) 

- **7-Scientific-Alignment Check**: This notebook exposes how we will assess the *scientific alignment* of the proposed benchmarks using GPT4 as a judge. [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/127EYY-edGPwivnZwkDiSXyneFdj9AObO?usp=sharing) 

Please join us on Discord for discussions and up-to-date announcements:
<br>

Join our discord <a href="https://discord.gg/XhafZ5qU">here</a>.
