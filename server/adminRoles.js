//
/*you have to enable accounts creation on client first before you deploy the app so that you can create a user that
will take the role of admin. The next would be to put the config/dashboard.js file in place followed by collections/roles.js file
to setup the roles schema, then the server/adminRoles.js to enable the admin user to create and assign roles*/
//
// Overriding admin methods for roles
Meteor.startup(function () {

  Meteor.default_server.method_handlers.adminAddUserToRole = function(_id, role){
    //check(_id, String);
    //check(role, String);
    if (Roles.userIsInRole(this.userId, ['admin'])) {
      Roles.addUsersToRoles(_id, role);
    }
  };
  Meteor.default_server.method_handlers.adminRemoveUserToRole = function(_id, role){
    //check(_id, String);
    //check(role, String);
    if (Roles.userIsInRole(this.userId, ['admin'])) {
      Roles.removeUsersFromRoles(_id, role);
    }
  }
});

/*
user = Meteor.users.findOne();
Meteor.users.upsert(
      {_id: user._id},
      {
        $set: {
          roles: ['admin']
        }
      }
    );
*/
