var counter = 10;

function myFunc() {
    return setInterval(function () {
        if (counter > 0) {
            counter--;
            $('.player_timer').text(counter);
        }
    }, 100)

}
myFunc();

console.log(counter)





/*function Game(window) {
    var level = 0;
    var score = 0;

    var Gunman = function(options) {

        $('.button_restart').addClass('undisplay');
        $('#nextLevel').addClass('undisplay');

        var playerShoot = false;


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
                var ret = {};
                ret.interval = interval;
                ret.s = Math.floor(interval / 1000) % 60 || 0;
                ret.ms = (Math.floor(interval / 100));


                return ret;
            }


            Object.observe(timer, function () {
                var interval = new MyDateInterval(timer.currentTime - timer.startTime);
                $('.player_timer').text(
                    interval.s + ' : ' + interval.ms
                );
            });


            function setTimeout() {
                WHAT IS THIS -->
                clearInterval(timer.interval);
            }, 16 * 100);
        };

        function Timer() {
            var counter = 0;
            setInterval(function () {
                counter++
            }, 100);
            console.log(counter);

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
            }
            $('#gunman').on('transitionend webkitTransitionEnd oTransitionEnd', gunmanStanding, Timer);

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

        };




        //end of Gunman
    };


    var gunman1 = new Gunman(1),
        gunman2 = new Gunman(2),
        gunman3 = new Gunman(3),
        gunman4 = new Gunman(4),
        gunman5 = new Gunman(5);

    var allGunman = [gunman1, gunman2, gunman3, gunman4, gunman5];

    var gunman = allGunman[Math.floor(Math.random() * allGunman.length)];


    function startGame() {
        gunman.move();
        gunman.stand();
        gunman.fire();
    };

    function start() {
        $('#startGame').on('click', startGame.startGame);
    }

};

Game();*/
