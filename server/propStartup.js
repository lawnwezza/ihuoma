
// Publish the entire Collection.  Subscription performed in the router.
  Meteor.publish("property", function () {
    return Property.find({},{sort:{createdOn:-1}});
  });
