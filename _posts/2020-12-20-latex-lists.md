---
layout: post
title:  "Fix your LaTeX"
date:   2020-12-20 23:11:11 -0400
categories: random
---
I've seen this problem not just in random LaTeX files, but even Springer books, so please listen up.

Note the difference between the following:

**Good:**
![Good](https://lh3.googleusercontent.com/-cvBKQtiOlZk/X-AfrYM9YzI/AAAAAAAAHxE/k8iEek4Rd3Aii89ng6jnexOzqDjyMrfswCK8BGAsYHg/s0/2020-12-20.png)
**Bad:**
![Bad](https://lh3.googleusercontent.com/-TG7qXGccwzE/X-AirTeG2iI/AAAAAAAAHxo/K_xYlDbMf3oUazhn3gQh-V58P-ZxZxsuQCK8BGAsYHg/s0/2020-12-20.png)

**Do this:**
```TeX
\end{anum}
\end{prob}

\begin{sol} $~$
\begin{anum}
```

**Don't do this:**
```TeX
\end{anum}
\end{prob}

\begin{sol}
\begin{anum}
```

Happy holidays!
