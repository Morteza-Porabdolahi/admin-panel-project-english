$(document).ready(function () {
   function removeAllSidebarToggleClass() {
      $('#sidebar-toggle-hide').removeClass('d-none');
      $('#sidebar-toggle-hide').removeClass('d-md-inline');
      $('#sidebar-toggle-show').removeClass('d-inline');
      $('#sidebar-toggle-show').removeClass('d-md-none');
   }
   $('#sidebar-toggle-hide').click(function () {
      $('#sidebar').fadeOut(300);
      $('#main-body').css('width', '100%');
      setTimeout(() => {
         removeAllSidebarToggleClass();
         $('#sidebar-toggle-hide').addClass('d-none');
         $('#sidebar-toggle-show').addClass('d-inline');
      }, 300);
   });
   $('#sidebar-toggle-show').click(function () {
      $('#sidebar').fadeIn(300);
      removeAllSidebarToggleClass();
      $('#sidebar-toggle-hide').removeClass('d-none');
      $('#sidebar-toggle-show').addClass('d-none');
   });
   $('#menu-toggle').click(function (e) {
      $('#body-header').toggle(300);
   });
   $('#search-area-show').click(function () {
      $('#search-area-show').removeClass('d-md-inline');
      $('#search-area').addClass('d-md-inline');
      $('#search-input').animate({ width: '12rem' }, 500)
   });
   $('#search-area-hide').click(function (e) {
      $('#search-input').animate({ width: '0rem' }, 500)
      setTimeout(() => {
         $('#search-area').removeClass('d-md-inline');
         $('#search-area-show').addClass('d-md-inline');
      }, 500);
   });
   $('#show-notifications').click(function (e) {
      $('#header-notification').fadeToggle();
   });
   $('#show-comment').click(function (e) {
      $('#header-comment').fadeToggle();
   });
   $('#show-profile').click(function (e) {
      $('#header-profile').fadeToggle();
   });
   $('.sidebar-group-link').click(function (e) {
      var hasClass = $(this).hasClass('sidebar-group-link-active');
      $('.sidebar-group-link').removeClass('sidebar-group-link-active');
      $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-right');
      $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
      if (hasClass) {
         $(this).removeClass('sidebar-group-link-active');
         $(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-right');
         $(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
      } else {
         $(this).addClass('sidebar-group-link-active');
         $(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-right');
         $(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-down');
      }
   });
   // -------- full screen -------------- //
   var htmlTag = document.documentElement;
   function toggleFullScreen() {
      if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
         if (htmlTag.requestFullscreen) {
            htmlTag.requestFullscreen();
         } else if (htmlTag.mozRequestFullScreen) {
            htmlTag.mozRequestFullScreen();
         } else if (htmlTag.webkitRequestFullScreen) {
            htmlTag.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
         } else if (htmlTag.msRequestFullScreen) {
            htmlTag.msRequestFullScreen();
         }
         $('#screen-compress').removeClass('d-none');
         $('#screen-expand').addClass('d-none');
      } else {
         if (document.exitFullscreen) {
            document.exitFullscreen();
         } else if (document.mozExitFullscreen) {
            document.mozExitFullScreen();
         } else if (document.webkitExitFullscreen) {
            document.webkitExitFullScreen();
         } else if (document.msExitFullScreen) {
            document.msExitFullScreen();
         }
         $('#screen-compress').addClass('d-none');
         $('#screen-expand').removeClass('d-none');
      }
   }
   $('#full-screen').click(function (e) {
      toggleFullScreen();
   });
   // -------------------------------- //
});
