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
<<<<<<< HEAD
    }
  
});

//Hamper modal

var hamper = {
  hamperone: {
    open: function () {
      document.getElementById('hamperone').classList.add('is-active');
    },
    close: function () {
      document.getElementById('hamperone').classList.remove('is-active');

    }
  },

  hampertwo: {
    open: function () {
      document.getElementById('hampertwo').classList.add('is-active');
    },
    close: function () {
      document.getElementById('hampertwo').classList.remove('is-active');
    }
  }
};
=======
    }  
});
>>>>>>> 9719844196a2ecc579990056546ad694c738d6ec
