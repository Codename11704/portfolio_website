let ageEl = document.getElementById("age");

setInterval(() => {
	let time = dayjs().diff(dayjs(1074340800000), 'year', true);
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);



