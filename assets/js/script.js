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

// Make avatar height same as width

function fixsize() {
    var cw = $('.av-img').width();
    $('.av-img').css({'height':cw+'px'});
}

window.addEventListener("resize", fixsize);

fixsize();



