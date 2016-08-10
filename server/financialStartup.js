// Publish the entire Collection.  Subscription performed in the router.
  Meteor.publish("financial", function () {
    return Financial.find({},{sort:{createdOn:-1}});
  });
