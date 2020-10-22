---
layout: post
title:  "An intermediate measure set that has non-trivial intersection with any interval"
date:   2020-10-19 19:16:24 -0400
categories: real-analysis
---

**Problem:** Is there a set \\(A\\) such that \\(0 < \mu(A) < 1\\) with \\(\mu(A \cap [a, b]) > 0\\) for all intervals \\([a, b] \subset [0, 1]\\)?

**Solution:** Consider the middle-fifths Cantor set \\(C_{1/5}\\), and let \\(A = C_{1/5}^c\\). Also, let \\([a, b] \subset [0,1]\\) be any interval.

First, we claim that \\(0 < \mu(A) < 1\\). The measure of \\(A\\) is the measure of the removed intervals of \\(C_{1/5},\\) and as they are disjoint, this can be computed as \\[\frac{1}{5}+\frac{2}{25}+\frac{4}{125} + \cdots = \frac{\frac{1}{5}}{1-\frac{2}{5}} = \frac{1}{5-2} = \frac{1}{3}.\\] Thus, the measure of \\(A\\) is \\(\frac{1}{3}\\).

Any Cantor set is nowhere dense. We claim this means \\(C_{1/5}\\) is not dense in \\([a, b]\\) (this seems tautological but is needed). If \\(C\\) were dense in \\([a, b]\\), then \\(\mathrm{cl}(C) = [a, b]\\) and \\(\mathrm{int}(\mathrm{cl}(C)) = (a, b)\\), contradicting \\(C_{1/5}\\) being nowhere dense in \\([0, 1]\\). Thus, there is some \\( c \in [a,b]\\) such that \\(\exists \varepsilon > 0\\) with \\(B_{\varepsilon}c \cap C_{1/5} = \varnothing\\). Therefore, \\(\mu(C_{1/5} \cap [a, b]) \leq b - a - \varepsilon\\), and since \\[\mu(A \cap [a, b]) + \mu(C_{1/5} \cap [a,b]) = b-a,\\]
we have \\(\mu(A \cap [a, b]) \geq \varepsilon > 0\\) for each \\([a, b] \subset [0,1]\\) as desired. \\(\square\\)

<!--
**Solution:** We consider the complement \\(A\\) of the middle-fifth's Cantor set \\(C_{1/5}\\) (so that \\(A = C_{1/5}^c\\)). First, we claim that \\(0 < \mu(A) < 1\\). The measure of \\(A\\) is the measure of the removed intervals of \\(C_{1/5},\\) and as they are disjoint, they can be computed as \\[\frac{1}{5}+\frac{2}{25}+\frac{4}{125} + \cdots = \frac{\frac{1}{5}}{1-\frac{2}{5}} = \frac{1}{5-2} = \frac{1}{3}.\\] Thus, the measure of \\(A\\) is \\(\frac{1}{3}\\).

Now, consider any interval \\([a, b]\\).

If \\([a, b] \neq [0, 1]\\), then \\(b-a < 1\\) so \\(1 - (b-a) > 0 \\) and \\[\mu(A \cap [a, b]) = 1 - \mu(A^c \cap [a, b]) = 1 - \mu(C_{1/5} \cap [a, b]) \geq 1 - (b-a) > 0.\\]

If \\([a, b] = [0, 1]\\), then \\(b-a = 1\\) and \\[\mu(A \cap [0, 1]) = \mu(A) = \frac{1}{3} > 0.\\]

In all cases, \\(\mu(A \cap [a, b]) > 0\\) for an interval \\([a, b] \subset [0, 1]\\) as desired. \\(\blacksquare\\) -->
