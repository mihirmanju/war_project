let keypress = require("./keypress");
let Player = require("./entity/Player").Player;
let bullet = require("./entity/bullet").bullet;
let mdraw = require("./mihirdraw");
console.log(Player);

var player1 = new Player({
  x: 10,
  y: 10,
  width: 50,
  height: 50,
  color: "red",
  speed: 50,
  keycodes: [37, 39, 38, 40],
});

var player2 = new Player({
  x: 100,
  y: 10,
  width: 50,

  speed: 5,
  keycodes: [65, 68, 87, 83],
});

const bullet1 = new bullet();

function update() {
  keypress.input(player1);
  keypress.input(player2);
}

function draw() {
  //clears thd whole screen before each frame and calls drawPlayer function//
  //clears the whole canvas//
  mdraw.clear_screen();
  player1.draw(); // redwars the player1 in the next x,y value//
  player2.draw(); // redwars the player1 in the next x,y value//
  bullet1.draw();
}

function loop() {
  //this function does the looping and//
  // also loops other function in it//
  update(); //this function updates after keypress//
  draw(); //draw and redraw//
  window.requestAnimationFrame(loop); //runs loop for refreshing the page//
}

loop(); // things get started reverse from here//
