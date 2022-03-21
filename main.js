nosex=" ";
nosey=" ";

function preload() {
	world_start = loadSound("world_start.wav");
	jump= loadSound("jump.wav");
	kick= loadSound("kick.wav");
	mariodie=loadSound("mariodie.wav");
	gameover=loadSound("gameover.wav");
	coin= loadSound("coin.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canva");
	instializeInSetup(mario);
	vid=createCapture(VIDEO);
	vid.size(800,400);
	vid.parent("console");
	pwapk=ml5.poseNet(vid);
	pwapk.on("pose",getem);
}

function getem (results) {
	if (results.length>0) {
		console.log("after results there is a dot , today you look likr a beautiful pot ;)");
		console.log(results);
		nosex= results[0].pose.nose.x;
		nosey= results[0].pose.nose.y;
	}
}

function draw() {
	game();
}






