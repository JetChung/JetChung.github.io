var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";;


t = 0;
class obj {
    static x;
    static y;
    static width;
    static height;
    static xVelocity;
    static yVelocity;
    static color;
    static id;

    constructor(x, y, width, height, xVelocity, yVelocity, color, id) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
        this.color = color;
        this.id = id;
        console.log(width);
    }

    draw() {
        ctx.fillStyle = this.color; //"#FF0000";
        box.style.width = this.width + "px";
        box.style.height = this.height + "px";
        box.style.left = this.x + 'px';
        box.style.top = this.y + 'px';
    }

    update() {
        t += 1;

        this.yVelocity += .2;
        if (this.y <= 700 - Number(((box.style.width).replace("px", ""))) + 5 && this.y >= -20) {
            this.y += this.yVelocity;
            //boxPo1 += 1;
        } else {

            this.yVelocity *= -.8;
            this.y += this.yVelocity;


        }
    }
}

let box1 = new obj(10, 10, 20, 20, 0, 0, "#FF0000", "box")


function update() {
    box1.update()
}

function draw() {
    box1.draw()
}
MainLoop.setUpdate(update).setDraw(draw).start();
