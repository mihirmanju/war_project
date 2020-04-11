var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export function clear_screen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function change_fill_style(color){
    ctx.fillStyle = color;
}

export function draw_rect(x, y, width, height){
    ctx.fillRect(x, y, width, height);//Player value//
}
