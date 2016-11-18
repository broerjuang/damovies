'use strict'
require('dotenv').config()

const accountSid = process.env.ACCOUNT_SID;
const authToken  = process.env.AUTH_TOKEN;


const client = require('twilio')(accountSid, authToken);


function notification(text, phone) {
  client.messages.create({
      to: phone,
      from: "+12563440493",
      body: text,
      //mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",
  }, function(err, message) {
    err? console.log(err) : console.log(message.sid);;
  });
}

module.exports = {
  notification
}

notification('hei dude','+6285774369672')
