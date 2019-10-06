    // Hiding all sections
    $('.section').hide();

    setTimeout(function () {
      $(document).ready(function () {
        // Showing all sections
        $('.section').fadeIn();

        // Hiding the preloader
        $('.loader').fadeOut();

      });
    }, 1000);