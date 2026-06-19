const PARTNERSHIP_CLASS = "w-full shrink-0 md:sticky hidden md:block";

chrome.runtime.onMessage.addListener((request) => {
	if (request.action === "TOGGLE_ELEMENT") {
		console.log("Toggle element");
		const partnershipElements =
			document.getElementsByClassName(PARTNERSHIP_CLASS);
		hidePartners(partnershipElements);
	}
});

function hidePartners(elements) {
	if (elements.length === 0) {
		console.log("No partnership elements found");
		return;
	}

	const firstPartnershipElement = elements[0];
	const isVisible = !(firstPartnershipElement.dataset.visibility === "true");

	chrome.runtime.sendMessage({
		action: "CHANGE_ICON",
		iconPath: isVisible
			? "/src/assets/icon-16-off.png"
			: "/src/assets/icon-16-on.png",
	});

	firstPartnershipElement.dataset.visibility = isVisible;
}
