(function WildGunmanGame() {

    var level = 0;
    var scores = 0;
    var playerTime = 0;
    var maxTime = 300;
    var playerWin = false;

    //Begin Gunman constructor
    function Gunman(options) {

        /*var options = options || {};*/
        this.currentGunman = (options || 1);

        this.move = function () {
            $('.gunman').addClass('gunman_' + gunman.currentGunman + '_walk');
        };

        this.readyForShoot = function () {
            $('.gunman').on('transitionend webkitTransitionEnd oTransitionEnd', function fire() {
                $('.gunman').removeClass('gunman_' + gunman.currentGunman + '_walk');
                $('.gunman').addClass('gunman_' + gunman.currentGunman + '_standing');


                function timer() {
                    if (playerTime < maxTime) {
                        playerTime++;
                        $('.player_timer').text('Player: ' + playerTime);

                        //player don't shoot or shoot late
                        if (playerTime == maxTime) {
                            $('.startGame').removeClass('hide');
                            clearInterval(intervalID);

                            $('.gunman').removeClass('gunman_' + gunman.currentGunman + '_standing');

                            playerTime = 0;

                        };
                    };

                    $('.gunman_timer').text('Gunman: ' + maxTime);

                };

                intervalID = setInterval(timer, 10);


                $('.gunman').on('click', function () {

                    clearInterval(intervalID);

                    if (playerTime < maxTime) {
                        $('.gunman').removeClass('gunman_' + gunman.currentGunman + '_standing');
                        $('.gunman').addClass('gunman_' + gunman.currentGunman + '_falling');
                        scores = (maxTime - playerTime) * 2;

                        var scoreCounter = 0;

                        function generateScores() {

                            if (scoreCounter < scores) {
                                scoreCounter++;
                                $('.score').text('Your score:' + scoreCounter)
                            }

                            if (scoreCounter == scores) {
                                $('.button_next_level').removeClass('undisplay');

                                $('.gunman').removeClass('gunman_' + gunman.currentGunman + '_falling');
                                $('.gunman').off('transitionend webkitTransitionEnd oTransitionEnd', fire)

                            }

                        }

                        setInterval(generateScores, 1);


                    }

                });

            })

        };
        //END of function ready for shoot
    }
    //END of Gunman constructor
    //
    function startNewGame() {

        $('.startGame, .credits').addClass('hide');
        playerTime = 0;
        maxTime = 300;
        gunman.move();
        gunman.readyForShoot();
    }

    function nextLevel() {

        $('.button_next_level').addClass('hide');


        level++;
        if (level >= 5) {
            console.log('YOU WIN!!!!')
        };

        gunman.move();
        gunman.readyForShoot();
    }


    //
    //Creating gunmen
    var gunman1 = new Gunman(1);
    var gunman2 = new Gunman(2);
    var gunman3 = new Gunman(3);
    var gunman4 = new Gunman(4);
    var gunman5 = new Gunman(5);

    //
    //creating gunman array and randomize it
    var allGunmen = [gunman1, gunman2, gunman3, gunman4, gunman5];

    var gunman = allGunmen[Math.floor(Math.random() * allGunmen.length)];


    $('.startGame').on('click', startNewGame);
    $('.button_next_level').on('click', nextLevel);


})();
//END of GAME code
