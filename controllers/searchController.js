const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("7119b30e35ddf907c8fba6ad9ccff16a282499c2cfcb71abb0e90e7395c4f339");
const axios = require("axios");


const searchEngine = async (req, res) => {

    responses = {};

    const params = {
        engine: "google",
        q: req.body.q,
        location: "Bangladesh",
        hl: "en",
        gl: "bd",
        google_domain: "google.com",
        num: "10",
        safe: "active"
    };

    const callback = function (data) {
        console.log(data["organic_results"]);
        res.send(data["organic_results"]);
    };

    search.json(params, callback);
};


const newsSearch = async (req, res) => {

    console.log(req);

    let countryCode = req.body.country;
    let geoName = req.body.geo;
    let lang = req.body.lang;

    console.log(countryCode, ' ', geoName, ' ', lang);

    const options = {
        method: 'GET',
        url: 'https://google-news.p.rapidapi.com/v1/geo_headlines',
        params: { lang: lang, country: countryCode, geo: geoName },
        headers: {
            'X-RapidAPI-Key': '53c5454950msh6e332e78168fc75p153f4ejsna6e77ea341e8',
            'X-RapidAPI-Host': 'google-news.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    });
};

module.exports = {
    searchEngine,
    newsSearch
}