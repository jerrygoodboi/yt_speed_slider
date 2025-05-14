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
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: () => document.querySelector("video").playbackRate
  }, (results) => {
    document.getElementById("speedSlider").value = results[0].result;
    document.getElementById("speedValue").textContent = results[0].result.toFixed(2);
  });
});

const slider = document.getElementById("speedSlider");
const valueDisplay = document.getElementById("speedValue");
slider.addEventListener("input", () => {
  valueDisplay.textContent = slider.value;
  setSpeed(parseFloat(slider.value));
  });
document.getElementById("1").addEventListener("click", () => {
  slider.value = "1";
  valueDisplay.textContent = slider.value;
  setSpeed(1);
});
document.getElementById("2").addEventListener("click", () => {
  slider.value = "2";
  valueDisplay.textContent = slider.value;
  setSpeed(2);
});
document.getElementById("2_5").addEventListener("click", () => {
  slider.value = "2.5";
  valueDisplay.textContent = slider.value;
  setSpeed(2.5);
});
document.getElementById("3").addEventListener("click", () => {
  slider.value = "3";
  valueDisplay.textContent = slider.value;
  setSpeed(3);
});
document.getElementById("3_5").addEventListener("click", () => {
  slider.value = "3.5";
  valueDisplay.textContent = slider.value;
  setSpeed(3.5);
});
