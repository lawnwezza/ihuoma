Router.configure({
  layoutTemplate: 'ApplicationLayout',
  loadingTemplate: 'loading'
});

// route for the aboutUs page
Router.route('/aboutUs', function () {
	this.render('aboutUs', { to: "main"	});
});

// route for the aboutUs page
Router.route('/contactUs', function () {
	this.render('contactUs', { to: "main"	});
});
