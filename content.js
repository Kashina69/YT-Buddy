
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



