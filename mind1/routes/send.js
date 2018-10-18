const sendEmail = require('./sendEmail');

function sendLink(host, emailId, message, callback) {
	let link = "";
	console.log("revieved");
	console.log(message, "kkk");
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
