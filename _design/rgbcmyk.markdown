---
layout: post
title:  "rgb vs cmyk"
---
<img src="/images/rgbcmyk/box.jpg" alt="box" width="400"/> 

*illustrate the differences between the rgb and cmyk color spaces.*

<br>
#### rgb vs cmyk
in modern media, there are two primary color spaces: the digital rgb color space and the print cmyk color space. briefly, rgb is an additive color space consisting of the colors red, gree, and blue that involves using visible light to create colors. this method forms the basis for all modern electronic displays. conversely, cmyk is a subtractive color space consisting of cyan, magenta, yellow, and black that forms the basis for all printing. 

the differences between these color spaces is extremely important as people often will be working with both concurrently during a project. it is therefore crucial for one to understand the fundamental differences in the way that these color spaces operate and how they relate to one another.

<br>
#### back to basics
when it comes to illustrating the differences between these two color spaces, it is useful to distill each down to its fundamental unit. whereas atoms are the fundamental unit of matter, pixels are the fundamental unit of the rgb color space and ink drops are the fundamental unit of the cmyk color space. 

by distilling each color space down to its fundamental unit, particularly with rgb, we are able to eliminate any discrepencies that arise between manufacturers such as color temperatures and screen calibrations. therefore, i chose to represent the rgb color space using the bare minimum: an rgb light emitting diode (led). i also chose to represent each space in the medium that it is meant for, digital for rgb and print for cmyk. 

<br>
#### the concept
conceptually, the goal of my project to allow a user to discover that there are inherent differences between the two color spaces.

to illustrate that rgb is an additive color space, an rgb led connected to three knobs (potentiometers) was used. these knobs could be turned, changing each color value so that a user could discover for him/herself all the different color combinations possible in this additive color space. the led itself was housed in a 3x3 inch (the size of a post it note) 3d-printed black cube covered in a translucent gray plastic. this represents the fundamental unit of digital displays - a pixel.

the cmyk color space was represented using an epson stylus pro 4800 printer. ink was chosen over laser toner because it was closer to the original medium by which this color space existed. in representing each color space in its own unique medium rather than all on print or on a screen, the user is able to discover many more intricate details of each space.

i chose to link the two color spaces using the intuitive mechanism of a button. once a person had picked a color they liked on the “pixel,” they could press a button and the exact same color would be printed out on a 3x3 inch square using the epson. of course, the color would not be an exact match. this discrepancy would allow the user to discover that in fact, the two color spaces do not provide a one-to-one correspondence. 

the resulting print out would be pinned up on a wall, titled “in progess” which illustrates the almost limitless combinations of colors available. it also provides a static display of colors only available to the print medium whereas the pixel provides a dynamic, always changing, display of colors inherent to the digital medium.

<br>
#### implementation
<img src="/images/rgbcmyk/schematic_bb.png" alt="circuit" width="400"/> 

the electronic component to this project was housed on an arduino mega 1280 combined with a breadboard. a cathode rgb led was used as the light source and was connected to three separate pulse width modulation (pwm) pins on the arduino. a button was also attached to the breadboard, providing a positive digital signal when pressed. special code had to be used to ensure that the button would not give false positives (debouncing).

also attached to the arduino were three 5k-ohm linear taper potentiometers. these provided analog input on a scale of 0-255 for each of the rgb values. the arduino would read in these inputs and update the colors of the led accordingly.

when the button is pressed, the arduino outputs a comma separated value (csv) of the rgb values to the serial at 9600 baud. a python script reads in these serial values and produces a bitmap image at 72 dpi that is 3x3 inches in size of that specific rgb color.

the script then sends the image to the print queue of the epson printer which in turn prints it out, converting the rgb color to cmyk in the process. the final product is two 3x3 inch squares of colors that theoretically should be the same, but in fact are not.

the arduino and all the electronic components are housed in a white box, so that the only things that the user can see are the “pixel,” knobs, and button. this idea of encapsulation is one that carries over from software engineering, where the actual implementation is hidden from the user.

<br>
#### the result
<iframe src="//player.vimeo.com/video/114442640?byline=0&amp;portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<br>
<img src="/images/rgbcmyk/in_progress.jpg" alt="in progress" width="400"/> 

<br>
#### installation
the results of this project were later featured in an installation in which 550 sheets of paper, each with a 3x3 inch randomly generated square, were pinned to a wall. over the course of a week, viewers could pull pieces off at will, thus creating a physical piece of generative design - truly "in progress".

<br>
<img src="/images/rgbcmyk/installation.jpg" alt="installation" width="400"/> 

<br>

* [in progress](/files/inprogress.pdf)
* [code](https://github.com/eli8527/rgb-cmyk)