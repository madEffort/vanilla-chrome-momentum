const images = [
  "0.jpeg", "1.jpeg", "2.jpeg",
];

const selectedImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${selectedImage}`;
bgImage.classList.add("background-image");

document.body.appendChild(bgImage);