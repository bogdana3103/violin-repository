const photos = [
  "image/rectangle2.png",
  "image/rectangle3.png",
  "image/rectangle4.png", 
  "image/rectangle5.png", 
  "image/rectangle6.png", 
  "image/rectangle7.png", 
  "image/rectangle8.png", 
  "image/rectangle9.png", 
  "image/rectangle10.png", 
  "image/rectangle11.png", 
  "image/rectangle12.png", 
  "image/rectangle13.png"];

  const photosMobile = [
    "image/rectangleMobile12.png",
    "image/rectangleMobile13.png",
    "image/rectangleMobile14.png", 
    "image/rectangleMobile15.png", 
    "image/rectangleMobile16.png", 
    "image/rectangleMobile17.png", 
    "image/rectangleMobile18.png", 
    "image/rectangleMobile19.png", 
    "image/rectangleMobile20.png", 
    "image/rectangleMobile21.png"];

const showPhoto = () => {
   currentPhoto.src = event.target.getAttribute('src');
   document.getElementById("gallery").style.display = "none"
   document.getElementById( "gallery2").style.display = "none"
   document.getElementById("gallery1").style.display = "none"
   document.getElementById("photoShow").style.display ="flex"
   document.getElementById("title").style.display = "none"
 }

const goBack = () => {
   document.getElementById("photoShow").style.display ="none";
   document.getElementById("gallery").style.display = "block"
   document.getElementById( "gallery2").style.display = "block"
   document.getElementById("gallery1").style.display = "block"
   document.getElementById("title").style.display = "flex"
 }

const next = () => {
   currentPhoto = document.getElementById("currentPhoto");
   const src =currentPhoto.getAttribute('src');
   let currentPhotoKey = photos.indexOf(src);
   currentPhotoKey++;
   if(currentPhotoKey >photos.length -1){
     currentPhotoKey = 0;
   }
   currentPhoto.src = photos[currentPhotoKey];
}

const previous = () => {
   currentPhoto = document.getElementById("currentPhoto");
   const src =currentPhoto.getAttribute('src');
   let currentPhotoKey = photos.indexOf(src);
   currentPhotoKey--;
   if(currentPhotoKey <0){
     currentPhotoKey = photos.length-1;
   }
   currentPhoto.src = photos[currentPhotoKey];
}

const showPhotoMobile = () => {
  currentPhoto.src = event.target.getAttribute('src');
  document.getElementById("galleryMobile1").style.display = "none"
  document.getElementById("galleryMobile2").style.display = "none"
  document.getElementById("photoShowMobile").style.display ="flex"
  document.getElementById("titleMobile").style.display = "none"
}

const goBackMobile = () => {
  document.getElementById("photoShowMobile").style.display ="none";
  document.getElementById("galleryMobile1").style.display = "block"
  document.getElementById("galleryMobile2").style.display = "block"
  document.getElementById("titleMobile").style.display = "flex"
}

const nextMobile = () => {
  currentPhoto = document.getElementById("currentPhotoMobile");
  const src =currentPhoto.getAttribute('src');
  let currentPhotoKey = photosMobile.indexOf(src);
  currentPhotoKey++;
  if(currentPhotoKey >photosMobile.length -1){
    currentPhotoKey = 0;
  }
  currentPhoto.src = photosMobile[currentPhotoKey];
}

const previousMobile = () => {
  currentPhoto = document.getElementById("currentPhotoMobile");
  const src =currentPhoto.getAttribute('src');
  let currentPhotoKey = photosMobile.indexOf(src);
  currentPhotoKey--;
  if(currentPhotoKey <0){
    currentPhotoKey = photosMobile.length-1;
  }
  currentPhoto.src = photosMobile[currentPhotoKey];
}
