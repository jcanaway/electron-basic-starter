var app = require('app'),
	browser = require('browser-window'),
	window = new Object();

app.on('ready', function() {
	window.main = new browser({
		title: null,
		width: 630,
		height: 360,
		center: true
	});
	
	window.main.on('close', function() {
		delete window.main;
	});
	
	window.main.loadUrl('file://' + __dirname + '/index.html');
	window.main.show();
	
	window.main.openDevTools({"detach":true});
});

app.on('window-all-closed', function() {
	app.quit();
});