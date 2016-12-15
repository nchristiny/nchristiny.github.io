/**
* Open external links in new tabs automatically
*/

var links = document.links;

for (var i = 0; i < links.length; i++) {
  if (links[i].hostname != window.location.hostname) {
    links[i].target = '_blank';
  }
}
