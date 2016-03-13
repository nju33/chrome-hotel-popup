chrome.runtime.onMessage.addListener(handle);
function handle(req) {
	console.log(req);
	if (req.url) {
		chrome.tabs.create({url: req.url});
	}
}
