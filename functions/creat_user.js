// Code here is executing on top of 'node.js', which does not yet have access to ES6 modules.

const admin = require('firebase-admin'); // gives access to the service account

module.exports = function(req, res) {
	// Verify the user provided a phone
	// req.body = is a js obj that contains all the data
	// that was passed to this func when user called it. 
	console.log('req.body', req.body);
	
	if (!req.body.phone) {
		return res.status(422).send({ error: 'Bad Input' }); // 422 unprocessable entity status
	}

	// Format the phone number to remove dashes and parens
	// convert it to a string, just in case.
	const phone = String(req.body.phone).replace(/[^\d]/g, "");
    // const phone = req.body.phone.replace(/[^\d]/g, '').toString();


	// Create a new user account using that phone number
	admin
		.auth()
		.createUser({ uid: phone })
		.then((user) => res.send(user))
		.catch((err) => res.status(422).send({ error: err }));

	// Respond to the user request, saying the account was made.
};
