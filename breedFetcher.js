const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      callback(`Breed Not Found`, null)
    } else {
      callback(error, data[0]['description']);
    }
  });
};

module.exports = { fetchBreedDescription };