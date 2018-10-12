document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }  
});

function toggleDiv(divNum) {

  $("#close").hide();
  $(".messagebody").animate({ right: '-800' }, 350);
  if ($("#div" + divNum)) {
    
    $("#div" + divNum).animate({ right: '160' }, 350, function () { $("#close").show(); });
   
  }
  
};

$(document).ready(function () {
  $("#close").on("click", function () {
    $(".messagebody").animate({ right: '-800' }, 350);
    $(this).hide()
  })
});