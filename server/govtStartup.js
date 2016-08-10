// Publish the entire Collection.  Subscription performed in the router.
  Meteor.publish("govt", function () {
    return Govt.find({},{sort:{createdOn:-1}});
  });
