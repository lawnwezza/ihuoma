
// Publish the entire Collection.  Subscription performed in the router.
  Meteor.publish("property", function (skipCount) {
    return Property.find({},{limit:20,skip:skipCount});
  });
