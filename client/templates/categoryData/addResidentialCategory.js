Template.addResidentialCategory.events({
  'submit .js-add-res-category': function(event) {
    event.preventDefault();
    var propIdVar = event.target.propID.value;
    Session.set("propId", propIdVar);
    Session.get("propId");
    console.log(Session.get("propId"));
    //console.log(propIdVar);
    Property.findOne({_id:"propIdVar"});
    Router.go("/addResidentialCategory/"+propIdVar);

  }
});
