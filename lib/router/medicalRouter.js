Router.configure({
  layoutTemplate: 'ApplicationLayout',
  waitOn: function() {
    return Meteor.subscribe("medical");
  },
  loadingTemplate: 'loading'
});

// route for the insertMedicalForm
Router.route('/insertMedicalForm', function() {
	this.render('insertMedicalForm', { to: "main" });
});


//route to updateMedicalForm
Router.route('/updateMedicalForm', function() {
  this.render('updateMedicalForm', {
    to: "main",
    data: function() {
      return Medical.findOne({_id: this.params._id});
    }
  });
});

//route to updateMedicalForm
Router.route('/medical/:_id', function() {
	this.render('updateMedicalForm', {
		to: "main",
		data: function() {
			return Medical.findOne({_id: this.params._id});
		}
	});
});
