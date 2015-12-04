var Game = {
    level: 0,
    score: 0

};

var playerShoot = false;


var Gunman = function (options) {


    $('.button_restart').addClass('undisplay');
    $('.button_next_level').addClass('undisplay');




    function Timer() {
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



    };

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
            'left': 900 + 'px'
        });

        Game.level = Game.level++;
        Game.score = Game.score + 1000;
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



function nextLevel() {
    gunman.move();
    gunman.stand();
    gunman.fire();
}

$('#nextLevel').on('click', nextLevel);






if (playerShoot == true) {
    alert('hhh')
}
