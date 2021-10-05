const videoElement = document.getElementById('video');
const startButton = document.getElementById('startBtn');

async function selectMediaStreamPrompt() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Handle error
        console.error(error);
    }
}

startButton.addEventListener('click', async () => {
    startButton.disabled = true;
    await videoElement.requestPictureInPicture();

    startButton.disabled = false;
});

selectMediaStreamPrompt();