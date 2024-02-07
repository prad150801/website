function showSurprise() {
    const surpriseDiv = document.getElementById('surprise');
    const specialMessage = document.getElementById('specialMessage');
    const confettiDiv = document.getElementById('confetti');
    const chocolatesDiv = document.getElementById('chocolates');
    const backgroundAnimationDiv = document.getElementById('backgroundAnimation');
    const photoGalleryDiv = document.getElementById('photoGallery');
    const musicPlayer = document.getElementById('musicPlayer');
    const videoPlayer = document.getElementById('videoPlayer');

    // Customize the special message here
    const message = "You're the best person there is🌍'";

    specialMessage.innerText = message;
    surpriseDiv.classList.remove('hidden');

    // Show confetti
    confettiDiv.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confettiDiv.appendChild(confetti);
    }

    // Show chocolates
    chocolatesDiv.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        const chocolate = document.createElement('div');
        chocolate.className = 'chocolate';
        chocolate.style.left = Math.random() * 100 + 'vw';
        chocolatesDiv.appendChild(chocolate);
    }

    // Show dynamic background animation
   backgroundAnimationDiv.style.display = 'block';

    // Show personalized photo gallery
    photoGalleryDiv.innerHTML = '';
    const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg","photo4.jpg","photo5.jpg",
    "photo6.jpg","photo7.jpg","photo8.jpg","photo10.jpg",
    "photo11.jpg","photo12.jpg","photo13.jpg","photo14.jpg","photo15.jpg",
    "photo17.jpg","photo18.jpg","photo19.jpg","photo20.jpg","photo21.jpg",
    "photo22.jpg","photo23.jpg","photo24.jpg","photo25.jpg",,"photo26.jpg"]; // Add your photo filenames
    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = `Photo ${index + 1}`;
        img.className = 'photo';
        img.addEventListener('click', () => alert(`Clicked on Photo ${index + 1}`));
        photoGalleryDiv.appendChild(img);
    });
    photoGalleryDiv.style.display = 'flex';

    // Show music player with a special song
    musicPlayer.style.display = 'block';

    // Show video player 
    videoPlayer.style.display = 'block';
    
}