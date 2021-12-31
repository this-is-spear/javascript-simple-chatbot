let click_event = document.getElementById('click_event');
let nameA = document.getElementById('name');
let numberA = document.getElementById('number')

click_event.addEventListener('click', click_me);

function click_me(){
    console.log('click')
    click_event.style.display = "none";
    open_name();
    open_number();
}

function open_name() {
    nameA.innerHTML = "Spear"
    nameA.style.display = "inline-block"
}

function open_number() {
    numberA.innerHTML = "010 - xxxx - xxxx"
    numberA.style.display = "inline-block"
}