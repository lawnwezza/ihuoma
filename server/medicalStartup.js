// Publish the entire Collection.  Subscription performed in the router.
  Meteor.publish("medical", function () {
    return Medical.find({},{sort:{createdOn:-1}});
  });
