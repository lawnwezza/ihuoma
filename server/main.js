import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL = 'smtp://postmaster%40sandbox04d9edcafafe49b6a44a13e72c29814a.mailgun.org:9bf13f39e509cb8ab13ed1d2b6ca1250@smtp.mailgun.org:587';
});

Meteor.settings.contactForm = {
  emailTo: 'law_nwezza@yahoo.com'
};
