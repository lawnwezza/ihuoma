Entertain = new Mongo.Collection("entertain");
EntertainSchema = new SimpleSchema({
  entType: {
    label: "Entertainment Business Type",
    type: String,
    optional: false,
    allowedValues: ['Hotel','Continental Resturant','Ordinary Resturant', "Recreational Facility", "Night Club", "Video Rentals"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Business Type"
      }
    }
  },
  hotel: {
    label: "Hotel",
    type: String,
    optional:true,
    allowedValues:
      ["Above 199 Rooms","100-199 Rooms","50-99 Rooms", "30-49 Rooms", "10-29 Rooms", '1-9 Rooms'],
    autoform: {
      afFieldInput: {
        firstOption: "Select Hotel Category"
      }
    }
  },
  cres: {
    label: "Continental Resturant",
    type: String,
    optional:true,
    allowedValues:
      ["Above 19 Seats","10-19 Seats","1-9 Seats"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Continental Resturant Category"
      }
    }
  },
  ores: {
    label: "Ordinary Resturant",
    type: String,
    optional:true,
    allowedValues:
      ["Above 19 Seats","10-19 Seats","1-9 Seats","Bukateria/Canteen"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Ordinary Resturant Category"
      }
    }
  },
  recreation: {
    label: "Recreational Facility",
    type: String,
    optional:true,
    allowedValues:
      ["Event Place","Gardens/Parks","Joints/Beer Parlors"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Recreational Facility Type"
      }
    }
  },
  nclub: {
    label: "Night Club",
    type: String,
    optional:true,
    allowedValues:
      ["With Catering Service","Without Catering Service"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Night Club Type"
      }
    }
  },

  video: {
    label: "Video Rentals",
    type: String,
    optional:true,
    allowedValues:
      ["Large","Medium","Small"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Video Rentals Size"
      }
    }
  },
  bizName: {
    type: String,
    label: "Business Name"
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
    allowedValues: ['Single','Married', 'Divorced'],
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
  }
});

Entertain.attachSchema(EntertainSchema);

Meteor.methods({
  /**
   * Invoked by autoform to add a new Entertain record.
   * @param doc The Entertain document.
   */
  addEntertain: function(doc) {
    if(this.userId){
      console.log("Adding", doc);
      //check(doc, Entertain.simpleSchema());
      console.log("userID: ", this.userId);
      Entertain.insert(doc, function(err, docID) {console.log("DocID: ", docID);});
    }
    else{
      return null;
    }
  },
  /**
   *
   * Invoked by autoform to update a Entertain record.
   * @param doc The Entertain document.
   * @param docID It's ID.
   */
  updateEntertain: function(doc, docID) {
    if(Meteor.user()){
      console.log("Updating", doc);
      //check(doc, Entertain.simpleSchema());
      Entertain.update({_id: docID}, doc);
    }
    else{
      return null;
    }
  }
});
