---
layout: post
title:  "Rational dependence of Cantor sets"
date:   2020-10-15 17:41:15 -0400
categories: real-analysis cantor-set
---
Can a positive measure Cantor set be rationally independent? Can any Cantor set be rationally independent?

**Problem 1:** Prove that if \\(K \in [0,1]\\) is a Cantor set of positive measure, then \\(K\\) cannot be rationally independent.

**Solution 1:** By Steinhaus's theorem, \\(K - K = \\{k_1 - k_2 : k_1, k_2 \in K\\}\\) contains an open neighborhood around the origin, and in particular contains rationals \\(r_1, r_2 \in \mathbb{Q} \cap (K-K)\\) with \\(r_1, r_2 \neq 0\\). Let \\(k_1 - k_2 = r_1\\) and \\(k_3 - k_4 = r_2\\) for \\(k_1, k_2, k_3, k_4 \in K\\). Then since
\\[\frac{1}{r_1}k_1 - \frac{1}{r_1}k_2- \frac{1}{r_2}k_3 + \frac{1}{r_2}k_4 = 0,\\] \\(K\\) is not rationally independent. \\(\square\\)


<!-- **Solution:** Let the equivalence relation \\(\sim\\) be defined on \\(K\\) so that for \\(x, y \in K\\), \\(x \\sim y \iff \frac{x}{y} \in \mathbb{Q}\\). Assuming choice, choose one representative of each equivalence class to form a set \\(E \subset K\\). Now, impose some order on \\(\mathbb{Q} = \\{q_1, q_2, \ldots\\}\\) and consider the cosets \\(q_iE\\).

We claim that \\(E\\) is not measurable.
##### *Lemma 1*: The \\(q_iE\\) are disjoint.
##### *Proof*: Suppose \\(x \in q_iE, q_jE\\) for \\(i \neq j\\). Then \\(x = q_ix_1 = q_jx_2\\) for \\(x_1, x_2 \in E\\), so \\(x_1 = \frac{q_j}{q_i}x_2\\) and \\(x_1 \sim x_2\\). This contradicts \\(E\\) containing exactly one representative for each equivalence class. \\(\square\\)

##### *Lemma 2*: We have \\(K \subseteq \bigcup_{i=1}^{\infty}q_iE\\).
##### *Proof*: If \\(x \in K\\), \\(x\\) belongs to an equivalence class defined by the relation \\(\sim\\). Say \\(x'\\) is the representative of \\([x]\\) in \\(E\\); then \\(x = qx'\\) for some \\(q \in \mathbb{Q}\\). Thus, \\(x \in \bigcup_{i=1}^{\infty}\\{q_ix'\\}\\) and \\(K \subseteq \bigcup_{i=1}^{\infty}q_iE\\). \\(\square\\)
These two lemmas give us:
\\[0 < \mu(K) \leq \mu\left(\bigcup_{i=1}^{\infty}q_iE\right) = \sum_{i=1}^{\infty}q_i\mu(E) \leq 1\\]
From this, we can see that \\(E\\) is not measurable.

Now, here's the crux: we claim that if \\(K\\) were independent, then \\(K = E\\). Indeed, say some equivalence class \\([x]\\) contains distinct elements \\(x_1\\) and \\(x_2\\). Then, as \\(\frac{x_1}{x_2} \in \mathbb{Q}\\), we can write \\(x_1 = qx_2\\) for some \\(q \in \mathbb{Q}\\), and we have \\[x_1 - qx_2 = 0,\\] contradicting the supposition that \\(K\\) is rationally independent.
However, since we proved \\(E\\) is not measurable, and we assumed \\(K\\) has positive measure, this is impossible. Therefore, \\(K\\) cannot be rationally independent. \\(\blacksquare\\)
 -->



**Problem 2:** Is there a Cantor set (homeomorphic to the classical Cantor set) in \\([0, 1]\\) which is rationally independent?


<!-- **Problem 4:** Is there a set \\(A\\) such that \\(0 < \mu(A) < 1\\) with \\(\mu(A \cap [a, b]) > 0\\) for all intervals \\([a, b] \subset [0, 1]\\)?

**Solution:** Consider the middle-fifths Cantor set \\(C_{1/5}\\), and let \\(A = C_{1/5}^c\\). Also, let \\([a, b] \subset [0,1]\\) be any interval.

First, we claim that \\(0 < \mu(A) < 1\\). The measure of \\(A\\) is the measure of the removed intervals of \\(C_{1/5},\\) and as they are disjoint, this can be computed as \\[\frac{1}{5}+\frac{2}{25}+\frac{4}{125} + \cdots = \frac{\frac{1}{5}}{1-\frac{2}{5}} = \frac{1}{5-2} = \frac{1}{3}.\\] Thus, the measure of \\(A\\) is \\(\frac{1}{3}\\).

Since \\(C_{1/5}\\) is nowhere dense, <- need to justify this step -> there is some \\( c \in [a,b]\\) such that \\(\exists \varepsilon > 0\\) with \\(B_{\varepsilon}c \cap C_{1/5} = \varnothing\\). Thus, \\(\mu(C_{1/5} \cap [a, b]) \leq b - a - \varepsilon\\), and since \\[\mu(A \cap [a, b]) + \mu(C_{1/5} \cap [a,b]) = b-a,\\]
we have \\(\mu(A \cap [a, b]) \geq \varepsilon > 0\\) for each \\([a, b] \subset [0,1]\\) as desired. \\(\square\\) -->

<!--
**Solution:** We consider the complement \\(A\\) of the middle-fifth's Cantor set \\(C_{1/5}\\) (so that \\(A = C_{1/5}^c\\)). First, we claim that \\(0 < \mu(A) < 1\\). The measure of \\(A\\) is the measure of the removed intervals of \\(C_{1/5},\\) and as they are disjoint, they can be computed as \\[\frac{1}{5}+\frac{2}{25}+\frac{4}{125} + \cdots = \frac{\frac{1}{5}}{1-\frac{2}{5}} = \frac{1}{5-2} = \frac{1}{3}.\\] Thus, the measure of \\(A\\) is \\(\frac{1}{3}\\).

Now, consider any interval \\([a, b]\\).

If \\([a, b] \neq [0, 1]\\), then \\(b-a < 1\\) so \\(1 - (b-a) > 0 \\) and \\[\mu(A \cap [a, b]) = 1 - \mu(A^c \cap [a, b]) = 1 - \mu(C_{1/5} \cap [a, b]) \geq 1 - (b-a) > 0.\\]

If \\([a, b] = [0, 1]\\), then \\(b-a = 1\\) and \\[\mu(A \cap [0, 1]) = \mu(A) = \frac{1}{3} > 0.\\]

In all cases, \\(\mu(A \cap [a, b]) > 0\\) for an interval \\([a, b] \subset [0, 1]\\) as desired. \\(\blacksquare\\) -->
