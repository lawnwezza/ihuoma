//
/*you have to enable accounts creation on client first before you deploy the app so that you can create a user that
  will take the role of admin. The next would be to put the config/dashboard.js file in place followed by collections/roles.js file
  to setup the roles schema, then the server/adminRoles.js to enable the admin user to create and assign roles*/
//


AdminConfig = {
  skin: 'blue-light',
  adminEmails: ['law@test.com', 'hjasenko@hotmail.com', 'joerg@meteorfactory.io', 'admin@mekadesh.com','law@ebonyidma.xyz'],
  logoutRedirect: 'login', // Redirect to the route named 'login' after logging out.
  collections:
  {
    Property: {
      icon: 'home',
      templates: {
        new: {
          name: "adminNewProperty"
        },
        edit: {
          name: "adminEditProperty",
          data: {
            doc: function() {
              if(Meteor.isClient) return Property.findOne();
            }
          }
        }
      }
    },
    Residential: {
      icon: 'home',
      templates: {
        new: {
          name: "adminNewResidential"
        },
        edit: {
          name: "adminEditResidential",
          data: {
            doc: function() {
              if(Meteor.isClient) return Residential.findOne();
            }
          }
        }
      }
    },
    Store:{
      icon:'shopping-cart',
      templates: {
        new: {
          name: "adminNewStore"
        },
        edit: {
          name: "adminEditStore",
          data: {
            doc: function() {
              if(Meteor.isClient) return Store.findOne();
            }
          }
        }
      }
    },
    Commercial:{
      icon:'briefcase',
      templates: {
        new: {
          name: "adminNewCommercial"
        },
        edit: {
          name: "adminEditCommercial",
          data: {
            doc: function() {
              if(Meteor.isClient) return Commercial.findOne();
            }
          }
        }
      }
    },
    Entertain:{
      icon:'music',
      templates: {
        new: {
          name: "adminNewEntertain"
        },
        edit: {
          name: "adminEditEntertain",
          data: {
            doc: function() {
              if(Meteor.isClient) return Entertain.findOne();
            }
          }
        }
      }
    },
    Financial: {
      icon: 'euro',
      templates: {
        new: {
          name: "adminNewFinancial"
        },
        edit: {
          name: "adminEditFinancial",
          data: {
            doc: function() {
              if(Meteor.isClient) return Financial.findOne();
            }
          }
        }
      }
    },
    Medical:{
      icon:'ambulance',
      templates: {
        new: {
          name: "adminNewMedical"
        },
        edit: {
          name: "adminEditMedical",
          data: {
            doc: function() {
              if(Meteor.isClient) return Medical.findOne();
            }
          }
        }
      }
    },
    Govt:{
      icon:'building-o',
      templates: {
        new: {
          name: "adminNewGovt"
        },
        edit: {
          name: "adminEditGovt",
          data: {
            doc: function() {
              if(Meteor.isClient) return Govt.findOne();
            }
          }
        }
      }
    },
    Quarry: {
      icon: 'flash',
      templates: {
        new: {
          name: "adminNewQuarry"
        },
        edit: {
          name: "adminEditQuarry",
          data: {
            doc: function() {
              if(Meteor.isClient) return Quarry.findOne();
            }
          }
        }
      }
    },
    Market:{
      icon:'shopping-cart',
      templates: {
        new: {
          name: "adminNewMarket"
        },
        edit: {
          name: "adminEditMarket",
          data: {
            doc: function() {
              if(Meteor.isClient) return Market.findOne();
            }
          }
        }
      }
    },
    'Meteor.roles': {
      icon: 'wrench',
      label: 'Roles', // Change the label on the dashboard button
      tableColumns: [
      {label: 'Name', name: 'name'}
      ]
    }
  }
};
