Property = new Mongo.Collection("property");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


PropertySchema = new SimpleSchema({
  enumArea: {
    label: "Enumeration Area",
    type: String,
    allowedValues:
      ["Zone 1","Zone 2","Zone 3","Zone 4","Zone 5", "Zone 6","Zone 7","Zone 8","Zone 9","Zone 10", "Zone 11","Zone 12","Zone 13","Zone 14"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Enumeration Zone"
        }
      }
  },

  location: {
    label:"Geo Location",
    type: Object,
    optional: true
  },
  "location.lat": {
    label:"Latitude",
    type: Number,
    decimal: true
  },
  "location.long": {
    label:"Longitude",
    type: Number,
    decimal: true
  },

  propAddrNo: {
    type: Number,
    label: "Address Number",
    min:1,
    max:200
  },

  propAddrName: {
    type: String,
    label: "Address Name",
  },

  propAddrType: {
    label: "Address Type",
    type: String,
    allowedValues:
      ["Avenue","Close","Crescent","Estate","Lane","Layout","Road", "Street","Village"],
      autoform: {
        type: "select-radio-inline",
      }
  },

  propAddrLga: {
    label: "L.G.A",
    type: String,
    allowedValues:
      ["Abakaliki","Ebonyi","Izzi","Ohaukwu","Ezza North","Ezza South", "Ikwo","Ishielu", "Afikpo North", "Afikpo South", "Ivo","Ohaozara","Onicha"],
      autoform: {
        afFieldInput: {
          firstOption: "Pls, Select L.G.A"
        }
      }
  },
  abakalikiWard: {
    label: "Abakaliki LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Abakpa","Amachi (Ndebo)","Amachi (Ndegu)","Amagu/Enyieba","Amagu Unuhu", "Azumili/Azugwu","Azuiyiokwu Layout",  "Azuiyiudene",	"Edda", "Izzi Unuhu",	"Ndiagu	","Okpoitumo Ndebor","Okpoitumo Ndiegu","Timber Shed"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Abakaliki LGA Ward"
        }
      }
  },
  ebonyiWard: {
    label: "Ebonyi LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Abakpa","Abofia","Agalegu","Echiaba","Egwudinagu","Enyibichiri 1", "Enyibichiri 2","Kpirikpiri", "Mbeke",	"Ndiebo	", 	"Ndiegu	","Onuenyim","Urban New-Layout"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ebonyi LGA Ward"
        }
      }
  },

  izziWard: {
    label: "Izzi LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Agbaja(Mgbo)","Agbaja Anyanwuigwe","Agbaja Offiaonwe","Ezza-Inyimagu Igbuhu","Ezza-Inyimagu Igweledoha", "Ezza-Inyimagu Iziogo","Ezza-Inyimagu Ndiagu",  "Igbeagu Nduogbu",	"Igbeagu Ndiettah", "Igbeagu 3",	"Mgbalaku Inyimagu 1","Mgbalaku Inyimagu 2","Ndieze Inyimagu Mgbabeluzor","Ndieze Inyimagu/Ndiabor Ishiagu"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Izzi LGA Ward"
        }
      }
  },
  ohaukwuWard: {
    label: "Ohaukwu LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Effium 1","Effium 2","Ezzamgbo","Ishi Ngbo 1","Ishi Ngbo 2","Ngbo","Okposhi 1","Okposhi 2","Umuagara-Amechi","Umuogudu Oshia","Umuogudu Akpu 1","Umuogudu Akpu 2","Wigbeke 1","Wigbeke 2","Wigbeke 3"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ohaukwu LGA Ward"
        }
      }
  },
  ezzaNorthWard: {
    label: "Ezza North LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Amuda-Amaewula","Ekka","Inyere","Ndieguazu Umuoghara","Nkomoro","Ogboji","Oshiegbe Umuezeokoha","Omege Umuezeokoha","Okposi Umuoghara","Oriuzor","Umuezeoka"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ezza North LGA Ward"
        }
      }
  },

  ezzaSouthWard: {
    label: "Ezza South LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Amaezekwe","Amagu-Nsokara","Amaeka","Amana","Amudo-Okoffia","Amuzu","Echara","Ezzama","Ikwuator Idembia","Onueke","Umunwagu Idembia"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ezza South LGA Ward"
        }
      }
  },
  ikwoWard: {
    label: "Ikwo LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Ama Inyima","Echialike","Eka Awoke","Ekpanwudele","Ekpelu","Enyibichiri","Etam","Igbudu 1","Igbudu 2","Inyimagu 1","Inyimagu 2","Ndiagu Amagu 1","Ndiagu Amagu 2","Ndiagu Echara 1","Ndiagu Echara 2","Ndufu Amagu 1","Ndufu Amagu 2","Ndufu Alike","Ndufu Echara","Noye Alike"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ikwo LGA Ward"
        }
      }
  },
  ishieluWard: {
    label: "Ishielu LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Agba","Amaezu","Azuinyaba 1","Azuinyaba 2","Ezillo 1","Ezillo 2","Ezzagu-Ogboji","Ezzagu-Nkomoro",
    "Iyionu", "Nkalagu","Nkalaha","Ntezi","Obeagu","Ohofia","Okpoto","Umuhuali"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Ishielu LGA Ward"
      }
    }
  },

  afikpoNorthWard: {
    label: "Afikpo North LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Amata-Akpoha", "Amogu Akpoha", "Ezeke Amasiri", "Poperi Amasiri","Itim Afikpo","Ibii/Oziza Afikpo","Nkpoghoro Afikpo","Ohaisu Afikpo 1","Ohaisu Afikpo 2","Ugwuegu Afikpo","Uwana Afikpo 1","Uwana Afikpo 2"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Afikpo North LGA Ward"
        }
      }
  },
  afikpoSouthWard: {
    label: "Afikpo South LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Amangwu Edda","Amaeke","Amigbo Etiti Edda","Amiri","Amaoso","Ebunwana","Ndioke Ekoli Edda","Nguzu","Amato","Oso","Owutu"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Afikpo South LGA Ward"
        }
      }
  },
  ivoWard: {
    label: "Ivo LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Akaeze Ukwu","Akaeze Ishiagu","Amagu","Amonye","Ihenta Ogidi","Iyioji Akaeze","Ndiokoro Ukwu","Ngwogwo","Obinagu","Okue","Umobo"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ivo LGA Ward"
        }
      }
  },

  ohaozaraWard: {
    label: "Ohaozara LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Amaechi Okposi","Enena Ezeraku","Mgbom Okposi","Obiozara","Okposi Achara","Okposi Okwu","Ugbogologo-Ugwulangwu","Uhuotaru-Ugwulangwu","Umuchima","Umunaga","Umuobuna"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ohaozara LGA Ward"
        }
      }
  },
  onichaWard: {
    label: "Onicha LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Abaomege","Agbabor-Isu","Amanator-Isu","Ebia Oshiri","Enuagu-Onicha","Isinkwo-Ukamu","Isi-Onicha","Obeagu-Isu","Oguduukwor Oshiri","Okuzu-Ukawu","Ugwu-Oshiri","Umudomi-Onicha"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Onicha LGA Ward"
        }
      }
  },

  firstName: {
    type: String,
    label: "First Name"
  },
  otherName: {
    type: String,
    label: "Other Name",
    optional:true
  },
  surName: {
    type: String,
    label: "Surname"
  },
  ownAddrNo: {
    type: Number,
    label: "Address Number",
    min:1,
    max:200
  },

  ownAddrName: {
    type: String,
    label: "Address Name",
  },

  ownAddrType: {
    label: "Address Type",
    type: String,
    allowedValues:
      ["Avenue","Close","Crescent","Estate","Lane","Layout","Road", "Street","Village"],
      autoform: {
        type: "select-radio-inline",
      }
  },

  ownAddrLga: {
    label: "L.G.A",
    type: String,
    allowedValues:
      ["Abakaliki","Ebonyi","Izzi","Ohaukwu","Ezza North","Ezza South", "Ikwo","Ishielu", "Afikpo North", "Afikpo South", "Ivo","Ohaozara","Onicha"],
      autoform: {
        afFieldInput: {
          firstOption: "Pls, Select L.G.A"
        }
      }
  },

  ownAbakalikiWard: {
    label: "Abakaliki LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Abakpa","Amachi (Ndebo)","Amachi (Ndegu)","Amagu/Enyieba","Amagu Unuhu", "Azumili/Azugwu","Azuiyiokwu Layout",  "Azuiyiudene",	"Edda", "Izzi Unuhu",	"Ndiagu	","Okpoitumo Ndebor","Okpoitumo Ndiegu","Timber Shed"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Abakaliki LGA Ward"
        }
      }
  },
  ownEbonyiWard: {
    label: "Ebonyi LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Abakpa","Abofia","Agalegu","Echiaba","Egwudinagu","Enyibichiri 1", "Enyibichiri 2","Kpirikpiri", "Mbeke",	"Ndiebo	", 	"Ndiegu	","Onuenyim","Urban New-Layout"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ebonyi LGA Ward"
        }
      }
  },

  ownIzziWard: {
    label: "Izzi LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Agbaja(Mgbo)","Agbaja Anyanwuigwe","Agbaja Offiaonwe","Ezza-Inyimagu Igbuhu","Ezza-Inyimagu Igweledoha", "Ezza-Inyimagu Iziogo","Ezza-Inyimagu Ndiagu",  "Igbeagu Nduogbu",	"Igbeagu Ndiettah", "Igbeagu 3",	"Mgbalaku Inyimagu 1","Mgbalaku Inyimagu 2","Ndieze Inyimagu Mgbabeluzor","Ndieze Inyimagu/Ndiabor Ishiagu"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Izzi LGA Ward"
        }
      }
  },

  ownOhaukwuWard: {
    label: "Ohaukwu LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Effium 1","Effium 2","Ezzamgbo","Ishi Ngbo 1","Ishi Ngbo 2","Ngbo","Okposhi 1","Okposhi 2","Umuagara-Amechi","Umuogudu Oshia","Umuogudu Akpu 1","Umuogudu Akpu 2","Wigbeke 1","Wigbeke 2","Wigbeke 3"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ohaukwu LGA Ward"
        }
      }
  },
  ownEzzaNorthWard: {
    label: "Ezza North LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Amuda-Amaewula","Ekka","Inyere","Ndieguazu Umuoghara","Nkomoro","Ogboji","Oshiegbe Umuezeokoha","Omege Umuezeokoha","Okposi Umuoghara","Oriuzor","Umuezeoka"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ezza North LGA Ward"
        }
      }
  },

  ownEzzaSouthWard: {
    label: "Ezza South LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Amaezekwe","Amagu-Nsokara","Amaeka","Amana","Amudo-Okoffia","Amuzu","Echara","Ezzama","Ikwuator Idembia","Onueke","Umunwagu Idembia"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ezza South LGA Ward"
        }
      }
  },
  ownIkwoWard: {
    label: "Ikwo LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Ama Inyima","Echialike","Eka Awoke","Ekpanwudele","Ekpelu","Enyibichiri","Etam","Igbudu 1","Igbudu 2","Inyimagu 1","Inyimagu 2","Ndiagu Amagu 1","Ndiagu Amagu 2","Ndiagu Echara 1","Ndiagu Echara 2","Ndufu Amagu 1","Ndufu Amagu 2","Ndufu Alike","Ndufu Echara","Noye Alike"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ikwo LGA Ward"
        }
      }
  },
  ownIshieluWard: {
    label: "Ishielu LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Agba","Amaezu","Azuinyaba 1","Azuinyaba 2","Ezillo 1","Ezillo 2","Ezzagu-Ogboji","Ezzagu-Nkomoro",
    "Iyionu", "Nkalagu","Nkalaha","Ntezi","Obeagu","Ohofia","Okpoto","Umuhuali"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Ishielu LGA Ward"
      }
    }
  },

  ownAfikpoNorthWard: {
    label: "Afikpo North LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Amata-Akpoha", "Amogu Akpoha", "Ezeke Amasiri", "Poperi Amasiri","Itim Afikpo","Ibii/Oziza Afikpo","Nkpoghoro Afikpo","Ohaisu Afikpo 1","Ohaisu Afikpo 2","Ugwuegu Afikpo","Uwana Afikpo 1","Uwana Afikpo 2"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Afikpo North LGA Ward"
        }
      }
  },
  ownAfikpoSouthWard: {
    label: "Afikpo South LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Amangwu Edda","Amaeke","Amigbo Etiti Edda","Amiri","Amaoso","Ebunwana","Ndioke Ekoli Edda","Nguzu","Amato","Oso","Owutu"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Afikpo South LGA Ward"
        }
      }
  },
  ownIvoWard: {
    label: "Ivo LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Akaeze Ukwu","Akaeze Ishiagu","Amagu","Amonye","Ihenta Ogidi","Iyioji Akaeze","Ndiokoro Ukwu","Ngwogwo","Obinagu","Okue","Umobo"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ivo LGA Ward"
        }
      }
  },

  ownOhaozaraWard: {
    label: "Ohaozara LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Amaechi Okposi","Enena Ezeraku","Mgbom Okposi","Obiozara","Okposi Achara","Okposi Okwu","Ugbogologo-Ugwulangwu","Uhuotaru-Ugwulangwu","Umuchima","Umunaga","Umuobuna"],
      autoform: {
        afFieldInput: {
          firstOption: "Select Ohaozara LGA Ward"
        }
      }
  },
  ownOnichaWard: {
    label: "Onicha LGA Wards",
    type: String,
    optional:true,
    allowedValues:
      ["Abaomege","Agbabor-Isu","Amanator-Isu","Ebia Oshiri","Enuagu-Onicha","Isinkwo-Ukamu","Isi-Onicha",
    "Obeagu-Isu","Oguduukwor Oshiri","Okuzu-Ukawu","Ugwu-Oshiri","Umudomi-Onicha"],
    autoform: {
      afFieldInput: {
        firstOption: "Select Onicha LGA Ward"
      }
    }
  },

  sex: {
    label: "Sex",
    type: String,
    allowedValues: ['Male', 'Female'],
    autoform: {
      type: 'select-radio-inline'
    }
  },
  maritalStatus: {
    label: "Marital Status",
    type: String,
    allowedValues: ['Single','Married', 'Divorced',"Widow"],
    autoform: {
      type: 'select-radio-inline'
    }
  },


  doBirth: {
    label: "Date of Birth",
    type: Date,
    optional: false,
    min:1914,
    max:2014,
    autoform: {
      afFieldInput: {
        type: "date"
      }
    }
  },
  phoneNo1: {
    type: 'tel',
    label: "Mobile"
  },

  phoneNo2: {
    type: 'tel',
    label: "Phone",
    optional:true,
  },

  email: {
    type: 'email',
    label: "Email",
    optional:true
  },
  createdOn: {
    type: Date,
    label: "Created On",
    optional: true,
    autoValue: function(){
      if(this.isInsert){
        return new Date();
      }
    },
    autoform: {
      type:"hidden"
    }
  },

  createdBy: {
    type: String,
    label: "Created By",
    optional: true,
    autoValue: function(){
      if(this.isInsert) {
        return Meteor.user().emails[0].address;
      }
    },
    autoform: {
      type: "hidden"
    }
  }

});
Property.attachSchema(PropertySchema);


Meteor.methods({
  /**
   * Invoked by autoform to add a new Property record.
   * @param doc The Property document.
   */
  addProperty: function(doc) {
    console.log("Adding", doc);
    if(Meteor.user()){
      //check(doc, Property.simpleSchema());
      return Property.insert(doc, function(err, docID) {console.log("DocID: ", docID);});
    } else {
      return null;
    }
  },
  /**
   *
   * Invoked by autoform to update a Property record.
   * @param doc The Property document.
   * @param docID It's ID.
   */
  updateProperty: function(doc, docID) {
    if(Meteor.user()){
      //check(doc, Property.simpleSchema());
      Property.update({_id: docID}, doc);
    } else {
      return null;
    }
  },
  /**
   *
   * Invoked by autoform to update a Property record.
   * @param doc The Property document.
   * @param docID It's ID.
   */

});

Property.allow({
  update: function(userId, doc) {
    if(Meteor.user()){
      return true;
    }
  }
});
