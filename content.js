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
    document.querySelectorAll('video').forEach((video) => {
      video.pause();
    });
  } else if (request.action === "play") {
    document.querySelectorAll('video').forEach((video) => {
      video.play();
    });
  }
});



