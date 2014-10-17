(function looper() {

  boxes = $('#box span');

  var sameColor = boxes.eq(0).css('background-color');
  var color1 = boxes.eq(0).css('background-color');
  var color2 = boxes.eq(1).css('background-color');
  var color3 = boxes.eq(2).css('background-color');
  if(color1===color2&&color2===color3)
  {
    for(var i=0; i<boxes.length; i++){
      var box=boxes.eq(i);
      var color =  box.css('background-color');
      if(color !== sameColor){
        box.click();
        break;
      }   
    }
  }
  else if(color1===color2)
  {
    boxes.eq(2).click();
  }
  else if(color2===color3)
  {
    boxes.eq(0).click();
  }
  else
  {
    boxes.eq(1).click();
  }

  setTimeout(looper, 1);
})();
