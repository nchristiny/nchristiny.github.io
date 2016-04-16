jQuery(function ($) {
  //Change target attribute of external links
  var domain_root = document.location.protocol + '//' + document.location.host;
  var all_links = $('a').each(function (index, element) {
    if (element.href.substr(0, domain_root.length) !== domain_root) {
      element.target = '_blank';
    }
  });
});
