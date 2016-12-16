Schema = {};
Schema.search = new SimpleSchema({
  choose: {
    label: "Select Category",
    type: String,
    optional: false,
    allowedValues: ['Commercial','Entertainment','Financial','Government','Medical','Residential','Store'],
    autoform: {
      afFieldInput: {
        firstOption: "Select Category"
      }
    }
  },
    catId: {
        type: String,
        label: "Enter CategoryId"
    }

});


Meteor.methods({
  /**
   * Invoked by autoform to add a new Commercialrecord.
   * @param doc The Commercialdocument.
   */
  sendSearch: function(doc) {
    if(Meteor.user()){
      //console.log("Adding", doc);
      //console.log("userID: ", this.userId);
      console.log(doc.choose);
      console.log(doc.catId);

      if (doc.choose = "Residential") {
      Router.go("/residentialDemandNotice/"+doc.catId);
      }
      else if (doc.choose = "Commercial") {
        Router.go("/commercialDemandNotice/"+doc.catId);
      }
      else if (doc.choose = "Entertainment") {
        Router.go("/commercialDemandNotice/"+doc.catId);
      }
      else if (doc.choose = "Financial") {
        Router.go("/financialDemandNotice/"+doc.catId);
      }
      else if (doc.choose = "Government") {
        Router.go("/govtDemandNotice/"+doc.catId);
      }
      else if (doc.choose = "Medical") {
        Router.go("/medicalDemandNotice/"+doc.catId);
      }
      else if (doc.choose = "Store") {
        Router.go("/storeDemandNotice/"+doc.catId);
      }
      else {
        return null;
      }

    }
    else{
      return null;
    }
  },

});
