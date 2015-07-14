---
layout: post
title:  "walkme"
---
<img src="/images/walkme/logo.png" alt="walkme logo" width="50"/>
*a multiplatform safety-enhanced pedestrian routing application*

* [website](http://walkme.heroku.com/)
* [presentation deck](/files/walkme.pdf)

__the problem:__ imagine you're walking alone at night in a city that can be unsafe. current mapping solutions such as google maps don't take into account safety when providing walking directions, leading you to potentially unsafe areas. other solutions include taking a cab (pricey) and looking up unsafe areas (too much work).

__the solution:__ create a multiplatform (web, ios, android) application that recommends the safest and shortest path from point a to point b.

<br>
#### background
imagine you’re in an unfamiliar city and you’re trying to get from a to b. it’s late at night, so you’re not sure if it’s safe to walk back alone and maybe you just want to know which is the safer path, even if it takes a bit longer to get to your destination. in fact, maybe some areas of the city are safer than others, but you don’t have that information. 

walkme aims to solve this problem by providing the safest and shortest route between two points based on historical crime data. to do so, we take several factors into account including severity of a crime, number of crimes at a location, worst crime occuring on a path, and the most crime dense point on a path. we then go through all the walking paths provided by google maps and assign it a safety index from 1 (very unsafe) to 10 (very safe).

currently, walkme only works for new york. however, we are working to expand it to other cities such as san francisco.

<br>
#### technical details
<img src="/images/walkme/architecture.png" alt="architecture" width="500"/>

from a high level view, we can divide walkme's architecture into three distinctive entities. the client is the front facing entity where a user interfaces with the application and looks up directions. after requesting directions from point a to b, the frontend performs a directions javascript request to google maps and sends the resulting object to a django server in the cloud. the server parses the directions object and looks up the crimes at each waypoint in a postgresql database. after performing calcuations, the server returns to the client a set of safety indicies, as well as some other salient information. the client then processes this and returns a result to the user.

data was collected from the [nyc crime map](http://maps.nyc.gov/crime/) and parsed into a postgresql database with postgis enabled to help with performance. from there, the backend would parse a directions json object and methodically check every way point of a route for crimes. our final safety index would be calculated based on:
1. average crime severity
2. average crime rate
3. worst crime severity
4. highest crime rate

the frontend was written as an [ionic framework](http://ionicframework.com/) application using javascript and html in order to support multiplatform builds. we used angular.js for routing and mvc. we also chose to use this framework as it allowed easy access to the google maps api, which is mainly in javascript.

<br>
#### walk through
1. when the user first opens the application, they are greeted with a welcome screen that explains a little more about what walkme does.
    * <img src="/images/walkme/step1.png" alt="step1" width="400"/>
    
2. they can then go back to the main screen, which takes many design elements from other mapping elements. this is to provide the user with a familiar environment in which to use the app.
    * <img src="/images/walkme/step2.png" alt="step2" width="400"/>
    
3. the user can search a starting point and an end point. we included autocomplete because after completing usability tests, we found that users really liked the validation that autocomplete provided.
    * <img src="/images/walkme/step3.png" alt="step3" width="400"/>
    
4. when selecting a starting address and a destination, we also dropped pins to provide visual confirmation of the user's selection. finally, after selecting a second destination, clicking "go" on the keyboard would automatically proceed to step 5. here, we are just showing what a complete query looks like. the user can also select the floating action button, placed similarly like the one in google maps, to perform a routing request.
    * <img src="/images/walkme/step4.png" alt="step4" width="400"/>
    
5. the results page was designed with intuition in mind. we automatically highlight the route with the highest safety rating, with the map reflecting that specific route. in addition, the call to action is very clear, as well as other options. users can click the question mark for more details on a route, as well as select other route options. in addition, we decided to add an option to request an uber if there are routes with a safety rating below 5.
    * <img src="/images/walkme/step5.png" alt="step5" width="400"/>
    
6. finally the directions panel displays nicely formatted walking directions from point a to b, with the option past the scroll to track gps. unfortunately, google maps doesn't support turn by turn navigation, so we'll have to limit it to this for now.
    * <img src="/images/walkme/step6.png" alt="step6" width="400"/>

<br>
#### design decisons
we made several key design decisions and considerations throughout the development of walkme.
1. social implications. probably the biggest issue that we wanted to avoid was developing an application that labeled certain areas as unsafe. (imagine being a resident of one such area and learning that others considered where you lived to be unsafe). to get around this, we provided as much data as we could about each route without giving too much information on the areas as a whole (generalizing).
2. we made the decision to develop in ionic early on as a way of making the app accessible to as many people as possible and as an exercise in trying out new technologies.
3. the first iteration of our heuristic was very dumb and only took into account an average of the crime ratings along a path. since then, we have iterated to provide much more nuanced safety ratings.

<br>
#### future work
our big goal for the future is to develop walkme for more cities. in addition, we are exploring creating our own routing heuristic independent of google maps.

<br>
*walkme was developed with cissy chen and julia wang in [cos333](http://www.cs.princeton.edu/courses/archive/spring15/cos333/) at princeton, taught by [brian kernighan](http://www.cs.princeton.edu/~bwk/).*