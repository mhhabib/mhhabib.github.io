$(document).ready(function () {
  $('#summery').show();
  $('#msocial').hide();
  $('#exp').hide();
  $('#edu').hide();
  $('#skill').hide();
  $('#project').hide();
  $('#home').click(function() {
    $('#summery').show();
    $('#msocial').hide();
    $('#exp').hide();
    $('#edu').hide();
    $('#skill').hide();
    $('#project').hide();
  });

  $('#ex').click(function () {
    $('#exp').show();
    $('#msocial').show();
    $('#summery').hide();
    $('#edu').hide();
    $('#skill').hide();
    $('#project').hide();
  });
  $('#ed').click(function () {
    $('#edu').show();
    $('#msocial').show();
    $('#summery').hide();
    $('#exp').hide();
    $('#skill').hide();
    $('#project').hide();
  });
  $('#sk').click(function () {
    $('#skill').show();
    $('#msocial').show();
    $('#summery').hide();
    $('#exp').hide();
    $('#edu').hide();
    $('#project').hide();
  });
  $('#pr').click(function () {
    $('#project').show();
    $('#msocial').show();
    $('#summery').hide();
    $('#exp').hide();
    $('#skill').hide();
    $('#edu').hide();
  });
});
