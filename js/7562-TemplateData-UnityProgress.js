function UnityProgress(gameInstance, progress) {
	if(progress == "complete"){
		document.getElementById("loadingBox").style.display = "none";
		return;
	}

	if(progress > 0){
		if (progress == 1) {
			SetMessage("Preparing...");
			document.getElementById("bgBar").style.display = "none";
			document.getElementById("progressBar").style.display = "none";
		}

		UpdateProgressUI(progress);
	}
}

function UpdateProgressUI(progress) {
	document.getElementById("progressBar").style.width = 200 * Math.max(0, Math.min(progress, 1)) + "px";
}

function SetMessage(message) { 
	console.log("set message "+message);
	document.getElementById("loadingInfo").innerHTML = message;
}