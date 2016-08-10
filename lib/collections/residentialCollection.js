Residential = new Mongo.Collection("residential");
ResidentialSchema = new SimpleSchema({

  accoType: {
    label: "Accomodation Type",
    type: String,
    optional: false,
    allowedValues: ['Duplex','Bungalow','Apartment Block'],
    autoform: {
      afFieldInput: {
        firstOption: "Pls, Select Accomodation Type"
      }
    }
  },
  duplex: {
    label: "Duplex Type",
    type: String,
    optional:true,
    allowedValues:
      ["Detached Above 5 Rooms","Detached Below 5 Rooms","Semi Detached",],
    autoform: {
      afFieldInput: {
        firstOption: "Select Duplex Type"
      }
    }
  },
  bungalow: {
    label: "Bungalow Type",
    type: String,
    optional:true,
    allowedValues:
      ["Detached","Semi Detached"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Bungalow Type"
      }
    }
  },
  apartment: {
    label: "Apartment Type",
    type: String,
    optional:true,
    allowedValues:
      ["Three Bedrooms","Two Bedrooms","One Bedroom", "One Room",],
    autoform: {
      afFieldInput: {
        firstOption: "Select Apartment Type"
      }
    }
  },

  firstName: {
    type: String,
    label: "First Name"
  },
  otherName: {
    type: String,
    label: "Other Name",
    optional:true
  },
  surName: {
    type: String,
    label: "Surname"
  },
  occupation: {
    type: String,
    label: "Occupation"
  },
  sex: {
    label: "Sex",
    type: String,
    optional: false,
    allowedValues: ['Male', 'Female'],
    autoform: {
      type: 'select-radio-inline'
    }
  },
  maritalStatus: {
    label: "Marital Status",
    type: String,
    optional: false,
    allowedValues: ['Single','Married', 'Divorced','Widow'],
    autoform: {
      type: 'select-radio-inline'
    }
  },
  doBirth: {
    label: "Date of Birth",
    type: Date,
    optional: false,
    min:1914,
    min:2014,
    autoform: {
      afFieldInput: {
        type: "date"
      }
    }
  },
  phoneNo1: {
    type: 'tel',
    label: "Mobile"
  },

  phoneNo2: {
    type: 'tel',
    label: "Phone",
    optional:true,
  },

  email: {
    type: 'email',
    label: "Email",
    optional:true
  },
  createdOn: {
    type: Date,
    label: "Created On",
    autoValue: function(){
      return new Date()
    },
    autoform: {
      type:"hidden"
    }
  },

  createdBy: {
    type: String,
    label: "Created By",
    autoValue: function(){
      return Meteor.user().emails[0].address
    },
    autoform: {
      type: "hidden"
    }
  },
  propId: {
    type: String,
    label: "propId",
  },
});

Residential.attachSchema(ResidentialSchema);

Meteor.methods({
  /**
   * Invoked by autoform to add a new Residential record.
   * @param doc The Residential document.
   */
  addResidential: function(doc) {
    if(Meteor.user()){
      console.log("Adding", doc);
      //check(doc, Residential.simpleSchema());
      console.log("userID: ", this.userId);
      Residential.insert(doc, function(err, docID) {console.log("DocID: ", docID);});
    }
    else{
      return null;
    }
  },
  /**
   *
   * Invoked by autoform to update a Residential record.
   * @param doc The Residential document.
   * @param docID It's ID.
   */
  updateResidential: function(doc, docID) {
    if(Meteor.user()){
      console.log("Updating", doc);
      //check(doc, Residential.simpleSchema());
      Residential.update({_id: docID}, doc);
    }
    else{
      return null;
    }
  }
});
