$(document).ready(function() {
  var quotes = $('.quote');
  quotes.click(function(ev) {
    var $target = $(ev.target);

    // look for the .quote node if we click on a sub-node
    if (!$target.hasClass('quote')) {
      $target = $target.parent('p.quote');
    }

    $target.slideUp(1000, function() {
      alert('faded out');
    });
  });
});
