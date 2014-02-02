(function() {
    'use strict';

    $(document).ready(function() {
        // Init Skrollr
        var s = skrollr.init({
            render: function(data) {
                //Debugging - Log the current scroll position.
                // console.log(data.curTop);
            }
        });

        window.onload = function() {
            setSize(s);
        };

        $(window).resize(function() {
            setSize(s);
        });
    });

    function setSize(s) {
        $('section').height($(window).innerHeight() * 2);
        $('section').first().height($(window).innerHeight());
        $('section').last().height($(window).innerHeight());
        s.refresh();
    }


})();

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
