let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const imageSources = ['/Roland-Musical page/img/about-us.jpg', 
'/Roland-Musical page/img/about-us2.jpg', 
'/Roland-Musical page/img/about-us3.jpg',
'/Roland-Musical page/img/about-us4.jpg',
'/Roland-Musical page/img/about-us5.jpg'
];

let randomNumber = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
}

console.log(randomNumber(0, 4));

document.getElementById('aboutUs').src = imageSources[randomNumber(0,4)];

