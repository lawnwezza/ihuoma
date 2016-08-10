Store = new Mongo.Collection("store");
StoreSchema = new SimpleSchema({
  stoType: {
    label: "Store/Salon",
    type: String,
    optional: false,
    allowedValues: ['Store','Beauty/Barbing Salon'],
    autoform: {
      afFieldInput: {
        firstOption: "Pls, Select Store/Salon Type"
      }
    }
  },
  sto: {
    label: "Store",
    type: String,
    optional:true,
    allowedValues:
      ["Departmental Store","Super Market","Provision Store with Liquor License", "Ordinary Provision Store","Kiosk"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Store Type"
      }
    }
  },
  salon: {
    label: "Salon",
    type: String,
    optional:true,
    allowedValues:
      ["Beauty Salon Above 3 Driers","Beauty Salon 1-3 Driers","Barbing Salon Above 4 Seats","Barbing Salon 1-3 Seats"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Salon Type"
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

Store.attachSchema(StoreSchema);

Meteor.methods({
  /**
   * Invoked by autoform to add a new Store record.
   * @param doc The Store document.
   */
  addStore: function(doc) {
    if(this.userId){
      console.log("Adding", doc);
      //check(doc, Store.simpleSchema());
      console.log("userID: ", this.userId);
      Store.insert(doc, function(err, docID) {console.log("DocID: ", docID);});
    }
    else{
      return null;
    }
  },
  /**
   *
   * Invoked by autoform to update a Store record.
   * @param doc The Store document.
   * @param docID It's ID.
   */
  updateStore: function(doc, docID) {
    if(Meteor.user()){
      console.log("Updating", doc);
      //check(doc, Store.simpleSchema());
      Store.update({_id: docID}, doc);
    }
    else{
      return null;
    }
  }
});
