var Game = {
    level: 0,
    score: 0
};

var Gunman = function (options) {

    options = options || {};

    this.move = function () {
        $('#startGame').addClass('hide');
        $('#credits').addClass('hide');
        $('#gunman').addClass('gunman_walk');

    };
    this.stand = function () {
        function gunmanStanding() {
            $('#gunman').removeClass('gunman_walk');
            $('#gunman').addClass('gunman_standing');
        }
        $('#gunman').on('transitionend webkitTransitionEnd oTransitionEnd', gunmanStanding);
    };

    var shoot = function () {
        $("#gunman").click(bang);
        $("#gunman").click(nextLevel);

        function bang() {
            $('#gunman').removeClass('gunman_standing');
            $('#gunman').addClass('gunman_falling');
        }

        function nextLevel() {
            $('#nextLevel').addClass('unhide');
        }
    };


    this.fire = function fire() {
        setTimeout(shoot, 5000);
        setTimeout(function () {
            $('#message').removeClass('hide');
        }, 5500);

    };


};

$('#startGame').click(startGame);


function startGame() {
    gunman.move();
    gunman.stand();
    gunman.fire();
}


var gunman1 = new Gunman(),
    gunman2 = new Gunman(),
    gunman3 = new Gunman(),
    gunman4 = new Gunman(),
    gunman5 = new Gunman();

var allGunman = [gunman1, gunman2, gunman3, gunman4, gunman5];

var gunman = allGunman[Math.floor(Math.random() * allGunman.length)];
