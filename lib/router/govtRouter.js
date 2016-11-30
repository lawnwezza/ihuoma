Router.configure({
  layoutTemplate: 'ApplicationLayout',
  waitOn: function() {
    return Meteor.subscribe("govt");
  },
  loadingTemplate: 'loading'
});

// route for the insertGovtForm
Router.route('/insertGovtForm', function() {
	this.render('insertGovtForm', { to: "main" });
});

//route to listGovt
Router.route('/govt', function() {
  this.render('listGovt', {
    to: "main",
    data: function(){
      return Govt.find();
    }
  });
});

//route to updateGovtForm
Router.route('/govt/:_id', function() {
  this.render('updateGovtForm', {
    to: "main",
    data: function() {
      return Govt.findOne({_id: this.params._id});
    }
  });
});

////////////////////////////////////////
///////  ADD DEMAND NOTICE ROUTES  /////
////////////////////////////////////////

//route to govtDemandNotice
Router.route('/govtDemandNotice/:_id', function() {
  this.render('govtDemandNotice', {
    to: "main",
    data: function() {
      return Govt.findOne({_id: this.params._id});
    }
  });
  this.render('demandNoticeFooter', {
    to: "footer"
  });
});
