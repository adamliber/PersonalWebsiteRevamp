/* esversion: 6 */

var $root = $('html, body');

$('a').click(function(){
			$('html, body').animate({

				scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
				
			}, 1000);
			return false;
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip();
	wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: false, // default
    live: true // default
});
wow.init();
});


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


window.onscroll = function() {
  scrolldown();
};




var navbar = document.querySelector(".navbar");
var dropdown = document.querySelector(".dropdown-menu");
var headshot = document.querySelector(".navbar-brand img");
var container = document.querySelector(".container");
var navOffSet = navbar.offsetTop;

function scrolldown() {

  if (window.pageYOffset >= navOffSet) {


		dropdown.classList.add("bg-secondary");


    container.classList.add("stickyNavOffset");


		navbar.classList.add("fixed-top");

    navbar.style.backgroundColor = "#21252B";





    if(window.pageYOffset > navOffSet+40){
      headshot.style.height = "50px";
    }else{
       headshot.style.height = "80px";
    }
    document.querySelector("#backToTop").style.display = "block";

  } else {

		dropdown.classList.remove("bg-secondary");


    navbar.classList.remove("fixed-top");
  	navbar.style.backgroundColor = "";

    container.classList.remove("stickyNavOffset");


    document.querySelector("#backToTop").style.display = "none";
  }

}


$('#modal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var projectName = button.data('project'); // Extract info from data-* attributes
	var projectInfo = $("#" + projectName);

  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
	modal.find('.modal-body').html(projectInfo.clone() );

});
$('#modal').on('hide.bs.modal', function (event) {

  var modal = $(this);
	modal.find('.modal-body').html('');


});
