Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile;

  if(_.contains(AdminConfig.adminEmails, user.emails[0].address)) {
    user.roles = ['admin'];
  }

  return user;
});
