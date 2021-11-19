function preload(){}
    function setup() {
      canvas = createCanvas(800, 800);
      canvas.center();
      video = createCapture(VIDEO);
      video.hide();
    }
    
    function draw() {
      image(video,0,0,500,500);
  circle(30,50,50);
  stroke(255,0,0);
  fill(255,0,0);
  
  circle(30,360,50);
  stroke(255,0,0);
  fill(255,0,0);
  
  circle(500,50,50);
  stroke(255,0,0);
  fill(255,0,0);
  
  circle(500,360,50);
  stroke(255,0,0);
  fill(255,0,0);
  
  stroke(255,0,0);
  fill(255,0,0);
  rect(30,340,480,30);

  stroke(255,0,0);
  fill(255,0,0);
  rect(30,35,480,30);
  
  stroke(255,0,0);
  fill(255,0,0);
  rect(18,60,30,300);
  
  stroke(255,0,0);
  fill(255,0,0);
  rect(488,60,30,300);
    }

    function take_snapshot(){
        save('Result.png');
    }