Router.configure({
  layoutTemplate: 'ApplicationLayout',
  waitOn: function() {
    return Meteor.subscribe("commercial");
  },
  loadingTemplate: 'loading'
});

// route for the insertCommercialForm
Router.route('/insertCommercialForm', function() {
	this.render('insertCommercialForm', { to: "main" });
});

//route to listCommercial
Router.route('/commercial', function() {
  this.render('listCommercial', {
    to: "main",
    data: function(){
      return Commercial.find();
    }
  });
});

//route to updateCommercialForm
Router.route('/commercial/:_id', function() {
  this.render('updateCommercialForm', {
    to: "main",
    data: function() {
      return Commercial.findOne({_id: this.params._id});
    }
  });
});

////////////////////////////////////////
///////  ADD DEMAND NOTICE ROUTES  /////
////////////////////////////////////////

//route to commercialDemandNotice
Router.route('/commercialDemandNotice/:_id', function() {
  this.render('commercialDemandNotice', {
    to: "main",
    data: function() {
      return Commercial.findOne({_id: this.params._id});
    }
  });
});
