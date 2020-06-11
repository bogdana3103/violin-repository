const 
	row = document.getElementsByClassName('row')[0],
	videoPlayer = document.getElementsByClassName('videoPlayer')[0],
	iframeVideoPlayer = document.getElementsByClassName('iframeVideoPlayer')[0];


const DATA = [
	{
		htmlTag: 
			`<div class="col-xs-11 col-sm-6 col-md-3">
				<div class="videoWrapper" onclick = "openVideo('https://www.youtube.com/embed/gwPIr-AvHRM')">
					<img class="imgVideo" src="./image/imgVideo.png">
					<p class="textVideo">1My Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
					<p class="dateVideo">27 Apr. 2020</p>
				</div>
			</div>`
	},
	{
		htmlTag: 
			`<div class="col-xs-11 col-sm-6 col-md-3">
				<div class="videoWrapper" onclick = "openVideo('https://www.youtube.com/embed/gwPIr-AvHRM')">
					<img class="imgVideo" src="./image/imgVideo.png">
					<p class="textVideo">1My Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
					<p class="dateVideo">27 Apr. 2020</p>
				</div>
			</div>`
	},
	{
		htmlTag: 
			`<div class="col-xs-11 col-sm-6 col-md-3">
				<div class="videoWrapper" onclick = "openVideo('https://www.youtube.com/embed/gwPIr-AvHRM')">
					<img class="imgVideo" src="./image/imgVideo.png">
					<p class="textVideo">1My Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
					<p class="dateVideo">27 Apr. 2020</p>
				</div>
			</div>`
	},
	{
		htmlTag: 
			`<div class="col-xs-11 col-sm-6 col-md-3">
				<div class="videoWrapper" onclick = "openVideo('https://www.youtube.com/embed/gwPIr-AvHRM')">
					<img class="imgVideo" src="./image/imgVideo.png">
					<p class="textVideo">1My Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
					<p class="dateVideo">27 Apr. 2020</p>
				</div>
			</div>`
	},
	{
		htmlTag: 
			`<div class="col-xs-11 col-sm-6 col-md-3">
				<div class="videoWrapper" onclick = "openVideo('https://www.youtube.com/embed/gwPIr-AvHRM')">
					<img class="imgVideo" src="./image/imgVideo.png">
					<p class="textVideo">1My Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
					<p class="dateVideo">27 Apr. 2020</p>
				</div>
			</div>`
	},
	{
		htmlTag: 
			`<div class="col-xs-11 col-sm-6 col-md-3">
				<div class="videoWrapper" onclick = "openVideo('https://www.youtube.com/embed/gwPIr-AvHRM')">
					<img class="imgVideo" src="./image/imgVideo.png">
					<p class="textVideo">1My Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
					<p class="dateVideo">27 Apr. 2020</p>
				</div>
			</div>`
	},
	{
		htmlTag: 
			`<div class="col-xs-11 col-sm-6 col-md-3">
				<div class="videoWrapper" onclick = "openVideo('https://www.youtube.com/embed/gwPIr-AvHRM')">
					<img class="imgVideo" src="./image/imgVideo.png">
					<p class="textVideo">1My Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
					<p class="dateVideo">27 Apr. 2020</p>
				</div>
			</div>`
	},
	{
		htmlTag: 
			`<div class="col-xs-11 col-sm-6 col-md-3">
				<div class="videoWrapper" onclick = "openVideo('https://www.youtube.com/embed/gwPIr-AvHRM')">
					<img class="imgVideo" src="./image/imgVideo.png">
					<p class="textVideo">1My Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
					<p class="dateVideo">27 Apr. 2020</p>
				</div>
			</div>`
	},
];

const startUp = () => {
	DATA.map(item => {
		row.innerHTML += item.htmlTag
	})

	videoPlayer.style = 'display: none'
};

const openVideo = (arg) => {
	if(videoPlayer !== undefined && iframeVideoPlayer !== undefined){
		videoPlayer.style = 'display: flex';
		iframeVideoPlayer.src = `${arg}`;
	}
};