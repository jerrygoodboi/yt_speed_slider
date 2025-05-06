function setSpeed(speed) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: (s) => {
        const video = document.querySelector('video');
        if (video) {
          video.playbackRate = s;
          console.log("Speed set to", s);
        } else {
          alert("No video element found.");
        }
      },
      args: [speed]
    });
  });
}

const slider = document.getElementById("speedSlider");
const valueDisplay = document.getElementById("speedValue");

slider.addEventListener("input", () => {
  valueDisplay.textContent = slider.value;
  setSpeed(parseFloat(slider.value));
  });
document.getElementById("rst").addEventListener("click", () => {
  valueDisplay.textContent = "1";
  setSpeed(1);
});

