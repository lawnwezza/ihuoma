Template.editMarket.events({
  'submit .js-edit-market': function(event) {
    event.preventDefault();
    var mktIdVar = event.target.mktID.value;
    console.log(mktIdVar);
    Market.findOne({_id:"mktIdVar"});
    Router.go("/listMarket/"+mktIdVar);
  }
});
