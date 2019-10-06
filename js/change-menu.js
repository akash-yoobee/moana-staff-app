$(document).ready(function () {

  //Initialising the side navbar
  $('.button-collapse').sideNav();

  // Initialising the Modal
  $('.modal').modal();

  // Initialising Select
  $('select').material_select();

  $(".carousel").carousel({ dist: 0 });
  $(".collapsible").collapsible();

});