// Publish the entire Collection.  Subscription performed in the router.
  Meteor.publish("residential", function () {
    return Residential.find({},{sort:{createdOn:-1}});
  });
