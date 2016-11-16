Template.viewProperty.onRendered(function() {
  GoogleMaps.load();
});

Template.viewProperty.helpers({
  residential: function(){
    propId = this._id;
    return Residential.find({propId:propId},{sort:{createdOn:-1}}).fetch();
  },
  store: function(){
    //console.log(this._id);
    propId = this._id;
    return Store.find({propId:propId},{sort:{createdOn:-1}}).fetch();
  },
  commercial: function () {
    propId = this._id;
    return Commercial.find({ propId:propId}, { sort: { createdOn: -1 } }).fetch();
  },
  entertain: function(){
    //console.log(this._id);
    propId = this._id;
    return Entertain.find({propId:propId},{sort:{createdOn:-1}}).fetch();
  },
  financial: function () {
    propId = this._id;
    return Financial.find({ propId:propId}, { sort: { createdOn: -1 } }).fetch();
  },
  medical: function () {
    propId = this._id;
    return Medical.find({ propId:propId}, { sort: { createdOn: -1 } }).fetch();
  },
  govt: function () {
    propId = this._id;
    return Govt.find({ propId:propId}, { sort: { createdOn: -1 } }).fetch();
  },
  getAnnualPayment: function(accoType, ...args) {
    payment = 0;
    for(i = 0; i < args.length; i++) {
      if(args[i] && (typeof args[i] != "object")) {
        payment += AnnualPaymentsForProperties[accoType][args[i]];
      }
    }
    return payment;
  },
  getPaymentType: function(accoType, ...args) {
    paymentType = "";
    for(i = 0; i < args.length; i++) {
      if(args[i] && (typeof args[i] != "object")) {
        paymentType += PaymentsTypeForProperties[accoType][args[i]];
      }
    }
    return paymentType;
    console.log(paymentType);
  }
});


Template.viewPropertyInMap.onCreated(function() {
  self = this;
  self.latLng = new ReactiveVar;
  GoogleMaps.ready("propertyMap", function(map) {
    var marker;
    self.autorun(function() {
      var latLng = self.latLng.get();
      if(marker) {
        marker.setMap(null);
      }

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(latLng.lat, latLng.lng),
        map: map.instance
      });

      map.instance.setCenter(marker.getPosition());
      map.instance.setZoom(MAP_ZOOM);
    });
  });
});

Template.viewPropertyInMap.onRendered(function() {

  self = this;
  $('#property-map-modal').on('show.bs.modal', function(event) {
    var btn = $(event.relatedTarget);
    var lat = btn.data('lat');
    var lng = btn.data('lng');
    self.latLng.set({lat: lat, lng: lng});
  });

  $('#property-map-modal').on('shown.bs.modal', function (event) {
    google.maps.event.trigger(GoogleMaps.maps.propertyMap.instance, 'resize');
  });
});
Template.addCategoryModal.onCreated(function () {
  this.propertyId = new ReactiveVar;
});

Template.addCategoryModal.onRendered(function () {
  var t = this;
  $('#addCategoryModal').on('show.bs.modal', function (event) {
    var link = $(event.relatedTarget);
    var id = link.data('property-id');
    t.propertyId.set(id);
  });
});

Template.viewPropertyInMap.helpers({
  mapProperty: function() {
    var latLng = Template.instance().latLng.get();
    if(GoogleMaps.loaded() && latLng) {
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: MAP_ZOOM
      };
    }
  }
});
