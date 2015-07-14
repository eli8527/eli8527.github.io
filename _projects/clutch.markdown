---
layout: post
title:  "clutch"
---
<img src="/images/clutch/logo.png" alt="clutch logo" width="50"/>
*bringing the magic back to shopping*

* [website](http://clutchapp.me/)
* [pitch deck](/files/clutch.pdf)

__the problem:__  currently, brick and mortar retail is impersonal for customers and inefficient for retailers. when shoppers visit stores, they have preferences and desires that the store couldn’t possibly know about. perhaps they are part of a store’s loyalty program, and get a coupon once a month, but this is the extent of personalization. Even so, these coupons are inconvenient. it’s impossible to remember all the expiration dates, consider exceptions and even remember to bring them to the store. However, retailers operate this way because they don’t have a choice - they don’t know their customers well enough or individually enough, and so they have to simply hand out coupons with only a very rough idea of who to target. Further, while coupons might get customers into stores, they are not effective ways of getting shoppers to purchase items.


__the solution:__ clutch is a platform that connects retailers and shoppers. it combines the customizability and dynamic pricing on online shopping with the benefits of physical retail by providing:

1. a targeted promotion service for retailers
2. a mobile coupon app for shoppers

this allows for retails to not only save money, as they don't have to budget for blanket coupons, but also provide consumers with a customized in store shopping experience. this is especially powerful for local retailers who may not have a large online presence as it incentivizes consumers to shop in store.

<br>
#### how it works
1. retailers receive a setup package with ibeacons and software installation.
2. retailer uploads coupons and exclusive deals to our web platform.
3. shopper downloads and opens the clutch app in-store.
4. clutch recognizes the shopper’s location and behavior and serves personalized deals!

<br>
#### technical details
clutch runs on a [parse](https://www.parse.com/) backend with an [ionic](http://ionicframework.com/) frontend. this allows the greatest reach and customizability. integration with ibeacons that communicate with the device and a secondary sever allow for targeted and customized coupons for the customer. 

<br>
#### retail console
the retail console was designed with usability in mind. we paid careful attention to what would be important to retailers, conducting usability surveys of various local and national retailrs. we noticed that the biggest want was refined and nuanced coupon information. we also realized that the concept of ibeacons was rather new to many and so tried to incorporate that into the dashboard.

<img src="/images/clutch/console.png" alt="clutch console" width="600"/>

<br>
#### consumer experience
we focused on providing a seamless and clean experience in using clutch. 

1. when consumer's first open the app, after downloading it, they are greeted with a welcome screen that asks them to select their interests. this allows us to provide targeted coupons before we begin learning about their preferences.
    * <img src="/images/clutch/welcome.png" alt="welcome" width="400"/>
    
2. afterwards, when a consumer is in a retail store with clutch, existing coupon promotions are automatically shown. in addition, they can select the grey bar at the bottom for a popover that provides more details about the store.
    * <img src="/images/clutch/existing.png" alt="existing" width="400"/>

3. as the customer continues browsing, the application tracks their movements throughout the store and determines when a consumer might by something. based on this information, they are provided with custom coupons just for them.
    * <img src="/images/clutch/personalized.png" alt="personalized" width="400"/>
    
4. checkout is just as easy - one can select a coupon and present it at checkout.
    * <img src="/images/clutch/checkout.png" alt="checkout" width="400"/>

<br>
#### design considerations
when designing clutch, we had to keep in mind how retailers and customers interface with each other. we also were careful to incentivize both retailers and customers to use the application. for example, we added the ability for custom modules as a way for retailers to have more reach to their customers. another big design consideration was how long we had the personalized coupons live for. we decided that because we wanted to push the customers to buy a product **now**, we would make the personalized coupons rather short lived.

another consideration we spent a long time deliberating over was what features were viable or not. we conducted many usability surveys and in person interviews of both retailers and customers in order to ensure that the application was viable and suited the needs of both. what we found was that customers liked the idea a lot and requested that they be notified of these custom deals. retailers enjoyed the ability to provide a more personalized shopping experience without compromising cost.

<br>
*clutch was developed with cissy chen, aditya trivedi, and julia wang in [cos448](http://www.cs.princeton.edu/courses/archive/spring15/cos448/) at princeton.*