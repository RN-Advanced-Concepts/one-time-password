// Note: Cloud functions are connected to the Datastore of Firebase through the Service Client.
// serviceAccount = contains the secret credentials that authorize as to make any type of change.

const admin = require('firebase-admin'); // gives access to the service account
const functions = require('firebase-functions');

const createUser = require('./creat_user');
const serviceAccount = require('./service_account.json')


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-dbf0a.firebaseio.com"
  });

exports.createUser = functions.https.onRequest(createUser);

  