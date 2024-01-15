// header.js
document.addEventListener("DOMContentLoaded", function () {
    const headerPlaceholder = document.getElementById("header-placeholder");
    const headerRequest = new XMLHttpRequest();
    headerRequest.open("GET", "/includes/header.html", true);
    headerRequest.onload = function () {
      if (headerRequest.status >= 200 && headerRequest.status < 400) {
        headerPlaceholder.innerHTML = headerRequest.responseText;
  
        // toggler code here
        const toggler = document.querySelector("#toggler");
        const navLink = document.querySelector(".nav-link"); 
  
        // Toggle the 'show' class on the navigation
        toggler.addEventListener("click", () => {
          navLink.classList.toggle("show");
          // Add delay for each link
          const links = Array.from(navLink.children);
          links.forEach((link, index) => {
            if (window.innerWidth < 600) {
              link.style.transitionDelay = `${index * 0.2}s`;
            } else {
              link.style.transitionDelay = "0s"; 
            }
          });
          console.log("clicked");
        });
  
        // Select all navigation links
        const navLinks = document.querySelectorAll(".nav-link a");
  
        // Add active class to clicked link
        navLinks.forEach((link) => {
          link.addEventListener("click", function () {
            navLinks.forEach((lnk) => lnk.classList.remove("active"));
            this.classList.add("active");
          });
        });
      }
    };
    headerRequest.send();
  });