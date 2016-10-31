/*you have to enable accounts creation on client first before you deploy the app so that you can create a user that
will take the role of admin. The next would be to put the config/dashboard.js file in place followed by collections/roles.js file
to setup the roles schema, then the server/adminRoles.js to enable the admin user to create and assign roles*/
Accounts.config({
    forbidClientAccountCreation: true,
    sendVerificationEmail:true
});
