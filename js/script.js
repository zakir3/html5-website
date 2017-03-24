$(function () {
    $("#language-toggle").click(function () {
        $(".text-on").switchClass("text-on", "text-off", 10);
        $(".text-off").switchClass("text-off", "text-on", 10);
    });
});



$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');
    }
    else {
        $('nav').removeClass('fixed-header');
    }
});


$(function () {
    $("#language-toggle").click(function () {
        $(".text-on").switchClass("text-on", "text-off", 10);
        $(".text-off").switchClass("text-off", "text-on", 10);
    });
});


$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');
    }
    else {
        $('nav').removeClass('fixed-header');
    }
});

$(function () {


    // Get the modal
    var modal1 = document.getElementById('myModal1');
    var modal2 = document.getElementById('myModal2');
    var modal3 = document.getElementById('myModal3');
    var modal4 = document.getElementById('myModal4');
    var modal5 = document.getElementById('myModal5');
    var modal6 = document.getElementById('myModal6');
    var modal7 = document.getElementById('myModal7');
    var modal8 = document.getElementById('myModal8');
    var modal9 = document.getElementById('myModal9');
    var modal10 = document.getElementById('myModal10');
    var modal11 = document.getElementById('myModal11');
    var modal12 = document.getElementById('myModal12');

    // Get the button that opens the modal
    var img1 = document.getElementById("image1");
    var img2 = document.getElementById("image2");
    var img3 = document.getElementById("image3");
    var img4 = document.getElementById("image4");
    var img5 = document.getElementById("image5");
    var img6 = document.getElementById("image6");
    var img7 = document.getElementById("image7");
    var img8 = document.getElementById("image8");
    var img9 = document.getElementById("image9");
    var img10 = document.getElementById("image10");
    var img11 = document.getElementById("image11");
    var img12 = document.getElementById("image12");


    // Get the <span> element that closes the modal
    var span1 = document.getElementsByClassName("close1")[0];
    var span2 = document.getElementsByClassName("close2")[0];
    var span3 = document.getElementsByClassName("close3")[0];
    var span4 = document.getElementsByClassName("close4")[0];
    var span5 = document.getElementsByClassName("close5")[0];
    var span6 = document.getElementsByClassName("close6")[0];
    var span7 = document.getElementsByClassName("close7")[0];
    var span8 = document.getElementsByClassName("close8")[0];
    var span9 = document.getElementsByClassName("close9")[0];
    var span10 = document.getElementsByClassName("close10")[0];
    var span11 = document.getElementsByClassName("close11")[0];
    var span12 = document.getElementsByClassName("close12")[0];

    // When the user clicks the button, open the modal
    img1.onclick = function () {
        modal1.style.display = "block";
    }
    img2.onclick = function () {
        modal2.style.display = "block";
    }
    img3.onclick = function () {
        modal3.style.display = "block";
    }
    img4.onclick = function () {
        modal4.style.display = "block";
    }
    img5.onclick = function () {
        modal5.style.display = "block";
    }
    img6.onclick = function () {
        modal6.style.display = "block";
    }
    img7.onclick = function () {
        modal7.style.display = "block";
    }
    img8.onclick = function () {
        modal8.style.display = "block";
    }
    img9.onclick = function () {
        modal9.style.display = "block";
    }
    img10.onclick = function () {
        modal10.style.display = "block";
    }
    img11.onclick = function () {
        modal11.style.display = "block";
    }
    img12.onclick = function () {
        modal12.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span1.onclick = function () {
        modal1.style.display = "none";
    }

    span2.onclick = function () {
        modal2.style.display = "none";
    }

    span3.onclick = function () {
        modal3.style.display = "none";
    }

    span4.onclick = function () {
        modal4.style.display = "none";
    }
    span5.onclick = function () {
        modal5.style.display = "none";
    }

    span6.onclick = function () {
        modal6.style.display = "none";
    }
    span7.onclick = function () {
        modal7.style.display = "none";
    }

    span8.onclick = function () {
        modal8.style.display = "none";
    }
    span9.onclick = function () {
        modal9.style.display = "none";
    }

    span10.onclick = function () {
        modal10.style.display = "none";
    }
    span11.onclick = function () {
        modal11.style.display = "none";
    }

    span12.onclick = function () {
        modal12.style.display = "none";
    }




    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 ||
            event.target == modal5 || event.target == modal6 || event.target == modal7 || event.target == modal8 ||
            event.target == modal9 || event.target == modal10 || event.target == modal11 || event.target == modal12) {
            modal1.style.display = "none";
            modal2.style.display = "none";
            modal3.style.display = "none";
            modal4.style.display = "none";
            modal5.style.display = "none";
            modal6.style.display = "none";
            modal7.style.display = "none";
            modal8.style.display = "none";
            modal9.style.display = "none";
            modal10.style.display = "none";
            modal11.style.display = "none";
            modal12.style.display = "none";
        }
    }


});




// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//Accordion

$(function () {

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px ";
        }
    }
}});

//Arabic to English Buttons


$(function () {

$('.btn-english').click(function () {
    $('.arabic').hide();
    $('.english').show();


});
$('.btn-arabic').click(function () {
    $('.english').hide();
    $('.arabic').show();
});

});