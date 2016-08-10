Govt = new Mongo.Collection("govt");
GovtSchema = new SimpleSchema({

  govType: {
      label: "Institution Type",
      type: String,
      optional: false,
      allowedValues: ['Government','Worship Center','Tertiary Institution','Secondary/Vocational School', "Nursery/Primary School"],
      autoform: {
          afFieldInput: {
            firstOption: "Select Institution Type"
          }
      }
    },
    govmnt: {
    label: "Government",
    type: String,
    optional:true,
    allowedValues:
    ["Government House","State Ministry","State Parastatals","Federal Ministry/Parastatals", "Government Agency"],
    autoform: {
    afFieldInput: {
      firstOption: "Select Option"
    }
    }
  },
  rel: {
  label: "Worship Center",
  type: String,
  optional:true,
  allowedValues:
  ["Very Large","Large","Medium","Small"],
  autoform: {
  afFieldInput: {
    firstOption: "Select Category"
  }
  }
},
tert: {
label: "Tertiary Institution",
type: String,
optional:true,
allowedValues:
["University"," Polytechnic"," College of Education"],
autoform: {
afFieldInput: {
  firstOption: "Select Institution Type"
}
}
},
sec: {
label: "Secondary/Vocational School",
type: String,
optional:true,
allowedValues:
["With Boarding Facility","Without Boarding Facility","Computer Training School","Others"],
autoform: {
afFieldInput: {
  firstOption: "Select Category"
}
}
},
pri: {
label: "Nursery/Primary School",
type: String,
optional:true,
allowedValues:
["Above 14 Classes","10-14 Classes","5-9 Classes","1-4 Classes","Other Nursery Schools","Other Primary Schools"],
autoform: {
afFieldInput: {
  firstOption: "Select Category"
}
}
},
instName: {
type: String,
label: "Institution Name"
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

Govt.attachSchema(GovtSchema);

Meteor.methods({
  /**
   * Invoked by autoform to add a new Govt record.
   * @param doc The Govt document.
   */
  addGovt: function(doc) {
    if(this.userId){
    console.log("Adding", doc);
    //check(doc, Govt.simpleSchema());
    console.log("userID: ", this.userId);
    Govt.insert(doc, function(err, docID) {console.log("DocID: ", docID);});
  }
  else{
    return null;
  }
  },
  /**
   *
   * Invoked by autoform to update a Govt record.
   * @param doc The Govt document.
   * @param docID It's ID.
   */
  updateGovt: function(doc, docID) {
    if(Meteor.user()){
    console.log("Updating", doc);
    //check(doc, Govt.simpleSchema());
    Govt.update({_id: docID}, doc);
    }
    else{
      return null;
    }
    }
});
