const features = [
    {
      title: "Custom Portraits",
      description: "Get a custom portrait of yourself or your loved ones. Perfect for special occasions or to decorate your home.",
      image: "/assets/features/custom.jpg",
    },
    {
      title: "Art Classes",
      description: "Learn to paint with our expert-led art classes. Suitable for all ages and skill levels.",
      image: "/assets/features/custom art.jpg",
    },
    {
      title: "Gallery Exhibitions",
      description: "Visit our gallery to view our latest exhibitions. New pieces added regularly.",
      image: "/assets/features/exhi art.avif",
    },
    {
      title: "Art Supplies",
      description: "We offer a range of high-quality art supplies for your painting needs.",
      image: "/assets/features/modern.jpg",
    },
];
  
  const featuresElement = document.getElementById("features");
  
  features.forEach((feature) => {
    const card = document.createElement("div");
    card.className = "card";
  
    const image = document.createElement("img");
    image.src = feature.image;
    image.alt = feature.title;
    card.appendChild(image);
  
    const title = document.createElement("h2");
    title.textContent = feature.title;
    card.appendChild(title);
  
    const description = document.createElement("p");
    description.textContent = feature.description;
    card.appendChild(description);
  
    featuresElement.appendChild(card);
  });
  
  function adjustCardWidth() {
    const cards = document.querySelectorAll('.card');
    const width = window.innerWidth;
  
    if (width <= 600) {
      cards.forEach(card => card.style.width = '100%');
    } else if (width <= 1200) {
      cards.forEach(card => card.style.width = '48%');
    } else {
      cards.forEach(card => card.style.width = '24%');
    }
  }
  
  window.addEventListener('resize', adjustCardWidth);
  window.addEventListener('DOMContentLoaded', adjustCardWidth);