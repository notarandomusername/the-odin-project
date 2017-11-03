function LoadDivs(n) {
    var trueLen = Math.floor(480/n);
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
          $(".container").append("<div class='unit'></div>");
      }
    }
    $(".unit").width(trueLen);
    $(".unit").height(trueLen);
  }
  
  function replaceUnits(){
    var n = +prompt("How many boxes per side?");
    $(".unit").remove();
    LoadDivs(n);
  }
  
  function randomColor(){
    var red = (Math.floor(Math.random() * 256));
    var blue = (Math.floor(Math.random() * 256));
    var green = (Math.floor(Math.random() * 256));
    var rgb = 'rgb(' + red + ',' + blue + ',' + green + ')'
    
    return rgb;
  }
  
  function colorIn(){
    $(".unit").mouseover(function() {
      $(this).css("background-color", randomColor);
    });
  }
  
  $(document).ready(function(){
    LoadDivs(16);
    colorIn();
    
    $(".resetButton").click(function() {
      replaceUnits();
      colorIn();
    });
  });