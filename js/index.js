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

    var newMessagesOnIndexPage = 2;
    // Approve Fin and Anton. The New badge decrements and then disappears
    $('.approveFinAnton').click(function (e) {
    const noNewMessagesAgain = 
    `<h5>Latest Feedback</h5>`;
      $(this).parent().remove();
      document.getElementById("numberOfFeedback").innerHTML ++;
      Materialize.toast('Comment Approved', 3000);
      document.getElementById("newMessageCountOnIndexPage").innerHTML = (newMessagesOnIndexPage = newMessagesOnIndexPage - 1);
      if (newMessagesOnIndexPage == 0) {
        document.getElementById("newMessageBadgeHeadline").innerHTML =  noNewMessagesAgain;
      };
      e.preventDefault();
    });

    // Decrements Fin and Anton. The New badge decrements and then disappears
    $('.denyFinAnton').click(function (e) {
    const noNewMessagesAgain = 
    `<h5>Latest Feedback</h5>`;
    $(this).parent().remove();
    Materialize.toast('Comment Denied', 3000);
    document.getElementById("newMessageCountOnIndexPage").innerHTML = (newMessagesOnIndexPage = newMessagesOnIndexPage - 1);
    if (newMessagesOnIndexPage == 0) {
      document.getElementById("newMessageBadgeHeadline").innerHTML =  noNewMessagesAgain;
    };
      e.preventDefault();
    });

    // Approve and deny Keziah and Joel
    $('.approveKeziahJoel').click(function (e) {
      $(this).parent().remove();
      document.getElementById("numberOfFeedback").innerHTML ++;
      Materialize.toast('Comment Approved', 3000);
      e.preventDefault();
    });
    $('.denyKeziahJoel').click(function (e) {
    $(this).parent().remove();
    Materialize.toast('Comment Denied', 3000);
    e.preventDefault();
  });

  });
}, 1000);