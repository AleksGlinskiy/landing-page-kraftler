$(function() {
	// Custom JS
    $('.slider').slick({
        dots: false,
        speed: 600,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('#arrow-next-m').click(function() {
        $('#slider-m').slick('slickNext');
    });
    $('#arrow-prev-m').click(function() {
        $('#slider-m').slick('slickPrev');
    });

    $('#arrow-next-s').click(function() {
        $('#slider-s').slick('slickNext');
    });
    $('#arrow-prev-s').click(function() {
        $('#slider-s').slick('slickPrev');
    });

    $('#mobile-menu').click(function() {
        $('#menu').slideToggle(300, function(){
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });

    $('#slider-m').on('afterChange', function(event, slick, currentSlide){
        $("#number-slid-1").text(currentSlide + 1);
    });
    $('#slider-s').on('afterChange', function(event, slick, currentSlide){
        $("#number-slid-2").text(currentSlide + 1);
    });

    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 700);
        e.preventDefault();
    });

    $("#contact-form").submit(function () {
        var name = $('#form-name').val();
        var email = $('#form-email').val();
        var text = $('#form-text').val();

        if (name != '' || email != '' || text != ''){
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: "name="+ name +"&email="+ email +"&text="+ text,
                success: function(msg){
                    alert(msg);
                }
            });
        }
        return false;
    });

    var elements = document.querySelectorAll(".product-show");
    var elLength = elements.length;

    var imges = [
        ["MULTILIFTS/WITHOUT_RIBS/18,4/1.jpg", "MULTILIFTS/WITHOUT_RIBS/18,4/2.jpg", "MULTILIFTS/WITHOUT_RIBS/18,4/3.jpg", "MULTILIFTS/WITHOUT_RIBS/18,4/4.jpg"],
        ["MULTILIFTS/WITHOUT_RIBS/13,8/1.jpg", "MULTILIFTS/WITHOUT_RIBS/13,8/2.jpg", "MULTILIFTS/WITHOUT_RIBS/13,8/3.jpg", "MULTILIFTS/WITHOUT_RIBS/13,8/4.jpg"],
        ["MULTILIFTS/WITHOUT_RIBS/9,2/1.jpg", "MULTILIFTS/WITHOUT_RIBS/9,2/2.jpg", "MULTILIFTS/WITHOUT_RIBS/9,2/3.jpg", "MULTILIFTS/WITHOUT_RIBS/9,2/4.jpg", "MULTILIFTS/WITHOUT_RIBS/9,2/5.jpg"],
        ["MULTILIFTS/WITHOUT_RIBS/4,6/1.jpg", "MULTILIFTS/WITHOUT_RIBS/4,6/2.jpg", "MULTILIFTS/WITHOUT_RIBS/4,6/3.jpg"],
        ["MULTILIFTS/WITH_RIBS/18,4/1.jpg", "MULTILIFTS/WITH_RIBS/18,4/2.jpg", "MULTILIFTS/WITH_RIBS/18,4/3.jpg", "MULTILIFTS/WITH_RIBS/18,4/4.jpg"],
        ["MULTILIFTS/WITH_RIBS/13,8/1.jpg", "MULTILIFTS/WITH_RIBS/13,8/2.jpg", "MULTILIFTS/WITH_RIBS/13,8/3.jpg", "MULTILIFTS/WITH_RIBS/13,8/4.jpg"],
        ["MULTILIFTS/WITH_RIBS/9,2/1.jpg", "MULTILIFTS/WITH_RIBS/9,2/2.jpg", "MULTILIFTS/WITH_RIBS/9,2/3.jpg", "MULTILIFTS/WITH_RIBS/9,2/4.jpg", "MULTILIFTS/WITH_RIBS/9,2/5.jpg"],
        ["MULTILIFTS/WITH_RIBS/4,6/1.jpg", "MULTILIFTS/WITH_RIBS/4,6/2.jpg", "MULTILIFTS/WITH_RIBS/4,6/3.jpg", "MULTILIFTS/WITH_RIBS/4,6/4.jpg"],
        ["MULTILIFTS/SPECIAL/1.jpg", "MULTILIFTS/SPECIAL/2.jpg", "MULTILIFTS/SPECIAL/3.jpg", "MULTILIFTS/SPECIAL/4.jpg"],
        ["SKIPS/ASYMMETRIC/1.jpg", "SKIPS/ASYMMETRIC/2.jpg", "SKIPS/ASYMMETRIC/3.jpg", "SKIPS/ASYMMETRIC/4.jpg"],
        ["SKIPS/SYMMETRIC/1.jpg", "SKIPS/SYMMETRIC/2.jpg", "SKIPS/SYMMETRIC/3.jpg", "SKIPS/SYMMETRIC/4.jpg"],
        ["SKIPS/SPECIAL/1.jpg", "SKIPS/SPECIAL/2.jpg", "SKIPS/SPECIAL/3.jpg"],
    ];
    var list = "";
    var product = '';
    var body = $('body');

    for (var i = 0; i < elLength; i++) {
        elements[i].onclick = function(event){
            event.preventDefault();
            product = $(this).attr('data-product');
            var max = imges[product].length;
            for (var j = 0; j < max; j++){
                list += '<div class="slide-product__item"><figure><img src="img/'+ imges[product][j] +'" alt="Product Kraftler"></figure></div>';
            }

            body.append('<section class="show-product" id="show-product">\n' +
                '\t\t\t<div class="ctn-slide-product">\n' +
                '\t\t\t\t<div class="slide-product">\n' + list +
                '\t\t\t\t</div>\n' +
                '\t\t\t\t<button id="btn-show-product">Close</button>\n' +
                '\t\t\t</div>\n' +
                '\t\t</section>');

            $('.slide-product').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                lazyLoad: 'progressive'
            });

            $('#show-product').addClass("open");

            body.css("overflow-y", "hidden");

            $('#btn-show-product').on( "click", function() {
                list = '';
                body.css("overflow-y", "visible");
                $('#show-product').detach();
            });
        };
    };

});
