Template.editQuarry.events({
  'submit .js-edit-quarry': function(event) {
    event.preventDefault();
    var qryIdVar = event.target.qryID.value;
    console.log(qryIdVar);
    Quarry.findOne({_id:"qryIdVar"});
    Router.go("/listQuarry/"+qryIdVar);
  }
});
