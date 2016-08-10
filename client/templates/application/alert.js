Template.alert.rendered = function() {

    $(document).ready(function() {
    $('.alert').on('closed.bs.alert', function () {
      console.log("I am trying to get this working");
      Router.go('/listProperty');
      return Session.set('successfulInsertForm', false);

      });
   });
}
