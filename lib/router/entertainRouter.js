Router.configure({
  layoutTemplate: 'ApplicationLayout',
  waitOn: function() {
    return Meteor.subscribe("entertain");
  },
  loadingTemplate: 'loading'
});

// route for the insertEntertainForm
Router.route('/insertEntertainForm', function() {
	this.render('insertEntertainForm', { to: "main" });
});

//route to listEntertain
Router.route('/entertain', function() {
  this.render('listEntertain', {
    to: "main",
    data: function(){
      return Entertain.find();
    }
  });
});

//route to updateEntertainForm
Router.route('/entertain/:_id', function() {
  this.render('updateEntertainForm', {
    to: "main",
    data: function() {
      return Entertain.findOne({_id: this.params._id});
    }
  });
});

////////////////////////////////////////
///////  ADD DEMAND NOTICE ROUTES  /////
////////////////////////////////////////

//route to entertainDemandNotice
Router.route('/entertainDemandNotice/:_id', function() {
  this.render('entertainDemandNotice', {
    to: "main",
    data: function() {
      return Entertain.findOne({_id: this.params._id});
    }
  });
  this.render('demandNoticeFooter', {
    to: "footer"
  });
});
