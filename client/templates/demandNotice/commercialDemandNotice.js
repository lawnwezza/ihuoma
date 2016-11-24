Template.commercialDemandNotice.helpers({
  commercial: function(){
    return Commercial.findOne({});
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
