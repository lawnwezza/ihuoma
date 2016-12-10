Template.searchForm.helpers({
  searchFormSchema: function() {
    return Schema.search;
  },
  catIdValue: function () {
    var catId = AutoForm.getFieldValue("searchForm", "catId");
    return catId;
    console.log(catId);
  }
});
