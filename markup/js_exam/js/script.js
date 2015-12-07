(function WildGunmanGame() {

    var level = 0;
    var scores = 0;
    var playerTime = 0;
    var maxTime = 300;
    var playerWin = false;

    /*function timer() {
        console.log(playerTime + ' and ' + maxTime);
        if (playerTime < maxTime) {
            playerTime++;
            $('.timer').text(playerTime);
            $('.message').removeClass('hide');
        }};*/


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
                    console.log(playerTime + ' and ' + maxTime);
                    if (playerTime < maxTime) {
                        playerTime++;
                        $('.timer').text(playerTime);
                        $('.message').removeClass('hide');
                    }


                    if (playerTime < maxTime) {
                        playerTime++;
                        $('.timer').text(playerTime);
                        $('.message').removeClass('hide');

                        //player don't shoot or shoot late
                        if (playerTime == maxTime) {
                            $('.message').addClass('hide');
                            $('.gunman').removeClass('gunman_' + gunman.currentGunman + '_standing');
                            clearInterval(intervalID);

                            $('.gunman').off('click', gunman.readyForShoot());

                            $('.startGame').removeClass('hide');


                            /*playerTime = 0;*/

                            $('.timer').text(playerTime);


                            $('.gunman').off();

                        };

                    };

                    $('.max_time').text(maxTime);

                };

                intervalID = setInterval(timer, 10);


                $('.gunman').on('click', function win() {

                    clearInterval(intervalID);

                    if (playerTime < maxTime) {

                        $('.message').addClass('hide');
                        $('.gunman').removeClass('gunman_' + gunman.currentGunman + '_standing');
                        $('.gunman').addClass('gunman_' + gunman.currentGunman + '_falling');

                        var scoreCounter = scores;

                        scores = scores + (maxTime - playerTime);


                        function generateScores() {

                            if (scoreCounter < scores) {
                                scoreCounter++;
                                $('.score').text(scoreCounter)
                            }

                            if (scoreCounter == scores) {
                                $('.button_next_level').removeClass('undisplay');

                                $('.gunman').removeClass('gunman_' + gunman.currentGunman + '_falling');

                                $('.score').text(scores);

                                playerTime = 0;

                                $('.timer').text(playerTime);


                            }

                        }

                        setInterval(generateScores, 10);
                        $('.gunman').off();

                    }

                });

            })

        };

        //END of function ready for shoot
    }
    //END of Gunman constructor
    //
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);

        for (; rand == gunman.currentGunman;) {
            rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);
        }


        return rand;
    }



    function startNewGame() {

        $('.startGame, .credits').addClass('hide');


        playerTime = 0;
        maxTime = 300;

        $('.timer').text(playerTime);
        $('.max_time').text(maxTime);



        gunman.currentGunman = randomInteger(1, 5);
        gunman.move();
        gunman.readyForShoot();
    }

    function nextLevel() {

        $('.button_next_level').addClass('hide');

        level++;
        if (level >= 5) {
            console.log('YOU WIN!!!!')
        };

        maxTime -= 50;

        $('.timer').text(playerTime);
        $('.max_time').text(maxTime);


        gunman.currentGunman = randomInteger(1, 5);
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
