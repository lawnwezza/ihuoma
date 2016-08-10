// Publish the entire Collection.  Subscription performed in the router.
  Meteor.publish("entertain", function () {
    return Entertain.find({},{sort:{createdOn:-1}});
  });
