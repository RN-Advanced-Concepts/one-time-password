// Note: Cloud functions are connected to the Datastore of Firebase through the Service Client.
// serviceAccount = contains the secret credentials that authorize as to make any type of change.

const admin = require('firebase-admin'); // gives access to the Service Account (see Settings in Firebase project).
const functions = require('firebase-functions');

const createUser = require('./creat_user');
const requestOneTimePassword = require('./request_one_time_password');
const verifyOneTimePassword = require('./verify_one_time_password');

// 'serviceAccount' Is a key we created on firebase/project settings/Service Accounts.
// It contains all our secret credentials.
const serviceAccount = require('./service_account.json'); 

// copied from firebase/project settings/Service Accounts 
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-dbf0a.firebaseio.com"
  });

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword);
exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword);

  