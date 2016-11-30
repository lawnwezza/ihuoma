Router.configure({
  layoutTemplate: 'ApplicationLayout',
  waitOn: function() {
    return Meteor.subscribe("financial");
  },
  loadingTemplate: 'loading'
});

// route for the insertFinancialForm
Router.route('/insertFinancialForm', function() {
	this.render('insertFinancialForm', { to: "main" });
});

//route to listFinancial
Router.route('/financial', function() {
  this.render('listFinancial', {
    to: "main",
    data: function(){
      return Financial.find();
    }
  });
});

//route to updateFinancialForm
Router.route('/financial/:_id', function() {
  this.render('updateFinancialForm', {
    to: "main",
    data: function() {
      return Financial.findOne({_id: this.params._id});
    }
  });
});

////////////////////////////////////////
///////  ADD DEMAND NOTICE ROUTES  /////
////////////////////////////////////////

//route to financialDemandNotice
Router.route('/financialDemandNotice/:_id', function() {
  this.render('financialDemandNotice', {
    to: "main",
    data: function() {
      return Financial.findOne({_id: this.params._id});
    }
  });
  this.render('demandNoticeFooter', {
    to: "footer"
  });
});
