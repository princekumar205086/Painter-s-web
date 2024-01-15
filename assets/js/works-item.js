// Getting the query parameters from the URL
let params = new URLSearchParams(window.location.search);

// Getting parameter
let paintingId = params.get('painting');
let type = params.get('type');
let src = params.get('src');
let price = params.get('price');
let artist = params.get('artist');
let description = params.get('description');
let timestamp = params.get('timestamp');

// defining the elements to display the data
let imageElement = document.getElementById('painting-image');
let typeElement = document.getElementById('type');
let priceElement = document.getElementById('price');
let artistElement = document.getElementById('artist');
let descriptionElement = document.getElementById('description');
let timestampElement = document.getElementById('timestamp');

// content of each element 
imageElement.src = src;
typeElement.textContent = `Type: ${type}`;
priceElement.textContent = `Price: ${price}`;
artistElement.textContent = `Artist: ${artist}`;
descriptionElement.textContent = `Description: ${description}`;
timestampElement.textContent = `Date: ${timestamp}`;