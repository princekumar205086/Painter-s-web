let paintings = [
  {
    id: 1,
    src: "/assets/image/img1.jpg",
    alt: "Painting 1",
    type: "Oil on canvas",
    price: "$500",
    artist: "Artist 1",
    description: "This is a beautiful oil painting.",
    timestamp: "2022-01-01",
  },
  {
    id: 2,
    src: "/assets/image/img2.jpg",
    alt: "Painting 2",
    type: "Watercolor",
    price: "$300",
    artist: "Artist 2",
    description: "This is a vibrant watercolor painting.",
    timestamp: "2022-01-02",
  },
  {
    id: 3,
    src: "/assets/image/img3.jpg",
    alt: "Painting 2",
    type: "Watercolor",
    price: "$300",
    artist: "Artist 2",
    description: "This is a vibrant watercolor painting.",
    timestamp: "2022-01-02",
  },
  {
    id: 4,
    src: "/assets/image/img4.jpg",
    alt: "Painting 2",
    type: "Watercolor",
    price: "$300",
    artist: "Artist 2",
    description: "This is a vibrant watercolor painting.",
    timestamp: "2022-01-02",
  },
];

let gallery = document.getElementById('gallery');

paintings.forEach(painting => {
  let galleryCard = document.createElement('div');
  galleryCard.className = 'gallery-card';

  let img = document.createElement('img');
  img.src = painting.src;
  img.alt = painting.alt;

  let overlay = document.createElement('div');
  overlay.className = 'overlay';

  let detailsBtn = document.createElement('a');
  detailsBtn.className = 'details-btn';
  detailsBtn.href = `/pages/works-item.html?painting=${painting.id}&type=${painting.type}&price=${painting.price}&artist=${painting.artist}&description=${painting.description}&timestamp=${painting.timestamp}&src=${painting.src}`;
  detailsBtn.target = '_self';
  detailsBtn.textContent = 'More Details';

  overlay.appendChild(detailsBtn);
  galleryCard.appendChild(img);
  galleryCard.appendChild(overlay);
  gallery.appendChild(galleryCard);
});