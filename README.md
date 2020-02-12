Course on Udemy
[React Native - Advanced Concepts](https://www.udemy.com/course/react-native-advanced/learn/lecture/6845216#content)


Note: I've uploaded to this repo the credentials for the admin. I then set to .gitignore the particular file and replaced the credentials with another key. Still there are some info that should not be here. I should delete this repo, but since this is just a course, I will just go on with learning!


065. We enabled Anonymous authentication, to be able to maintain the accounts (and run the creat_user function). By this we don't authenticate anonymous users, but users that we manage inside of our project with out the help of any other provider (like email, Google, Facebook etc). 
068. We created an account in Twilio and send an SMS to our personal mobile phone
phone number in Twilio: +12602724023.
069. We installed twilio inside the functions directory. And created the twilio.js file.
073. Need to accosiate your Firebase account with your credit card - paid account, in order to use API's like Twilio that are hosted off of Firebase. Other wise you cannot make network requests. 
Need to upgrade (i.e add biling info and charge your credit card with $20.00) Twilio account, to use twilio send.messages.create(...) 
Or do this: [!Q) No need to get a paid account in Twilio, use their test credentials!](https://www.udemy.com/course/react-native-advanced/learn/lecture/6853508#questions/9364981)

!Q) No need to get a paid account in Twilio, use their test credentials!
1
Fotis · Lecture 62 · an hour ago
Hello everyone,

As I found out reading another post on this lecture, namely this one:

Firestore version from Niclas, where at the end he states the following:

"The phone number I used is the test number if you use the test-credentials which you can get here:

https://www.twilio.com/console/voice/runtime/test-credentials
In this way you won't use your trial money on receiving messages on your actual phone but the API acts as if the message was sent."

In the link above you get a and a TEST ACCOUNT SID and a  TEST AYTHTOKEN

which you can use in your Twilio.js file.

So if co you comment out the real ones and use the Test ... ones you're good to go!

One more thing!

If you use the test credentials you will get another error when trying to run request_one_time_password

Namely this one The 'From' phone number provided is not a valid, message-capable Twilio phone number.

That means if you use the test credentials you can not use your twilio number in the from: "..." section in our request_one_time_password cloud function.

If you check the link above you'll see that one of the possible solutions is this: 


If you are sending messages with test credentials, verify that you are using one of the available test credential "magic phone numbers"


On the above link and on the section: Test Sending an SMS

We read:

"Example 1

Successfully send an SMS. Trigger this by sending an SMS using the magic number +15005550006 as the From number, and a regular phone number for the To number."


So in our request_one_time_password

we need to change the from: "our number in twilio"

to from: "+15005550006"


Then you can use your own number in twilio to send the https request in Postman. If the number is not valid you get an again an error.

Happy coding!



### packages
* firebase...
* inside the functions folder: npm install --save twilio 


firebase deploy --project one-time-password-dbf0a

Twilio: +12602724023