//implementing infinite scroll
Session.set("propertyLimit",100);
lastScrollTop = 0;
//this is ok
$(window).scroll(function(event){
//the first if statement
//test to see if we are at the bottom of the page
if($(window).scrollTop() + $(window).height() > $(document).height() - 100){
//console.log(new Date());
var scrollTop = $(this).scrollTop();
if(scrollTop > lastScrollTop){
//console.log("going down at the bottom");
Session.set("propertyLimit", Session.get("propertyLimit") + 100);
}
lastScrollTop = scrollTop;
}//end of the if statement

});// end of the scroll function



Template.listProperty.helpers({
  property: function(){
    return Property.find({},{sort:{createdOn:-1}, limit:Session.get("propertyLimit")});
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

Template.addCategoryModal.helpers({
  "getPropertyId": function() {
    return Template.instance().propertyId.get();
  }
});

Template.addCategoryModal.events({
  'click .grid-link-item': function(e, t) {
    e.preventDefault();
    route = $(e.currentTarget).data('route');
    $('#addCategoryModal').modal('hide');
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open');
    Router.go("/"+route+"/"+t.propertyId.get());
    //console.log("I am asking:"+ t.propertyId.get());
  }
});

Template.listProperty.events({
  "click .addButton": function(event, template){
    //console.log("I am clicking the addButton");
    return Session.set('successfulInsertForm', false)
  }
});
