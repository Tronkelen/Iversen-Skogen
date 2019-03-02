
window.onload = function() {

 window.onscroll = function() {showMenu();};

 var contact = document.getElementById("contact-about-section");
 var target = contact.offsetTop;
 var menu = document.getElementById("hidden");
 var close = document.getElementById("close-video");
 //Fetch video modal
 var modal = document.getElementById("video-modal");
 //var currently playing
 var playing;
 //Close Modal button
 close.addEventListener("click", closeModal);

 window.addEventListener("click", outsideClick);

 //close modal
 function closeModal(){
   stopVideo();
   modal.style.display="none";
   document.getElementsByClassName("video-display")[playing].style.display='none';
 }

 //prevent the iframe to continue playing after modal closes
 function stopVideo(){
   var iframes = modal.getElementsByTagName("iframe");
    if (iframes != null) {
      for (i = 0; i < iframes.length; i++) {
          iframes[i].src = iframes[i].src; //causes a reload so it stops playing, music, video, etc.
      }
    }
  }

  //close modal by clicking outside of "box"
 function outsideClick(e){
   stopVideo();
   if(e.target == modal){
     document.getElementById("video-modal").style.display = "none";
   }
 }

 function showMenu() {
     //if pageYOffset(the y position of top of screen) is larger than where target(contact-about-section) is located
   if (window.pageYOffset >= target) {
     //add class show to change display: none to flex
     menu.classList.add("show")
   } else {
     //else class is removed, and hidden menu goes back to display:none
     menu.classList.remove("show");
   }
 }
 function showSideNav(){

 }
}
function showPlaying(){
  return this.playing;
}
//opens modal and then displays the video
function playVideo(videoNumber){
  cheatFix();
  document.getElementById("video-modal").style.display="block";
  window.setTimeout(addVideo(videoNumber),250); //wait for iiiit
}
//Removes the displayed videos
function cheatFix(){
  for (i = 0; i < 4; i++) {
    document.getElementsByClassName("video-display")[i].style.display="none";
  }
}

//compartmentalized to make sure the modal is open before the video is displayed.
function addVideo(videoNumber){
  //Fetch video buttons
  this.playing = videoNumber;
  document.getElementsByClassName("video-display")[videoNumber].style.display="block";
}

//Changes background of header, based on picture
function changeBackground(pictureNumber) {
  if (pictureNumber === 1) {
    document.getElementsByClassName("image-container")[0].style.background="url(./resources/images/sushi.jpg)no-repeat center center";
    document.getElementsByClassName("image-content")[0].style.backgroundColor="rgba(9, 18, 23, 0.6)";
  }else {
    document.getElementsByClassName("image-container")[0].style.background="url(./resources/images/thomas-bjornstad.jpg)no-repeat center center";
    document.getElementsByClassName("image-content")[0].style.backgroundColor="rgba(9, 18, 23, 0.1)";
  }
  //refresh dots to maintain only on active
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[pictureNumber-1].className += " active";
}
