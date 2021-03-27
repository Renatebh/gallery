//bildegalleri

var image = document.getElementById("image");
var description = document.getElementById("description");
var next = document.getElementById("nextBtn");
var back = document.getElementById("backBtn");
var currentImage = 0;

//Array
var images = [
  {
    link: "image/IMG_1141.JPG",
    text: "Prekestolen 2020"
  },
  {
    link: "image/IMG_1148.JPG",
    text: "Galdhøpiggen 2018"
  },
  {
    link: "image/IMG_1165.JPG",
    text: "Romsdalseggen 2019"
  },
  {
    link: "image/IMG_1169.JPG",
    text: "Stetinden 2020"
  },
  {
    link: "image/IMG_6366.JPG",
    text: "Innerdalstårnet 2019"
  }
];


// Next button
next.addEventListener("click", function(){
  currentImage = currentImage + 1;
  if(currentImage === images.length){
    currentImage = 0;
  }
  image.src = images[currentImage].link;
  description.textContent = images[currentImage].text;
});

//Back button
back.addEventListener("click", function(){
currentImage = currentImage - 1;
if(currentImage === -1){
  currentImage = images.length -1;
}
image.src = images[currentImage].link;
description.textContent = images[currentImage].text;
});
