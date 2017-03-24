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


    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var img = document.getElementById("image1");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    img.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


});


