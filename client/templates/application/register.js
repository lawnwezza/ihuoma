Template.register.events({
  'submit .js-register-form': function(event) {
    event.preventDefault();
    var emailVar = event.target.registerEmail.value;
    var passwordVar = event.target.regsiterPassword.value;
    Accounts.createUser({
      email: emailVar,
      password: passwordVar
    });
  }
});
