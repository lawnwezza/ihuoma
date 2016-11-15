Router.configure({
  layoutTemplate: 'ApplicationLayout',
  waitOn: function() {
    return Meteor.subscribe("store");
  },
  loadingTemplate: 'loading'
});

// route for the insertStoreForm
Router.route('/insertStoreForm', function() {
	this.render('insertStoreForm', { to: "main" });
});

//route to listStore
Router.route('/store', function() {
  this.render('listStore', {
    to: "main",
    data: function(){
      return Store.find();
    }
  });
});

//route to updateStoreForm
Router.route('/store/:_id', function() {
  this.render('updateStoreForm', {
    to: "main",
    data: function() {
      return Store.findOne({_id: this.params._id});
    }
  });
});


////////////////////////////////////////
///////  ADD DEMAND NOTICE ROUTES  /////
////////////////////////////////////////

//route to updateStoreForm
Router.route('/storeDemandNotice', function() {
  this.render('storeDemandNotice', {
    to: "main",
    data: function() {
      //return Store.findOne({_id: this.params._id});
    }
  });
});
