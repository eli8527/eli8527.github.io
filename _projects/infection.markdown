---
layout: post
title:  "infection"
---
<img src="/images/infection/infected.png" alt="infected" width="400"/>
<br>
[code](https://github.com/innovweb/thesis)

__the problem:__ when rolling out new features, we want to find a good way to roll them out slowly. however, with khan academy, it isn't uncommon for entire classrooms of users to be using the platform. as a result, if only some of the class gets an update whereas the other doesn't, there can be quite a lot of misunderstanding.

__the solution:__ use graph theory to implement a heuristic for **total infection**, **limited infection**, and **exact infection** that would only roll out features to specific connected components of a user graph.

<br>
#### Total Infection
Total infection uses breadth-first search (BFS) to infect all users of the initial user's connected component. This is a relatively straightforward algorithm.

<br>
#### Limited Infection
This is an extension on total infection in that we only want a limited number of users to be infected. To accomplish this, we still use BFS. However, there are several changes to our heuristic.

First, we don't necessarily start from the initial user provided. Based on the initial user, we find the neighbor that has the highest degree. Intuitively, it makes sense to start from the neighbor of heighest degree because in a real network, the coaches will usually be the most connected. We are, of course, assuming that the student and coach are directly connected, which is not too outrageous of an assumption. By picking the initial infection point to be the user of highest degree closest to the given user, we are almost always going to guarantee that the coach will be infected (in a typical classroom setting). The next step is to determine which students to infect.

To do this, we implement a thresholding heuristic. Specifically, we examine the edge weights between the initial user and its neighbors. We ask the user to input a specific threshold. If there was more time, I could probably find a way to have the algorithm automatically detect the optimal threshold. For now, let us specify some examples of edge weight schemes that are sensible.

**Time spent together:** Each edge weight represents the cumulative number of time both the coach and student were present on the Khan Academy website. By setting a specific threshold, it would be possible to only infect those that were very active, somewhat active, or minimally active.

**Ranking:** Each edge weight represents a student's ranking relative to the coach. This ranking could be determined by the coach or by the student's abilities to do problems without help. One possible benefit of this, combined with thresholding, is the following. Perhaps there is a new update to the site that greatly enhances self learning and creating exercises. It is sensible that we might want those that are struggling to comprehend the material to receive access to this site first.

<br>
#### Exact Infection
This is a very slight modification of **limited infection** where we only infect if we can find an infection scheme that fits both the given number of clients to infect as well as the threshold. Otherwise, no infection occurs.

<br>
#### Extensions
One idea that I would like to explore is implementing an exact infection using `A*` or a better heuristic. Another approach could be specifying a set number and threshold, but not specifying the initial user. The program would then systematically search through every "class" until it finds one that satisfies the conditions **and** infects the entire connected component.

It would also be interesting to explore a more interactive data visualization rather than just producing the plot at the end. There are several good Python libraries for this, and it would also be worth exploring more famous Javascript libraries such as `D3.js`.

<br>
*this project was done as my application for khan academy's data science team as an intern. i chose to include this because of the interesting decisions i made when building the project as well my own interest in the topic.*