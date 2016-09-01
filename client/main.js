MAP_ZOOM = 15;

Meteor.Spinner.options = {
  lines: 13, // The number of lines to draw
  length: 10, // The length of each line
  width: 5, // The line thickness
  radius: 15, // The radius of the inner circle
  corners: 0.7, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#fff', // #rgb or #rrggbb
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: true, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
};

Template.registerHelper("noCurrentUser", function(user){
  if(!Meteor.user()){
    return true;
  }
  else {
    return false;
  }
});

Template.registerHelper("propId", function(argument){
  return Session.get("propId");
});

Template.registerHelper("Config", function() {
  return Config;
});

AutoForm.addHooks(null, {
  onSuccess: function () {
    console.log("AutoForm Hooks testing");
    return Session.set('successfulInsertForm', true);
  }
});

Template.registerHelper("create", function(argument){
  return Session.set('successfulInsertForm', false);
});
Template.registerHelper("isSuccessfulInsert", function(argument){
  return Session.get('successfulInsertForm');
});
Template.registerHelper("destroyed", function(){
  return Session.set('successfulInsertForm', false);
});
