Template.addGovtCategory.events({
  'submit .js-add-gov-category': function(event) {
    event.preventDefault();
    var propIdVar = event.target.propID.value;
    Session.set("propId", propIdVar);
    Session.get("propId");
    console.log(Session.get("propId"));
    //console.log(propIdVar);
    Property.findOne({_id:"propIdVar"});
    Router.go("/addGovtCategory/"+propIdVar);
  }
});
