Template.financialDemandNotice.helpers({
  financial: function(){
  return Financial.findOne({});
  },
  property: function(){
  return Property.findOne({_id:Financial.findOne().propId});
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
  },
  getPaymentInWords: function(accoType, ...args) {
    paymentInWords = "";
    for(i = 0; i < args.length; i++) {
      if(args[i] && (typeof args[i] != "object")) {
        paymentInWords += AnnualPaymentsInWords[accoType][args[i]];
      }
    }
    return paymentInWords;
    console.log(paymentInWords);
  },
  dateOfIssue: function() {
    return new Date();
  }
});
