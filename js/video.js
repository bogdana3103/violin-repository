let 
	leftSlideIndex = 0,
	rightSlideIndex = 1,
	slidesCount = document.getElementsByClassName('videoWrapper').length,
	allSlides = document.getElementsByClassName('videoWrapper'),
	iframeVideoPlayer = document.getElementsByClassName('iframeVideoPlayer')[0],
	customVideoPlayer = document.getElementsByClassName('customVideoPlayer')[0];


const linkArray = [
	{'link': "https://www.youtube.com/embed/gwPIr-AvHRM"},
	{'link': "https://www.youtube.com/embed/gwPIr-AvHRM"},
	{'link': "https://www.youtube.com/embed/gwPIr-AvHRM"},
	{'link': "https://www.youtube.com/embed/gwPIr-AvHRM"},
	{'link': "https://www.youtube.com/embed/gwPIr-AvHRM"},
	{'link': "https://www.youtube.com/embed/gwPIr-AvHRM"},
];

const initSetup = (slideNubmer) => {	
	if (slideNubmer === 4){
		rightSlideIndex = slideNubmer-1;
	}

	for(let i = 0; i < slidesCount; i++){
		if( i <= slideNubmer-1){
			continue;
		}
		else{
			allSlides[i].style = 'display: none';
		};
	};

	//event listener:
	console.log(allSlides);
	
	if (allSlides !== undefined){
		for(let i = 0; i < allSlides.length; i++){
			allSlides[i].addEventListener(
				'click',
				() => {
					openVideo(i)
				}
			)
		}
	}
};

const nextSlides = () => {
	if(leftSlideIndex >= 0 && rightSlideIndex < slidesCount-1){
		rightSlideIndex++;

		allSlides[rightSlideIndex].style = 'display: flex';
		allSlides[leftSlideIndex].style = 'display: none';
		
		leftSlideIndex++;
	}
};

const prevSlides = () => {
	if(leftSlideIndex > 0 && rightSlideIndex > 1){
		leftSlideIndex--;
		
		allSlides[rightSlideIndex].style = 'display: none';
		allSlides[leftSlideIndex].style = 'display: flex';
		
		rightSlideIndex--;
	}
};

const openVideo = (id) => {
	customVideoPlayer !== undefined ? customVideoPlayer.style = "display: flex" : ''; 
	iframeVideoPlayer !== undefined ? iframeVideoPlayer.src = linkArray[id].link : '';
};