// Put Globals In A NameSpace
function theObjs(name, link, id){
		this.link = link;
		this.name = name;
		this.id = id;
}
var page    	= document.getElementById("page"),
	home    	= document.getElementById("home"),
	music   	= document.getElementById("music"),
	videos  	= document.getElementById("videos"),
	connect 	= document.getElementById("connect"),
	ul, li, a,
	facebookObj = new theObjs("Facebook", "https://www.facebook.com/brightmatter", "theLinks"),
	twitterObj  = new theObjs("Twitter", "https://www.twitter.com/bright_matter", "theLinks"),
	instaObj	= new theObjs("Instagram", "https://instagram.com/brightmatter", "theLinks"),
	bandcampObj = new theObjs("BandCamp", "https://brightmatter.bandcamp.com", "theLinks"),
	itunesObj	= new theObjs("iTunes", "https://itunes.apple.com/us/artist/bright-matter/id367964352", "theLinks"),
	youtubeObj	= new theObjs("YouTube", "https://www.youtube.com/mrbrightmatter", "theLinks"),
	noHomeObj	= new theObjs("No Home For Us Here", "#", "theLinks"),
	fallingObj	= new theObjs("Falling Down EP", "https://bandcamp.com/EmbeddedPlayer/album=2454890425/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/", "fallingDown"),
	neverKnowObj= new theObjs("Never Know", "https://www.youtube.com/watch?v=a3GBM6DPi1o", "theLinks"),
	runObj		= new theObjs("Run", "https://www.youtube.com/embed/TD1OaRmCO20", "theLinks"),
	aliveObj	= new theObjs("Alive @ Detroit Bar", "https://www.youtube.com/watch?v=Be_q0ooJxRs", "theLinks"),
	shakeThisObj= new theObjs("Can't Shake This Feelin\'", "https://www.youtube.com/watch?v=1CUo79tw36Q", "theLinks"),
	post = function(object, ul){
		li = document.createElement('li');
		li.id = object.id;
		a = document.createElement('a');
		a.appendChild(document.createTextNode(object.name));
		a.href = object.link;
		li.appendChild(a);
		ul.appendChild(li);
		page.appendChild(ul);
	};

// add Event Listeners to dynamically change page content
home.addEventListener('click', function (event){
	event.preventDefault();
	page.textContent = "";
	var link = "https://www.youtube.com/embed/TD1OaRmCO20"; 
	var iframe = document.createElement('iframe');
	iframe.frameBorder=0;
	iframe.id="movie";
	iframe.setAttribute("src", link);
	page.appendChild(iframe);
});

connect.addEventListener('click', function (event){
	event.preventDefault();
	page.textContent = '';
	ul = document.createElement('ul');
	post(facebookObj, ul);
	post(twitterObj, ul);
	post(instaObj, ul);
	post(youtubeObj, ul);
	post(bandcampObj, ul);
	post(itunesObj, ul);
});

music.addEventListener('click', function (event){
	event.preventDefault();
	page.textContent = '';
	ul = document.createElement('ul');
	post(noHomeObj, ul);
	post(fallingObj, ul);
	document.getElementById("fallingDown").addEventListener('click', function (event){
			event.preventDefault();
			page.textContent = "";
			//var link = "https://bandcamp.com/EmbeddedPlayer/album=2454890425/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"; 
			var iframe = document.createElement('iframe');
			iframe.frameBorder=0;
			//iframe.id="randomid";
			iframe.width = "350";
			iframe.height = "621";
			iframe.seamless = true;
			iframe.setAttribute("src", fallingObj.link);
			iframe.textContent = '<a href="' + 'http://brightmatter.bandcamp.com/album/falling-down-ep' + '">' + 'Falling Down EP by Bright Matter' + '</a>';
			page.appendChild(iframe);
			// add a link that allows user to go back, or tell them to click Music to go back?
	});
});

videos.addEventListener('click', function (event){
	event.preventDefault();
	page.textContent = "";
	ul = document.createElement('ul');
	post(neverKnowObj, ul);
	post(runObj, ul);
	post(aliveObj, ul);
	post(shakeThisObj, ul);
});






