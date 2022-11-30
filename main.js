leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
          video = createCapture(VIDEO);
          video.size(450, 450);
          canvas = createCanvas(450, 450);
          canvas.position(600, 150);
          poseNet = ml5.poseNet(video, modelLoaded);
          poseNet.on('pose', gotPoses);
}
function draw() {
          background('lightgreen');
          text('This A Font Manipulator App.', 100, 200);
          textSize(difference);
          fill('red')
}
function modelLoaded() {
          console.log("Model Loaded");
}
function gotPoses(results) {
          if (results.length > 0) {
                    console.log(results);
                    leftWristX = results[0].pose.leftWrist.x;
                    rightWristX = results[0].pose.rightWrist.x;
                    difference = floor(leftWristX - rightWristX);

          }
}