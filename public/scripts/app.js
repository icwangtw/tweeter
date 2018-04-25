/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const data = [
    {
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
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function calcTime(inputTime) {
    let datenow = Date.now() - inputTime;
    let dayDiff = parseInt(datenow/1000/60/60/24);
    return dayDiff;
  };

  function createTweetElement(tweetData) {
    const $tweetHTML = $("<article></article");
    const $header = $("<header></header>");
    const $tweetText = $("<p class ='tweet-text'>" + tweetData.content.text + "</p>");
    const icons = "<i class='fas fa-flag'></i><i class='fas fa-retweet'></i><i class='fas fa-heart'></i>";
    const tweetTime = calcTime(tweetData.created_at);
    const $footer = $("<footer><span class ='time'>" + tweetTime + " day(s) ago" + "</span><span class = 'tweeter-icons'>"+ icons +"</span> </footer>");
    $($header).append("<h3 class = 'full-name'>" + tweetData.user.name + "</h3> <span class = 'handle'>" + tweetData.user.handle + "</span>")
    $($header).append("<img src =" + tweetData.user.avatars.regular + ">")
    $($tweetHTML).append($header)
    $($tweetHTML).append($tweetText)
    $($tweetHTML).append($footer)
    return $tweetHTML
  };

  function renderTweets(tweets) {
    tweets.forEach(function(eachTweet) {
      var $tweet = createTweetElement(eachTweet);
      $("section.all-tweets").append($tweet);
    });
  };

renderTweets(data);

});