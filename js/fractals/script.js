//define some constants
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var offset = 40;
var prev = [offset, offset],
  curr;

//calculating coordinates of the hilbert curve
//get last 2 bits in binary representation to see where it goes in smaller node
function last2bits(x) {
  return (x % 4);
}
//had to look up some algorithm stuffs here so not really sure why bit shift...
function hindex2xy(hindex, N) {
  var positions = [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 0]
  ];

  var tmp = positions[last2bits(hindex)];
  hindex = (hindex >>> 2);

  var x = tmp[0];
  var y = tmp[1];

  for (var n = 4; n <= N; n *= 2) {
    var n2 = n / 2;

    switch (last2bits(hindex)) {
      case 0:
        tmp = x;
        x = y;
        y = tmp;
        break;

      case 1:
        x = x;
        y = y + n2;
        break;

      case 2:
        x = x + n2;
        y = y + n2;
        break;
      case 3:
        tmp = y;
        y = (n2 - 1) - x;
        x = (n2 - 1) - tmp;
        x = x + n2;
        break;
    }

    hindex = (hindex >>> 2);
  }
  return [x, y];
}

//colors
function HSVtoHex(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
    s = h.s, v = h.v, h = h.h;
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;
      break;
    case 1:
      r = q, g = v, b = p;
      break;
    case 2:
      r = p, g = v, b = t;
      break;
    case 3:
      r = p, g = q, b = v;
      break;
    case 4:
      r = t, g = p, b = v;
      break;
    case 5:
      r = v, g = p, b = q;
      break;
  }
  return "#" + componentToHex(Math.round(r * 255)) + componentToHex(Math.round(g * 255)) + componentToHex(Math.round(b * 255));

}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

//helper function to sleep
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

//helper function to draw lines (also animations)
function drawLine(x1, y1, x2, y2, ratio) {
  if (y1 == y2 && x2 > x1) {
    //console.log("right");
    ctx.fillRect(offset + x1, offset + y1, ratio * (x2 - x1), 5);
  }
  if (y1 == y2 && x2 < x1) {
    //console.log("left");
    ctx.fillRect(offset + x2, offset + y2, ratio * (x1 - x2), 5);


  }
  if (x1 == x2 && y1 > y2) {
    // console.log("up");
    ctx.fillRect(offset + x2, offset + y2, 5, ratio * (y1 - y2 + 5));

  }
  if (x1 == x2 && y1 < y2) {
    // console.log("down");
    //ctx.fillRect(x2,y2,50,y2-1);

    ctx.fillRect(offset + x2, offset + y2, 5, ratio * (y1 - y2));

  }
}

//function to draw each node
async function reet(i, N) {

  ctx.fillStyle = HSVtoHex(((i / (N * N))), 1, .5);
  var ratio = 1;
  //console.log(255-255*i/(N*N));
  curr = hindex2xy(i, N);
  //ctx.fillRect(20, 20, 150, 100);
  //ctx.fillRect(30,520,50,50);
  var size = 600 / (N - 1);
  var x1 = prev[0] * size;
  var y1 = (prev[1] * size);
  var x2 = Math.abs(size * (curr[0]));
  var y2 = Math.abs(size * (curr[1]));
  //drawLine(x1,y1,x2,y2,0,HSVtoHex(((i / (N * N))), 1, 1))

  ctx.moveTo(x1, y1);
  //works accidentally
  sleep(100).then(() => {
    ctx.fillRect(offset + x1, offset + y1, 5, 5);

    ctx.fillStyle = HSVtoHex(((i / (N * N))), 1, .5);
    drawLine(x1, y1, x2, y2, 1);

  });

  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.beginPath();
  ctx.stroke();
  //console.log(x1,y1);
  prev = curr;

  //sleep(100);
}

function makeAHomie() {
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var n = document.getElementById("reet1").value;
  var N = Math.pow(2, n);
  ctx.beginPath();
  ctx.stroke();
  //reet(4,16);
  //reet(5,16);
  //reet(6,16);
  for (var i = 0; i < N * N; i += 1) {
    //sleep(100);
    reet(i, N);
    // if (ratio<1) {
    //   requestAnimationFrame(function() {
    //     reet(i, N, .5);
    //     ratio += .1;
    //   });
    // }


  }
}
