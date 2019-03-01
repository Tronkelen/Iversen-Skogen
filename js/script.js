

function changeBackground(pictureNumber) {
  if (pictureNumber === 1) {
    document.getElementsByClassName('image-container')[0].style.background='url(./resources/images/sushi.jpg)no-repeat center center';
    document.getElementsByClassName('image-content')[0].style.backgroundColor='rgba(9, 18, 23, 0.6)';
  }else {
    document.getElementsByClassName('image-container')[0].style.background='url(./resources/images/thomas-bjornstad.jpg)no-repeat center center';
    document.getElementsByClassName('image-content')[0].style.backgroundColor='rgba(9, 18, 23, 0.1)';
  }

  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[pictureNumber-1].className += " active";
}
