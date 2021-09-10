/* DOM Elements */
const imageContainer = document.getElementById('image-container');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'BFulOYz5Mz1PJMSha3u2qHUzXpFdixRoXfZzQZ39kjo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttributesHelper(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotosOnPage() {
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

        // Nest elements
        photoLinkElement.appendChild(photoImgElement);
        imageContainer.appendChild(photoLinkElement);
    });
}

async function getPhotosFromApi(){
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.info(photosArray);
        displayPhotosOnPage();
    } catch (error) {
        // Handle Error
        console.error(error);
    }
}

getPhotosFromApi();