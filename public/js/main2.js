(function ($) {
    "use strict";

    $(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(550).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
    
    if ($(this).scrollTop() > 200) {
        $('.navbar').fadeIn('slow').css('display', 'flex');
    } else {
        $('.navbar').fadeOut('slow').css('display', 'none');
    }
    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    $('#attendding_form').on('submit', function(event) {
        event.preventDefault();
        Swal.fire({
            html: `<div class="d-flex justify-content-center"><div class="text-start">
                <b>確認資料輸入無誤?</b><br>
                姓名：${$('#name').val()}<br>
                email：${$('#email').val()}<br>
                地址：${$('#address').val()}<br>
                人數：${$('#people').val()}</div></div>`,
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#93c18c",
            cancelButtonColor: "#b5b5b5",
            confirmButtonText: "是",
            cancelButtonText: "否",
            customClass:{
                confirmButton: 'btn px-4 py-1',
                cancelButton: 'btn px-4 py-1'
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                $('#loading').show();
                const response = await fetch(`/api/gest/?name=${$('#name').val()}`, { cache: 'no-store' })
                const gestData = await response.json()
                $('#loading').hide();

                if(gestData.name){
                    Swal.fire({
                        text: "此名稱已有一筆資料，請問是否覆蓋?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#ca6262",
                        cancelButtonColor: "#b5b5b5",
                        confirmButtonText: "是",
                        cancelButtonText: "否",
                        customClass:{
                            confirmButton: 'btn px-4 py-1',
                            cancelButton: 'btn px-4 py-1'
                        }
                    }).then(async (result2) => {
                        if (result2.isConfirmed) {
                            $('#loading').show();

                            try{
                                const res = await fetch(`/api/gest/${gestData.id}/`, { method: 'DELETE' })
                            }catch(err){
                                $('#loading').hide();
                                Swal.fire({
                                    text: "刪除錯誤!",
                                    icon: "error",
                                    confirmButtonColor: "#b5b5b5",
                                    confirmButtonText: "關閉",
                                    customClass:{
                                        confirmButton: 'btn px-4 py-1'
                                    }
                                });
                            }
                            this.submit();
                        }else{
                            this.submit();
                        }
                    });
                }else{
                    this.submit();
                }
            }
        });
        return false;
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);

