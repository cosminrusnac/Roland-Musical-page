// go to top function

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// testimonials Requests

Promise.all(['https://jsonplaceholder.typicode.com/comments/1', 
  'https://jsonplaceholder.typicode.com/comments/2',
  'https://jsonplaceholder.typicode.com/comments/3',
  'https://jsonplaceholder.typicode.com/comments/4',
]
  .map(url => fetch(url)))
  .then(resp => Promise.all(resp.map(e => e.json()) ))
  .then(result => {
    for (let i=0; i<3; i++) {
      document.getElementById(`testimonial${i}`).innerHTML = result[i].body.charAt(0).toUpperCase() + 
      result[i].body.slice(1) + '.';
    }
})
  .catch(error => {
    document.getElementById(`testimonial${i}`).innerHTML = `Error. Please try again. ${error}`;
  });

// testimonial carousel jQuery

$(function(){
  $("#testimonial-slider").owlCarousel({
    items: 2,
    itemsDesktop: [1000,1],
    itemsDesktopSmall: [979,1],
    itemsTablet: [768,1],
    pagination: false,
    navigation: true,
    navigationText: ["",""],
    autoPlay: true
  });
});     

//

for(let i=1; i<4; i++) {
  fetch(`https://fakestoreapi.com/products`)
  .then(res => res.json())
  .then(json => {
    document.getElementById(`featured${i}`).src = json[i].image;
    })
  .catch(error => {
    document.getElementById(`featured${i}`).src = `Error. Please try again. ${error}`;
  })
  }


