console.log(document)
const container = document.querySelector('.content-container')
container.style.backgroundColor = 'red'
console.log(container);
const API_KEY = "4wptSTW6AdorGqf8xA0VVQG4fers8jR7";  

fetch(
  `http://dataservice.accuweather.com/data?key=${API_KEY}/locations/v1/adminareas/GH`
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));