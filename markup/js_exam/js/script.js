(function WildGunmanGame() {

	/**
	 *
	 * сори немного подправила твой код)
	 *
	 * Рекомендации
	 *
	 * смотри 1)
	 * вот эти переменные глобальные для модуля
	 * level, scores и т.д можно сделать не переменными а свойствами твоей функции конструктора
	 * Gunman
	 *
	 * то есть
	 *
	 * Gunman.level = 0
	 * Gunman.scores = 0
	 *
	 * ....
	 *
	 * так будет более логично что они к игре привязаны и более по ООП-шному
	 *
	 * 2) функция readyForShoot общая для всех Gunman
	 * вы же учили Function.prototype
	 *
	 * так вот метод readyForShoot можно записать в Gunman.prototype своство
	 * тогда она не будет создаваться отедельно для каждого экземпляра а будет одна общая на все экземпляры
	 * а свойства записаные через this будут доступны в нем для каждого конкретного экземпляра
	 *
	 * про move тоже самое можно сделать
	 *
	 *
	 * 3) немножечко более структурированой логики добавь отдельные методы для определенных состояний твоего ковбоя
	 *
	 * например:
	 *
	 *          1) когда застерлили
	 *          2) когда выиграл
	 *          3) когда время прошло и пользователь ничего не кликнул
	 *
	 *          и в этих методах сделай логику какие классы добавлять и какой текст менять и на какой
	 *          что бы код был более структурированый и тебе понятный и удобно же самому будет писать
	 *          сразу понятно что где происходит как и почему
	 *
	 *
	 * 4)
	 *
	 */

	var level = 0;
	var scores = 0;
	var playerTime = 0;
	var maxTime = 300;
	var playerWin = false;

	//Begin Gunman constructor
	function Gunman(options) {
		/**
		 * ты тут часто используешь $('.gunman')
		 *
		 * можно его в переменную положить и использовать как например
		 * this.gunman
		 *
		 * тоже самое про $('.timer') и $('.message')
		 *
		 *
		 */

		/*var options = options || {};*/
		this.currentGunman = (options || 1);
		/**
		 * тут можно и без скобочек
		 */

		var gunmanEl = $('.gunman');

		this.move = function () {
			gunmanEl.addClass('gunman_' + gunman.currentGunman + '_walk');
		};

		this.readyForShoot = function () {
			gunmanEl.on('transitionend webkitTransitionEnd oTransitionEnd', function fire() {
				gunmanEl.removeClass('gunman_' + gunman.currentGunman + '_walk');
				gunmanEl.addClass('gunman_' + gunman.currentGunman + '_standing');


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
							gunmanEl.removeClass('gunman_' + gunman.currentGunman + '_standing');
							clearInterval(intervalID);

							gunmanEl.off('click', gunman.readyForShoot());

							/**
							 * я не думаю что это работает дело в том что когда ты хочешь сделать off функции то нужно
							 * в нее передать ту же функцию что ты передаешь и в on('click') а ты передаешь что то другое
							 * и еще если уже передавать то по имени тоесть
							 *
							 *  $('.gunman').off('click', gunman.readyForShoot); (то есть без вызова gunman.readyForShoot а
							 *  то ты ее сразу вызываешь)
							 *
							 *  ну то есть делаем в общем так
							 *
							 *  $el.on('click', function name() { ...... });
							 *  $el.off('click', function name() { ...... });
							 *
							 *  иначе работать не будет
							 */

							$('.startGame').removeClass('hide');


							/*playerTime = 0;*/

							$('.timer').text(playerTime);


							gunmanEl.off();

						}
						;

					}
					;

					$('.max_time').text(maxTime);

				};

				intervalID = setInterval(timer, 10);
				/**
				 * ее нужно где то обьявить а то она глобальная)
				 */


				gunmanEl.on('click', function win() {

					clearInterval(intervalID);

					if (playerTime < maxTime) {

						$('.message').addClass('hide');
						gunmanEl.removeClass('gunman_' + gunman.currentGunman + '_standing');
						gunmanEl.addClass('gunman_' + gunman.currentGunman + '_falling');

						var scoreCounter = scores;

						scores = scores + (maxTime - playerTime);

						/**
						 * я бы луше эту функцию создала сверху как ты создавал переменные сверху а тут бы ее просто вызывла потому что когда ты создаешь
						 * экземпляр Gunman то она наново создается и компилируется а зачем нам это не нужно)
						 */
						function generateScores() {
							if (scoreCounter < scores) {
								scoreCounter++;
								$('.score').text(scoreCounter)
							}

							if (scoreCounter == scores) {
								$('.button_next_level').removeClass('undisplay');

								gunmanEl.removeClass('gunman_' + gunman.currentGunman + '_falling');

								$('.score').text(scores);

								$('.timer').text(playerTime);
							}

						}

						setInterval(generateScores, 10);
						gunmanEl.off();

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
		}
		;

		playerTime = 0;
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
