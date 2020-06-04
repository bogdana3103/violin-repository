let
    //global variables:
    frstActiveSlide = 0,
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
            displaySlides();
            break;

        case 4:
            //4 slides should be displayed on homePage
            lstActiveSlide = 3;
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
    lstActiveSlide < slides.length ? lstActiveSlide = lstActiveSlide+1 : '';
    // check if there are some slides or if there are some slides left:
    if(slides[lstActiveSlide] !== undefined && lstActiveSlide <= slides.length) {
        //show's next item:        
        slides[lstActiveSlide].style = 'display: flex';
        //hide's prev item:
        slides[frstActiveSlide].style = 'display: none';
        frstActiveSlide = frstActiveSlide+1;
    };
};

const showPrev = () => {
    frstActiveSlide > 0 ? frstActiveSlide = frstActiveSlide-1 : '';
    // check if there are some slides or if there are some slides left:
    if(slides[frstActiveSlide] !== undefined && frstActiveSlide >= 0) {
        //show's prev item:        
        slides[frstActiveSlide].style = 'display: flex';
        //hide's next item:
        slides[lstActiveSlide].style = 'display: none';
        lstActiveSlide = lstActiveSlide+1;
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