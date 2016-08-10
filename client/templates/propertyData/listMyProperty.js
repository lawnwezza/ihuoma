Template.listMyProperty.helpers({
  property: function(){
    console.log(Meteor.user()._id);
    return Property.find({"createdBy":Meteor.user().emails[0].address},{sort:{createdOn: 1}});
  },
  residential: function(){
    propId = this._id;
    return Residential.find({propId:propId},{sort:{createdOn:-1}});
  },
  store: function(){
    //console.log(this._id);
    propId = this._id;
    return Store.find({propId:propId},{sort:{createdOn:-1}});
  },
  commercial: function(){
    //console.log(this._id);
    propId = this._id;
    return Commercial.find({propId:propId},{sort:{createdOn:-1}});
  },
  entertain: function(){
    //console.log(this._id);
    propId = this._id;
    return Entertain.find({propId:propId},{sort:{createdOn:-1}});
  },
  financial: function(){
    //console.log(this._id);
    propId = this._id;
    return Financial.find({propId:propId},{sort:{createdOn:-1}});
  },
  medical: function(){
    //console.log(this._id);
    propId = this._id;
    return Medical.find({propId:propId},{sort:{createdOn:-1}});
  },
  govt: function(){
    //console.log(this._id);
    propId = this._id;
    return Govt.find({propId:propId},{sort:{createdOn:-1}});
  },
});

Template.listMyProperty.events({
  "click .addButton": function(event, template){
    //console.log("I am clicking the addButton");
    return Session.set('successfulInsertForm', false)
  }
});
