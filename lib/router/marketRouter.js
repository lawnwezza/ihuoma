Router.configure({
  layoutTemplate: 'ApplicationLayout',
  waitOn: function() {
    return Meteor.subscribe("market");
  },
  loadingTemplate: 'loading'
});

// route for the insertMarketForm
Router.route('/insertMarketForm', function () {
	this.render('insertMarketForm', {	to: "main" });
});


//route to listMarket
Router.route('/listMarket', function () {
  this.render('listMarket', {
    to: "main",
    data: function(){
      return Market.find();
    }
  });
});

//route to updateMarketForm
Router.route('/listMarket/:_id', function () {
	this.render('updateMarketForm', {
		to: "main",
		data: function(){
			return Market.findOne({_id: this.params._id});
		}
	});
});

//route to viewMarket
Router.route('/viewMarket/:_id', function () {
	this.render('viewMarket', {
		to: "main",
		data: function(){
		return Market.findOne({_id: this.params._id});
		}
	});
});

// route for the search
Router.route('/searchMarket', function () {
  this.render('searchMarket', { to: "main" });
});

// route for the editMarket
Router.route('/editMarket', function () {
  this.render('editMarket', { to: "main" });
});
