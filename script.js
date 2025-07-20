// Typing Effect for Roles
const roles = ["Textile Designer!", "Gold Medalist!", "Artist!"];
const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 60;
let nextRoleDelay = 1500;

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingDelay);
  } else {
    setTimeout(eraseRole, nextRoleDelay);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, erasingDelay);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (roles.length) setTimeout(typeRole, nextRoleDelay);
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".bar div");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetBar = entry.target;
        const width = targetBar.getAttribute("data-width");
        targetBar.style.width = width;
        targetBar.classList.add("animated");
      }
    });
  }, {
    threshold: 0.5
  });

  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.setAttribute("data-width", width); // store original width
    bar.style.width = "0"; // hide initially
    observer.observe(bar);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const skillFills = document.querySelectorAll(".bar-fill");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.style.getPropertyValue("width");
        fill.style.width = width;
        fill.classList.add("animated");
      }
    });
  }, { threshold: 0.5 });

  skillFills.forEach(fill => {
    const width = fill.style.width;
    fill.setAttribute("data-width", width);
    fill.style.width = "0"; // start hidden
    observer.observe(fill);
  });
});


  window.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          alert("Thanks! Your message has been sent.");
          form.reset();
        } else {
          alert("Oops! Something went wrong.");
        }
      };
      xhr.send(data);
    });
  });

  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }


