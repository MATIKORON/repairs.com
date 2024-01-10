// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
} 

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000); 
}

function plusSlides(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//  modal view profile
document.getElementById('viewProfile').addEventListener('click', function() {
  document.getElementById('workerProfileModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('workerProfileModal').style.display = 'none';
});

document.getElementById('bookBtn').addEventListener('click', function() {
  // Handle booking functionality here
  console.log('Booking action performed.');
});

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// JS for login page 
const loginBtn = document.getElementById('loginBtn1');
const overlay = document.getElementById('overlay');
const loginForm = document.getElementById('loginForm');
const closeBtn = document.getElementById('closeBtn1');
const formTitle = document.getElementById('formTitle');
const formContent = document.getElementById('formContent');
const toggleSignup = document.getElementById('toggleSignup');
const submitButton = document.getElementById('submitButton');

let isLogin = true; // To track which form is displayed

loginBtn.addEventListener('click', function() {
    overlay.style.display = 'flex';
    loginForm.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
    loginForm.style.display = 'none';
    // Reset to login form when closing
    isLogin = true;
    formTitle.innerText = 'Login';
    formContent.innerHTML = `
        <input type="text" placeholder="Username" required>
        <input type="password" placeholder="Password" required>
        <button type="submit" id="submitButton">Login</button>
    `;
});

toggleSignup.addEventListener('click', function() {
    if (isLogin) {
        formTitle.innerText = 'Sign Up';
        formContent.innerHTML = `
            <input type="text" placeholder="Username" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <button type="submit" id="submitButton">Sign Up</button>
        `;
        toggleSignup.innerText = 'Already have an account? Log In';
        isLogin = false;
    } else {
        formTitle.innerText = 'Login';
        formContent.innerHTML = `
            <input type="text" placeholder="Username" required>
            <input type="password" placeholder="Password" required>
            <button type="submit" id="submitButton">Login</button>
        `;
        toggleSignup.innerText = 'Don\'t have an account? Sign Up';
        isLogin = true;
    }
});


