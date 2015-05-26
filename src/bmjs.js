var li,ul, a,
	BM = {												    // BM --> THE NAMESPACE
		page    : document.getElementById("page"),
		home    : document.getElementById("home"),
		music   : document.getElementById("music"),
		videos  : document.getElementById("videos"),
		connect : document.getElementById("connect"),
		objArr : [],
		theObjs: function(name, link, id){					// the CONSTRUCTOR
				this.link = link;
				this.name = name;
				this.id = id;
		},
		getJSON: function(){								// GET JSON AND BUILD OBJECT POOL
			var req = new XMLHttpRequest();
			req.open("GET", "../src/bmList.json", true);
			req.onreadystatechange = function(){
				if (req.readyState === 4){
					var status = req.status;
					if (status >= 200 && status < 300){
						var result = JSON.parse(req.responseText);
						var list = result.theList;
						for (var i = 0; i < list.length; i++){
							BM.objArr.push(new BM.theObjs(list[i].name, list[i].link, list[i].id));
						}
					}
				}
			};
			req.send(null);
		},
		buildFrame: function(object){						// BUILD iFRAMES for ALBUMS
			var iframe = document.createElement('iframe');
			iframe.frameBorder=0;
			iframe.align="right";
			iframe.width = "350";
			iframe.height = "621";
			iframe.seamless = true;
			if (object.name === "Falling Down EP"){
				iframe.setAttribute("src", BM.objArr[7].link);
				iframe.textContent = '<a href="' + 'http://brightmatter.bandcamp.com/album/falling-down-ep' + '">' + 'Falling Down EP by Bright Matter' + '</a>';
			}else{
				iframe.setAttribute("src", BM.objArr[6].link);
				iframe.textContent = '<a href="' + "http://brightmatter.bandcamp.com/album/theres-no-home-for-us-here" + '">' + 'There\'s No Home For Us Here' + '</a>';
			}
			BM.page.appendChild(iframe);
		}
	};

BM.theObjs.prototype.post = function(ul){        			// POST OBJECTS TO PAGE
		li = document.createElement('li');
		li.id = this.id;
		a = document.createElement('a');
		a.appendChild(document.createTextNode(this.name));
		a.href = this.link;
		//a.target = "_blank";
		li.appendChild(a);
		ul.appendChild(li);
		BM.page.appendChild(ul);
};
BM.getJSON();
BM.home.addEventListener('click', function (event){			// THE LISTENERZ
	BM.page.textContent = "";
	var link = "https://www.youtube.com/embed/TD1OaRmCO20"; 
	var iframe = document.createElement('iframe');
	iframe.frameBorder=0;
	iframe.id="movie";
	iframe.setAttribute("src", link);
	BM.page.appendChild(iframe);
});
BM.connect.addEventListener('click', function (event){
	event.preventDefault();
	BM.page.textContent = '';
	ul = document.createElement('ul');
	for (var i = 0; i < 6; i++){
		BM.objArr[i].post(ul);
	}
});
BM.music.addEventListener('click', function (event){
	event.preventDefault();
	BM.page.textContent = '';
	ul = document.createElement('ul');
	BM.objArr[6].post(ul);
	BM.objArr[7].post(ul);
	document.getElementById("fallingDown").addEventListener('click', function (event){
			event.preventDefault();
			BM.page.textContent = ""; 
			BM.buildFrame(BM.objArr[7]);			
	});
	document.getElementById("theLinks").addEventListener('click', function (event){
			event.preventDefault();
			BM.page.textContent = ""; 
			BM.buildFrame(BM.objArr[6]);
	});
});
BM.videos.addEventListener('click', function (event){
	event.preventDefault();
	BM.page.textContent = "";
	ul = document.createElement('ul');
	for (var i = 8; i < BM.objArr.length; i++){
		BM.objArr[i].post(ul);
	}
});






