import NovaEmail from 'meteor/vulcan:email';

NovaEmail.addEmails({

  newWire: {
    template: "newWire",
    path: "/email/new-wire",
    getProperties: data => data, // handled in async callback
    subject: ({ senderName }) => `New message from ${senderName}`,
    getTestObject: () => ({}),
  },

});
