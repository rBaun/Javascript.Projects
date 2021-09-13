# JavaScript Projects
This repository is a collection of minor JavaScript projects, inspired by modern and popular web designs. Every project contains a short description, presenting the goal for the project and the resources used. The overall goal for is to become a better frontend developer, in the pursuit of becoming a FullStack Developer.

The goal of the project is to gather a collectino of small projects with specific features, making it easy to understand and implement in any project. For that reason, every project also contains a bulletin list of features.

Projects created so far, ordered by first to last:
* [Quote Generator](#quote-generator)
  * Display a Random Quote
  * Get new quote from 1600+ different quotes
  * Tweet the quote
* [Infinity Scroll](#infinity-scroll)
  * Fetch Images from Unsplash
  * Infinite Scrolling
  * Responsive Layout
* [Picture-in-Picture](#picture-in-picture-mode)
  * Display a Picture-in-Picture Screen
  * Select what you want to Share
  * Draggable window in bottom corner
* [TTS Joking Robot](#tts-joking-robot)
  * Robot Animation
  * Tell Joke on Command
  * Text to Speech
* [Theme Toggler](#theme-toggler)
  * Dark & Light Theme
  * Smooth Navigation Scrolling
  * Persistence with LocalStorage

## Quote Generator
This project is made to demonstrate how to fetch data from external sources. 
This is one of the most popular things in modern web applications, hence the need for a project made for reference purposes.

This project fetches data from [Type Fit API](https://type.fit/api/quotes). 
The source contains a quote and the author who made it, which is going to be displayed on the page.

### Features
* Display a random Quote
  * Fetch from local file, if API request throws error
* Get new quote from 1600+ different quotes
* Tweet the quote

## Infinity Scroll
This project is made for the purpose of mimicing the infinite scroll, most popular known from social media. 
The idea is you load the content, before you reach the bottom of the page, making it feel like infinite scrolling.
Just like Facebook, Instagram and other Social Media platforms.

This project fetches data from [Unsplash API](https://unsplash.com/documentation), which contains a huge collections of different photos. 
The goal is to fetch photos at random and show them on the page, while loading more photos with the infinite scroll concept.

### Features
* Fetch images from Unsplash
* Infinite Scrolling
* Responsive Layout

## Picture in Picture Mode
This project is inspired by Youtube. When watching a youtube video, you can get a video in the bottom corner and continue browsing. This project makes it possible to display whatever you want it to. It can be a message window, netflix, music or anything else you would like. Now, that's sounds pretty cool to me.

Doing a bit of [research](https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/), lead me to the [Screen Capture API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API), which is pretty simple and straightforward. It's sole purpose is to stream a selected part of your screen.

### Features
* Display a Picture-in-Picture Screen
* Select what you want to Share
  * Entire Screen / Application / a tab in chrome
  * The same as Sharing on Discord/Teams
* Display a "Picture in Picture" in bottom corner
* Ability to drag it around

## TTS Joking Robot
This project will utilize text to speech by having a virtual robot telling you a joke, just like Siri is able to, if asked. I have always been fascinated by TTS and now I finally get to try and implement it on my own!

The jokes will be generated as text from [Joke API](https://api.chucknorris.io/) and using [Text to Speech API](http://www.voicerss.org/) to make the robot speak. 

### Features
* Robot Animation
  * Made by [Jonas Bødtker](https://giphy.com/gifs/beer-robot-jonasbodtker-1ZDDyAaAA82ywDiyKs)
* Tell a Joke on command
* Text to Speech

## Theme Toggler
In this project I will be exploring how to implement a dark and light mode, which is something I've stumbled upon in many sites. I thought it would be a good idea to try and implement it for myself. [This](https://blog.prototypr.io/how-to-design-a-dark-theme-for-your-android-app-3daeb264637) article describes the Material Guidelines released by Google, which the project is inspired by.

I will be using LocalStorage in this project to save the choice of light or dark mode. This will result in a better user experience, since they will not have to toggle it every time they visit.

### Features
* Toggle between Dark & Light Theme
* Smooth navigation scrolling
* Persistence with LocalStorage