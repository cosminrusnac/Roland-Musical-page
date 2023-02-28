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

// testimonials Request

Promise.all(['https://jsonplaceholder.typicode.com/comments/1', 
  'https://jsonplaceholder.typicode.com/comments/2',
  'https://jsonplaceholder.typicode.com/comments/3',
  'https://jsonplaceholder.typicode.com/comments/4',
]
  .map(url => fetch(url)))
  .then(resp => Promise.all(resp.map(e => e.json()) ))
  .then(result => {
    console.log(result);
    document.getElementById('testimonial0').innerHTML = result[0].body.charAt(0).toUpperCase() + result[0].body.slice(1) + '.';
    document.getElementById('testimonial1').innerHTML = result[1].body.charAt(0).toUpperCase() + result[1].body.slice(1) + '.';
    document.getElementById('testimonial2').innerHTML = result[2].body.charAt(0).toUpperCase() + result[2].body.slice(1) + '.';
    document.getElementById('testimonial3').innerHTML = result[3].body.charAt(0).toUpperCase() + result[3].body.slice(1) + '.';
})
  .catch(error => console.log(error))















// testimonial carousel jQuery

$(function(){
        $("#testimonial-slider").owlCarousel({
            items:2,
            itemsDesktop:[1000,1],
            itemsDesktopSmall:[979,1],
            itemsTablet:[768,1],
            pagination:false,
            navigation:true,
            navigationText:["",""],
            autoPlay:true
        });
    });     
