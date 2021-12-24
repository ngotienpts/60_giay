document.addEventListener("DOMContentLoaded", function () {
  // show search
  var openSearch = document.querySelector(".top-header__right-item--search");
  var search = document.querySelector(".search");

  // back top
  var backTop = document.querySelector("#back-top");

  // show sub menu mb
  var subMenu = document.querySelector(".sub-menu-mb-wrapper");
  var showSubMenu = document.querySelector(".navbar-mb-item__bar");

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;
      // show search
      if (openSearch) {
        if (search) {
          openSearch.onclick = function () {
            if (search.classList.contains("show")) {
              search.classList.remove("show");
            } else {
              search.classList.add("show");
            }
          };
        }
      }

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }
      // show sub menu
      if (showSubMenu) {
        showSubMenu.onclick = function () {
          if (subMenu) {
            subMenu.classList.add("active");
          }
        };
      }
      if (subMenu) {
        var subListMenu = subMenu.querySelectorAll(".sub-menu-mb-item");
        var closeSubMenu = subMenu.querySelector(".close-sub-menu");
        subListMenu.forEach(function (a) {
          if (a.querySelector(".sub-menu-mb-icon")) {
            a.querySelector(".sub-menu-mb-icon").onclick = function () {
              if (a.classList.contains("active")) {
                a.classList.remove("active");
              } else {
                a.classList.add("active");
              }
            };
          }
        });
        closeSubMenu.onclick = function () {
          subMenu.classList.remove("active");
        };
      }

      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {
        if (openSearch && search) {
          if (
            !search.contains(e.target) &&
            !e.target.matches(".top-header__right-item--search")
          ) {
            search.classList.remove("show");
          }
        }
      });
    },
    // sticky sidebar main
    stickySlidebarMain: function () {
      $(".leftSidebar, .rightSidebar").theiaStickySidebar({
        containerSelector: "#main-row-3",
        additionalMarginTop: 60,
        additionalMarginBottom: 20,
      });
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // sticky sidebar main
      this.stickySlidebarMain();
    },
  };

  app.start();
});
