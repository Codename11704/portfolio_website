let header = document.querySelector('#intro');
let anim = [
    { t: "\n", ms: 400 },
    { t: "_", ms: 400 },
    { t: "\n", ms: 400 },
    { t: "_", ms: 400 },
    { t: "S_", ms: 100 },
    { t: "SE_", ms: 100 },
    { t: "SEA_", ms: 100 },
    { t: "SEAN_", ms: 100 },
    { t: "SEAN _", ms: 100 },
    { t: "SEAN D_", ms: 100 },
    { t: "SEAN DR_", ms: 100 },
    { t: "SEAN DRO_", ms: 100 },
    { t: "SEAN DROL_", ms: 100 },
    { t: "SEAN DROLL_", ms: 400 },
    { t: "SEAN DROLL ", ms: 400 },
    { t: "SEAN DROLL_", ms: 400 },
    { t: "SEAN DROLL", ms: 400 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();