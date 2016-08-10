
// Publish the entire Collection.  Subscription performed in the router.
  Meteor.publish("quarry", function () {
    return Quarry.find({},{sort:{createdOn:-1}});
  });
  Meteor.publish("market", function () {
    return Market.find({},{sort:{createdOn:-1}});
  });
