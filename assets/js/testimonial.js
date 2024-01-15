var testimonials = [
    {
      quote: "This painter's work is truly inspiring. I've purchased several pieces for my home and I couldn't be happier.",
      name: "John Doe",
      image: "/assets/users/user1.jpg"
    },
    {
      quote: "I love this artist's work! Each piece is unique and adds a touch of beauty to any room.",
      name: "Jane Smith",
      image: "/assets/users/user2.jpg"
    },
    {
      quote: "The colors and textures in these paintings are just amazing. I'm so glad I discovered this artist.",
      name: "Bob Johnson",
      image: "/assets/users/user3.jpg"
    },
    {
      quote: "I've been following this artist's work for years. Each new piece is a delight.",
      name: "Alice Williams",
      image: "/assets/users/user4.jpg"
    },
    {
      quote: "These paintings have transformed my living space. I can't recommend this artist enough.",
      name: "Charlie Brown",
      image: "/assets/users/user5.jpg"
    },
    {
      quote: "I'm always excited to see what this artist will do next. Their work is consistently excellent.",
      name: "Emily Davis",
      image: "/assets/users/user6.jpg"
    },
    {
      quote: "I've bought several paintings and each one is a masterpiece. I'm a big fan of this artist.",
      name: "David Miller",
      image: "/assets/users/user7.jpg"
    },
    {
      quote: "The attention to detail in these paintings is incredible. I'm always discovering something new.",
      name: "Sophia Martin",
      image: "/assets/users/user8.jpg"
    },
    {
      quote: "I love the use of color in these paintings. They really brighten up my home.",
      name: "Michael Thompson",
      image: "/assets/users/user9.jpg"
    },
    {
      quote: "These paintings are a great investment. They've added so much value to my art collection.",
      name: "Olivia Garcia",
      image: "/assets/users/user10.jpg"
    }
  ];

var testimonialSlider = document.querySelector('.testimonial-slider');
var currentTestimonialIndex = 0;
var intervalId;
  
  function displayTestimonial(index) {
    testimonialSlider.innerHTML = ''; 
  
    var testimonial = testimonials[index];
    var testimonialDiv = document.createElement('div');
    testimonialDiv.className = 'testimonial';
  
    var img = document.createElement('img');
    img.src = testimonial.image;
    img.alt = testimonial.name;
    testimonialDiv.appendChild(img);
  
    var p = document.createElement('p');
    p.textContent = '"' + testimonial.quote + '"';
    testimonialDiv.appendChild(p);
  
    var h4 = document.createElement('h4');
    h4.textContent = '- ' + testimonial.name;
    testimonialDiv.appendChild(h4);
  
    testimonialSlider.appendChild(testimonialDiv);
  }
  
  //  first testimonial
  displayTestimonial(currentTestimonialIndex);
  
  // Change the testimonial 
function startAutoplay() {
    intervalId = setInterval(function() {
      currentTestimonialIndex++;
      if (currentTestimonialIndex === testimonials.length) {
        currentTestimonialIndex = 0; // Loop back to the first testimonial
      }
      displayTestimonial(currentTestimonialIndex);
    }, 1000);
  }
  
  startAutoplay();
  
  // Pause the autoplay on hover
  testimonialSlider.addEventListener('mouseover', function() {
    clearInterval(intervalId);
  });
  
  // Resume the autoplay when the mouse leaves
  testimonialSlider.addEventListener('mouseout', function() {
    startAutoplay();
  });