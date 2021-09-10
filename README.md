# JavaScript Projects
This repository contains minor JavaScript projects inspired by modern and popular implementations in the web development community, that I discover during my time as a developer.

The projects is going to be created on-the-go, but so far the list is as follows:
* [Quote Generator](#quote-generator)
* [Infinity Scroll](#infinity-scroll)
* [Picture-in-Picture](#picture-in-picture-mode)

## Quote Generator
This project is made to demonstrate how to fetch data from external sources. 
This is one of the most popular things in modern web applications, hence the need for a project made for reference purposes.

This project fetches data from [Type Fit API](https://type.fit/api/quotes). 
The source contains a quote and the author who made it, which is going to be displayed on the page.

### Features
* Display a random Quote
  * Fetch from local file, if API request throws error
* Get new quote from 1600+ different quotes
* Tweet the quote. (Requires you to be logged in on twitter)

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

Doing a bit of research, lead me to the [Screen Capture API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API), which is pretty simple and straightforward. It's sole purpose is to stream a selected part of your screen.

### Features
* Display a Picture-in-Picture Screen
* Select what you want to Share
  * Entire Screen / Application / a tab in chrome
  * The same as Sharing on Discord/Teams
* Display a "Picture in Picture" in bottom corner
* Ability to drag it around