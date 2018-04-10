function doFetch() {
	const baseURL = "https://1a90e609.ngrok.io"
	return fetch(`${baseURL}/message/confirm?recipient=rwillet2@emich.edu&userID=asdf1234&emailSubject=Testing%20123&messageID=123`, {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, OPTIONS"
		}
	})
}

function injectedMain () {
	console.log('doing injected main')
	doFetch()
}

export {
	injectedMain
}