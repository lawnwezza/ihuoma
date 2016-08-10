Commercial= new Mongo.Collection("commercial");
CommercialSchema = new SimpleSchema({
  comType: {
    label: "Business Type",
    type: String,
    optional: false,
    allowedValues: ['Business Center','Printing Press','Transport','Electrical/Electronics Shop','Boutique/Tailoring','Artisans'],
    autoform: {
      afFieldInput: {
        firstOption: "Select Business Type"
      }
    }
  },
  bizcenter: {
    label: "Business Center",
    type: String,
    optional:true,
    allowedValues:
      ["Above 8 Equipments","4-7 Equipments","1-3 Equipments","Internet Provider","Cyber Cafe","Communication Agency","Professional Service Center"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Business Center Type"
      }
    }
  },
  printpress: {
    label: "Printing Press",
    type: String,
    optional:true,
    allowedValues:
      ["Large","Medium","Small","News Publisher"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Printing Press Type"
      }
    }
  },
  transport: {
    label: "Transport",
    type: String,
    optional:true,
    allowedValues:
      ["Airport","Airline Office","Loading Bay", "Travel Agency","Courier Service"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Transport Office Type"
      }
    }
  },
  elect: {
    label: "Electrical/Electronics Shop",
    type: String,
    optional:true,
    allowedValues:
      ["Building Materials","Electrical/Electronics Shop","Big Computer/Phone Shop", "Small Computer/Phone Shop",],
    autoform: {
      afFieldInput: {
        firstOption: "Select Electrical/Electronics Shop Type"
      }
    }
  },
  boutique: {
    label: "Boutique/Tailoring",
    type: String,
    optional:true,
    allowedValues:
      ["Large Boutique","Medium Boutique","Small Boutique", "Tailor: Above 6 Machines","Tailor:4-6 Machines", "Tailor: 1-3 Machines", "Mechanised Laundry","Ordinary Laundry"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Boutique/Tailoring Option"
      }
    }
  },
  artisan: {
    label: "Artisans",
    type: String,
    optional:true,
    allowedValues:
      ["Cobbler","Watch Repairer","Vulcanizer", "Others"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Artisans Type"
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
  },
});

Commercial.attachSchema(CommercialSchema);

Meteor.methods({
  /**
   * Invoked by autoform to add a new Commercialrecord.
   * @param doc The Commercialdocument.
   */
  addCommercial: function(doc) {
    if(Meteor.user()){
      console.log("Adding", doc);
      //check(doc, Store.simpleSchema());
      console.log("userID: ", this.userId);
      Commercial.insert(doc, function(err, docID) {console.log("DocID: ", docID);});
    }
    else{
      return null;
    }
  },
  /**
   *
   * Invoked by autoform to update a Commercialrecord.
   * @param doc The Commercialdocument.
   * @param docID It's ID.
   */
  updateCommercial: function(doc, docID) {
    if(Meteor.user()){
      console.log("Updating", doc);
      //check(doc, Store.simpleSchema());
      Commercial.update({_id: docID}, doc);
    }
    else{
      return null;
    }
  }
});
