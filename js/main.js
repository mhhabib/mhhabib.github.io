$(document).ready(function () {
  $('#index__section').show();
  $('#experience__section').hide();
  $('#index').click(function() {
    $('#index__section').show();
    $('#experience__section').hide();
  });

  $('#exp').click(function () {
    $('#experience__section').show();
    $('#index__section').hide();
  });
});
