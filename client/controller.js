var context = new (window.AudioContext || window.webkitAudioContext)();
var vol = this.context.createGain();
var user;
var emailId;
var zeroDb;

function playfixedfreq(f,volume){
	var osc = this.context.createOscillator(); // instantiate an oscillator
	osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
	osc.frequency.value = f; // Hz
	this.vol.gain.value = volume; // from 0 to 1, 1 full volume, 0 is muted
	osc.connect(this.vol); // connect osc to vol
	this.vol.connect(this.context.destination); // connect vol to context destination
	osc.start(); // start the oscillator
	osc.stop(this.context.currentTime + 0.5); // stop 2 seconds after the current time
}

function playfixedfreqLoop(f,volume){
	var osc = this.context.createOscillator(); // instantiate an oscillator
	osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
	osc.frequency.value = f; // Hz
	this.vol.gain.value = volume; // from 0 to 1, 1 full volume, 0 is muted
	osc.connect(this.vol); // connect osc to vol
	this.vol.connect(this.context.destination); // connect vol to context destination
	osc.start(); // start the oscillator
	osc.stop(this.context.currentTime + 0.5);
}

function playvarfreq(f, volume, step_size){
	var osc = this.context.createOscillator(); // instantiate an oscillator
	osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
	var slider_position = this.getSliderValue();
	//var step_size = this.getStepSize();
	//osc.frequency.value = parseInt(f) + parseInt(slider_position)*step_size; // Hz
	osc.frequency.value = parseInt(f) + parseInt(slider_position)*step_size; // Hz
	this.vol.gain.value = volume; // from 0 to 1, 1 full volume, 0 is muted
	osc.connect(this.vol); // connect osc to vol
	this.vol.connect(this.context.destination); // connect vol to context destination
	osc.start(); // start the oscillator
	osc.stop(this.context.currentTime + 0.5); // stop 2 seconds after the current time
}
 
/*function getStepSize(){
	var step_sizes = this.document.getElementById("stepsize");
	return step_sizes[step_sizes.selectedIndex].value;
}*/

function getSliderValue(){
	var slider = this.document.getElementById("slider");
	return slider.value;
}

function getVolumeSliderValue(){
	var volume_slider = this.document.getElementById("volume_slider");
	return volume_slider.value;
}

function setUserData(){
	this.user = this.document.getElementById("name").value;
	this.emailId = this.document.getElementById("email").value;
	this.zeroDb = this.document.getElementById("volume_slider").value;
	sessionStorage.setItem("user",this.user);
	sessionStorage.setItem("emailId",this.emailId);
	sessionStorage.setItem("zeroDb",this.zeroDb);
	
	this.window.location = 'index.html';
}

function setVolumeAtL1(ref_vol){
	var l1=ref_vol*Math.pow(10,(25/20));
	return l1;
}

function setVolumeAtL2(ref_vol){
	var l2=ref_vol*Math.pow(10,(35/20));
	return l2;
}

function setVolumeAtL3(ref_vol){
	var l3=ref_vol*Math.pow(10,(45/20));
	return l3;
}

function getZeroDb(){
	return sessionStorage.getItem("zeroDb");
}

function onSubmit(){
	console.log('USER: '+ sessionStorage.getItem("user"));
	console.log('calib: '+ sessionStorage.getItem("zeroDb"));
	var data= 	{'ff':12012412420, 'vf':111124124124120, 'slider_position':13324134124,'date':'Tuesday', 'loudness':45};
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	xmlhttp.open("POST", "http://192.168.1.55:3000/value/", true);
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify(data));
	xmlhttp.onload = function () {
		console.log(this.responseText);
	};
}
	