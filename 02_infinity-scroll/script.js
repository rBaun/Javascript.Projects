/* DOM Elements */
const imageContainer = document.getElementById('image-container');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 20;
const apiKey = 'BFulOYz5Mz1PJMSha3u2qHUzXpFdixRoXfZzQZ39kjo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function onImageLoaded() {
    imagesLoaded++;
    if(imagesLoaded === totalImages) {
        ready = true;
    }
}

function setAttributesHelper(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotosOnPage() {
    imagesLoaded = 0;
    totalImages = photosArray.length;

    photosArray.forEach(photo => {

        const photoLinkElement = document.createElement('a');
        setAttributesHelper(photoLinkElement, {
            href: photo.links.html,
            target: '_blank'
        });

        const photoImgElement = document.createElement('img');
        setAttributesHelper(photoImgElement, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });

        photoImgElement.addEventListener('load', onImageLoaded);

        // Nest elements
        photoLinkElement.appendChild(photoImgElement);
        imageContainer.appendChild(photoLinkElement);
    });
}

async function getPhotosFromApi(){
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotosOnPage();
    } catch (error) {
        // Handle Error
        console.error(error);
    }
}

window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000
        && ready){
        /* 
            ***Demonstrates the theory behind our infinite scroll logic***
        console.log('window.innerHeight: ', window.innerHeight);
        console.log('window.scrollY: ', window.scrollY);
        console.log('window.innerHeight + scrollY: ', window.scrollY + window.innerHeight);
        console.log('document.body.offsetHeight - 1000: ', document.body.offsetHeight - 1000);
            ***This implementations would be making multiple requests, which needs to be handled***
            ***Could be usefull with Load event: https://www.w3schools.com/jsref/event_onload.asp***
        */
       getPhotosFromApi();
       ready = false;
    }
});

getPhotosFromApi();