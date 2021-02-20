---
layout: post
title:  "Winner of ARML dude of Ten of David dude dude"
date:   2021-2-19 23:41:11 -0400
categories: code random
---

Ooops forgot to practice today because I was trying to figure out how this meme works
```python
import math

def convolute(words):
    l = len(words)
    if (l == 2):
        return (words[1] + " of " + words[0] + " dude")
    else:
        words_1 = words[:int(math.floor(l/2))]
        words_2 = words[int(math.floor(l/2)):l]
        return convolute(words_2) + " of " + convolute(words_1) + " dude"

def n_convolute(word, n):
    for i in range(0, n):
        word = convolute(word.split(" "))
    return word
```

```python
word = "David Ten ARML Winner"
print(n_convolute(word, 1))

>>> Winner of ARML dude of Ten of David dude dude
```

```python
word = "David Ten ARML Winner"
print(n_convolute(word, 2))

>>> dude of dude dude of David dude of of of Ten dude dude of of of dude dude of ARML dude of of of Winner dude dude dude
```
