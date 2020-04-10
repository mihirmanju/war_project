
var keys = {};//new arraay variable for keystrokes//

window.addEventListener("keydown", function (e) {// listens to key down as a function which is defined within the curley brackets//
  keys[e.keyCode] = true;
  e.preventDefault();//prevents default function for arrows//
});

window.addEventListener("keyup", function (e) {
  delete keys[e.keyCode];//event listner for nome more leyboard pressdown
});


function input(player) { //creates new function named input for player variable//
    if (37 in keys) {
      player.x -= player.speed;//reduces x value by 5 as stated in speed//
      player.direction = "left";//with left keypress//
    }
    if (39 in keys) {
      player.x += player.speed;
      player.direction = "right";
    }
    if (38 in keys) {
      player.y -= player.speed;
      player.direction = "up";
    }
    if (40 in keys) {
      player.y += player.speed;
      player.direction = "down";
    }
  }


export {
    input
}