window.onload = function() {
  var quotes = document.getElementsByClassName('quote');

  for (var i = 0; i < quotes.length; i++) {
    var quote = quotes[i];
    quote.onclick = function(ev) {
      alert('click');
    };
  }
};
