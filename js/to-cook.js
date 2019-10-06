$(document).ready(function () {

  //Initialising the side navbar
  $('.button-collapse').sideNav();

  // Counter
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
        // How quickly the counter counts up
        duration: 1000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
  });

  // To cook list
  $('#tocook-form').submit(function (e) {
    const output = `<li class="collection-item">
          <div>${$('#tocook').val()}
            <a href="#!" class="secondary-content delete">
              <i class="material-icons">close</i>
            </a>
          </div>
        </li>`;
    $('.tocooklist').append(output);
    Materialize.toast('Item added to list', 3000);
    e.preventDefault();
  });

  // Deleting items that have been served to the customers
  $('.tocooklist').on('click', '.delete', function (e) {
    $(this).parent().parent().remove();
    Materialize.toast('Item Served', 3500);
    e.preventDefault();
  });
});