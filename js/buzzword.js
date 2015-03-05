$(document).ready(function(){

  var $source = $('#source');

  $source.keydown(function(){
    var sourceText = $('#source-text').val();
    console.log(sourceText);
  });

});