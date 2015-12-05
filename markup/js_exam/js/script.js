//timerVariables
var clocktimer;
var dateObj;
var ds;
var ms;
var readout = '';
var s = 0,
    ts = 0,
    ms = 0,
    timerFlag = true,
    init = 0;
//clearTimer
function clearСlock() {
    clearTimeout(clocktimer);
    s = 0;
    ts = 0;
    ms = 0;
    init = 0;
    timerFlag = true;
    readout = '00.00';
    document.TestForm.stopwatch.value = readout;
}
//startTimer
function startTIME() {
    var cdateObj = new Date();
    var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    if (t > 999) {
        s++;
    }

    ts = parseInt((ms / 100) + s);
    if (ts >= 2) {
        ts = 2;
    }

    ms = Math.round(t / 10);
    if (ms > 99) {
        ms = 0;
    }
    if (ms == 0) {
        ms = '00';
    }
    if (ms > 0 && ms <= 9) {
        ms = '0' + ms;
    }
    if (ts > 0) {
        ds = ts;
        if (ts < 10) {
            ds = '0' + ts;
        }
    } else {
        ds = '00';
    }


    readout = ds + '.' + ms;
    if (timerFlag == true) {
        document.TestForm.stopwatch.value = readout;
    }
    clocktimer = setTimeout("startTIME()", 1);
}
//функция для паузы
function pause() {
    if (init == 0) {
        dateObj = new Date();
        startTIME();
        init = 1;
    } else {
        if (timerFlag == true) {
            timerFlag = false;
        } else {
            timerFlag = true;
        }
    }
}
var playerShoot = false;


var Gunman = function (options) {


    $('.button_restart').addClass('undisplay');
    $('.button_next_level').addClass('undisplay');

    /*function Timer() {
        var timer = {
            startTime: (new Date()).valueOf(),
            currentTime: (new Date()).valueOf(),
            inervalId: null,
            interval: setInterval(function () {
                timer.currentTime = (new Date).valueOf();
            }, 100)
        };

        function MyDateInterval(interval) {
            var time = {};
            time.interval = interval;
            time.s = Math.floor(interval / 1000) % 60 || 0;
            time.ms = (Math.floor(interval / 100));
            return time;
        }


        Object.observe(timer, function () {
            var interval = new MyDateInterval(timer.currentTime - timer.startTime);
            $('.player_timer').text(
                interval.s + ' : ' + interval.ms
            );
        });



    };*/

    var currentGunman = options || 1;

    this.move = function () {
        $('#startGame').addClass('hide');
        $('#credits').addClass('hide');
        $('#gunman').addClass('gunman_' + currentGunman + '_walk');

    };


    this.stand = function () {
        function gunmanStanding() {
            $('#gunman').removeClass('gunman_' + currentGunman + '_walk');
            $('#gunman').addClass('gunman_' + currentGunman + '_standing');
            Timer();
        }
        $('#gunman').on('transitionend webkitTransitionEnd oTransitionEnd', gunmanStanding);

    };

    function shoot() {
        $("#gunman").on('click', function () {
            $('#gunman').removeClass('gunman_' + currentGunman + '_standing');
            $('#gunman').addClass('gunman_' + currentGunman + '_falling');
            $('.message').addClass('hide');
            playerShoot = true;

        });
    };


    this.fire = function () {
        setTimeout(shoot, 5000);
        setTimeout(function () {
            $('.message').removeClass('hide');
        }, 5500);
        setTimeout(function () {
            $('.button_next_level').removeClass('undisplay');
        }, 6500);


    };

    function nextLevel() {
        $('#gunman').removeClass('gunman_' + currentGunman + '_falling');
        $('#gunman').removeClass('gunman_' + currentGunman + '_walking');
        $('#gunman').css({
            'left': 100 + 'px'
        });
        gunman.move();
        gunman.stand();
        gunman.fire();
    }

    $('#nextLevel').on('click', nextLevel);


    //end of Gunman
};


var gunman1 = new Gunman(1),
    gunman2 = new Gunman(2),
    gunman3 = new Gunman(3),
    gunman4 = new Gunman(4),
    gunman5 = new Gunman(5);

var allGunman = [gunman1, gunman2, gunman3, gunman4, gunman5];

var gunman = allGunman[Math.floor(Math.random() * allGunman.length)];

$('#gunman').addClass('gunman_defaul_position');

function startGame() {
    gunman.move();
    gunman.stand();
    gunman.fire();
}

$('#startGame').on('click', startGame);
