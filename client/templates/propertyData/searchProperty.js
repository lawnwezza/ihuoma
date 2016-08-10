Template.searchProperty.events({
  'submit .js-search-property': function(event) {
    event.preventDefault();
    var propIdVar = event.target.propID.value;
    //console.log(propIdVar);
    Property.findOne({_id:"propIdVar"});
    Router.go("/viewProperty/"+propIdVar);
  }
});
