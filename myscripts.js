var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var keypress = require("./keypress.js");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function Box(options) {
  this.x = options.x || 10;  color: "#44ee11",
  this.y = options.y || 10;
  this.width = options.width || 40;
  this.height = options.height || 50;
  this.color = options.color || "#000000";
  this.speed = options.speed || 5;
  this.direction = options.direction || "right";
}

var player = new Box({
  X: 10,
  y: 10,
  width: 50,
  height: 50,
  color: "red",
  speed: 5,
})






function drawBox(box) { //clears screen and redraws by calling drawbox//
  ctx.fillStyle = box.color;//fills the box//
  ctx.fillRect(box.x, box.y, box.width, box.height);//box value//
}

function update() {
  keypress.input(player);
}

function draw() { //clears thd whole screen before each frame and calls drawbox function//
  ctx.clearRect(0, 0, canvas.width, canvas.height);
             //clears the whole canvas//
  drawBox(player);// redwars the player in the next x,y value//
}

function loop() {   //this function does the looping and//
                    // also loops other function in it//
  update();         //this function updates after keypress//
  draw();          //draw and redraw//
  window.requestAnimationFrame(loop); //runs loop for refreshing the page//
}

loop(); // things get started reverse from here//























// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// function draw() {

// }
// setInterval(draw, 10);

// ctx.strokeStyle = 'green';
// ctx.fillStyle = "#008000";
// ctx.fillRect(20, 20, 25, 20);
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(50, 200, 25, 20);
