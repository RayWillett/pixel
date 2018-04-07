
doFetch()
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		doFetch().then(e => console.log(e)).catch(e => console.log("ERROR"))
		// ----------------------------------------------------------

	}
	}, 10);
});


function doFetch() {
	return fetch("http://localhost:5000/message/confirm?recipient=rwillet2@emich.edu&userID=asdf1234&emailSubject=Testing%20123&messageID=123", {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, OPTIONS"
		}
	})
}