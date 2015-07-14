---
layout: post
title:  "arbiter puf"
---
* [paper](https://github.com/eli8527/ArbiterPUF/blob/master/ArbiterPUF%20Paper.pdf)
* [source code](https://github.com/eli8527/ArbiterPUF)

a [puf](https://en.wikipedia.org/wiki/Physical_unclonable_function), or physically unclonable function, is a hardware based cryptographic encryption scheme that gets it security from process differences in manufacturing identical chips. in particular, an arbiter puf applies a race signal across "identical" transistors and outputs a one or zero depending on which one reaches an arbiter gate first. what is unique about a hardware based encryption scheme is that any form of a side channel attack would alter the environment the chip operates in, thereby altering the scheme itself. this means that such a device would be secure against any sort of physical hardware attack.

while my mentor focused on breaking this particular encryption scheme using an evolutionary algorithm, i dedicated my summer research to implementing a client that could, given a set of parameters, successfully emulate a hardware arbiter puf. this was an interesting project because of the hardware and software limitations. i was limited to programming an 8-bit atmega smart card and could only work in low level c. as a result, much of my code had to be extremely efficient and at times hacky. for example, when implementing an [lfsr](https://en.wikipedia.org/wiki/Linear_feedback_shift_register), i had to make use of optimizations such as loop unrolling and function inlining. nevertheless, i was able to successfully emulate a hardware arbiter puf by the end of my summer. this means that it is possible for any malicious attacker to spoof a puf given that they recover enough data from the original hardware version.

<br>
*this research project was done during the summer of 2014 under the direction of georg becker, phd at ruhr universität bochum, germany in their embedded securities group.*