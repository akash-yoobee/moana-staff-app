$(document).ready(function () {
  //Initialising the side navbar
  $('.button-collapse').sideNav();

  // Approve Fin Hampton
  $('.approve').on('click', function (e) {
    const output = `<a href="#!" class="green-text">
    <span>&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;</span></a>`;
    const nameboldfin = `<div class="title finnamebold" style="font-weight: normal;">Fin f Hampton</div>`;
    document.getElementById("feedbacksomething").innerHTML = output;
    // document.getElementById("finnamebold").innerHTML = 'nameboldfin';
    Materialize.toast('Comment Approved', 3000);
    $(this).parent().remove();
    e.preventDefault();
  });

    // Approve Anton
    $('.approve2').on('click', function (e) {
      const output = `<a href="#!" class="green-text">
      <span>&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;</span></a>`;
      document.getElementById("anothername2").innerHTML = output;
      Materialize.toast('Comment Approved', 3000);
      $(this).parent().remove();
      e.preventDefault();
    });

  $('.deny').click(function (e) {
  $(this).parent().remove();
  Materialize.toast('Comment Denied', 3000);
  e.preventDefault();
  });
});