<h1>Project Intro</h1>
This project is developed as a part of BUET CSE Fest Hackathon 2022 (API and Cloud Services Category).<br>
The problem statement for this competiton is given in this link : <br>
https://docs.google.com/document/d/e/2PACX-1vQ5IXrU0T6bpXo4rvcaAwDosNeNiZAY5HQWPKEVhl_fi4SpNZFGqbr3eCGPCqscnd4_ojGmZOgxMYCI/pub
<br>
<br>
Visit the project at: https://mighty-cliffs-92435.herokuapp.com/
<br>
<h1>Project Details</h1>
This project is built using Nodejs and numerous APIs and cloud services. We have build a smart Home Assistant Software which can communicate with the user and execute tasks accordingly.
<h3> 1. Speech-to-Text Recognition </h3>
We have used Microsoft Azure's <a href="https://www.npmjs.com/package/microsoft-cognitiveservices-speech-sdk">https://www.npmjs.com/package/microsoft-cognitiveservices-speech-sdk</a> API to implement this feature.
<h3> 2. Music Recommendation </h3>
Using Spotify's <a href="https://api.spotify.com/v1/search">https://api.spotify.com/v1/search</a> API, user can search various music by genre, artist and track name. To use this feature, first the user has to say the keyword, `Play` and then any genre/artist/track he wishes to search for.
<h3> 3. Parsing Top News in the Area </h3>
To implement this feature, we have used <a href="https://google-news.p.rapidapi.com/v1/geo_headlines">https://google-news.p.rapidapi.com/v1/geo_headlines</a> API which shows news of the user's city and country. The user can provide his language preference as well. To pinpoint user's location, a javascript call to geoPlugin is made. User has to speak the keyword `Show news` to use this feature. 
<h3> 4. Search </h3>
This feature lets the user search anything using voice input with the keyword `Search`. The API used here is: <a href="https://serpapi.com/searches/87fa874d05a7fcc5/6165916694c6c7025deef5ab.json">https://serpapi.com/searches/87fa874d05a7fcc5/6165916694c6c7025deef5ab.json</a> and also a node module google-search-results-nodejs
<h3> 5. Route Planning </h3>
Given source and destination by voice command, this feature is implemented with the help of <a href="https://www.mapquestapi.com/directions/v2/route">https://www.mapquestapi.com/directions/v2/route</a> API
<h3> 6. Note Taking </h3>
After taking voice input: `Take Note` from the user, list of note items are being saved to our mySQL database. Afterwards, we have implented a Note Fetching API with voice command `Fetch ALl Notes` to let any user retrieve all notes. The user can fetch any particular note from any date specified using voice command `Fetch Note Dated ___`. 
<h3> 7. Additional Features </h3>
- We have integrated TV show recommendations using <a href="https://api.tvmaze.com/search/shows">https://api.tvmaze.com/search/shows</a> API. The user can use voice command `Find` to get information of any TV Show or Actors.
- The user can also see the current weather using <a href="http://api.weatherstack.com/current">http://api.weatherstack.com/current</a> API.
<br>
<h1> The Team </h1>
Team Name : Team BUET_Bleh <br>
Team Members : <br>
- Iftekhar E Mahbub Zeeon ;  Student ID : 1805038 <br>
- Fabiha Tasneem ;  Student ID : 1805072 <br>
- Maneesha Rani Saha ;  Student ID : 1805076 <br>
<br>
