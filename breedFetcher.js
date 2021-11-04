const request = require('request');

let breed = process.argv.slice(2);

const breedFetch = function(breeds) {
request(`https://api.thecatapi.com/v1/breeds/search/?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log('error', error);
      process.exit();
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log('Breed Not Found');
    } else {
      console.log(data[0]['description']);
    }
  });
};

breedFetch(breed);