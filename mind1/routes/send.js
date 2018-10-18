const sendEmail = require('./sendEmail');

function sendLink(host, emailId, verificationLink, callback) {
	let link = "";
	let message = {
		subject : "Congratulations! You have been selected to volunteer",
		html : "Hello,<br> Please Click on the link to confirm you attendance.<br><a href=" + link + ">Click here to verify</a>",
		text: "text"
	};
	sendEmail(emailId, message, null)
		.then(() => {
			console.log('resoled and calling callback');
			callback(true, null);
		}).catch((reason) => {
			console.log('Handle rejected promise ('+reason+') here.');
			callback(false, reason);
		})
}

module.exports = sendLink;
