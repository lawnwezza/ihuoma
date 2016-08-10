Router.configure({
  layoutTemplate: 'ApplicationLayout',
  waitOn: function() {
    return Meteor.subscribe("quarry");
  },
  loadingTemplate: 'loading'
});

// route for the insertQuarryForm
Router.route('/insertQuarryForm', function () {
	this.render('navbar', {
		to: "navbar"
	});
	this.render('insertQuarryForm', {
		to: "main"
	});
  this.render('footer', {
    to: "footer"
  });
});


//route to listQuarry
Router.route('/listQuarry', function () {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('listQuarry', {
    to: "main",
    data: function(){
      return Quarry.find();
    }
  });
  this.render('footer', {
    to: "footer"
  });
});

//route to updateQuarryForm
Router.route('/listQuarry/:_id', function () {
	this.render('navbar', {
		to: "navbar"
	});
	this.render('updateQuarryForm', {
		to: "main",
		data: function(){
			return Quarry.findOne({_id: this.params._id});
		}
	});
  this.render('footer', {
    to: "footer"
  });
});

//route to viewQuarry
Router.route('/viewQuarry/:_id', function () {
	this.render('navbar', {
		to: "navbar"
	});
	this.render('viewQuarry', {
		to: "main",
		data: function(){
		return Quarry.findOne({_id: this.params._id});
		}
	});
  this.render('footer', {
    to: "footer"
  });
});

// route for the search
Router.route('/searchQuarry', function () {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('searchQuarry', {
    to: "main"
  });
  this.render('footer', {
    to: "footer"
  });
});

// route for the editQuarry
Router.route('/editQuarry', function () {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('editQuarry', {
    to: "main"
  });
  this.render('footer', {
    to: "footer"
  });
});
