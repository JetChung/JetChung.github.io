var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var canvasCircles = document.getElementById("canvasCircles");
var ctxC = canvasCircles.getContext("2d");

class obj {

  static x;
  static y;
  static r;
  static f;
  static id;
  static terminal;
  static initAngle;

  constructor(r, f, id, terminal, initAngle) {
    this.r = r;
    this.f = f;
    this.id = id;
    this.terminal = terminal;
    this.initAngle = initAngle
  }

  draw(x_i, y_i) {

    var objectsDiv = document.getElementById("objects");

    if (document.getElementsByClassName(this.id).length == 0) {

      var newDiv = document.createElement('div');

      newDiv.setAttribute("class", this.id);
      if (this.terminal) {
        newDiv.setAttribute("style", "position: absolute;  background: yellow; width:" + 5 + "px; height: " + 5 + "px;border-radius: 50%;");
      } else {
        newDiv.setAttribute("style", "position: absolute;  background: white; width:" + 5 + "px; height: " + 5 + "px;border-radius: 50%;");
      }

      objectsDiv.insertBefore(newDiv, document.getElementById("obj"));
    }

    if (this.terminal) {
      storeLastPosition(x_i, y_i);


      for (var i = 0; i < termPositions.length; i++) {
        var ratio = (i + 1) / termPositions.length;
        ctxC.beginPath();
        var p = 45 * ratio + "%";
        ctxC.fillStyle = "hsl(320, 100%," + p + ")";

        if (i <= 2) {

          ctxC.arc(termPositions[i].x, termPositions[i].y, 6, 0, 2 * Math.PI, true);

        } else {
          ctxC.arc(termPositions[i].x, termPositions[i].y, 5, 0, 2 * Math.PI, true);

        }

        ctxC.fill();
      }




    }


    var obj = document.getElementsByClassName(this.id)[0];
    obj.style.left = x_i + this.x + 'px';
    obj.style.top = y_i + this.y + 'px';



    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.lineWidth = 1;


    ctxC.beginPath();


    ctx.arc(x_i, y_i, this.r, 0, Math.PI * 2, false);

    ctxC.closePath();
    ctx.stroke();
    ctx.fillStyle = "#ffffff";


  }

  update() {
    ctx.clearRect(0, 0, 1000, 700);
    this.y = this.r * Math.sin(this.f * t + this.initAngle) + 5;
    this.x = this.r * Math.cos(this.f * t + this.initAngle) + 5;
    t += 1;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

}

var trailLength = 200;
var termPositions = [];

function storeLastPosition(x, y) {
  termPositions.push({
    x: x,
    y: y
  });

  if (termPositions.length > trailLength) {
    termPositions.shift();
  }
}


function pX(t) {
  return 16 * Math.pow(Math.sin(t * 2 * Math.PI), 3);
}

function pY(t) {
  return 13 * Math.cos(t * 2 * Math.PI) - 5 * Math.cos(2 * t * 2 * Math.PI) - 2 * Math.cos(3 * t * 2 * Math.PI) - Math.cos(4 * t * 2 * Math.PI);
}

var objs = []
var t = 0;
var c = 15;

for (n = -100; n < 100; n++) {
  var m = 1000;
  var x = 0;
  var y = 0;

  //c_n = integral_0 ^ 1 (f(t) * e^(-2pi * i * n * t)) dt
  for (i = 0; i < m; i++) {
    x += 1 / m * (Math.cos(-2 * Math.PI * n * i / m) * pX(i / m) - Math.sin((-2 * Math.PI * n * i / m)) * pY(i / m));
    y -= 1 / m * (Math.cos(-2 * Math.PI * n * i / m) * pY(i / m) + Math.sin(-2 * Math.PI * n * i / m) * pX(i / m));
  }

  var mag = Math.sqrt(x * x + y * y);
  var angle = Math.atan2(y, x);

  if (Math.round(c * mag) > 0) {
    objs.push(new obj(Math.round(c * mag), n / 500, "obj" + n, false, angle));
  }
}

objs.push(new obj(0, 0, "term", true, 0));

function update() {
  for (i in objs) {
    objs[i].update();
  }

}

function draw() {
  currentX = canvas.width / 2;
  currentY = canvas.height / 2;
  for (i in objs) {
    objs[i].draw(currentX, currentY);
    currentX += objs[i].getX()
    currentY += objs[i].getY()
  }

}
MainLoop.setUpdate(update).setDraw(draw).start();