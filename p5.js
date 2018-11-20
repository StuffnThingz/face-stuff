function setup () {
  createCanvas (windowWidth, windowHeight);
  background ('red');
}


function mousePressed() {
    var fs = fullscreen();
    fullscreen(!fs);
}



function draw () {
  text (emo);
}
