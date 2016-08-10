Medical = new Mongo.Collection("medical");
MedicalSchema = new SimpleSchema({

  medType: {
    label: "Medical Facility Type",
    type: String,
    optional: false,
    allowedValues: ["Government Hospital","Private Hospital","Consulting Clinic","Pharmacy","Medical Laboratory"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Medical Facility Type"
      }
    }
  },
  govhos: {
    label: "Government Hospital",
    type: String,
    optional:true,
    allowedValues:
      ["Above 100 Beds","50-99 Beds","1-49 Beds","Health Centers"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Government Hospital Type"
      }
    }
  },
  privhos: {
    label: "Private Hospital",
    type: String,
    optional:true,
    allowedValues:
      ["50-99 Beds","10-49 Beds","1-9 Beds","Maternity Home"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Private Hospital Type"
      }
    }
  },
  consclinic: {
    label: "Consulting Clinic",
    type: String,
    optional:true,
    allowedValues:
      ["With Pharmacy","Without Pharmacy"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Consulting Clinic Type"
      }
    }
  },

  pharm: {
    label: "Pharmacy",
    type: String,
    optional:true,
    allowedValues:
      ["Large","Medium/Small", "Patent Medicine Store"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Pharmacy Type"
      }
    }
  },
  medlab: {
    label: "Medical Laboratory",
    type: String,
    optional:true,
    allowedValues:
      ["Large","Medium","Small"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Medical Laboratory Type"
      }
    }
  },
  hosName: {
    type: String,
    label: "Medical Facility Name"
  },
  firstName: {
    type: String,
    label: "First Name",
    optional:true
  },
  otherName: {
    type: String,
    label: "Other Name",
    optional:true
  },
  surName: {
    type: String,
    label: "Surname",
    optional:true
  },
  sex: {
    label: "Sex",
    type: String,
    optional: true,
    allowedValues: ['Male', 'Female'],
    autoform: {
      type: 'select-radio-inline'
    }
  },
  maritalStatus: {
    label: "Marital Status",
    type: String,
    optional: true,
    allowedValues: ['Single','Married', 'Divorced'],
    autoform: {
      type: 'select-radio-inline'
    }
  },
  doBirth: {
    label: "Date of Birth",
    type: Date,
    optional: true,
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

Medical.attachSchema(MedicalSchema);

Meteor.methods({
  /**
   * Invoked by autoform to add a new Medical record.
   * @param doc The Medical document.
   */
  addMedical: function(doc) {
    if(this.userId){
      console.log("Adding", doc);
      //check(doc, Medical.simpleSchema());
      console.log("userID: ", this.userId);
      Medical.insert(doc, function(err, docID) {console.log("DocID: ", docID);});
    }
    else{
      return null;
    }
  },
  /**
   *
   * Invoked by autoform to update a Medical record.
   * @param doc The Medical document.
   * @param docID It's ID.
   */
  updateMedical: function(doc, docID) {
    if(Meteor.user()){
      console.log("Updating", doc);
      //check(doc, Medical.simpleSchema());
      Medical.update({_id: docID}, doc);
    }
    else{
      return null;
    }
  }
});
