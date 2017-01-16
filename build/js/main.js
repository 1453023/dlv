;(function () {

    'use strict';

    var picturesCarousel = function(){
        var owl = $('.team-carousel');
        owl.owlCarousel({
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            items: 1,
            loop: true,
            dots: false,
            margin: 29.9,
            autoplay: true,
            stagePadding: 29.001,
            smartSpeed: 450
        });
    };

    // Window Scroll
        

    // Animations
    // Home
    var homeAnimate = function() {
        var home = $('#dlv-home');
        if ( home.length > 0 ) {

            home.waypoint( function( direction ) {

                if( direction === 'down' && !$(this.element).hasClass('animated') ) {


                    setTimeout(function() {
                         home.find('.to-animate').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInRight animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 200);

                     setTimeout(function() {
                         home.find('.to-animate-2').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInUp animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 700);

                    setTimeout(function() {
                        home.find('.to-animate-3').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInLeft animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 300);

                    $(this.element).addClass('animated');

                }
            } , { offset: '80%' } );

        }
    };

    var member1Animate = function() {

        var member = $('#dlv-member-1');
        if ( member.length > 0 ) {

            member.waypoint( function( direction ) {

                if( direction === 'down' && !$(this.element).hasClass('animated') ) {

                    setTimeout(function() {
                        member.find('.to-animate').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInUp animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 200);

                    setTimeout(function() {
                        member.find('.to-animate-2').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInLeft animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 700);

                    setTimeout(function() {
                        member.find('.to-animate-3').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInRight animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 1000);


                    $(this.element).addClass('animated');

                }
            } , { offset: '80%' } );

        }
    };

    var member2Animate = function() {

        var member = $('#dlv-member-2');
        if ( member.length > 0 ) {

            member.waypoint( function( direction ) {

                if( direction === 'down' && !$(this.element).hasClass('animated') ) {

                    setTimeout(function() {
                        member.find('.to-animate').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInUp animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 200);

                    setTimeout(function() {
                        member.find('.to-animate-2').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInLeft animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 700);

                    setTimeout(function() {
                        member.find('.to-animate-3').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInRight animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 1000);


                    $(this.element).addClass('animated');

                }
            } , { offset: '80%' } );

        }
    };

    var member3Animate = function() {

        var member = $('#dlv-member-3');
        if ( member.length > 0 ) {

            member.waypoint( function( direction ) {

                if( direction === 'down' && !$(this.element).hasClass('animated') ) {

                    setTimeout(function() {
                        member.find('.to-animate').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInUp animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 200);

                    setTimeout(function() {
                        member.find('.to-animate-2').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInLeft animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 700);

                    setTimeout(function() {
                        member.find('.to-animate-3').each(function( k ) {
                            var el = $(this);

                            setTimeout ( function () {
                                el.addClass('fadeInRight animated');
                            },  k * 200, 'easeInOutExpo' );

                        });
                    }, 1000);


                    $(this.element).addClass('animated');

                }
            } , { offset: '80%' } );

        }
    };

    // Document on load.
    $(function(){

        $(document).trigger('scroll');
        
        picturesCarousel();
        
        // Animations
        homeAnimate();
        member1Animate();
        member2Animate();
        member3Animate();
       
        $.scrollify({
            section: ".section-scroll",
            scrollbars: false,
            before: function(i,sections) {
                var ref = sections[i].attr("data-section-name");

                $(".scroll-pagination .active").removeClass("active");

                $(".scroll-pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
            },
            afterRender: function() {
                var pagination = "<ul class=\"scroll-pagination\">";
                var activeClass = "";
                $(".section-scroll").each(function(i) {
                    activeClass = "";
                    if(i===0) {
                        activeClass = "active";
                    }
                    pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
                });

                pagination += "</ul>";

                $(".home").append(pagination);
            }
        });

        $(".scroll-pagination a").on("click",function() {
            $.scrollify.move($(this).attr("href"));
        });
        $("#btn-see-more").on("click",function() {
            $.scrollify.move($(this).attr("href"));
        });

        $(".scroll-pagination .active").removeClass("active");

        $(".scroll-pagination").find("a[href=\"" + window.location.hash + "\"]").addClass("active");
    });    
}());