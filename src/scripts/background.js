chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, { action: "TOGGLE_ELEMENT" });
});

chrome.runtime.onMessage.addListener((request, sender) => {
	if (request.action === "CHANGE_ICON") {
		chrome.action.setIcon({ path: request.iconPath, tabId: sender.tabId });
	}
});
