---
layout: post
title:  "Square roots of primes are rationally independent over rationals"
date:   2020-10-14 21:30:32 -0400
categories: real-analysis number-theory
---

**Problem:** Call a set \\(S \subset \mathbb{R}\\) rationally independent if no nontrivial linear combination of its elements with rational coefficients is zero. Is \\(\\{\sqrt{p}: p \text{ prime}\\}\\) is rationally independent?

**Solution:** No. Clearing denominators, assume that \\(\sum_{i=1}^{n}{a_i}\sqrt{p_i} = 0\\) for \\(a_i \in \mathbb{Z}\\); we claim that each \\(a_k = 0\\). For each \\(k\\), we construct a large prime \\(P_k\\) such that \\(\left(\frac{p_i}{P_k}\right)\\) for each \\(1 \leq i \leq n\\) such that \\(i \neq k\\), and \\(\left(\frac{p_k}{P_k}\right) = -1\\). To do this, let \\(P_k\\) be such that
\\[ P_k \equiv 1 \bmod{p_i} \text{ for }1 \leq i \leq n, i \neq k \\]
\\[ P_k \equiv b \bmod{p_k} \text{ where } \left(\frac{b}{p_k}\right) = -1 \\]
\\[ P_k \equiv 1 \bmod{4} \\]

This gives us a solution \\(P_k\\) modulo \\(4p_1p_2\dots p_n\\), so by Dirichlet's theorem on arithmetic progressions, we can choose \\(P_k\\) to be an arbitrarily large prime. Now, by quadratic reciprocity, we have \\(\left(\frac{p_i}{P_k}\right) = \left(\frac{P_k}{p_i}\right)= 1\\). As \\(a = \sum_{1 \leq i \leq n, i\neq k}{a_i}\sqrt{p_i}\\) is an integer in \\({\mathbb{F}}\_{P_k}\\), using the fact that \\(\sum_{i=1}^{n}{a_i}\sqrt{p_i} = 0\\), we have
\\[
    a = -a_k\sqrt{p_k} \implies a^2 \equiv a_k^2 p_k \pmod{P_k}
\\]
If \\(a_k \not \equiv 0 \pmod{P_k}\\), then we have \\(p_k \equiv (aa_k^{-1})^2 \pmod{P_k}\\), contradicting \\(\left(\frac{p_k}{P_k}\right) = 1\\). Thus, \\(a_k \equiv 0 \bmod{P_k}.\\) The same argument for all \\(k\\) between \\(1\\) and \\(n\\) shows that arbitrarily large primes divide each \\(a_k\\), so in particular, each \\(a_k = 0\\). \\(\blacksquare\\)
