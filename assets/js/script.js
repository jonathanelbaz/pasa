var pos = 0;
var speed = 75;
var typed = document.querySelector(".typed").innerText;
console.log(typed);

// empty the typed from span
document.querySelector(".typed").innerText = '';

// typing function
function type() {
    if(pos < typed.length) {
        document.querySelector('.typed').innerHTML += typed.charAt(pos);
        pos++;
        setTimeout(type, speed); // call this function again to type all letters
    } 
    // else {
    //     setTimeout(erase, speed);
    // }
}

//start type
setTimeout(type, speed);

// erase function
function erase() {
    if(pos >= 0) {
        var temp = typed.substring(0, pos);
        document.getElementById('typed').innerText = temp;
        pos--;
        setTimeout(erase, speed);
    } else {
        // start type again
        setTimeout(type, speed);
    }
}

// Star background

function starBackground(){
    
    const Star = function (x, y, z) {

    this.x = x; this.y = y; this.z = z;

    this.size = 25;

};

var context = document.querySelector("canvas").getContext("2d");

var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;

var stars = new Array();

var max_depth = 7500;

for (let index = 0; index < 200; index++) stars[index] = new Star(Math.random() * width, Math.random() * height, index * (max_depth / 200));

function loop() {

    window.requestAnimationFrame(loop);

    height = document.documentElement.clientHeight;
    width = document.documentElement.clientWidth;

    context.canvas.height = height;
    context.canvas.width = width;

    context.fillStyle = "rgba(202, 202, 202, 1.0)";
    context.fillRect(0, 0, width, height);

    for (let index = stars.length - 1; index > -1; index--) {

        let star = stars[index];

        star.z -= 5;

        if (star.z < 0) {

            stars.push(stars.splice(index, 1)[0]);
            star.z = max_depth;
            continue;

        }

        let translate_x = width * 0.5;
        let translate_y = height * 0.5;

        let field_of_view = (height + width) * 0.5;

        let star_x = (star.x - translate_x) / (star.z / field_of_view) + translate_x;
        let star_y = (star.y - translate_y) / (star.z / field_of_view) + translate_y;

        let scale = field_of_view / (field_of_view + star.z);

        let color = Math.floor(scale * 256);

        context.fillStyle = "rgba(" + color + "," + color + "," + color + "," + scale + ")";
        context.fillRect(star_x, star_y, star.size * scale, star.size * scale);

    }

}

loop();

}

window.addEventListener("resize", starBackground);

starBackground();

