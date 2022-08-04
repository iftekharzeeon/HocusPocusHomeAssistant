const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("7119b30e35ddf907c8fba6ad9ccff16a282499c2cfcb71abb0e90e7395c4f339");


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

    const callback = function(data) {
        console.log(data["organic_results"]);
        res.send(data["organic_results"]);
    };

    search.json(params, callback);
};


const newsSearch = async (req, res) => {

    responses = {};

    const params = {
        engine: "google",
        q: "*",
        location: "Dhaka",
        gl: "bd",
        google_domain: "google.com",
        num: "10"
    };

    const callback = function(data) {
        console.log(data["organic_results"]);
        res.send(data["organic_results"]);
    };

    search.json(params, callback);
};

module.exports = {
    searchEngine,
    newsSearch
}