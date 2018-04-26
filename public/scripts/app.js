/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  let $submission = $('#tweet-submit')
    .on('submit', function(event) {
    event.preventDefault()
    if ($submission.serialize().length < 6) {
      alert("No input message!");
      return;
    } else if ($submission.serialize().length > 145) {
      alert("Message length exceeded 140 characters!");
      return;
    }
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $submission.serialize(),
      success: function() {
        loadTweets()
        $submission[0].reset()
      }
    });
  });

  function loadTweets () {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function(data) {
        renderTweets(data.reverse());
      }
    });
  }

  function calcTime(inputTime) {
    let datenow = Date.now() - inputTime;
    let dayDiff = parseInt(datenow/1000/60/60/24);
    if (dayDiff > 1) {
      return dayDiff + " days ago";
    }
    else {
      return dayDiff + " day ago";
    }
  };

  function createTweetElement(tweetData) {
    const $tweetHTML = $("<article></article");
    const $header = $("<header></header>");
    const $tweetText = $("<p>").text(tweetData.content.text).addClass("tweet-text");
    const icons = "<i class='fas fa-flag'></i><i class='fas fa-retweet'></i><i class='fas fa-heart'></i>";
    const tweetTime = calcTime(tweetData.created_at);
    const $footer = $("<footer><span class ='time'>" + tweetTime + "</span><span class = 'tweeter-icons'>"+ icons +"</span> </footer>");
    $($header).append("<h3 class = 'full-name'>" + tweetData.user.name + "</h3> <span class = 'handle'>" + tweetData.user.handle + "</span>")
    $($header).append("<img src =" + tweetData.user.avatars.regular + ">")
    $($tweetHTML).append($header, $tweetText, $footer)
    return $tweetHTML
  };

  function renderTweets(tweets) {
    $("section.all-tweets").empty();
    tweets.forEach(function(eachTweet) {
      var $tweet = createTweetElement(eachTweet);
      $("section.all-tweets").append($tweet);
    });
  };

  loadTweets();
});