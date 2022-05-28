/*global chrome*/

chrome.runtime.onMessage.addListener(async (request, sender,sendResponse) => {
        chrome.storage.sync.set({font: request.font});
})


