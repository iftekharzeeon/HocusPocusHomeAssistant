<h1>Project Intro</h1>
This project is developed as a part of BUET CSE Fest Hackathon 2022 (API and Cloud Services Category).<br>
The problem statement for this competiton is given in this link : <br>
https://docs.google.com/document/d/e/2PACX-1vQ5IXrU0T6bpXo4rvcaAwDosNeNiZAY5HQWPKEVhl_fi4SpNZFGqbr3eCGPCqscnd4_ojGmZOgxMYCI/pub?
<br>
<h1>Project Details</h1>
This project is done using Nodejs and numerous APIs and cloud services. We have build a smart Home Assistant Software which can communicate with the user and execute tasks accordingly.
<h3> 1. Speech-to-Text Recognition </h3>
We have used Microsoft Azure's <a href="https://www.npmjs.com/package/microsoft-cognitiveservices-speech-sdk">https://www.npmjs.com/package/microsoft-cognitiveservices-speech-sdk</a> API to implement this feature.
<h3> 2. Music Recommendation </h3>
Using Spotify's <a href="https://api.spotify.com/v1/search">https://api.spotify.com/v1/search</a> API, user can search various music by genre, artist and track name.
<h3> 3. Parsing Top News in the Area </h3>
To implement this feature, we have used <a href="https://google-news.p.rapidapi.com/v1/geo_headlines">https://google-news.p.rapidapi.com/v1/geo_headlines</a> API which shows news of the user's city and country. The user can provide his language preference as well. To pinpoint user's location, a javascript call to geoPlugin is made. 
<h3> 4. Search </h3>
This feature lets the user search anything using voice input. Two APIs have been used to implement this: <a href="https://serpapi.com/searches/87fa874d05a7fcc5/6165916694c6c7025deef5ab.json">https://serpapi.com/searches/87fa874d05a7fcc5/6165916694c6c7025deef5ab.json</a> and <a href="#">need to be included</a>
<h3> 5. Route Planning </h3>
Given source and destination, this feature is implemented with the help of <a href="https://www.mapquestapi.com/directions/v2/route">https://www.mapquestapi.com/directions/v2/route</a> API
<h3> 6. Note Taking </h3>
We have implented a Speech to Text Note Taking API and exposed user notes through an API so that anyone can use or extend our home assistant by simply making a request.
<h3> 7. Additional Features </h3>
TV show recommendations using <a href="https://api.tvmaze.com/search/shows">https://api.tvmaze.com/search/shows</a> API and Weather updates using<a href="http://api.weatherstack.com/current">http://api.weatherstack.com/current</a> API.
<br>
<br>
<h1> Interactions with the Home Assistant</h1>
The user must provide voice input to interact with our Home Assistant. Depending on some keywords spoken by the user, different features of the software can be accessed. For example.....
<br>
<br>
<h1> The Team </h1>
Team Name : Team BUET_Bleh <br>
Team Members : <br>
1. Iftekhar E Mahbub Zeeon ;  Student ID : 1805038 <br>
2. Fabiha Tasneem ;  Student ID : 1805072 <br>
3. Maneesha Rani Saha ;  Student ID : 1805076 <br>
<br>
