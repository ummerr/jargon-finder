$(document).ready(function(){

  buzz = new BuzzwordCounter();

  var $source = $('#submit-text');
  var $show = $('#current-buzzwords');
  var $found = $('#found-buzzwords');
  var $stats = $('#jargon-stats');
  var $message = $('#message');
  $show.append(buzz.listCurrentBuzzwords());


  $source.click(function(){
    $found.show();
    $stats.show();

    var sourceText = $('#source-text').val();
    var checkText = buzz.splitText(sourceText);
    var foundWords = buzz.checkBuzzwords(checkText);
    buzz.checkPhrases();
    console.log(buzz.foundWords);

    buzz.percentJargon();
    $stats.empty().append(buzz.renderStats())
    $message.empty().append(buzz.statsMessage());
    $found.empty().append(buzz.renderFoundWords(foundWords));

    buzz.foundWords = []
  });

});

function BuzzwordCounter() {
  this.originalText = ''
  this.text = '';
  this.buzzwords = DICTIONARY;
  this.buzzwordCounter = 0;
  this.foundWords = [];
  this.statsPercent = 0;
}

BuzzwordCounter.prototype.splitText = function(text) {
  this.originalText = text;
  this.text = text.toLowerCase();
  return this.text.split(/\W+/);
}

BuzzwordCounter.prototype.checkBuzzwords = function(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    for (var j = this.buzzwords.length - 1; j >= 0; j--) {
      if (array[i] === this.buzzwords[j]) {
        this.foundWords.push(this.buzzwords[j]);
      }
    }
  };
  return this.foundWords;
}

BuzzwordCounter.prototype.checkPhrases = function() {
    for (var i = this.buzzwords.length - 1; i >= 0; i--) {
      if (this.text.search(this.buzzwords[i]) !== -1 && this.foundWords.indexOf(this.buzzwords[i]) === -1) {
        this.foundWords.push(this.buzzwords[i]);
      }
    }
}

BuzzwordCounter.prototype.listCurrentBuzzwords = function() {
  var html = "<ul class='list'>"
  for (var i = this.buzzwords.length - 1; i >= 0; i--) {
    html+= "<li>" + " " + this.buzzwords[i] + " " + "</li>"
  };
  html += "</ul>"
  return html;
}

BuzzwordCounter.prototype.renderFoundWords = function(array) {
  var html = "<h3>" + this.foundWords.length + " Jargon-y Words or Phrases:</h3>"
  html += "<ul class='list found'>"
  for (var i = array.length - 1; i >= 0; i--) {
    html+= "<li>" + array[i] + "</li>"
  }
  html += "</ul>"
  html += "<h3>Your text:</h3>"
  html += "<p><em>'" + this.originalText + "'</em></p>"
  return html;
}

BuzzwordCounter.prototype.percentJargon = function() {
  var totalWords = this.text.trim().replace( /\n/g, " " ).split( " " );
  console.log(totalWords);
  console.log(totalWords.length);
  this.statsPercent = ((this.foundWords.length / totalWords.length) * 100)
}

BuzzwordCounter.prototype.renderStats = function() {
  var html = "<h3> " + this.statsPercent.toFixed(1) + "% Jargon</h3>"
  return html;
}

BuzzwordCounter.prototype.statsMessage = function() {
  var message = " "
  var html = "<h2>"

  if (this.statsPercent > 8) {
    message = "<span class='grade'>GRADE F:</span> This is quite a jargon-y piece."
  } else if (this.statsPercent > 6 ) {
    message = "<span class='grade'>GRADE D:</span> You have quite a bit of jargon there."
  } else if (this.statsPercent > 4 ) {
    message = "<span class='grade'>GRADE C:</span> There's definite jargon there."
  } else if (this.statsPercent > 2) {
    message = "<span class='grade'>GRADE B:</span> Jargon for sure, but not too bad"
  } else {
    message = "<span class='grade'>GRADE A:</span> You're good homey."
  }

  html += message + "</h2>";
  return html
}