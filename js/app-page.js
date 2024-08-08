/**
 * Dropdown menu
 */

$( document ).ready(function() {
  
  console.log(location.pathname)
  $("#footerContent").load("./footer.html", function () {
  
  })
  $("#navContent").load("./header.html", function () {
    if (location.pathname === '/') {
      $( "#homepage-navbar-item" ).addClass( "is-active" );
    }
  
    if (location.pathname === '/schedule.html') {
      $( "#schedule-navbar" ).addClass( "is-active" );
    }
    if (location.pathname === '/resources.html') {
      $( "#resources-navbar" ).addClass( "is-active" );
    }
    if (location.pathname === '/other.html') {
      $( "#other-navbar" ).addClass( "is-active" );
    }
  
    const menus = document.querySelectorAll('.navbar-burger');
    const dropdowns = document.querySelectorAll('.navbar-menu');
  
    if (menus.length && dropdowns.length) {
      for (var i = 0; i < menus.length; i++) {
        menus[i].addEventListener('click', function() {
          for (var j = 0; j < dropdowns.length; j++) {
            dropdowns[j].classList.toggle('is-active');
          }
        });
      }
    }
    
  });
  
  
  
});