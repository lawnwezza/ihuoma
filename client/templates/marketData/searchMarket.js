Template.searchMarket.events({
  'submit .js-search-market': function(event) {
    event.preventDefault();
    var mktIdVar = event.target.mktID.value;
    console.log(mktIdVar);
    Market.findOne({_id:"mktIdVar"});
    Router.go("/viewMarket/"+mktIdVar);
  }
});
