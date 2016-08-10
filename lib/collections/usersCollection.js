var ProfileSchema = new SimpleSchema({
  firstName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  country: {
    type: String,
    optional: true
  },
  gender: {
    type: String,
    optional: true
  }
});

var UserSchema = new SimpleSchema({
  emails: {
    type: [Object],
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  services: {
    type: Object,
    blackbox: true,
    optional: true
  },
  profile: {
    type: ProfileSchema
  },
  roles: {
    type: [String],
    defaultValue: []
  },
  createdAt: {
    type: Date,
    optional: true,
    autoValue: function() {
      if(this.isInsert) {
        return new Date();
      }
    }
  }
});

Meteor.users.attachSchema(UserSchema);
