var Game = {
    level: 0,
    score: 0
};

var Gunman = function (options) {

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
        $('#gunman').on('transitionend webkitTransitionEnd oTransitionEnd', gunmanStanding);
    };

    function shoot() {
        function bang() {
            $('#gunman').removeClass('gunman_' + currentGunman + '_standing');
            $('#gunman').addClass('gunman_' + currentGunman + '_falling');
        }
        $("#gunman").click(bang);
    };


    this.fire = function () {
        setTimeout(shoot, 5000);
        setTimeout(function () {
            $('.message').removeClass('hide');
        }, 5500);

    };

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
}

$('#startGame').click(startGame);
