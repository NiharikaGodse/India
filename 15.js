noseX=0;
noseY=0;

function preload(){
    img= loadImage('15.png');
}

function setup(){
    canvas=createCanvas(700,500);
    canvas.position(380,280);    
    video=createCapture(VIDEO);
    video.size(850,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelLaoded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 700, 500);
    image(img,noseX-180,noseY-10,70,50);
}

function take_snapshot(){
    save('FlagFilterPic.jpg');
}

function  go_16(){
    window.location='16.html';
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    }
}

function modelLaoded(){
    console.log("poseNet Initialised");
}
