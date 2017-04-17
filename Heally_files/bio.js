(function () {
    'use strict';

    $(document).ready(function () {

        $(document).scroll(function () {
            var logo = $(".logo");
            if ($("body").scrollTop() > 160) {
                logo.addClass("display-logo");
                $(".navbar-wrapper > nav > div").addClass("display-menu-bar");
                $(".navbar-wrapper ul").addClass("navbar-wrapper-ul-left");
            }
            else {
                logo.removeClass("display-logo")
                $(".navbar-wrapper > nav > div").removeClass("display-menu-bar");
                $(".navbar-wrapper ul").removeClass("navbar-wrapper-ul-left");
            }
        });

    })
})();