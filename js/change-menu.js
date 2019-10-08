$(document).ready(function () {

  //Initialising the side navbar
  $('.button-collapse').sideNav();

  // Initialising the Modal
  $('.modal').modal();

  // Initialising Select
  $('select').material_select();
  CKEDITOR.replace('body');
  
  $(".carousel").carousel({ dist: 0 });
  $(".collapsible").collapsible();

});