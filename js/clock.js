const DATEELEMENT = document.querySelector(".date");
const TIMEELEMENT = document.querySelector(".time");
const RATEELEMENT = document.querySelector(".rate");

const animated = document.querySelector(".clock-face");
const DAYS = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

let loopPos = 0;

animated.addEventListener("animationiteration", (e) => {
	loopPos++;
	if (loopPos == 2)
		loopPos = 0;
	
	if (loopPos == 0)
		changeClockFace();
});

changeClockFace();

function changeClockFace() {
	let DATE = new Date(Date.now());
	
	let hours = DATE.getHours().toString().padStart(2, '0');
	let minutes = DATE.getMinutes().toString().padStart(2, '0');
	
	dateString = DATE.toLocaleDateString('en-UK', {year: 'numeric', month: 'short', day: 'numeric'});
	
	TIMEELEMENT.innerText = `${hours}:${minutes}`;
	DATEELEMENT.innerText = `${DAYS[DATE.getDay()]} ${DATE.getDate()} ${MONTHS[DATE.getMonth()]} ${DATE.getFullYear()}`;
	RATEELEMENT.innerText = Math.floor(Math.random() * 15)+65;
}






