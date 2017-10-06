import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';

Meteor.methods({
  sendEmail:function (message) {
    check(message, Object);

    Meteor.defer(() => {
      Email.send({
        to: 'Ockupy <info@ockupy.com>',
        from: `${message.name} ${message.email}`,
        subject: `${message.name} from ${message.company} sent an Email!`,
        text: `${message.message}`
      });
    });
  }
});
