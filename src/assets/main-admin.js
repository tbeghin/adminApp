$(function () {
  "use strict";
  // Sidenav toggle
  $.pushMenu = {
    activate: function (toggleBtn) {
      let contentWrapper = ".content-wrapper";
      let body = $("body");
      let sidebar = $(".sidebar");
      let mainSidebar = $('.main-sidebar');
      let slimScrollDiv = ".slimScrollDiv";

      //Enable sidebar toggle
      $(toggleBtn).on('click', function (e) {
        e.preventDefault();

        //Enable sidebar push menu
        if ($(window).width() > (767)) {
          if (body.hasClass('sidebar-collapse')) {
            body.removeClass('sidebar-collapse').trigger('expanded.pushMenu');
          } else {
            body.addClass('sidebar-collapse').trigger('collapsed.pushMenu');
          }
        }
        //Handle sidebar push menu for small screens
        else {
          if (body.hasClass('sidebar-open')) {
            body.removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
          } else {
            body.addClass('sidebar-open').trigger('expanded.pushMenu');
          }
        }
        if ( body.hasClass('fixed') && body.hasClass('sidebar-mini') && body.hasClass('sidebar-collapse')) {
          sidebar.css("overflow","visible");
          mainSidebar.find(slimScrollDiv).css("overflow","visible");
        }
        if (body.hasClass('only-sidebar')) {
          sidebar.css("overflow","visible");
          mainSidebar.find(slimScrollDiv).css("overflow","visible");
        }
      });

      $(contentWrapper).click(function () {
        //Enable hide menu when clicking on the content-wrapper on small screens
        if ($(window).width() <= (767) && body.hasClass("sidebar-open")) {
          body.removeClass('sidebar-open');
        }
      });
    }
  };

  // Sidebar treemenu prototype
  $.tree = function (menu) {
    let animationSpeed = 200;
    $(document).on('click', menu + ' li a', function (e) {
      //Get the clicked link and the next element
      let $this = $(this);
      let checkElement = $this.next();

      //Check if the next element is a menu and is visible
      if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
        //Close the menu
        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('menu-open');
        });
        checkElement.parent("li").removeClass("active");
      }
      //If the menu is not visible
      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
        //Get the parent menu
        let parent = $this.parents('ul').first();
        //Close all open menus within the parent
        let ul = parent.find('ul:visible').slideUp(animationSpeed);
        //Remove the menu-open class from the parent
        ul.removeClass('menu-open');
        //Get the parent li
        let parent_li = $this.parent("li");

        //Open the target menu and add the menu-open class
        checkElement.slideDown(animationSpeed, function () {
          //Add the class active to the parent li
          checkElement.addClass('menu-open');
          parent.find('li.active').removeClass('active');
          parent_li.addClass('active');
        });
      }
      //if this isn't a link, prevent the page from being redirected
      if (checkElement.is('.treeview-menu')) {
        e.preventDefault();
      }
    });
  };

  // Activate sidenav treemenu
  $.tree('.sidebar');

  // Activate sidenav toggle
  $.pushMenu.activate("[data-toggle='offcanvas']");

  //Activate bootstrip tooltips
  $("[data-toggle='tooltip']").tooltip();

  // Login Page Flipbox control
  $('.login-content [data-toggle="flip"]').click(function() {
    $('.login-box').toggleClass('flipped');
    return false;
  });
});
