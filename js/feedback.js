$(document).ready(function () {
  //Initialising the side navbar
  $('.button-collapse').sideNav();

  // Approve Fin Hampton
  var uniqueNamedAkashNewIndicator = 2;
  
  $('.approvefin').on('click', function (e) {
    const noNewMessages = 
    `<span id="newMessageCountHeadline" class="card-title">
      All Feedback
    </span>`;

    const output = 
    `<tr id="feedbackfin">
      <td class="feedback-table">
        <img src="img/avatar-fin-hampton.png" alt="Picture of Fin Hampton" class="responsive-img circle profile-pic">
        <div class="title finnamebold">Fin Hampton</div>
      </td>
      <td>Moana Fish & Chips makes the best ice-cream in town.</td>
      <td>
        <a href="#!" class="green-text">
          <span>&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;</span>
        </a>
        <a href="#!" class="red-text">
          <i class="material-icons denyFinAnton">close</i>
        </a>
      </td>
    </tr>`;
    
    document.getElementById("feedbackfin").innerHTML = output;
    document.getElementById("newMessageCount").innerHTML = (uniqueNamedAkashNewIndicator = uniqueNamedAkashNewIndicator - 1);
    if (uniqueNamedAkashNewIndicator == 0) {
      document.getElementById("newMessageCountHeadline").innerHTML =  noNewMessages;
    };
    Materialize.toast('Comment Approved', 3000);
    $(this).parent().parent().remove();
    e.preventDefault();
  });

  // Approve Anton
  $('.approveanton').on('click', function (e) {
    const noNewMessages = 
    `<span id="newMessageCountHeadline" class="card-title">
      All Feedback
    </span>`;

    const output = 
    `<tr id="feedbackanton">
      <td class="feedback-table">
        <img src="img/avatar-anton.png" alt="Picture of Anton" class="responsive-img circle profile-pic">
        <div class="title">&ensp;&ensp;Anton</div>
      </td>
      <td>I tried every burger on the menu today, and they were all "A1".</td>
      <td>
        <a href="#!" class="green-text">
          <span>&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;</span>
        </a>
        <a href="#!" class="red-text">
          <i class="material-icons denyFinAnton">close</i>
        </a>
      </td>
    </tr>`;

    document.getElementById("feedbackanton").innerHTML = output;
    document.getElementById("newMessageCount").innerHTML = (uniqueNamedAkashNewIndicator = uniqueNamedAkashNewIndicator - 1);
    if (uniqueNamedAkashNewIndicator == 0) {
      document.getElementById("newMessageCountHeadline").innerHTML =  noNewMessages;
    };
    Materialize.toast('Comment Approved', 3000);
    $(this).parent().parent().remove();
    e.preventDefault();
  });

  // Deny Fin or Anton
  const noNewMessages = 
  `<span id="newMessageCountHeadline" class="card-title">
    All Feedback
  </span>`;

  $('.denyFinAnton').click(function (e) {
  document.getElementById("newMessageCount").innerHTML = (uniqueNamedAkashNewIndicator = uniqueNamedAkashNewIndicator - 1);
  if (uniqueNamedAkashNewIndicator == 0) {
    document.getElementById("newMessageCountHeadline").innerHTML =  noNewMessages;
  };
  Materialize.toast('Comment Denied', 3000);
  $(this).parent().parent().parent().remove();
  e.preventDefault();
  });

  // Deny Keziah
  $('.denyKeziah').click(function (e) {
    $(this).parent().parent().parent().remove();
    Materialize.toast('Comment Denied', 3000);
    e.preventDefault();
    });

  // Deny Richard
  $('.denyRichard').click(function (e) {
    const output = 
    `<tr id="feedbackchris">
      <td class="feedback-table">
        <img src="img/avatar-chris-lewis.png" alt="Picture of Chris Lewis" class="responsive-img circle profile-pic">
        <div class="title">Chris Lewis</div>
      </td>
      <td>Making food "good and greasy" is a work of art. <br> I am an artist, and I can confirm there are no artists at Moana Fish & Chips.</td>
      <td>
        <a href="#!" class="green-text">
          <span>&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;</span>
        </a>
        <a href="#!" class="red-text">
          <i class="material-icons denyKeziah">close</i>
        </a>
      </td>
    </tr>`;

    document.getElementById("feedbackrichard").innerHTML = output;
    $(this).parent().parent().parent().remove();
    Materialize.toast('Comment Denied', 3000);
    e.preventDefault();
    });
});