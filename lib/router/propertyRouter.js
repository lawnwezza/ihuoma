Router.configure({
  layoutTemplate: 'ApplicationLayout',
  waitOn: function() {
    return Meteor.subscribe("property");
  },
  loadingTemplate: 'loading'
});


// route for the landing page
Router.route('/', function() {
  this.render('welcome', { to: "main" });
});

// route for the insertPropertyForm
Router.route('/insertPropertyForm', function() {
	this.render('insertPropertyForm', {	to: "main" });
});

////////////////////////////////////////
///////  ADD CATEGORY ROUTES  //////////
////////////////////////////////////////

// route for the addCommercialCategory
Router.route('/addCommercialCategory', function() {
  this.render('addCommercialCategory', { to: "main" });
});

// route for the addEntertainCategory
Router.route('/addEntertainCategory', function() {
  this.render('addEntertainCategory', { to: "main" });
});

// route for the addFinancialCategory
Router.route('/addFinancialCategory', function() {
  this.render('addFinancialCategory', { to: "main" });
});

// route for the addGovtCategory
Router.route('/addGovtCategory', function() {
  this.render('addGovtCategory', { to: "main" });
});

// route for the addMedicalCategory
Router.route('/addMedicalCategory', function() {
  this.render('addMedicalCategory', { to: "main" });
});


// route for the addResidentCategory
Router.route('/addResidentialCategory', function() {
	this.render('addResidentialCategory', {	to: "main" });
});

// route for the addStoreCategory
Router.route('/addStoreCategory', function() {
  this.render('addStoreCategory', { to: "main" });
});

/////////////////////////////////////////////////
/////      ADDING CATEGORY DATA CONTEXT     /////
/////////////////////////////////////////////////

//route to addCommercialCategory
Router.route('/addCommercialCategory/:_id', function() {
  this.render('insertCommercialForm', {
    to: "main",
    data: function() {
      return Property.findOne({_id: this.params._id});
    }
  });
});

//route to addEntertainCategory
Router.route('/addEntertainCategory/:_id', function() {
  this.render('insertEntertainForm', {
    to: "main",
    data: function() {
      return Property.findOne({_id: this.params._id});
    }
  });
});

//route to addFinancialCategory
Router.route('/addFinancialCategory/:_id', function() {
  this.render('insertFinancialForm', {
    to: "main",
    data: function() {
      return Property.findOne({_id: this.params._id});
    }
  });
});

//route to addMedicalCategory
Router.route('/addMedicalCategory/:_id', function() {
  this.render('insertMedicalForm', {
    to: "main",
    data: function() {
      return Property.findOne({_id: this.params._id});
    }
  });
});

 //route to addEdu/Rel/GovtCategory
  Router.route('/addGovtCategory/:_id', function() {
    this.render('insertGovtForm', {
      to: "main",
      data: function() {
        return Property.findOne({_id: this.params._id});
      }
    });
  });

//route to addResidentialCategory
Router.route('/addResidentialCategory/:_id', function() {
  this.render('insertResidentialForm', {
    to: "main",
    data: function() {
      return Property.findOne({_id: this.params._id});
    }
  });
});

//route to addStoreCategory
Router.route('/addStoreCategory/:_id', function() {
 this.render('insertStoreForm', {
   to: "main",
   data: function() {
     return Property.findOne({_id: this.params._id});
   }
 });
});

/////////////////////////////////////////////////////////////
/////////////      END ADD CATEGORY DATA CONTEXT ////////////
/////////////////////////////////////////////////////////////

//route to updatePropertyForm
Router.route('/updatePropertyForm', function() {
  this.render('updatePropertyForm', {
    to: "main",
    data: function() {
      return Property.findOne({_id: this.params._id});
    }
  });
});

//route to listProperty
Router.route('/listProperty', function() {
  this.render('listProperty', {
    to: "main",
    data: function(){
      return Property.find();
    }
  });
});

//route to listProperty
Router.route('/listMyProperty', function() {
  this.render('listMyProperty', {
    to: "main",
    data: function(){
      return Property.find();
    }
  });
});

//route to updatePropertyForm
Router.route('/listProperty/:_id', function() {
	this.render('updatePropertyForm', {
		to: "main",
		data: function() {
			return Property.findOne({_id: this.params._id});
		}
	});
});

//route to viewProperty
Router.route('/viewProperty/:_id', function() {
	this.render('viewProperty', {
		to: "main",
		data: function() {
		return Property.findOne({_id: this.params._id});
		}
	});
});

// route for the search
Router.route('/searchProperty', function() {
  this.render('searchProperty', { to: "main" });
});

// route for the editProperty
Router.route('/editProperty', function() {
  this.render('editProperty', { to: "main" });
});
