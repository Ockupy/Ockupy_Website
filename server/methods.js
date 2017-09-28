import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';

Meteor.methods({
  sendEmail: function (message) {
    check(message, Object);

    Meteor.defer(() => {
      Email.send({
        to: 'Servio Ockupy <servio@ockupy.com>',
        from: `${message.name}, ${message.email}`,
        subject: `${message.name} sent an Email!`,
        text: message.message
      });
    });
  }
});
