$(document).ready(function () {
  $('#summery').show();
  $('#exp').hide();
  $('#edu').hide();
  $('#skill').hide();
  $('#project').hide();
  $('#home').click(function() {
    $('#summery').show();
    $('#exp').hide();
    $('#edu').hide();
    $('#skill').hide();
    $('#project').hide();
  });
  $('#ex').click(function () {
    $('#exp').show();
    $('#summery').hide();
    $('#edu').hide();
    $('#skill').hide();
    $('#project').hide();
  });
  $('#ed').click(function () {
    $('#edu').show();
    $('#summery').hide();
    $('#exp').hide();
    $('#skill').hide();
    $('#project').hide();
  });
  $('#sk').click(function () {
    $('#skill').show();
    $('#summery').hide();
    $('#exp').hide();
    $('#edu').hide();
    $('#project').hide();
  });
  $('#pr').click(function () {
    $('#project').show();
    $('#summery').hide();
    $('#exp').hide();
    $('#skill').hide();
    $('#edu').hide();
  });
});
