let
    //global variables:
    frstActiveSlide = 0,
    slidesToDisplay,
    lstActiveSlide;

const 
    // access to htmk elements:
    slides = document.getElementsByClassName('videoWrapper'),
    viewAll = document.getElementsByClassName('viewAll')[0],
    iconLeft = document.getElementsByClassName('iconLeft')[0],
    iconRight = document.getElementsByClassName('iconRight')[0];    

// defines how many slides should be displayed:
const startupConfig = (slidesCount) => {
    switch (slidesCount) {
        case 3:
            //3 slides should be displayed on homePage
            lstActiveSlide = 2;
            slidesToDisplay = slidesCount;
            displaySlides();            
            break;

        case 4:
            //4 slides should be displayed on homePage
            lstActiveSlide = 3;
            slidesToDisplay = slidesCount;
            displaySlides();
            break;

        default:
            break;
    };
};

//shows only first slides when page loaded:
const displaySlides = () => {
    if(slides !== undefined){
        for(let i = lstActiveSlide+1; i < slides.length; i++){
            slides[i].style = 'display: none';
        }
    };
    //display viewAll btn if there is not enough items: 
    if (slides.length < 3){
        viewAll.style = 'display: flex';
    };
};

const showNext = () => {
    //couting slides:
    lstActiveSlide < slides.length-1 ? lstActiveSlide = lstActiveSlide+1 : '';
    
    // check if there are some slides or if there are some slides left:
    if(frstActiveSlide < (slides.length - slidesToDisplay) && lstActiveSlide < slides.length) {
        //show's next item:       
        slides[lstActiveSlide].style = 'display: flex';
        
        //hide's prev item:
        slides[frstActiveSlide].style = 'display: none';
        
        //couting slides:
        frstActiveSlide = frstActiveSlide+1;
    };
    
};

const showPrev = () => {
    //counting slides:
    frstActiveSlide > 0 ? frstActiveSlide = frstActiveSlide -1 : '';

    // check if there are some slides or if there are some slides left:
    if(frstActiveSlide >= 0 && lstActiveSlide >= slidesToDisplay) {
        //show's prev item:
        slides[frstActiveSlide].style = 'display: flex';

        //hides's next item:       
        slides[lstActiveSlide].style = 'display: none';

        //couting slides:
        lstActiveSlide = lstActiveSlide - 1;
    };
};

// event listeners:
if (iconRight !== undefined) {
    iconRight.addEventListener('click', () => {
        showNext();
    });
};

if (iconLeft !== undefined) {
    iconLeft.addEventListener('click', () => {
        showPrev();
    });
};