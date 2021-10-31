const images = ["0.jpg", "1.jpg", "2.jpg"];

const imageLen = images.length;
const chosenImage = images[Math.floor(Math.random() * imageLen)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add('background');

document.body.appendChild(bgImage);