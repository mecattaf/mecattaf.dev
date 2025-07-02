https://github.com/henrythe9th/ai-crash-course
Perhaps we might find a few gems in this paper

these are some on the list so far:

“Computing Machinery and Intelligence” by Alan Turing (1950)

• “Programs with Common Sense” by John McCarthy (1959)

• “Perceptrons” by Marvin Minsky (1969)

• “Learning Representations by Back-Propagating Errors” by David Rumelhart (1986)

• “Parallel Distributed Processing: Explorations in the Microstructure of Cognition” by David Rumelhart (1986)

• “Gradient-Based Learning Applied to Document Recognition” by Yann LeCun (1998)

• “ImageNet Classification with Deep Convolutional Neural Networks” by Alex Krizhevsky (2012)

• “Auto-Encoding Variational Bayes” by Diederik Kingma (2013)

• “Human-Level Control through Deep Reinforcement Learning” by Volodymyr Mnih (2015)

• “Attention Is All You Need” by Ashish Vaswani (2017)

• “Language Models are Few-Shot Learners” by Tom Brown (2020)

• “Chain-of-Thought Prompting Elicits Reasoning in Large Language Models” by Jason Wei (2022)

• “PaLM: Scaling Language Modeling with Pathways” by Aakanksha Chowdhery (2022)

• “GPT-4 Technical Report” by OpenAI (2023)

---

https://gist.github.com/veekaybee/be375ab33085102f9027853128dc5f0e

# Anti-hype LLM reading list

Goals: Add links that are reasonable and good explanations of how stuff works. No hype and no vendor content if possible. Practical first-hand accounts of models in prod eagerly sought.

## Foundational Concepts 

<img width="400" alt="Screenshot 2023-12-18 at 10 40 27 PM" src="https://gist.github.com/assets/3837836/4c30ad72-76ee-4939-a5fb-16b570d38cf2">

### Pre-Transformer Models
<img width="500" alt="Screenshot 2023-12-18 at 8 25 42 PM" src="https://gist.github.com/assets/3837836/20d3c630-62b1-4717-84d7-e2f24e3f25c7">

+ [The Illustrated Word2vec - A Gentle Intro to Word Embeddings in Machine Learning (YouTube)](https://www.youtube.com/watch?v=ISPId9Lhc1g)
+ [Transformers as Support Vector Machines](https://arxiv.org/abs/2308.16898v1)
+ [Survey of LLMS](https://arxiv.org/abs/2303.18223)
+ [Deep Learning Systems](https://dlsyscourse.org/lectures/)
+ [Fundamental ML Reading List](https://github.com/RoundtableML/ML-Fundamentals-Reading-Lists)

### Building Blocks 

+ [What are embeddings](https://vickiboykis.com/what_are_embeddings/)
+ [Concepts from Operating Systems that Found their way into LLMS](https://muhtasham.github.io/blog/posts/os-concepts-llm/)
+ [Talking about Large Language Models](https://arxiv.org/pdf/2212.03551.pdf)
+ [Language Modeling is Compression](https://arxiv.org/abs/2309.10668)
+ [Vector Search - Long-Term Memory in AI](https://github.com/edoliberty/vector-search-class-notes)
+ [Eight things to know about large language models](https://arxiv.org/pdf/2304.00612.pdf)
+ [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
+ [The Hardware Lottery](https://arxiv.org/abs/2009.06489)
+ [The Scaling Hypothesis](https://gwern.net/scaling-hypothesis)
+ [Tokenization](https://github.com/SumanthRH/tokenization)
+ [LLM Course](https://github.com/mlabonne/llm-course)

## Foundational Deep Learning Papers (in semi-chronological order)

+ [Seq2Seq](https://arxiv.org/abs/1409.3215v3)
+ [Attention is all you Need](https://arxiv.org/abs/1706.03762)
+ [BERT](https://arxiv.org/abs/1810.04805)
+ [GPT-1](https://www.cs.ubc.ca/~amuham01/LING530/papers/radford2018improving.pdf)
+ [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361)
+ [T5](https://jmlr.org/papers/v21/20-074.html)
+ [GPT-2: Language Models are Unsupervised Multi-Task Learners](https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)
+ [InstructGPT: Training Language Models to Follow Instructions](https://arxiv.org/abs/2203.02155)
+ [GPT-3: Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) 

## The Transformer Architecture

<img width="300" alt="Screenshot 2023-12-18 at 8 37 44 PM" src="https://gist.github.com/assets/3837836/5ada409d-32cf-496e-9572-cb985ec97165">

+ [Transformers from Scratch](https://e2eml.school/transformers.html)
+ [Transformer Math](https://blog.eleuther.ai/transformer-math/)
+ [Five Years of GPT Progress](https://finbarr.ca/five-years-of-gpt-progress/)
+ [Lost in the Middle: How Language Models Use Long Contexts](https://arxiv.org/pdf/2307.03172.pdf)

### Attention
+ [Self-attention and transformer networks](https://sebastianraschka.com/blog/2021/dl-course.html#l19-self-attention-and-transformer-networks) 
+ [Attention](https://lilianweng.github.io/posts/2018-06-24-attention/)
+ [Understanding and Coding the Attention Mechanism](https://sebastianraschka.com/blog/2023/self-attention-from-scratch.html)
+ [Attention Mechanisms](https://bjpcjp.github.io/pdfs/math/attention-mechs-dive.pdf)
+ [Keys, Queries, and Values](https://d2l.ai/chapter_attention-mechanisms-and-transformers/queries-keys-values.html)

## GPT 
<img width="300" alt="Screenshot 2023-12-18 at 8 37 44 PM" src="https://camo.githubusercontent.com/85d00cf9bca67e33c2d1270b51ff1ac01853b26a8d6bb226b711f859d065b4a6/68747470733a2f2f68756767696e67666163652e636f2f64617461736574732f74726c2d696e7465726e616c2d74657374696e672f6578616d706c652d696d616765732f7265736f6c76652f6d61696e2f696d616765732f74726c5f6f766572766965772e706e67">

+ [What is ChatGPT doing and why does it work](https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/)
+ [My own notes from a few months back.](https://gist.github.com/veekaybee/6f8885e9906aa9c5408ebe5c7e870698) 
+ [Karpathy's The State of GPT (YouTube)](https://www.youtube.com/watch?v=bZQun8Y4L2A)
+ [OpenAI Cookbook](https://cookbook.openai.com/)

## Significant OSS Models

+ [Llama2](https://ai.meta.com/research/publications/llama-2-open-foundation-and-fine-tuned-chat-models/?ref=blog.oxen.ai)
+ [Mistral7B](https://arxiv.org/abs/2310.06825)
  + [Mixtral](https://mistral.ai/news/mixtral-of-experts/)
+ [Phi2](https://www.microsoft.com/en-us/research/blog/phi-2-the-surprising-power-of-small-language-models/)
+ [Falcon7B](https://huggingface.co/blog/falcon)

### LLMs in 2023

<img width="600" alt="Screenshot 2023-12-18 at 10 07 57 PM" src="https://gist.github.com/assets/3837836/9fcc3f92-719b-4b2c-b4f1-9be506101eb1">

+ [Catching up on the weird world of LLMS](https://simonwillison.net/2023/Aug/3/weird-world-of-llms)
+ [How open are open architectures?](https://opening-up-chatgpt.github.io/)
+ [Building an LLM from Scratch](https://github.com/rasbt/LLMs-from-scratch)
+ [Large Language Models in 2023](https://www.youtube.com/watch?v=dbo3kNKPaUA&feature=youtu.be) and [Slides](https://docs.google.com/presentation/d/1636wKStYdT_yRPbJNrf8MLKpQghuWGDmyHinHhAKeXY/edit#slide=id.g2885e521b53_0_0)
+ [Timeline of Transformer Models](https://ai.v-gar.de/ml/transformer/timeline/)
+ [Large Language Model Evolutionary Tree](https://notes.kateva.org/2023/04/large-language-models-evolutionary-tree.html)

## Training Data

+ [What's in my Big Data](https://arxiv.org/abs/2310.20707)
+ ["The “it” in AI models is the dataset."](https://nonint.com/2023/06/10/the-it-in-ai-models-is-the-dataset/)
+ [Extracting Training Data from ChatGPT](https://not-just-memorization.github.io/extracting-training-data-from-chatgpt.html)

## Pre-Training
+ [Why host your own LLM?](http://marble.onl/posts/why_host_your_own_llm.html)
+ [How to train your own LLMs](https://blog.replit.com/llm-training)
+ [Hugging Face Resources on Training Your Own](https://github.com/huggingface/llm_training_handbook)
+ Training [Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556)
+ [Opt-175B Logbook](https://github.com/facebookresearch/metaseq/blob/main/projects/OPT/chronicles/OPT175B_Logbook.pdf)

## RLHF and DPO
<img width="500" alt="Screenshot 2023-12-18 at 10 07 57 PM" src="https://gist.github.com/assets/3837836/1a5cf5af-fd6b-4d11-b3ed-649a4c841f2b">

+ [RLHF](https://huggingface.co/blog/rlhf)
  + [Supervised Fine-tuning](https://huggingface.co/docs/trl/main/en/sft_trainer) 
  + [How Abilities in LLMs Are Affected by SFT](https://arxiv.org/abs/2310.05492)
+ [Instruction-tuning for LLMs: Survey](https://arxiv.org/abs/2308.10792)
+ [Direct Preference Optimization: Your Language Model is Secretly a Reward Model](https://arxiv.org/abs/2305.18290)
+ [RLHF and DPO Compared](https://medium.com/aimonks/rlhf-and-dpo-compared-user-feedback-methods-for-llm-optimization-44f4234ae689)

## Fine-Tuning and Compression

+ [The Complete Guide to LLM Fine-tuning](https://bdtechtalks.com/2023/07/10/llm-fine-tuning/amp/)
+ [LLaMAntino: LLaMA 2 Models for Effective Text Generation in Italian Language](https://arxiv.org/pdf/2312.09993.pdf) - Really great overview of SOTA fine-tuning techniques
+ [On the Structural Pruning of Large Language Models](https://arxiv.org/abs/2305.11627)
+ Quantiztion
  + [A Gentle Introduction to 8-bit matrix multiplication](https://huggingface.co/blog/hf-bitsandbytes-integration)
  + [Which Quantization Method is Right for You?](https://maartengrootendorst.substack.com/p/which-quantization-method-is-right)
  + [Survey of Quantization for Inference](https://arxiv.org/abs/2103.13630)
+ [PEFT](https://github.com/huggingface/peft)
  + [Fine-tuning with LoRA and QLoRA](https://lightning.ai/pages/community/lora-insights/)
  + [Adapters](https://arxiv.org/abs/2304.01933)
  + [Motivation for Parameter-Efficient Fine-tuning](https://www.reddit.com/r/MachineLearning/comments/186ck5k/d_what_is_the_motivation_for_parameterefficient/)


# Small and Local LLMs

+ [How is LlamaCPP Possible?](https://finbarr.ca/how-is-llama-cpp-possible/)
+ [How to beat GPT-4 with a 13-B Model](https://lmsys.org/blog/2023-11-14-llm-decontaminator/)
+ [Efficient LLM Inference on CPUs](https://arxiv.org/abs/2311.00502v1)
+ [Tiny Language Models Come of Age](https://www.quantamagazine.org/tiny-language-models-thrive-with-gpt-4-as-a-teacher-20231005/)
+ [Efficiency LLM Spectrum](https://github.com/tding1/Efficient-LLM-Survey)
+ [TinyML at MIT](https://efficientml.ai/)

## Deployment and Production

+ [Building LLM Applications for Production](https://huyenchip.com/2023/04/11/llm-engineering.html)
+ [Challenges and Applications of Large Language Models](https://arxiv.org/abs/2307.10169)
+ [All the Hard Stuff Nobody talks about when building products with LLMs ](https://www.honeycomb.io/blog/hard-stuff-nobody-talks-about-llm)
+ [Scaling Kubernetes to run ChatGPT](https://openai.com/research/scaling-kubernetes-to-7500-nodes)
+ [Numbers every LLM Developer should know](https://github.com/ray-project/llm-numbers)
+ [Against LLM Maximalism](https://explosion.ai/blog/against-llm-maximalism)
+ [A Guide to Inference and Performance](https://www.baseten.co/blog/llm-transformer-inference-guide/)
+ [(InThe)WildChat: 570K ChatGPT Interaction Logs In The Wild](https://openreview.net/forum?id=Bl8u7ZRlbM)
+ [The State of Production LLMs in 2023](https://youtu.be/kMb4TmhTlbk?si=Tdbp-2BKGF5G_qk5)
+ [Machine Learning Engineering for successful training of large language models and multi-modal models.](https://github.com/stas00/ml-engineering)
+ [Fine-tuning RedPajama on Slack Data](https://www.union.ai/blog-post/fine-tuning-insights-lessons-from-experimenting-with-redpajama-large-language-model-on-flyte-slack-data)


## LLM Inference and K-V Cache

+ [LLM Inference Performance Engineering: Best Practices](https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices)
+ [How to Make LLMs go Fast](https://vgel.me/posts/faster-inference/)
+ [Transformer Inference Arithmetic](https://kipp.ly/transformer-inference-arithmetic/)
+ [Which serving technology to use for LLMs?](https://pages.run.ai/hubfs/PDFs/Serving-Large-Language-Models-Run-ai-Benchmarking-Study.pdf)
+ [Speeding up the K-V cache](https://www.dipkumar.dev/becoming-the-unbeatable/posts/gpt-kvcache/)
+ [Large Transformer Model Inference Optimization](https://lilianweng.github.io/posts/2023-01-10-inference-optimization/)

## Prompt Engineering and RAG

+ [On Prompt Engineering](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/)
+ [Prompt Engineering Versus Blind Prompting](https://mitchellh.com/writing/prompt-engineering-vs-blind-prompting)
+ [Building RAG-Based Applications for Production](https://www.anyscale.com/blog/a-comprehensive-guide-for-building-rag-based-llm-applications-part-1)
+ [Full Fine-Tuning, PEFT, or RAG?](https://deci.ai/blog/fine-tuning-peft-prompt-engineering-and-rag-which-one-is-right-for-you/)
+ [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)

## GPUs

<img width="600" alt="Screenshot 2023-12-18 at 10 02 48 PM" src="https://gist.github.com/assets/3837836/655fedc2-dbc8-406a-a583-65b9a91d4ab9">

+ [The Best GPUS for Deep Learning 2023](https://timdettmers.com/2023/01/30/which-gpu-for-deep-learning/)
+ [Making Deep Learning Go Brr from First Principles](https://horace.io/brrr_intro.html)
+ [Everything about Distributed Training and Efficient Finetuning](https://sumanthrh.com/post/distributed-and-efficient-finetuning/)
+ [Training LLMs at Scale with AMD MI250 GPUs](https://www.databricks.com/blog/training-llms-scale-amd-mi250-gpus)
+ [GPU Programming](https://enccs.github.io/gpu-programming/)

## Evaluation

+ [Evaluating ChatGPT](https://ehudreiter.com/2023/04/04/evaluating-chatgpt/)
+ [ChatGPT: Jack of All Trades, Master of None](https://github.com/CLARIN-PL/chatgpt-evaluation-01-2023)
+ [What's Going on with the Open LLM Leaderboard](https://huggingface.co/blog/evaluating-mmlu-leaderboard)
+ [Challenges in Evaluating AI Systems](https://www.anthropic.com/index/evaluating-ai-systems)
+ [LLM Evaluation Papers](https://github.com/tjunlp-lab/Awesome-LLMs-Evaluation-Papers)
+ [Evaluating LLMs is a MineField](https://www.cs.princeton.edu/~arvindn/talks/evaluating_llms_minefield/)

### Eval Frameworks
  + [HELM](https://arxiv.org/pdf/2211.09110.pdf)
  + [LM Eval Harness](https://github.com/EleutherAI/lm-evaluation-harness)
  + [LmSys Chatbot Arena](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard)

## UX

+ [Generative Interfaces Beyond Chat (YouTube)](https://www.youtube.com/watch?v=rd-J3hmycQs)
+ [Why Chatbots are not the Future](https://wattenberger.com/thoughts/boo-chatbots)
+ [The Future of Search is Boutique](https://future.com/the-future-of-search-is-boutique/)
+ [As a Large Language Model, I](http://togelius.blogspot.com/2023/09/as-large-language-model-i.html)
+ [Natural Language is an Unnatural Interface](https://varunshenoy.substack.com/p/natural-language-is-an-unnatural)

## What's Next? 

Thanks to everyone who added suggestions on [Twitter](https://twitter.com/vboykis/status/1691530859575214081), [Mastodon](https://jawns.club/@vicki/110895263087386568), and Bluesky. 
