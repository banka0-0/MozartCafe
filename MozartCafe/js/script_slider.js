/* slider */
//setTimeout(function(){ alert("Imediat incepe..."); }, 5000);
var slideIndex = 0; //initializez variabila responsabila de indexarea slide-urilor
showSlides();       //apelez funcția ce animeaza sliderul

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");  //in .html sunt 4 elemente cu clasa ”slide”
    for (i = 0; i < slides.length; i++) {                   //returnandu-se o colectie de 4 elemente
        slides[i].style.display = "none";                   //se vor parcurge elementele si nu vor fi prezentate
    }
    slideIndex++;                       //incrementez variabila responsabila de indexare
    if (slideIndex > slides.length) {
      slideIndex = 1;
    } 
    slides[slideIndex-1].style.display = "block";   // succesiv prezint slide-urile
    setTimeout(showSlides, 3000);   //functia va fi apelata peste 3 secunde, 3000milisecunde=3secunde
}
/*year*/
function getYear() {
  var d = new Date();
  var yr=d.getFullYear();
  document.getElementById("year").innerHTML = yr;
}