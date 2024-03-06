const buttons = document.querySelectorAll('.button');
let going = false;

for(let button of buttons) {
    button.addEventListener('click', () => {
        if(going == true) return;
        going = true;
        console.log("press");
		button.className = 'button active';
        going = false;
    });
}