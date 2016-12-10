Schema = {};
Schema.search = new SimpleSchema({
  choose: {
    label: "Select Category",
    type: String,
    optional: false,
    allowedValues: ['Commercial','Entertainment','Financial','Government','Medical','Residential','Store'],
    autoform: {
      afFieldInput: {
        firstOption: "Select Category"
      }
    }
  },
    catId: {
        type: String,
        label: "Enter CategoryId"
    }

});
