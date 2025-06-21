const buttons = document.querySelectorAll('.button');
const content = document.querySelectorAll('.content')
let active = false;
let current = null;

for(let button of buttons) {
    button.addEventListener('click', () => {
        if(active == true) return;
        active = true;
        //panel = document.querySelectorAll('#' + button.classList[1]);
        //panel.className = 'active';
        if (button.className.includes('actve')) {
            button.className = 'button';
            return;
        }
		
        if (current) {
            current.className = 'button'
        }
        button.className = 'button active';
        current = button;


        let shownPanel = document.querySelector('.item.shown');
	    if (shownPanel) {
		    shownPanel.classList.remove('shown');
	    }

        let panel = document.getElementById(button.getAttribute('data-panel'));
        panel.classList.add('shown');
        active = false;
    });
}