let mdraw = require("../mihirdraw");
let keycodes = require("../keypress");
export function Player(options) {
  this.x = options.x || 10;
  (this.y = options.y || 10);
  this.width = options.width || 40;
  this.height = options.height || 50;
  this.color = options.color || "#000000";
  this.speed = options.speed || 5;
  this.keycodes = options.keycodes;
  this.direction = options.direction || "right";

  let anyplayer = this;
  anyplayer.nose = {
    width: 15,
    height: 15,
    x: anyplayer.x - 10,
    y: anyplayer.y,
    draw: function () {
      if (anyplayer.direction == "right")
        mdraw.draw_rect(anyplayer.x + 50, anyplayer.y, this.width, this.height);
      else if (anyplayer.direction == "left")
        mdraw.draw_rect(anyplayer.x - 15, anyplayer.y, this.width, this.height);
      else if (anyplayer.direction == "up")
        mdraw.draw_rect(anyplayer.x, anyplayer.y - 15, this.width, this.height);
      else if (anyplayer.direction == "down")
        mdraw.draw_rect(anyplayer.x, anyplayer.y + 50, this.width, this.height);
    },
  };
  this.draw = function () {
    mdraw.change_fill_style(this.color);
    mdraw.draw_rect(this.x, this.y, this.width, this.height);
    this.nose.draw();
  };
}
