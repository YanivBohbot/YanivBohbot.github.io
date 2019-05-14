$(document).ready(function() {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 );
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 20;

            if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contact-form').serialize();

        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {

                if(json.isSuccess)
                {
                    $('#contact-form').append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                    $('#contact-form')[0].reset();
                }
                else
                {
                    $('#firstname + .comments').html(json.firstnameError);
                    $('#name + .comments').html(json.nameError);
                    $('#email + .comments').html(json.emailError);
                    $('#phone + .comments').html(json.phoneError);
                    $('#message + .comments').html(json.messageError);
                }
            }
        });

})

//
// // Add scrollspy to <body>
// $('body').scrollspy({target: ".navbar", offset: 50});
//
// // Add smooth scrolling on all links inside the navbar
// $("#navbar a,footer a").on('click', function(event) {
//
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//
//         // Prevent default anchor click behavior
//         event.preventDefault();
//
//         // Store hash
//         var hash = this.hash;
//
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800, function(){
//
//             // Add hash (#) to URL when done scrolling (default click behavior)
//             window.location.hash = hash;
//         });
//
//     } // End if
//
// });



// $(function() {
//     /**
//      * Smooth scrolling to the top of page
//      **/
//     // $("html, body").animate({scrollTop : 0}, 1500);
//
//     $(".navbar a,footer a").on("click",function(event){
//             event.preventDefault();
//             var hash = this.hash;
//
//             $('body').animate({scrollTop: $(hash).offset().top} , 900 ,function(){window.location.hash = hash;} )
//         });
//
// });

$(function() {

    var progressed = 0;

    var interval = setInterval(function() {

        progressed += 1;

        $("#dynamic_1")

            .css("width", progressed + "%")

            .attr("aria-valuenow", progressed)

            .text("HTML  "+ "  " + progressed + "% ");

        if (progressed >= 85)

            clearInterval(interval);

    }, 200);

});


$(function() {

    var progressed = 0;

    var interval = setInterval(function() {

        progressed += 1;

        $("#dynamic_2")

            .css("width", progressed + "%")

            .attr("aria-valuenow", progressed)

            .text("CSS  "+ "  " + progressed + "% ");

        if (progressed >= 85)

            clearInterval(interval);

    }, 200);


});
});









