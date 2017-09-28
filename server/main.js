import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  process.env.MAIL_URL = "smtp://postmaster@sandbox2a480da3701947789479f6523d33414f.mailgun.org:9135025620634c2ef56eca1afbfe01d2@smtp.mailgun.org:587";
  // code to run on server at startup
});
