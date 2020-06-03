const photos = [
  "image/rectangle14.svg",
  "image/rectangle34.svg",
  "image/rectangle37.svg", 
  "image/rectangle42.svg", 
  "image/rectangle15.svg", 
  "image/rectangle19.svg", 
  "image/rectangle38.svg", 
  "image/oldViolin.svg", 
  "image/piano.svg", 
  "image/rectangle35.svg", 
  "image/rectangle36.svg", 
  "image/rectangle40.svg"];

  const photosMobile = [
    "image/photoMobile1.svg",
    "image/photoMobile2.svg",
    "image/photoMobile3.svg", 
    "image/photoMobile4.svg", 
    "image/photoMobile5.svg", 
    "image/photoMobile6.svg", 
    "image/photoMobile7.svg", 
    "image/photoMobile8.svg", 
    "image/photoMobile9.svg", 
    "image/photoMobile10.svg"];

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
