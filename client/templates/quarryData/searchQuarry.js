Template.searchQuarry.events({
  'submit .js-search-quarry': function(event) {
    event.preventDefault();
    var qryIdVar = event.target.qryID.value;
    console.log(qryIdVar);
    Quarry.findOne({_id:"qryIdVar"});
    Router.go("/viewQuarry/"+qryIdVar);
  }
});
