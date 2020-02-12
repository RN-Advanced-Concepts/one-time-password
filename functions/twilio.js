const twilio = require('twilio');

// account tokens that allow us send text message i.e. authenticate us with the twilio api.
// REAL ACCOUNT SID
// const accountSid = 'AC2467dfbc897d714c3062fa12f7bcf7f7';
// REAL TOKEN
// const authToken = 'e79a34f9929aaf5ea0632e89f48094a4';

// TEST ACCOUNT SID
const accountSid = 'AC08bba86d114ab28b9070620bf3426f53';
// TEST AUTHTOKEN
// https://www.twilio.com/console/voice/project/test-credentials
const authToken = '197d474013b19119025fdc1339579b5b';

module.exports = new twilio.Twilio(accountSid, authToken);
