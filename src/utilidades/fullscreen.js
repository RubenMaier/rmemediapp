const { detect } = require('detect-browser');
const browser = detect();

function IsFullScreen(){
	switch (browser && browser.name) {
	  case 'chrome':
			return document.webkitIsFullScreen;
	  case 'firefox':
	    return document.mozFullScreen;
	  case 'edge':
	    return document.webkitIsFullScreen;
	  default:
	    console.log('not supported');
	}
}

function RequestFullScreen(element){
	switch (browser && browser.name) {
	  case 'chrome':
			element.player.webkitRequestFullscreen();
			break;
	  case 'firefox':
	    element.player.mozRequestFullScreen();
			break;
	  case 'edge':
	    element.player.webkitRequestFullscreen();
			break;
	  default:
	    element.player.webkitRequestFullscreen();
	}
}

function ExitFullScreen(){
	switch (browser && browser.name) {
	  case 'chrome':
			document.webkitExitFullscreen();
			break;
	  case 'firefox':
	    document.mozCancelFullScreen();
			break;
	  case 'edge':
	    document.webkitExitFullscreen();
			break;
	  default:
	    document.msExitFullscreen();
	}
}
export { 
  IsFullScreen,
  RequestFullScreen,
  ExitFullScreen 
}