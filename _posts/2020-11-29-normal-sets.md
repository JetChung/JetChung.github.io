---
layout: post
title:  "Normal sets"
date:   2021-11-29 21:38:52 -0400
categories: real-analysis ergodic-theory
---


A subset \\(E \subset \mathbb{N}\\) is *normal* if the image of the indicator function \\(1_E(\\mathbb{N})\\) is a normal binary sequence. Since almost all numbers are base-2 normal, almost all subsets of \\(\mathbb{N}\\) are - if we flip a coin infinitely many times, we expect the corresponding sequence to be normal.

If we take some normal sequence of flips and shift over, we expect that the overlap will basically look random - there are no patterns amongst our flips. We can formalize this as follows:

The *density* of a subset \\(E\\) of \\(\mathbb{N}\\), if it exists, is \\[d(E) = \lim_{N \to \infty}\frac{\|E \cap [1, N]\|}{N}.\\] In particular, for a normal set \\(E\\), \\(d(E) = \frac{1}{2}\\).

We expect \\(E\\) and \\(E-n\\) to behave independently:

**Proposition:** 
If we take some normal subset \\(E \subset \mathbb{N}\\), then \\(d(E \cap (E-n) = \frac{1}{4}\\)).

**Proof:** Let \\(E^k = E \cap (k + n\mathbb{N})\\) and \\(E_m^k = E^k \cap [k, k+(m-1)n]\\). Also consider the bijection \\(n^{-1}(E^k - k) \longleftrightarrow F^k\\) (this is essentially removing gaps). Finally, let \\(F^k_m = F^k \cap [1, m]\\). We have
\\[c(E_m^k) = \\#\\{(i, i+1) : 0 \leq i \leq m-2, k+in, k + (i+1)n \in E\\}\\] = \\[\\#\\{(i, i+1) : 1 \leq i \leq m-1, i, i + 1 \in F\\} = c(F_m^k).\\]
Then as \\(F^k\\) is normal, 
\\[\lim_{m\to \infty}\frac{c(E_m^k)}{m-1} = \lim_{m\to \infty}\frac{c(F_m^k)}{m-1}= \frac{1}{4}.\\]
We have
\\[d(E \cap (E-n)) = \lim_{n(m-1) + r \to \infty}\frac{\\#\\{1 \leq x \leq n(m-1) + r : x, x+n \in E\\}}{n(m-1)+r}\\] \\[= \lim_{m-1 \to \infty}\frac{\sum_{k=0}^{n-1}c(E_m^k)}{n(m-1)} = \lim_{m \to \infty}\frac{n\cdot\frac{1}{4}}{n} = \boxed{\frac{1}{4}}\\]
where the \\(n(m-1) + r\\) is from division with remainder by \\(m\\) (in particular \\(0 \leq r < n\\)).

I have some exercises for myself:

**Exercise:** Prove that \\(F_k\\) is normal.

**Exercise:** Generalize this to \\(k\\) distinct shifts.

**Exercise