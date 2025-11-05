let slideIndex = 0;
let autoSlide;

function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
  resetAutoSlide();
}

function autoSlides() {
  slideIndex++;
  showSlides(slideIndex);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(autoSlides, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  autoSlide = setInterval(autoSlides, 5000);
});

function showDateTime() {
  const now = new Date();

  const options = {
    weekday: "short",       
    day: "2-digit",         
    month: "2-digit",       
    year: "2-digit",        
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,          
    timeZone: "Africa/Lusaka"
  };

  document.getElementById("dateTime").innerText = now.toLocaleString("en-GB", options).replace(',', ',');
}

window.onload = function() {
  showDateTime();
  setInterval(showDateTime, 1000);

}

function setGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greetingText;

    if (hour < 12) {
        greetingText = "Good morning, Dingaane!";
    } else if (hour < 18) {
        greetingText = "Good afternoon, Dingaane!";
    } else {
        greetingText = "Good evening, Dingaane!";
    }

    document.getElementById("greeting").textContent = greetingText;
}

setGreeting();
