---
layout: post
title:  "Partition Regularity and Sets of Recusion"
date:   2020-11-19 1:36:13 -0400
categories: ergodic-theory
---
Consider some property \\(P\\) that applies to a set \\(A\\). We say that the \\(P\\) is _partition regular_ if for any partition \\(A = \bigcup_{i=1}^{r} C_i\\), at least one \\(C_i\\) satisfies \\(P\\). For example, infinitude and positive upper density are both partition regular.

A set \\(S\\) is called a _set of recurrence_ if for any measure preserving system \\(X, \mathcal{B}, \mu, T)\\) and \\(A \in \mathfrak{B}\\), there is some \\(n \in S\\) such that \\(\mu(A \cap T^{-n}A) > 0\\).

We will prove that set recurrence is partition regular. 

*Lemma 1:* If \\(S\\) is a set of recurrence and \\(E \subset \mathbb{N}\\) has positive upper density, then \\((E-E) \cap S \neq \varnothing\\).

Since \\(\overline{d}\\) on the naturals doesn't form a measure space, we can't apply ergodic theorems directly. However, Furstenberg's Correspondance Principle gives us a way to apply Poincare recurrence.

*Theorem:* \\(\forall E \subset \mathbb{N}\\) with \\(\overline{d}(E)>0\\), \\(\exists\\) m.p.s \\((X, \mathcal{B}, \mu, T)\\) and \\(A_E \in \mathcal{B}\\), such that \\(\mu(A_E) = \overline{d}(E)\\) and such that for all \\(n_1, n_2, \cdots, n_k \in \mathbb{Z}\\),
\\[\overline{d}\left(E \cap E-n_1 \cap \cdots \cap E-n_k\right) \ge \mu\left(A_E\cap T^{-n_1}A_E \cap \cdots \cap T^{-n_k}A_E\right)\\]

*Proof of Lemma 1:* Using Furstenberg's Correspondance Principle, we can
