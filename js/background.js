const images = [
     "0.jpg",  "1.jpg",  "2.jpg,",  "3.jpg",  "4.jpg",  "5.jpg",  "6.jpg",  "7.jpg",  "8.jpg",  "9.jpg",
    "10.jpg", "11.jpg", "12.jpg,", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg",
    "20.jpg", "21.jpg", "22.jpg,", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg",
    "30.jpg", "31.jpg", "32.jpg,", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg",
    "40.jpg", "41.jpg", "42.jpg,", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);