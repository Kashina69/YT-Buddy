document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggleButton');

  chrome.storage.local.get('isExtensionEnabled', (data) => {
    button.textContent = data.isExtensionEnabled ? 'Turn Off' : 'Turn On';
  });

  button.addEventListener('click', () => {
    chrome.storage.local.get('isExtensionEnabled', (data) => {
      const newValue = !data.isExtensionEnabled;
      chrome.storage.local.set({ isExtensionEnabled: newValue }, () => {
        button.textContent = newValue ? 'Turn Off' : 'Turn On';
        chrome.runtime.sendMessage({ action: 'toggle', value: newValue });
      });
    });
  });
});
