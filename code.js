var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["56e787c0-e244-4836-b38d-6d050e61661a","09529538-8c08-4a8b-a9e1-e6ef722d2557","058f0a7b-4ac7-4df0-82f5-a186c1436d90","24387bb9-4705-4ad5-8fde-ed42640b77ff","b1f9042a-7890-483e-8213-1f01ca466a45","f78714a5-3359-4479-8c9a-db158898ba8a"],"propsByKey":{"56e787c0-e244-4836-b38d-6d050e61661a":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":12,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"kvr5t0eDakKgdUYHQeYUIbKRjbfgkEgb","loadedFromSource":true,"saved":true,"sourceSize":{"x":12,"y":12},"rootRelativePath":"assets/56e787c0-e244-4836-b38d-6d050e61661a.png"},"09529538-8c08-4a8b-a9e1-e6ef722d2557":{"name":"animation_1_copy_1","sourceUrl":null,"frameSize":{"x":18,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"Rrv_ZsKgplSYM0muCRj4wscd2w6F1rA7","loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":12},"rootRelativePath":"assets/09529538-8c08-4a8b-a9e1-e6ef722d2557.png"},"058f0a7b-4ac7-4df0-82f5-a186c1436d90":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":7,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"WgIJN8g7Qf.CArh2RgmCUjP7GAvTNK9c","loadedFromSource":true,"saved":true,"sourceSize":{"x":7,"y":7},"rootRelativePath":"assets/058f0a7b-4ac7-4df0-82f5-a186c1436d90.png"},"24387bb9-4705-4ad5-8fde-ed42640b77ff":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"lDKrnYE2y9a14ngBU4tHyN9cFhd6C7Bx","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/24387bb9-4705-4ad5-8fde-ed42640b77ff.png"},"b1f9042a-7890-483e-8213-1f01ca466a45":{"name":"a","sourceUrl":null,"frameSize":{"x":100,"y":2},"frameCount":1,"looping":true,"frameDelay":12,"version":"319cwDS9sNHfgpLp.OV_H25cYCx2XSxf","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":2},"rootRelativePath":"assets/b1f9042a-7890-483e-8213-1f01ca466a45.png"},"f78714a5-3359-4479-8c9a-db158898ba8a":{"name":"i","sourceUrl":null,"frameSize":{"x":2,"y":2},"frameCount":1,"looping":true,"frameDelay":12,"version":"vVMPkYPLaVnVMiwXVXqrxX3yqxDs.urd","loadedFromSource":true,"saved":true,"sourceSize":{"x":2,"y":2},"rootRelativePath":"assets/f78714a5-3359-4479-8c9a-db158898ba8a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var dot = createSprite(200, 50);
dot.setAnimation("i");
dot.scale = 0.01;
var line1 = createSprite(200, 0);
line1.setAnimation("a");
drawSprites();
line1.scale = 4;
var line2 = createSprite(200, 400);
line2.setAnimation("a");
line2.scale = 4;
var bground = createSprite(200, 200);
bground.setAnimation("animation_2");
bground.scale = 4;
var computer = createSprite(200, 50);
computer.setAnimation("animation_1_copy_1");
computer.scale = 3;
var player = createSprite(200, 350);
player.setAnimation("animation_1");
player.scale = 3;
var ball = createSprite(200, 200);
ball.setAnimation("animation_3");
ball.scale = 3;
var scorec = 0;
var scorep = 0;
function draw() {
  background(rgb(0, 200, 0));
  textSize(30);
  stroke("red");
  text("computer:"+scorec, 50, 150);
  textSize(30);
  stroke("blue");
  text("player:"+scorep, 50, 250);
  playerctr();
  points();
  points2();
  ballmove();
  follow();
  drawSprites();
  createEdgeSprites();
  computer.collide(rightEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(player);
  ball.bounceOff(computer);
  computer.collide(leftEdge);
  computer.y = 50;
  function follow(){
  computer.attractionPoint(0.5, (ball.position).x, (dot.position).y);
  }
}
function playerctr() {
  player.x = World.mouseX;
}
function ballmove() {
  if (keyWentDown("space")) {
    ball.velocityX = 5;
    ball.velocityY = 4;
  }
}
function points() {
  if (ball.isTouching(line2)) {
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    scorec++;
  }
}
function points2() {
  if (ball.isTouching(line1)) {
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    scorep++;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
