
window.onload = () => {
  chrome.storage.sync.get(["font"], result => {
    result && (document.querySelector("body").style.fontFamily = result.font)
  });
}  









