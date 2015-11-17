var game = {
    startGame: function startGame() {
        var gunman = new Gunman;
        gunman.width =

    },
    nextLevel: function nextLevel() {},
    restartGame: function restartGame() {},
    score: 0,
    gunmanRandomizer: function currentId() {}
}


var Gunman = {
    width: 0 + 'px',
    height: 0 + 'px',
    top: 0 + 'px',
    left: 0 + 'px',
    /*steps: function () {},*/
    move: function () {
        gunman.classList.add('gunman_walk');
    },
    standing: function () {
        gunman.classList.remove('gunman_walk');
        gunman.classList.add('gunman_standing');
    },
    shooting: function () {},
    gunmanShootingTimer: function () {},
    win: function () {},
    lose: function () {}
}

var player = {
    playerShootingTime: function () {}
}









/*var game = {


}





var gunmanProperties = [{
    width : 30,
    height : 120,
    top : 40,
    left : 40,
    stepsBeforeShoot : 3,
    stepsAfter : 6,





}]


currentId = Math.round(Math.random()*5)
gunman= gunmanProperties[currentId]

$('.gunman').css({
    'background-position': gunman.width + 'px',

})


gunman.step = function() {
$('.gunman').css({
    'background-position': (gunman.width + gunman.width) + 'px',

}
 function go(stepsBeforeShoot) {
for ()
    step()

}







var player = {



     }*/
