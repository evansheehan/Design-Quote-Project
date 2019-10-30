//Variables
document.querySelector('.box');
var colors = ['#033E8C', '#02A3EF', 'F9DB50', 'BF1304', '730C02', '#02A3EF'];
var fonts = ['roboto', 'oswald', 'quicksand', 'merriweather', 'shrikhand', 'song myung'];
var appendString = "Design is knowing which ones to keep";

//Functions
function intervalFunc() {
    var i = 0;
    var interval = setInterval(function () {
        $('.box').css('background-color', colors[i]);
        $('#initial').css('font-family', fonts[i]);
        i++;
        console.log(colors[i]);
        if (i > colors.length) {
            clearInterval(interval);
        }
    }, 1500);
}

setTimeout(function () {
    $('#initial').css('width', '30vw');
    $('#initial').css('height', 'auto');
}, 17000);

//Execute when page is loaded
$(document).ready(function () {
    console.log("working!");

    setTimeout(function () {
        intervalFunc();
    }, 5500);

    //Text animation
    var initial = anime({
        targets: '#initial',
        fontSize: {
            value: '*=0.25',
            delay: 5000,
            duration: 2000,
            easing: 'easeOutCirc',
        },
        color: {
            value: '#FFF',
            delay: 7200
        }

    });

    //First box animation, delay 4.4 seconds
    setTimeout(function () {
        var boxSlide = anime({
            targets: '.box',
            left: [{
                    value: '50%',
                    duration: 500,
                    easing: 'easeOutCirc',
                    elasticity: 200
    },
                {
                    value: '-20%',
                    delay: 500,
                    duration: 500,
                    easing: 'easeOutCirc',
                    elasticity: 200
        }],
            loop: 5
        });
    }, 7000);

    //Span across animation
    setTimeout(function () {
        $('#initial').css('font-family', 'roboto');
        $('.box').css('left', '115%');
        $('.box').css('transform', 'translate(0,-50%)');

        var boxSpan = anime({
            targets: '.box',
            width: {
                value: '100vw',
            },

            left: {
                value: '0'
            },

            easing: 'easeOutCirc',
            duration: 600

        });
    }, 15000);

    //Span full page animation
    setTimeout(function () {
        var boxFull = anime({
            targets: '.box',
            height: '*=4.5',
            duration: 3000,
            easing: 'easeOutCirc'
        });
    }, 16000);

    //Fade in rest of quote
    setTimeout(function () {
        $('#initial').append('<div class="test"><br>Design is knowing which ones to keep.</div>').animate();
        $('.test').hide().fadeIn(2000);
    }, 24000);

    //Fade in quotee
    var fadeInQuotee = anime({
        targets: '.corner',
        delay: 28000,
        duration: 6000,
        opacity: '1'
    });
    
    //Move dilbert up to 400%
    var moveDilbert = anime({
       targets: '.corner',
        backgroundPositionY: '420%',
        delay: 30000,
        easing: 'easeOutQuad',
        duration: 3000
    });

    //Typed.js code
    var typed = new Typed('.typed', {
        strings: ['Cr^100eat^50ivi^200t^25y^15000 is allowing yourself to make mistakes^500.'],
        typeSpeed: 100
    })

    setTimeout(function () {
        $('.typed-cursor').css('opacity', '0');
    })

});
