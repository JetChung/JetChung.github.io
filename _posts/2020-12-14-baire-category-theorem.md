---
layout: post
title:  "Some problems using BCT"
date:   2020-12-14 22:18:11 -0400
categories: real-analysis
---


Some general heuristics that a problem might be solved using the Baire Category Theorem (BCT): the problem comes from a section of Rudin discussing the BCT; or the problem comes from a blog post from someone discussing uses of the BCT; or the problem was given to you by a friend after you asked for some problems using BCT.

**Problem 1:** Prove that \\(\mathbb{Q}\\) is not a countable intersection of open sets.

**Solution:**
Say \\(\mathbb{Q} = \bigcap_{i=1}^{\infty}\\) for \\(B_i\\) open. Then \\(\bigcap_{i=1}^{\infty} B_i \setminus \\{q_i\\} = \varnothing \\) where \\(\\{q_i\\}\_{i=1}^{\infty} = \mathbb{Q}\\). Iteratively take \\([a_1, b_1] \subseteq B_1 \setminus \\{q_1\\} \\) and \\([a_i, b_i] \subseteq [a_{i-1}, b_{i-1}] \cap (B_i \setminus \\{q_i\\})\\) for all \\(i \in \mathbb{N}\\). We thus find a chain of nested compact intervals, so we can pick some point \\(p \in \bigcap_{i=1}^{\infty}[a_i, b_i] \subseteq \bigcap_{i=1}^{\infty}B_i \setminus \\{q_i\\} \\), contradicting emptiness of \\(\bigcap_{i=1}^{\infty} B_i \setminus \\{q_i\\}\\). In particular, \\(\mathbb{Q}\\) is not \\(G_\delta\\) and \\(\mathbb{R} \setminus \mathbb{Q}\\) is not \\(F_\sigma\\).


**Problem 2:**
Let \\( \{ f_n\} \\) be a sequence of continuous functions on \\(\mathbb{R}\\) so that for every \\(x\\), \\(\lim_{n \to \infty}f_n(x)\\) exists and is finite. Prove that there is an interval \\((a, b)\\) of positive length so that the set \\(\\{|f_n(x)| : n \in \mathbb{N}, x \in (a,b)\\}\\) is bounded above. This is a special case of Banach-Steinhaus.

**Solution:**
Let \\(S_N = \\{x \in \mathbb{R} : \sup_{n \in \mathbb{N}}|f_n(x)| \leq N \\}\\). Since \\(0 \leq |\lim_{n \to \infty}f_n(x)| = |f(x)| \leq N\\) for some \\(N \in \mathbb{N}\\) and all \\(x \in \mathbb{R}\\), we have \\(\mathbb{R} = \bigcup_{N \in \mathbb{N}}S_N\\). Thus, by the BCT, some \\(S_N\\) contains an interval \\((a, b)\\), so \\(\\{|f_n(x)| : n \in \mathbb{N}, x \in (a,b)\\}\\) is bounded above by \\(N\\).

**Problem 3:**
Does there exist a sequence of continuous positive functions \\(f_n\\) on \\(\mathbb{R}\\) so that the set \\(\{f_n(x)\}\\) is unbounded if and only if \\(x\\) is rational? What if rational is replaced with irrational?

**Solution:**
Let \\(S_N = \\\{x \in \mathbb{R} : \sup_{n \in \mathbb{N}}|f_n(x)| \leq N \\\}\\). Then each \\(S_N\\) is closed, so we cannot have \\(\mathbb{R} \setminus \mathbb{Q} = \bigcup_{N \in \mathbb{N}}S_N\\) as \\(\mathbb{R} \setminus \mathbb{Q} \\) is not \\(F_{\sigma}\\).

Note that \\(\mathbb{Q}\\) is \\(F_{\sigma}\\), so the same argument doesn't hold if rational is replaced with irrational. We construct a sequence \\(\{f_n\}\\): (coming)

<!-- **Problem 4:**
Prove that if \\( \{ f_n\} \\) is a sequence of continuous functions from \\( \mathbb{R}\\) to \\( \mathbb{R} \\) so that for each \\(x\\), \\( f(x) = \lim_{n \to \infty}f_n(x)\\) exists and is finite, then for each \\(\varepsilon > 0 \\) there is a nonempty open set \\(U \\) and a large \\(N\\) so that \\( |f(x) - f_n(x)| < \varepsilon\\) for all \\(n \geq N\\), \\(x \in U \\). -->


**Problem 4:**
Prove that if \\(f\\) is a continuous function from positive reals to positive reals so that \\(f(x), f(2x), f(3x), \ldots \\) tends to \\(0\\) for all \\(x\\), then \\(f(t) \to 0\\) as \\(t \to \infty\\).

**Solution:**
Fix \\(\varepsilon > 0\\) and let \\(T_N = \{x \in \mathbb{R}^{+} : f(nx) \leq \frac{\varepsilon}{2}\}\\). Let \\(S_N = \bigcap_{n \geq N}T_n\\). Since each \\(T_n\\) is closed, each \\(S_N\\) is closed. Also, as for all \\(x \in \mathbb{R}^{+}\\), \\(f(nx) \to 0\\), we have \\(\mathbb{R}^{+} = \bigcup_{N \in \mathbb{N}}S_N\\), so in particular, some \\(S_N\\) contains an interval \\((a, b)\\) by the BCT. Note if \\(t \in (a, b)\\), then for all \\(n\geq N\\), \\(f(nt) \leq \frac{\varepsilon}{2} \iff\\) for all \\(n \geq N, t \in (na, nb), f(t) \leq \frac{\varepsilon}{2}\\). Now, take an \\(M \geq N\\) such that \\(M \geq \frac{a}{b-a}\\). We have
\\[(Ma, \infty) = \bigcup_{n \geq M} (na, nb),\\] so if \\(t > Ma\\), \\(f(t) \leq \frac{\varepsilon}{2} < \varepsilon.\\)



**Exercise:**
What theorem did the preceding exercises all use? (Hint: it starts with a B...)


Please send me any other good problems by email.
