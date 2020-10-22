---
layout: post
title:  "Sequences and Series Problems"
date:   2020-10-17 12:31:46 -0400
categories: real-analysis
---

**Problem 1:** Prove that the sequence \\(\left\\{\frac{3n}{2n+5}\right\\}_{n \in \mathbb{N}}\\) is convergent on \\(\mathbb{R}\\), and find its limit.

**Solution:** We claim that the sequence converges to \\(\frac{3}{2}\\). Pick some \\(\varepsilon > 0\\), and let \\(n_0 = \left\lceil \frac{15}{4\varepsilon}\right\rceil\\). Then for any \\(n > n_0\\),
\\[\left\lceil \frac{15}{4\varepsilon}\right\rceil < n \\
\\implies \frac{15}{\varepsilon} < 4n+10 \implies \frac{15}{4n+10} < \varepsilon
\\]

\\[\\implies \left\|\frac{6n-3(2n+5)}{4n+10}\right\| < \varepsilon\\]
\\[\\implies \left\|\frac{3n}{2n+5} - \frac{3}{2}\right\| < \varepsilon\\]
Thus \\(\left\\{\frac{3n}{2n+5}\right\\}_{n \in \mathbb{N}}\\) converges to \\(\frac{3}{2}\\). \\(\square\\)

**Problem 2:** Define \\(a_1 = \sqrt{2}\\), \\(a_{n+1} = \sqrt{2 + a_n}\\) where \\(n \in \mathbb{N}\\). Show that \\(\\{a_n\\}\\) is a convergent sequence and find its limit.

**Solution:** First, we show that the terms are strictly increasing. Note that \\(\sqrt{2 + \sqrt{2}} > \sqrt{2}\\), so \\(a_2 > a_1\\). Now, assume that \\(a_{n+1} > a_n\\) for all \\(n\\) up to \\(n = k\\). We have

\\[a_{k+1} > a_k \implies a_{k+2} = \sqrt{2 + a_{k+1}} > \sqrt{2+a_k} = a_{k+1}\\]
so the hypothesis holds for \\(n = k+1\\), and thus all positive \\(n\\).

Let \\(a = \sqrt{2 + \sqrt{2 + \dots}} = \lim_{n \to \infty}a_n\\). Then, \\(a^2 = 2 + a\\) so \\(a = 2\\) or \\(a = -1\\). Since the \\(a_n\\) are strictly increasing and \\(a_1 = \sqrt{2} > -1\\), \\(a = 2\\). \\(\square\\)

**Problem 3:** Find \\(\lim_{n \to \infty}\sqrt[n]{a_n}\\), where \\(a_n\\) is the arithmetic mean of \\(\binom{n}{0}, \binom{n}{1}, \ldots, \binom{n}{n}\\).

**Solution:**

*Lemma:* \\(\lim_{n \to \infty}\sqrt[n]{n+1} = 1\\)

*Proof:* Fix \\(\varepsilon > 0\\) and let \\(n_0 = \frac{2(1-\varepsilon)}{\varepsilon^2}+1\\). First, note that if \\(n > n_0\\), then \\[n\frac{\varepsilon^2}{2} > \left(\frac{2(1-\varepsilon)}{\varepsilon^2}+1\right)\frac{\varepsilon^2}{2} = 1-\varepsilon + \frac{\varepsilon^2}{2}.\\]

Also, \\[(1+\varepsilon)^n > \frac{n(n-1)\varepsilon^2}{2} + n\varepsilon + 1 > \frac{n_0(n-1)\varepsilon^2}{2} + n\varepsilon + 1 = (n-1)\left(1-\varepsilon + \frac{\varepsilon^2}{2}\right) + n\varepsilon + 1\\]
\\[= n - n\varepsilon + n \frac{\varepsilon^2}{2} - 1 + \varepsilon - \frac{\varepsilon^2}{2} + n\varepsilon + 1\\]
\\[ = n + n\frac{\varepsilon^2}{2} + \varepsilon - \frac{\varepsilon^2}{2}\\]
\\[> n + 1 - \varepsilon + \frac{\varepsilon^2}{2} + \varepsilon - \frac{\varepsilon^2}{2} = n+1 \\]

Thus, \\(\varepsilon > \sqrt[n]{n+1} - 1 \\implies \left\|\sqrt[n]{n+1} - 1\right\| < \varepsilon\\) for all \\(n > n_0\\) as desired. \\(\blacksquare\\)

Now, we have \\(\lim_{n \to \infty}\sqrt[n]{a_n} = \lim_{n \to \infty}\sqrt[n]{\frac{\binom{n}{0} + \binom{n}{1} + \dots + \binom{n}{n}}{n+1}} = \lim_{n \to \infty}\sqrt[n]{\frac{2^n}{n+1}} = 2\\). \\(\square\\)
