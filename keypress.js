

var keys = {} //new object variable for keystrokes//

window.addEventListener("keydown", function (e) {
  // listens to key down as a function which is defined within the curley brackets//
  console.log('e.keyCode', e.keyCode);
  console.log('keys', keys);  
  keys[e.keyCode] = null;
  console.log('keys new value', keys);

  e.preventDefault(); //prevents default function for arrows//
});

window.addEventListener("keyup", function (e) {
  delete keys[e.keyCode]; //event listner for no more leyboard pressdown
});

export function input(poop) {
  //creates new function named input for poop variable//
  if (poop.keycodes[0] in keys) {
    poop.x -= poop.speed; 
    poop.direction = "left"; 
  }
  if (poop.keycodes[1] in keys) {
    poop.x += poop.speed;
    poop.direction = "right";
  }
  if (poop.keycodes[2] in keys) {
    poop.y -= poop.speed;
    poop.direction = "up";
  }
  if (poop.keycodes[3] in keys) {
    poop.y += poop.speed;
    poop.direction = "down";
  }
}



