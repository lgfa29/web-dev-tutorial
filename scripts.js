$(document).ready(function() {
  $('#load-quotes').click(loadQuotes);
});

function loadQuotes() {
  var url = 'https://luizaoqui.cloudant.com/quotes/_all_docs?include_docs=true';

  $.getJSON(url, function(data) {
    $('.quote').remove();

    data.rows.forEach(function(quote) {
      var quoteElement = $('<p></p>').html(quote.doc.text).addClass('quote');
      var authorElement = $('<span></span>').html(quote.doc.author);

      quoteElement.append(authorElement);
      $('main').append(quoteElement);
    });

    addClickEvents();
  });
}

function addClickEvents() {
  var quotes = $('.quote');
  quotes.click(function(ev) {
    var $target = $(ev.target);

    // look for the .quote node if we click on a sub-node
    if (!$target.hasClass('quote')) {
      $target = $target.parent('p.quote');
    }

    $target.slideUp(1000);
  });
}
