function myApp(name) {
	
	alert("Привет, это программа " + name + " моя первая программа");
	let friendName = prompt('А как зовут тебя?');
	function mySkills() {
		alert('Я знаю: ');
		let skills = ["html5", 'css3', "photoshop"];

		for (let i = 0; i < skills.length; i++) {
			let test = 'Я знаю ' + skills[i] + '<br>';
			document.write(test);
		}
	}

	function checkAge() {
		age = prompt('Уважаемый ' + friendName + ', сколько тебе лет?', '')
		if (age < 15) {
			alert("У тебя еще все впереди!")
		} else {
			alert('Продолжай обучаться!')
			age = prompt('Повторим пожалуй ' + friendName + ', сколько тебе лет?', '')
		if (age < 40) {
			alert("Ты крутой програмист!")
		} else {
			alert('Удачи!')
		}
		}
	}
	checkAge();

	function calcPow() {
		let number = prompt("Напиши число и получи его квадрат!");
		let numberCheck = number * number;
		alert(numberCheck);
	}
	calcPow();
	mySkills();
}

myApp('Olga');

