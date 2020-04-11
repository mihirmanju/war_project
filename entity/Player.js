let mdraw = require("../mihirdraw");
let keycodes = require("../keypress");
export function Player(options) {
  this.x = options.x || 10;
  color: "#44ee11", (this.y = options.y || 10);
  this.width = options.width || 40;
  this.height = options.height || 50;
  this.color = options.color || "#000000";
  this.speed = options.speed || 5;
  this.keycodes = options.keycodes;
  this.direction = options.direction || "right";

  let adam = this;
  adam.nose = {
    width: 15,
    height: 15,
    x: adam.x - 10,
    y: adam.y,
    draw: function () {
      if (adam.direction == "right")
        mdraw.draw_rect(adam.x + 50, adam.y, this.width, this.height);
      else if (adam.direction == "left")
        mdraw.draw_rect(adam.x - 15, adam.y, this.width, this.height);
      else if (adam.direction == "up")
        mdraw.draw_rect(adam.x, adam.y - 15, this.width, this.height);
      else if (adam.direction == "down")
        mdraw.draw_rect(adam.x, adam.y + 50, this.width, this.height);
    },
  };
  this.draw = function () {
    mdraw.change_fill_style(this.color);
    mdraw.draw_rect(this.x, this.y, this.width, this.height);
    this.nose.draw();
  };
}
