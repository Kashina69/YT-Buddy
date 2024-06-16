let isExtensionEnabled = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ isExtensionEnabled });
});

chrome.tabs.onActivated.addListener(() => {
  if (isExtensionEnabled) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "play" });
      }
    });

    chrome.tabs.query({ active: false, currentWindow: true }, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, { action: "pause" });
      });
    });
  }
});

chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    // Chrome window is not focused
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, { action: "pause" });
      });
    });
  } else {
    // Chrome window is focused
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "play" });
      }
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggle") {
    isExtensionEnabled = request.value;
    chrome.storage.local.set({ isExtensionEnabled });
  }
});
