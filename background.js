chrome.runtime.onInstalled.addListener(() => {
  console.log("YouTube Speed Changer installed!");
});
/*const slider = document.getElementById("speedSlider");
const valueDisplay = document.getElementById("speedValue");
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
	slider.value = document.querySelector(video).playbackRate;
  	valueDisplay.textContent = slider.value;
    }
  });
});

*/

