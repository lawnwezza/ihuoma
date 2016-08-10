Financial = new Mongo.Collection("financial");
FinancialSchema = new SimpleSchema({

  finType: {
    label: "Type",
    type: String,
    optional: false,
    allowedValues: ['Bank','Insurance',"Bureau De Change"],
    autoform: {
      afFieldInput: {
        firstOption: "Pls, Select Type"
      }
    }
  },
  bank: {
    label: "Office Type",
    type: String,
    optional:true,
    allowedValues:
      ["Regional/Head Office","Branch Office","Micro Finance Bank"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Office Type"
      }
    }
  },
  insurance: {
    label: "Office Type",
    type: String,
    optional:true,
    allowedValues:
      ["Regional/Head Office","Branch Office","Brokerage Firm"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Office Type"
      }
    }
  },
  bureau: {
    label: "Office Type",
    type: String,
    optional:true,
    allowedValues:
      ["Big Office","Small Office"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Office Type"
      }
    }
  },

  finName: {
    type: String,
    label: "Name of Financial Institution"
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
Financial.attachSchema(FinancialSchema);

Meteor.methods({
  /**
   * Invoked by autoform to add a new Financial record.
   * @param doc The Financial document.
   */
  addFinancial: function(doc) {
    if(this.userId){
      console.log("Adding", doc);
      //check(doc, Financial.simpleSchema());
      console.log("userID: ", this.userId);
      return Financial.insert(doc);
    }
    else{
      return null;
    }
  },
  /**
   *
   * Invoked by autoform to update a Financial record.
   * @param doc The Financial document.
   * @param docID It's ID.
   */
  updateFinancial: function(doc, docID) {
    if(this.userId){
      console.log("Updating", doc);
      //check(doc, Financial.simpleSchema());
      Financial.update({_id: docID}, doc);
    }
    else{
      return null;
    }
  }
});
