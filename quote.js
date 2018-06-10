var url =
    "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en";

$(document).ready(function() {
  getQuote();
});

function getQuote() {
  $.getJSON(url, function(data) {
    $(".quote").html(data.quoteText);
    $(".author").html(data.quoteAuthor);
var num = "#" +Math.random().toString(16).slice(2,8);
    $("body").css("background-color", num);
    $(".quote-text").css("color",num);
    $(".button").css("background-color",num);
  });
$("#new-quote").on("click", function() {
  getQuote();
});
$("#tweet-quote").on("click", function(){
                  window.open("https://twitter.com/intent/tweet?hashtags=&text=" + data.quoteText + ' -' + data.quoteAuthor);
});
     $("#tweet-quote").off("click");
}
