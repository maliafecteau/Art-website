var currentUrl = window.location.pathname;

function Randomise() {
	var images = new Array ();
		images[0] = "images/angle.jpg";
		images[1] = "images/vanity.jpg";
		images[2] = "images/bath.jpeg";
		images[3] = "images/little girl.jpeg";
		images[4] = "images/night.jpg";
		images[5] = "images/landscape.jpg";

	var size = images.length
	var x = Math.floor(size*Math.random())
	
	console.log(currentUrl);
	currentUrl = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
	console.log(currentUrl);

	if (currentUrl == "Homepage.html") {
		var jsContainer = document.getElementById("js-container");
		if (jsContainer) {
			jsContainer.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('" + images[x] + "')";
		} 
	} else if (currentUrl == "Contact.html") {
		var jsContactImage = document.getElementById("js-contact-image");
		if (jsContactImage) {
			jsContactImage.src = images[x];
		}
	}
}

window.onload = Randomise;





/*toggle between adding and removing the "responsive" class to nav when user clicks the icon, and also change the hamburger icon to an "x"*/
function toggleMobileNav(x) {
	x.classList.toggle("change");
	var navs = document.querySelectorAll(".nav-links-container");
	navs.forEach(nav => nav.classList.toggle('ToggleShow'));
}



   
   
function openModal() { /*open the lightbox*/
 document.getElementById("js-lightbox").style.display = "block";
}

function closeModal() { /*close the lightbox*/
  document.getElementById("js-lightbox").style.display = "none";
}


var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
console.log(n);
  showSlides(slideIndex = n);
}



 function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides);

  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
   slides[slideIndex-1].style.display = "block";
 }