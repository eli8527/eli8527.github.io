---
layout: post
title:  "copilot"
---
<img src="/images/copilot/icon.png" alt="copilot logo" width="50"/>
*browse the web collaboratively*

* [download page] (http://www.princeton.edu/~eyli/copilot/)

__the problem:__ when doing group research or planning something with others, a common issue is determining how to effectively share links and pages amongst your collaborators.

__the solution:__ create a chrome extension, copilot, that facilitated collaborative browsing, which would make it almost trivial to share links with others.

<br>
#### background
rather than hack together something with google hangouts or some other preexisting collaboration framework, we decided to completely rethink what it meant to work collaboratively. to do so, we thought of cases in which people needed to work collaboratively as well as current solutions to the issue. some examples include doing research together or planning a trip, both of which require a large number of shared web pages. what we found was that the only real solution right now was to manually share links over some kind of chat framework. not only was this counterproductive, but it meant that all other collaborators only had access to what you were able to share.

we realized from this research that the best way to facilitate collaboration was to create a new paradigm, called _cobrowsing_. what this meant that a user could create a cobrowsing session in their browser, which would then open a new window. this window would function as their collaborative browsing session in which other users could also join. any tab opened or closed, as well as links visited, would be reflected on the windows of all users. what this meant that everyone could have access to what the entire group was working on without having to ask them for links. 

<br>
#### technical details
we chose to go with [firebase](firebase.com) as our backend because of how well it fit our requirements - that is a real time synchronized database. every time an action occurred in the collaborative browsing window, it would be reflected in the firebase database and then pushed to all other clients. much of the heavy lifting was done by the platform itself, but that isn't to say we had our fair share of headaches with race conditions and dealing with infinite loops! we chose to implement copilot as a chrome extension as it would lead to a more frictionless experience for users and wouldn't involve any heavy lifting. 

<br>
#### user flow
here is how a typical use of copilot might occur.


1. host clicks the copilot icon in the toolbar to initiate a cobrowsing session.
    * <img src="/images/copilot/step1.png" alt="step1" width="400"/>
    
2. the host selects create a new session and enters his/her name before clicking "create session." we decided to divide it up like this because the original interaction of deciding between joining and creating a session was too confusing. a key factor we kept in consideration in designing this was minimizing how many clicks were needed to either join or create a session.
    * <img src="/images/copilot/step2.png" alt="step2" width="400"/>

3. the host is brought to a new browser window that functions as the collaborative browser. the initial page loaded is an information page that allows the host to share that session's unique identifier with others, as well as current participants. we decided that sharing uuid's would be a good onboarding process, though in the future we will likely just provide a link that automatically joins a user when they click it.
    * <img src="/images/copilot/step3.png" alt="step3" width="400"/>
    
4. the host can now share the uuid with anyone and they can join it. meanwhile, the host can begin browsing as if the window is any other browser window.
    * <img src="/images/copilot/step4.jpeg" alt="step4" width="400"/>
    
5. a user gets the uuid from the host and decides to join the session by clicking on the extension button and selecting join session.
    * <img src="/images/copilot/step5.png" alt="step5" width="400"/>

6. a new window opens for the user and all tabs that the host has are automatically loaded. from now on, any tab opened or closed, any link clicked, will be reflected on all windows in the cobrowsing session. to exit, one just needs to close the window. the tabs remain there for everyone else.

<br>
#### design decisions
throughout the development process, we made several key design decisions. here are a few of them.

1. make copilot as a chrome extension. this allows for frictionless onboarding and session creation as opposed to a chrome application or an independent web browser.
2. it was important that the user realized that they were in a cobrowsing session, and so we created a new window just for the session. we made sure that only tabs opened and closed, as well as links visited, in that window were reflected.
3. we wanted to make sure that that users knew which tabs they created and which others created. as a result, tabs that others open are pinned in your browsing window like so:
    *  <img src="/images/copilot/pinned.png" alt="pinned" width="400"/>

<br>
#### future work
as we continue development, we are focusing on several features. one big one is indicating which users are on which tabs. this is an interesting ux problem because we are constrained by each tab and how we can modify it. one solution is having each user as a unicode symbol and modifying the tab title accordingly. another big feature that we have working experimentally is the ability to have forms reflected across browsers as well. imagine being able to fill out taxes, applications, or any other type of form with others!

<br>
*this project was developed at [greylock hackfest 2015](http://greylocku.com/hackfest/) in collaboration with cissy chen, aditya trivedi, and stephen cognetta.*
