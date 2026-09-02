const enterBtn = document.getElementById('enter-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const audio = document.getElementById('bg-music');
const video = document.getElementById('bg-video');

enterBtn.addEventListener('click', () => {
  // Start music
  audio.volume = 0.55;
  audio.play().catch(e => console.log("Audio play error: ", e));

  // Ensure video is running
  video.play();

  // Transition views
  welcomeScreen.style.opacity = '0';
  setTimeout(() => {
    welcomeScreen.style.display = 'none';
    mainContent.classList.remove('hidden');
  }, 1000);
});
