chrome.runtime.onMessage.addListener(handle);
function handle(req) {
	if (req.url) {
		chrome.tabs.create({url: req.url});
	}
}
