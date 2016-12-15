/**
* Open external links in new tabs automatically
*/

var domReady = function(callback) {
// Enable jQuery's $(document).ready() in Vanilla Js
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {

  var links = document.links;

  for (var i = 0; i < links.length; i++) {
    if (links[i].hostname != window.location.hostname) {
      links[i].target = '_blank';
    }
  }
});
