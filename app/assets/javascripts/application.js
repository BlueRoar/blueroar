//= require jquery
//= require jquery_ujs
//= requre foundation
//= require turbolinks
//= require_tree .

$(document).on('ready', function() {

});


$(document).on('page:change', 
   function(evt) {
init();
}
);

console.log('initializing soundcloud');
SC.initialize({
  client_id: "dcea58e27b70cc370a24c352ecb93c24"
});

// Load the ToneDen JavaScripts (https://github.com/ToneDen/toneden-sdk)
(function() {
  var script = document.createElement("script");

  script.type = "text/javascript";
  script.async = true;
  script.src = "//sd.toneden.io/production/toneden.loader.js"

  var entry = document.getElementsByTagName("script")[0];
  entry.parentNode.insertBefore(script, entry);
}());

function init(){
console.log('ready');
}
