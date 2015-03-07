$(document).ready(function(){

  buzz = new BuzzwordCounter();

  var $source = $('#submit-text');
  var $show = $('#current-buzzwords');
  var $found = $('#found-buzzwords');
  $show.append(buzz.listCurrentBuzzwords());


  $source.click(function(){
    var sourceText = $('#source-text').val();
    var checkText = buzz.splitText(sourceText);
    var foundWords = buzz.checkBuzzwords(checkText);
    $found.empty().append(buzz.renderFoundWords(foundWords));
    buzz.foundWords = []
  });

});

function BuzzwordCounter() {
  this.text = '';
  this.buzzwords = DICTIONARY;
  this.buzzwordCounter = 0;
  this.foundWords = []
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
  console.log(this.foundWords);
  return this.foundWords;
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
  var html = "<h3>Found Buzzwords:</h3>"
  html += "<ul class='list found'>"
  for (var i = array.length - 1; i >= 0; i--) {
    html+= "<li>" + array[i] + "</li>"
  }
  html += "</ul>"
  return html;
}

