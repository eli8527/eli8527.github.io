var lemniscatesArray = [];
var lemCount = 3;
var cBG = Math.random()*255;
var t = 0;
var stepSize = 1;
var br = 255;
var url = "https://api.apixu.com/v1/current.json?key=c1412fa6ab40430fbb783311171104&q=08544";

function setup() { 
  noCursor();
  background(0);
  createCanvas(windowWidth-1, windowHeight-1);
  colorMode(HSB, 255);
  
  loadJSON(url, gotWeather);
  setSizeFromTime();  
  
  // 5 min
  setInterval(function() {
    loadJSON(url, gotWeather);
  }, 300000);
  
  // 30 sec
  setInterval(function() {
    setSizeFromTime();
  }, 30000);
  
  frameRate(30);

  for (var i = 0; i < lemCount; i++) {
    var l = new LemRunner();
    l.setup(i*33+100);
    lemniscatesArray.push(l);
  }
} 

function draw() { 
  t += .001;
  cBG = (cBG + noise(t)) % 255;
  background(cBG, 0, 0);
  
  for (var i = 0; i < lemCount; i++) {
    lemniscatesArray[i].display();
  }
}

function LemRunner() {
	this.t = Math.random()*1000;
	this.t0 = Math.random()*1000;
	this.t1 = Math.random()*1000;
	this.t2 = Math.random()*1000;
  
	this.c1 = Math.random()*255;
	this.c2 = Math.random()*255;
  
  this.pointsArray = [];
  
  this.setup = function(size) {
    // var length = 150;
		var length = size; //Math.floor(random(100, 200));
  	for (var i = 0; i < length; i++) {
			this.t += .01;
    	this.t0 += .0127 + noise(this.t)/1000;
    	this.t1 += .02839 + noise(this.t0)/1000;
    	this.t2 += .01032 + noise(this.t1)/1000;
    	
      var r = Math.min(width/4, height/4);
    	var ccircle = this.getCirc(width/2, height/2, r, this.t0);
    	var cpair = this.getLem(ccircle[0], ccircle[1], r/2, this.t1);
    	var outPair = this.getLem(cpair[0], cpair[1], r/4, this.t2);
  
    	this.pointsArray.push(outPair);
  	}
  }
  
  this.display = function() {
  	this.t += .01*stepSize;
  	this.t0 += (.0127 + noise(this.t)/1000)*stepSize;
    this.t1 += (.02839 + noise(this.t0)/1000)*stepSize;
    this.t2 += (.01032 + noise(this.t1)/1000)*stepSize;
  	
    var r = Math.min(width/4, height/4);
  	var ccircle = this.getCirc(width/2, height/2, r, this.t0);
  	var cpair = this.getLem(ccircle[0], ccircle[1], r/2, this.t1);
  	var outPair = this.getLem(cpair[0], cpair[1], r/4, this.t2);
  
  	this.pointsArray.push(outPair);
  
  	this.pointsArray.shift();
  
  	this.c1 = (this.c1 + noise(this.t)/20) % 255;
  	// this.c2 = (this.c2 + noise(this.t+100)) % 255;
  	fill(color(this.c1, 255, br, 127));
    noStroke();
  	// stroke(color(this.c1, 255, 255, 127));
  
  	// beginShape(TRIANGLE_FAN);
    beginShape();
  	for (var i = 0; i < this.pointsArray.length; i++) {
  		vertex(this.pointsArray[i][0], this.pointsArray[i][1]); 
  	}
  	endShape(CLOSE);
  }
  
  this.getLem = function(cx, cy, a, t) {
    var x = (a*Math.sqrt(2)*Math.cos(t))/(Math.sin(t)*Math.sin(t)+1);
    var y = (a*Math.sqrt(2)*Math.cos(t)*Math.sin(t))/(Math.sin(t)*Math.sin(t)+1);
    return [x+cx, y+cy];
	}
  
  this.getCirc = function(cx, cy, r, t) {
    var x = r*Math.cos(t);
    var y = r*Math.sin(t);
    return [x+cx, y+cy];
	}

}

function gotWeather(weather) {
	var cloud = weather.current.cloud;
  
  var ss = map(stepSize, 0.25, 1.25, 100, 0);
  br = map(cloud+ss, 0, 200, 255, 255/5);
  // console.log("Brightness: " + br);
}

// return scaled time from 0.25 to 1.25
function setSizeFromTime() {
	var t = hour()*60 + minute();
  
  var st = abs(sin((PI/1440.0)*t - 180*PI/1440)); // 3 is 0; 15 is 1
  
  stepSize =  map(st, 0, 1, 0.25, 1.25);
  // console.log("Step Size:" + stepSize);
  
}

function mouseClicked() {
  var ds = year() + '' + month() + '-' + day() + ' ' + hour() + '.' + minute() + '.' + second();
  // console.log(ds);
  saveCanvas('lemniscate ' + ds, 'jpg');
}