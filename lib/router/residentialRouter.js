Router.configure({
  layoutTemplate: 'ApplicationLayout',
  waitOn: function() {
    return Meteor.subscribe("residential");
  },
  loadingTemplate: 'loading'
});

// route for the insertResidentialForm
Router.route('/insertResidentialForm', function() {
	this.render('insertResidentialForm', { to: "main" });
});

//route to listResidential
Router.route('/residential', function() {
  this.render('listResidential', {
    to: "main",
    data: function(){
      return Residential.find();
    }
  });
});

//route to updateResidentialForm
Router.route('/residential/:_id', function() {
  this.render('updateResidentialForm', {
    to: "main",
    data: function() {
      return Residential.findOne({_id: this.params._id});
    }
  });
});

////////////////////////////////////////
///////  ADD DEMAND NOTICE ROUTES  /////
////////////////////////////////////////

//route to updateStoreForm
Router.route('/residentialDemandNotice', function() {
  this.render('residentialDemandNotice', {
    to: "main",
    data: function() {
      //return Store.findOne({_id: this.params._id});
    }
  });
});
