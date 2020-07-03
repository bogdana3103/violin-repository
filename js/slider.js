let //global variables:
  frstActiveSlide = 0,
  slidesToDisplay,
  lstActiveSlide;

const // access to html elements:
  slides = document.getElementsByClassName("videoWrapper"),
  viewAll = document.getElementsByClassName("viewAll")[0],
  iconLeft = document.getElementsByClassName("iconLeft")[0],
  iconRight = document.getElementsByClassName("iconRight")[0],
  dataAboutVideo = document.getElementsByClassName("dataAboutVideo"),
  videoPlayer = document.getElementsByClassName("videoPlayer")[0],
  iframeVideoPlayer = document.getElementsByClassName("iframeVideoPlayer")[0];

const videoData = [
  { link: "https://www.youtube.com/embed/gwPIr-AvHRM" },
  { link: "https://www.youtube.com/embed/gwPIr-AvHRM" },
  { link: "https://www.youtube.com/embed/gwPIr-AvHRM" },
  { link: "https://www.youtube.com/embed/gwPIr-AvHRM" },
  { link: "https://www.youtube.com/embed/gwPIr-AvHRM" },
  { link: "https://www.youtube.com/embed/gwPIr-AvHRM" },
  { link: "https://www.youtube.com/embed/gwPIr-AvHRM" },
];

// defines how many slides should be displayed:
const startupConfig = (countSlides) => {
  var countVideoSlides;
  if (countSlides < 425) {
    countVideoSlides = 1;
  } else if (countSlides > 425 && countSlides < 768) {
    countVideoSlides = 2;
  } else if (countSlides >= 768 && countSlides < 820) {
    countVideoSlides = 3;
  } else {
    countVideoSlides = 4;
  }

  switch (countVideoSlides) {
    case 1:
      //3 slides should be displayed on homePage
      lstActiveSlide = 0;
      slidesToDisplay = countVideoSlides;
      onStartUp();
      break;
    case 2:
      //3 slides should be displayed on homePage
      lstActiveSlide = 1;
      slidesToDisplay = countVideoSlides;
      onStartUp();
      break;

    case 3:
      //3 slides should be displayed on homePage
      lstActiveSlide = 2;
      slidesToDisplay = countVideoSlides;
      onStartUp();
      break;

    case 4:
      //4 slides should be displayed on homePage
      lstActiveSlide = 3;
      slidesToDisplay = countVideoSlides;
      onStartUp();
      break;

    default:
      break;
  }
};

// const startupConfig = (slidesCount) => {
//     console.log(slidesCount);

//     if (slidesCount < 425) {
//         countOfVideos(0, 2);
//     } else if ( slidesCount > 425 && slidesCount < 768) {
//         countOfVideos(1, 3);
//     } else {
//         countOfVideos(2, 4);
//     }
// };

// const countOfVideos = (num, count) => {
//     switch (num) {
//         case 0:
//             //4 slides should be displayed on homePage
//             lstActiveSlide = 1;
//             slidesToDisplay = count;
//             onStartUp();
//             break;
//         case 1:
//             //3 slides should be displayed on homePage
//             lstActiveSlide = 2;
//             slidesToDisplay = count;
//             onStartUp();
//             break;

//         case 2:
//             //4 slides should be displayed on homePage
//             lstActiveSlide = 3;
//             slidesToDisplay = count;
//             onStartUp();
//             break;

//         default:
//             break;
//     };

//shows only first slides when page loaded:
const onStartUp = () => {
  if (slides !== undefined && dataAboutVideo !== undefined) {
    for (let i = lstActiveSlide + 1; i < slides.length; i++) {
      slides[i].style = "display: none";
    }
  }
  //display viewAll btn if there is not enough items:
  if (slides.length < 3) {
    viewAll.style = "display: flex";
  }

  // hide video player:
  //     if(iframeVideoPlayer !== undefined){
  //         iframeVideoPlayer.style = 'display: none';
  //     }
};

//for slider
const showNext = () => {
  //couting slides:
  lstActiveSlide < slides.length - 1
    ? (lstActiveSlide = lstActiveSlide + 1)
    : "";

  // check if there are some slides or if there are some slides left:
  if (
    frstActiveSlide < slides.length - slidesToDisplay &&
    lstActiveSlide < slides.length
  ) {
    //show's next item:
    slides[lstActiveSlide].style = "display: flex";

    //hide's prev item:
    slides[frstActiveSlide].style = "display: none";

    //couting slides:
    frstActiveSlide = frstActiveSlide + 1;
  }
};

const showPrev = () => {
  //counting slides:
  frstActiveSlide > 0 ? (frstActiveSlide = frstActiveSlide - 1) : "";

  // check if there are some slides or if there are some slides left:
  if (frstActiveSlide >= 0 && lstActiveSlide >= slidesToDisplay) {
    //show's prev item:
    slides[frstActiveSlide].style = "display: flex";

    //hides's next item:
    slides[lstActiveSlide].style = "display: none";

    //couting slides:
    lstActiveSlide = lstActiveSlide - 1;
  }
};

//for video player:
// const showVideo = (i) => {
//     console.log(i);

//     if(iframeVideoPlayer !== undefined || iframeVideoPlayer === undefined) {
//         iframeVideoPlayer.style = 'display: block';
//         iframeVideoPlayer.src = "https://www.youtube.com/embed/gwPIr-AvHRM";
//     }
// };

// event listeners:
if (iconRight !== undefined) {
  iconRight.addEventListener("click", () => {
    showNext();
  });
}

if (iconLeft !== undefined) {
  iconLeft.addEventListener("click", () => {
    showPrev();
  });
}

// if(slides !== undefined) {
//     for(let i = 0; i < slides.length; i++){
//         slides[i].addEventListener('click', () => showVideo(i))
//     }
// }
