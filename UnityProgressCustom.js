
function UnityProgress (dom) {
	this.progress = 0.0;
	this.message = "";
	this.dom = dom;

	this.loader = document.getElementById('loader');
	this.loadText = document.getElementById('loadText');
	this.loadBar = document.getElementById('loadBar');
	this.barBase = document.getElementById('barbase');
	this.barGlow = document.getElementById('barGlow');

	var parent = dom.parentNode;

	this.SetProgress = function (progress) { 
		if (this.progress < progress)
			this.progress = progress; 
		if (progress == 1) {
			this.SetMessage("Polishing Space Chrome...")
			//this.loadBar.style.display = "none";
		}
		this.Update();
	}

	this.SetMessage = function (message) { 
		this.message = message; 
		this.loadText.innerHTML = message;
		this.Update();
	}

	this.Clear = function() {
		this.loader.parentNode.removeChild(this.loader);
	}

	this.Update = function() {
		this.barGlow.style.width = this.progress * 100 + "%";
	}

	this.Update ();
}