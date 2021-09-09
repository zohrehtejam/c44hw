var backgroundImg;
var backgroundImg1;
var backgroundImg2, backgroundImg3, backgroundImg4;
var backgroundImg5, backgroundImg6, backgroundImg7 ,backgroundImg8;
var dino, dinoIdleImg, dinoRunImg, dinoJumpImg, dinoDeadImg;
var ground, groundImg, groundInv;
var edges;
var obstacle, obstacleImg, obstacleGroup;
var platform, platformImg, platformGroup;
var platformInv, platformInvGroup;
var skeleton, skeletonImg, skeletonGroup;
var stone, stoneStaticImg, stoneDynamicImg, stoneGroup;
var score = 0;
var life1, life2, life3, lifeImg,life4 , life5;
var life = 3;
var gameState = "menu";
var gameOver, gameOverImg;
var play, playImg;
var fire, fireImg, fireGroup;
var replay, replayImg;
var instructions, instructionsImg;
var back, backImg;
var insText, insTextImg, energyDrinkImg;
var energyDrink , energyDrinkGroup;

function preload(){

    backgroundImg = loadImage("images/bg/background.png");
    backgroundImg1 = loadImage("images/bg/day1.jpg");
    backgroundImg7 = loadImage("images/bg/background8.jpg");
    backgroundImg3 = loadImage("images/bg/background7.jpg");
    backgroundImg4 = loadImage("images/bg/background6.jpg");
    backgroundImg5 = loadImage("images/bg/background5.jpg");
    backgroundImg6 = loadImage("images/bg/background4.png");
    backgroundImg2 = loadImage("images/bg/day2.jpg");
    backgroundImg8 = loadImage("images/bg/background9.png");

    energyDrinkImg = loadImage("images/bg/energy.png")
   
    
    dinoIdleImg = loadAnimation("images/dino/idle/idle1.png");
    dinoRunImg = loadAnimation("images/dino/run/run1.png","images/dino/run/run2.png","images/dino/run/run3.png","images/dino/run/run4.png","images/dino/run/run5.png","images/dino/run/run6.png","images/dino/run/run7.png","images/dino/run/run8.png");
    dinoJumpImg = loadAnimation("images/dino/jump/jump2.png","images/dino/jump/jump3.png","images/dino/jump/jump4.png","images/dino/jump/jump5.png","images/dino/jump/jump6.png","images/dino/jump/jump7.png","images/dino/jump/jump8.png","images/dino/jump/jump9.png","images/dino/jump/jump10.png","images/dino/jump/jump11.png","images/dino/jump/jump12.png");
    dinoDeadImg = loadAnimation("images/dino/dead/dead1.png","images/dino/dead/dead2.png","images/dino/dead/dead3.png","images/dino/dead/dead4.png","images/dino/dead/dead5.png","images/dino/dead/dead6.png","images/dino/dead/dead7.png","images/dino/dead/dead8.png");

    groundImg = loadAnimation("images/bg/ground.png");

    obstacleImg = loadAnimation("images/bg/obstacle.png");
    platformImg = loadAnimation("images/bg/platform.png");
    skeletonImg = loadAnimation("images/bg/skeleton.png");
    stoneStaticImg = loadAnimation("images/bg/stone.png");
    stoneDynamicImg = loadAnimation("images/bg/stone.png","images/bg/stone1.png","images/bg/stone2.png","images/bg/stone3.png","images/bg/stone4.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png","images/bg/stone.png");
    fireImg = loadAnimation("images/bg/fire.png");

    lifeImg = loadAnimation("images/bg/life.png");

    gameOverImg = loadAnimation("images/gameOver.png");
    playImg = loadAnimation("images/play.png");
    replayImg = loadAnimation("images/replay.jpg");
    instructionsImg = loadAnimation("images/instructions.jpg");
    backImg = loadAnimation("images/back.jpg");

    insTextImg = loadAnimation("images/insText.png");

}

function setup(){

    createCanvas(1200,600);

    dino = createSprite(100,500,20,20);
    dino.addAnimation("dinoRun", dinoRunImg);
    dino.addAnimation("dinoIdle", dinoIdleImg);
    dino.addAnimation("dinoJump", dinoJumpImg);
    dino.addAnimation("dinoDead", dinoDeadImg);
    dino.scale = 0.2;
    dino.debug = false;
    dino.setCollider("rectangle",-100,0,420,400);

    ground = createSprite(600,590,1200,20);
    ground.addAnimation("ground", groundImg);
    ground.scale = 1;

    groundInv = createSprite(600,550,1200,20);
    groundInv.visible = false;

    obstacleGroup = new Group();
    platformGroup = new Group();
    platformInvGroup = new Group();
    skeletonGroup = new Group();
    stoneGroup = new Group();
    fireGroup = new Group();
    energyDrinkGroup = new Group();

    score = 0;

    life1 = createSprite(50,50,50,50);
    life1.addAnimation("life", lifeImg);
    life1.scale = 0.3;

    life2 = createSprite(100,50,50,50);
    life2.addAnimation("life", lifeImg);
    life2.scale = 0.3;

    life3 = createSprite(150,50,50,50);
    life3.addAnimation("life", lifeImg);
    life3.scale = 0.3;

    life4 = createSprite(200, 50, 50, 50);
    life4.addAnimation("life", lifeImg);
    life4.scale = 0.3;

    life5 = createSprite(250, 50, 50, 50);
    life5.addAnimation("life", lifeImg);
    life5.scale = 0.3;

    play = createSprite(600,400,50,50);
    play.addAnimation("play", playImg);
    play.scale = 1.2;
    
    gameOver = createSprite(650,300,50,50);
    gameOver.addAnimation("gameOver", gameOverImg);

    replay = createSprite(1150,50,50,50);
    replay.addAnimation("replay", replayImg);

    instructions = createSprite(1150,50,50,50);
    instructions.addAnimation("instructions", instructionsImg);

    back = createSprite(50,50,50,50);
    back.addAnimation("back", backImg);

    insText = createSprite(600,300,30,30);
    insText.addAnimation("insText", insTextImg);
    insText.scale = 0.7
    insText.visible = false;

}

function draw(){

  
    if(score>=0 && score<80){
        background(backgroundImg);
    }
    else if (score>=80 && score<160){
        background(backgroundImg1);
    }
    else if (score >= 160 && score < 240) {
        background(backgroundImg2);
    }
    else if (score >= 240 && score < 320) {
        background(backgroundImg3);
    }
    else if (score >= 320 && score < 400) {
        background(backgroundImg4);
    }
    else if (score >= 400 && score < 480) {
        background(backgroundImg5);
    }
    else if (score >= 480 && score <560 ) {
        background(backgroundImg6);
    }
    else if (score >= 560 ) {
        background(backgroundImg7);
    }
    
   

    


    edges = createEdgeSprites();

    if(gameState === "menu"){
        background(backgroundImg8);
        gameOver.visible = false;
        play.visible = true;
        life1.visible = false;
        life2.visible = false;
        life3.visible = false;
        life4.visible = false;
        life5.visible = false;
        dino.visible = false;
        ground.visible = false;
        replay.visible = false;
        back.visible = false;
        instructions.visible = true;
        insText.visible = false;

        textSize(50)
        fill('red')
     //  text("Dinosaur running game",320,200)

        if(mousePressedOver(instructions)){
            gameState = "instructions";
        }

        if(mousePressedOver(play)){
            gameState = "play";
        }
    } else if(gameState === "instructions"){

        text("Instructions", 600, 300);
        play.visible = false;
        back.visible = true;
        instructions.visible = false;
        insText.visible = true;

        if(mousePressedOver(back)){
            gameState = "menu";
        }

    }else if(gameState === "play"){

        play.visible = false;
        dino.visible = true;
        gameOver.visible = false;
        ground.visible = true;
        groundInv.visible = false;
        replay.visible = false;
        instructions.visible = false;
        insText.visible = false;

    spawnObstacles();
    spawnPlatforms();
    spawnStones();
    spawnFire();
    boostScore();
    spawnEnergyDrink()
   


    ground.velocityX = -5;
    if(ground.x < 0){
        ground.x = ground.width/2;
    }

    dino.collide(groundInv);
    dino.collide(edges[0]);
    dino.collide(edges[1]);
    dino.collide(edges[2]);
    dino.collide(edges[3]);
  // dino.collide(platformInvGroup);
    dino.collide(platformGroup);
    dino.collide(obstacleGroup);
    dino.collide(skeletonGroup);
    
        dino.collide(energyDrinkGroup);

    stoneGroup.collide(ground);

    stoneGroup.collide(obstacleGroup);
    stoneGroup.bounceOff(platformGroup);
    stoneGroup.collide(skeletonGroup);

    //console.log(life)

    for(var i = 0; i < stoneGroup.length; i++){
        stoneGroup.get(i).velocityY = 10;
        stoneGroup.get(i).velocityX = -1;
    }

    dino.velocityY = dino.velocityY + 1;

    if(dino.collide(ground)){
        dino.changeAnimation("dinoRun", dinoRunImg);
    }

    if(keyWentDown("up")){
        dino.velocityY = -20;
        dino.changeAnimation("dinoJump", dinoJumpImg);
    }

    if(keyDown("right")){
        dino.x = dino.x + 10;
    }

    if(keyDown("left")){
        dino.x = dino.x - 10;
    }

    if(fireGroup.collide(obstacleGroup)){
        fireGroup.destroyEach();
        //obstacleGroup.destroyEach();
    }

    if(fireGroup.collide(stoneGroup)){
        fireGroup.destroyEach();
        stoneGroup.destroyEach();
        score += 5;
    }

    if(life>3 && fireGroup.collide(obstacleGroup)){
        fireGroup.destroyEach();
        obstacleGroup.destroy();

    }

    console.log(life)

    if(skeletonGroup.collide(dino)){
        skeleton.destroy();
        score += 10;
    }

    if(platformGroup.isTouching(dino)){
        dino.changeAnimation("dinoIdle", dinoIdleImg);
    }
    if(energyDrinkGroup.isTouching(dino)){
        energyDrinkGroup.destroyEach();       
        
        score+=40  
        if(life<=4){

life++
        }       
    }

    for(var i = 0; i < stoneGroup.length; i++){
        if(stoneGroup.get(i).y > 500){
            stoneGroup.get(i).changeAnimation("stoneDynamic", stoneDynamicImg);
        }
    }

  

   

    if(obstacleGroup.collide(dino)){
        life = life - 1;
        obstacleGroup.destroyEach();
    }

    if(stoneGroup.collide(dino)){
        life = life - 1;
        stoneGroup.destroyEach();
    }
        textSize(20);
        fill("white");
        text("Score: " + score, 1050, 50);


        if (life === 5) {
            life1.visible = true;
            life2.visible = true;
            life3.visible = true;
            life4.visible = true;
            life5.visible = true;

        }

        if (life === 4) {
            life1.visible = true;
            life2.visible = true;
            life3.visible = true;
            life4.visible = true;
            life5.visible = false;
        }

    if(life === 3){
        life1.visible = true;
        life2.visible = true;
        life3.visible = true;
        life4.visible = false;
        life5.visible = false;
    }

    if(life === 2){
        life1.visible = true;
        life2.visible = true;
        life3.visible = false;
        life4.visible = false;
        life5.visible = false;
    }

    if(life === 1){
        life1.visible = true;
        life2.visible = false;
        life3.visible = false;
        life4.visible = false;
        life5.visible = false;
    }

    if(life === 0){
        life1.visible = false;
        life2.visible = false;
        life3.visible = false;
        life4.visible = false;
        life5.visible = false;
        gameState = "end";
    }

    } else if(gameState === "end"){

        groundInv.velocityX = 0;
        ground.velocityX = 0;
        replay.visible = true;
        instructions.visible = false;
        insText.visible = false;

        dino.changeAnimation("dinoDead", dinoDeadImg);
        dino.animation.looping = false;
        dino.collide(groundInv);
        dino.velocityX = 0;
        dino.velocityY = 10;

        obstacleGroup.destroyEach();
        stoneGroup.destroyEach();
        skeletonGroup.destroyEach();
        platformGroup.destroyEach();
        fireGroup.destroyEach();
        energyDrinkGroup.destroyEach();

        score = 0;

        gameOver.visible = true;  

        if(mousePressedOver(replay)){
            gameState = "play";
            life = 3;
            score = 0;
            dino.x = 50;
        }

    }

  
    drawSprites();

}

function spawnObstacles(){

    if(frameCount % 150 === 0){
        obstacle = createSprite(1200,495,20,20);
        obstacle.addAnimation("obstacles", obstacleImg);
        obstacle.scale = 1;
        obstacle.debug = false
        obstacle.velocityX = -5;
        
        obstacleGroup.add(obstacle);
    }

}

function spawnPlatforms(){

    if(frameCount % 250 === 0){
        platform = createSprite(1150, random(300,400), 180, 20);
        //platformInv = createSprite(platform.x, platform.y, 180, 20);
        platform.velocityX = -2;
       // platformInv.velocityX = -2;
        platform.debug = false;
        platform.addAnimation("platform", platformImg);
       // platformInv.visible = false;
        platform.scale = 0.5;

        if(frameCount % 500 === 0){
            skeleton = createSprite(platform.x, platform.y - 40, 20, 20);
            skeleton.addAnimation("skeleton", skeletonImg);
            skeleton.scale = 0.7;
            skeleton.debug = false;
            skeleton.velocityX = -2;

            skeletonGroup.add(skeleton);
        }

        platformGroup.add(platform);
       
    }

}

function spawnStones(){

    if(frameCount % 100 === 0){
        stone = createSprite(random(500,1200), 0, 20, 20);
        stone.addAnimation("stoneStatic", stoneStaticImg);
        stone.addAnimation("stoneDynamic", stoneDynamicImg);
        stone.velocityY = 5;
        stone.velocityX = 500
        stone.scale = 0.25;
       // stone.debug = true;
        stone.setCollider("rectangle", 0, 0, 200, 200);
        stone.lifetime = 300;


        stoneGroup.add(stone);        
    }

}



function spawnEnergyDrink() {

    if (frameCount % 800 === 0) {
        energyDrink = createSprite(1500, random(300,400), 20, 20);
        energyDrink.addImage("energy", energyDrinkImg);
       
        
       // energyDrink.velocityY = 5;
        energyDrink.velocityX = -5;
        energyDrink.scale = 0.25;
        energyDrink.debug = false;
        energyDrink.setCollider("rectangle", 0, 0, 200, 400);
        energyDrink.lifetime = 300;
        //energyDrink.debug = true;

        energyDrinkGroup.add(energyDrink);
    }

}


function spawnFire(){

    if(keyWentDown("space")){
        fire = createSprite(dino.x, dino.y, 20, 20);
        fire.addAnimation("fire", fireImg);
        fire.scale = 0.3;
        fire.visible = false;
        fire.lifetime = 150;
        fire.velocityX = 10;
        fire.visible = true;
       // fire.debug = true

        fireGroup.add(fire);
    }

}

function boostScore(){

    if(Math.round(score % 50) === 0){
        ground.velocityX = ground.velocityX * 1.01;
        for(var i = 0; i < platformGroup.length; i++){
            platformGroup.get(i).velocityX = platformGroup.get(i).velocityX * 1.01;
        }
      //  for(var i = 0; i < platformInvGroup.length; i++){
        //    platformInvGroup.get(i).velocityX = platformInvGroup.get(i).velocityX * 1.01;
       // }
        for(var i = 0; i < stoneGroup.length; i++){
            stoneGroup.get(i).velocityY = stoneGroup.get(i).velocityY * 1.01;
        }
        for(var i = 0; i < skeletonGroup.length; i++){
            skeletonGroup.get(i).velocityX = skeletonGroup.get(i).velocityX * 1.01;
        }
        for(var i = 0; i < obstacleGroup.length; i++){
            obstacleGroup.get(i).velocityX = obstacleGroup.get(i).velocityX * 1.01;
        }
    }

}


