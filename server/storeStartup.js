// Publish the entire Collection.  Subscription performed in the router.
  Meteor.publish("store", function () {
    return Store.find({},{sort:{createdOn:-1}});
  });
