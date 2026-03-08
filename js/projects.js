const project_buttons = document.querySelectorAll('.project_item');
let project_active = false;
let project_current = null;

for(let button of project_buttons) {
    if (button.className.includes('active')) {
        project_current = button;
    }
    button.addEventListener('click', () => {
        if(project_active == true) return;
        project_active = true;
		
        if (project_current) {
            project_current.classList.remove('active');
        }
        button.classList.add('active');
        project_current = button;

        let shownPanel = document.querySelector('.project_content_item.shown');
	    if (shownPanel) {
		    shownPanel.classList.remove('shown');
	    }

        let panel = document.getElementById(button.getAttribute('data-panel'));
        panel.classList.add('shown');
        project_active = false;
    });

}