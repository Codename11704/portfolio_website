const buttons = document.querySelectorAll('.nav_item');
let active = false;
let current = null;

for(let button of buttons) {
    if (button.className.includes('active')) {
        current = button;
    }
    button.addEventListener('click', () => {
        if(active == true) return;
        active = true;
		
        if (current) {
            current.classList.remove('active');
        }
        button.classList.add('active');
        current = button;

        let shownPanel = document.querySelector('.content_item.shown');
	    if (shownPanel) {
		    shownPanel.classList.remove('shown');
	    }

        let panel = document.getElementById(button.getAttribute('data-panel'));
        panel.classList.add('shown');
        active = false;
    });

}