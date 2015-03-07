$(document).ready(function(){

  buzz = new BuzzwordCounter();

  var $source = $('#submit-text');
  var $show = $('#current-buzzwords');
  var $found = $('#found-buzzwords');
  var $stats = $('#jargon-stats')
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

    $found.empty().append(buzz.renderFoundWords(foundWords));

    buzz.foundWords = []
  });

});

function BuzzwordCounter() {
  this.text = '';
  this.buzzwords = DICTIONARY;
  this.buzzwordCounter = 0;
  this.foundWords = [];
  this.statsPercent = 0;
}

BuzzwordCounter.prototype.splitText = function(text) {
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
  return html;
}

