/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {


const tweet = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}
function calcTime(inputTime) {
  let datenow = Date.now() - inputTime;
  let dayDiff = parseInt(datenow/1000/60/60/24);
  return dayDiff
}

function createTweetElement(tweetData) {
  // calcTime(tweetData.created_at)
  // $("section.all-tweets").append("<article></article");
  let $tweetHTML = $("<article></article")
  let $header = $("<header></header>")
  let $tweetText = $("<p class ='tweet-text'>" + tweetData.content.text + "</p>")
  const icons = "<i class='fas fa-flag'></i><i class='fas fa-retweet'></i><i class='fas fa-heart'></i>"
  let tweetTime = calcTime(tweetData.created_at)
  let $footer = $("<footer><span class ='time'>" + tweetTime + " day(s) ago" + "</span><span class = 'tweeter-icons'>"+ icons +"</span> </footer>")
  $($header).append("<h3 class = 'full-name'>" + tweetData.user.name + "</h3> <span class = 'handle'>" + tweetData.user.handle + "</span>")
  $($header).append("<img src =" + tweetData.user.avatars.regular + ">")
  $($tweetHTML).append($header)
  $($tweetHTML).append($tweetText)
  $($tweetHTML).append($footer)
  return $tweetHTML
};

var $tweet = createTweetElement(tweet);

$("section.all-tweets").append($tweet);
  console.log(Date.now())

})