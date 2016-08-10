Template.listQuarry.helpers({
  quarry: function(){
    return Quarry.find({},{sort:{createdOn:-1}});
  },
});
