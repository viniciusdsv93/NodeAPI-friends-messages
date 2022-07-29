const path = require("path");

function getMessages(req, res) {
	// res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
	res.render("messages", {
		title: "Messages to friends",
		friend: "John Smith",
	});
}

function postMessage(req, res) {
	console.log("Updating messages...");
}

module.exports = {
	getMessages,
	postMessage,
};
