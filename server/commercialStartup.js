// Publish the entire Collection.  Subscription performed in the router.
  Meteor.publish("commercial", function () {
    return Commercial.find({},{sort:{createdOn:-1}});
  });
