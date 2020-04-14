let mdraw = require("../mihirdraw");
let keycodes = require("../keypress");
export function bullet(options) {
  this.x = options.x || 100;
  this.y = options.y || 10;
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.color = options.color || "#ff0000";
  this.speed = options.speed || 15;
  this.keycodes = options.keycodes;
  this.direction = options.direction || "right";

  this.draw = function () {
    mdraw.change_fill_style(this.color);
    mdraw.draw_rect(this.x + 100, this.y, this.width, this.height);
  };
}

/*if (this.direction == "right")
  mdraw.draw_rect(this.x + 90, this.y, this.width, this.height);
else if (this.direction == "left")
  mdraw.draw_rect(this.x - 15, this.y, this.width, this.height);
else if (this.direction == "up")
  mdraw.draw_rect(this.x, this.y - 15, this.width, this.height);
else if (this.direction == "down")*/
