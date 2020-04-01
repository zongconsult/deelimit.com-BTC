window.onload = initLinks;

var myPix = new Array(/*"images/cover-art-a-lil-bit-serious-orig.png",
				"images/cover 2222.jpg",
				 "images/lib.png",
				"images/mig.png",
				"images/mig2.png", */
				/*"images/Winchers.jpg",
				"images/final btc.png",*/
				"images/2017-09-08 003.jpg",
				/*"images/btc 2.jpg",*/
				"images/2017-09-08 005.jpg",
				/*"images/btcpup.jpg",
				"images/btc-logo-red.jpg",*/
				"images/Dee Limit.jpg");
var thisPic = 0;

function initLinks() {
	document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick = processNext;
}

function processPrevious() {
	if (thisPic == 0) {
		thisPic = myPix.length;
	}
	thisPic--;
	document.getElementById("myPicture").src = myPix[thisPic];
	return false;
}

function processNext() {
	thisPic++;
	if (thisPic == myPix.length) {
		thisPic = 0;
	}
	document.getElementById("myPicture").src = myPix[thisPic];
	return false;
}
