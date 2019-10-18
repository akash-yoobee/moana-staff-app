// Hiding all sections
$('.section').hide();

// Everything in here happens after waiting 1000 millisecond
setTimeout(function () {
  $(document).ready(function () {
    // Showing all sections
    $('.section').fadeIn();

    // Hiding the preloader
    $('.loader').fadeOut();

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

    // Approve and deny Fin and Anto. The New badge decrements


      $('.approve').click(function (e) {
        
      var uniqueNamedAkashNewIndicatorFirst = 2;
      const noNewMessagesAgain = 
      `<span></span>`;
        $(this).parent().remove();
        Materialize.toast('Comment Approved', 3000);
        e.preventDefault();
      });
      $('.deny').click(function (e) {
      $(this).parent().remove();
      Materialize.toast('Comment Denied', 3000);
      document.getElementById("newMessageCount").innerHTML = (uniqueNamedAkashNewIndicatorFirst = uniqueNamedAkashNewIndicatorFirst - 1);
    if (uniqueNamedAkashNewIndicatorFirst == 0) {
      document.getElementById("newMessageCountHeadline").innerHTML =  noNewMessagesAgain;
    };
      e.preventDefault();
    });

      // Approve and deny Keziah and Joel
      $('.approve').click(function (e) {
        $(this).parent().remove();
        Materialize.toast('Comment Approved', 3000);
        e.preventDefault();
      });
      $('.deny').click(function (e) {
      $(this).parent().remove();
      Materialize.toast('Comment Denied', 3000);
      e.preventDefault();
    });

  });
}, 1000);