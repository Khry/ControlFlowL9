var bank1 = 10;
var bank2 = 5;
var bank3 = 2;
var bankKoef = 3;
var gameNumber = 1;
var prize = 0;
var maxRange = 5;
var rangeKoef = 2;
var gameMaxRange;

var startgame = confirm("Чи бажаєте почати гру?");
if (startgame === false ){
	alert("Сьогодні ви не виграли мільйон, а могли")
}
while(startgame === true) {
	if (gameNumber === 1) {
		gameMaxRange = maxRange;
	} else {
		bank1 = bank1 * bankKoef;
		bank2 = bank2 * bankKoef;
		bank3 = bank3 * bankKoef;
		gameMaxRange = gameMaxRange * rangeKoef;
	}
	for (var i = 0; i < 3 ; i++) {
		var randomNumber = Math.floor(Math.random() * gameMaxRange + 1);
		var playerNumber = parseInt(prompt("Введіть число від 0 до " + gameMaxRange ), 10);
		if (typeof playerNumber !== "number") {
			alert("error....");
			break;
		}
		if (randomNumber === playerNumber) {
			if (i === 0) {
				prize += bank1; console.log(prize);
				startgame = confirm("Чи бажаєте продовжити гру?");
				if (!startgame) {
					alert( "Дякуємо за гру, ваш виграш становить:" + prize);
					startgame = false;
					break;
				} else {
					gameNumber++;
					break;
				}
			}else if (i === 1) {
				prize += bank2; console.log(prize);
				startgame = confirm("Чи бажаєте продовжити гру?");
				if (!startgame) {
					alert( "Дякуємо за гру, ваш виграш становить:" + prize);
					startgame = false;
					break;
				} else {
					gameNumber++;
					break;
				}
			}else if (i === 2) {
				prize += bank3; console.log(prize);
				startgame = confirm("Чи бажаєте продовжити гру?");
				if (!startgame) {
					alert( "Дякуємо за гру, ваш виграш становить:" + prize);
					startgame = false;
					break;
				} else {
					gameNumber++;
					break;
				}
			}	
		}else if(i === 2){
			//не вгадав
			alert( "Дякуємо за гру, ваш виграш становить: " + prize);
			startgame = confirm("Чи бажаєте продовжити гру?");
			if (!startgame) {
				startgame = false;		
				break;
			} else {
				gameNumber++;
			}
		}
	}
}
