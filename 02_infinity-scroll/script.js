const imageContainer = document.getElementById('image-container');
let initialLoad = true;
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let initialLoadCount = 5;
const apiKey = 'BFulOYz5Mz1PJMSha3u2qHUzXpFdixRoXfZzQZ39kjo';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initialLoadCount}`;

function updateApiUrlCountParameter(loadCount) {
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${loadCount}`;
}

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
        if(initialLoad) {
            updateApiUrlCountParameter(30);
            initialLoad = false;
        }
    } catch (error) {
        // Handle Error
        console.error(error);
    }
}

window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhotosFromApi();
    }
});

getPhotosFromApi();