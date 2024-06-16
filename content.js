window.addEventListener('load', () => {
  setInterval(() => {
    skipAd();
  }, 1000);
});

function skipAd() {
  const skipButton = document.querySelector('.ytp-skip-ad-button');
  if (skipButton) {
    skipButton.click();
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "pause") {
    if (!window.location.href.includes("music.youtube.com")) {
      document.querySelectorAll('video').forEach((video) => {
        video.pause();
      });
    }
  }
  if (window.location.href.includes("music.youtube.com")) {
    return;
  }
  else if (request.action === "play") {

    document.querySelectorAll('video').forEach((video) => {
      video.play();
    });
  }
});