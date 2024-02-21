// Wait for the page to fully load
window.addEventListener('load', () => {
    // Check every 2 seconds if there is an ad
    setInterval(() => {
      skipAd();
    }, 500);
  });
  
  function skipAd() {
    const adOverlay = document.querySelector('.ytp-ad-overlay-close-button');
    const skipButton = document.querySelector('.ytp-ad-skip-button-modern ');
    if (adOverlay) {
      adOverlay.click(); // Close ad overlay
    }
    if (skipButton) {
      skipButton.click(); // Click skip ad button
    }
  }
