var pos = 0;
var speed = 90;
var typed = document.querySelector(".typed").innerText;
console.log(typed);

// empty the typed from span
document.querySelector(".typed").innerText = '';

// typing function
function type() {
    if (pos < typed.length) {
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
    if (pos >= 0) {
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
    $('.av-img').css({ 'height': cw + 'px' });
}

window.addEventListener("resize", fixsize);

fixsize();

// light night toggle

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        $('#light').addClass('hide');
        $('#night').removeClass('hide')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        $('#night').addClass('hide');
        $('#light').removeClass('hide')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 300)
}

// menu marker animation

function menuChange() {
    if ($('#hori').is(':visible')) {
        var marker = document.querySelector('#marker');
        var item = document.querySelectorAll('nav a');

        function indicator(e) {
            marker.style.left = e.offsetLeft + "px";
            marker.style.width = e.offsetWidth + "px";
        }

        item.forEach(link => {
            link.addEventListener('mouseover', (e) => {
                indicator(e.target);
            })
        })
    }
}

$(window).resize(function () {
    marker.style.left = 0;
    marker.style.width = 0;
    menuChange();
});

menuChange();



