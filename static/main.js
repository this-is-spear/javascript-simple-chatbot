let says = document.querySelector(".cat_says")
let message = ""
console.log()
function check_text() {
    let value = document.getElementById("console").value;
    console.log(value);
    message = value
    apply_chat();
}

function apply_chat() {
    say_logic()
    says.innerHTML = message;
}

function say_logic() {
    if(message.length == 1){
        message = "냐~!"
    }else if (message.length % 2 == 1) {
        message = "냐" + "아".repeat(message.length - 2) 
                    + "~".repeat(Math.ceil((Math.random()*10)%10)) 
                    + "앙~!"
    }else{
        message = "냐아 ".repeat(message.length) + "~" + "!".repeat(Math.ceil((Math.random()*10)%10)) 
    }
}