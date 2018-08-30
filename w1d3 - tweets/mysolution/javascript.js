"use strict";
let tweets = [];
// let reciever = document.querySelector("[data-tweetreciever]"); //section der skal modtage elementer
let template = document.querySelector("[data-tweet-template]"); //mit template tag i HTML

document.addEventListener("DOMContentLoaded", getJson);

async function getJson() {
  let jsonData = await fetch(
    "https://kea-alt-del.dk/twitter/api/?hashtag=TheMeaningOfLifeIn4Words"
  );
  //vis objekt som Json
  tweets = await jsonData.json();
  tweets = tweets.statuses;
  console.log(tweets);
  showTweets();
}
function showTweets() {
  tweets.forEach(element => {
    let klon = template.cloneNode(true).content;
    console.log(klon);
    klon.querySelector("[data-tweet-title]").textContent = element.text;
    klon.querySelector("[data-tweet-text]").textContent = element.user.name;
    document.querySelector("[data-all-tweets]").appendChild(klon);
  });
}
