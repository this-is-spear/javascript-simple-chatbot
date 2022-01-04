let says = document.querySelector(".cat_says")
let body = document.body
function check_text() {
    // body.style.backgroundColor="white"
    says.innerHTML = ""
    let message = document.getElementById("console").value;
    apply_chat(message);
}

function apply_chat(message) {
    if(message == "불꺼줘"){
        document.body.style.backgroundColor="gray"
        says.innerHTML = "냐야(OK)!"
    }else if(message == ""){
        says.innerHTML = "대답해"
    }else{
        says.innerHTML = say_logic(message);
    }
}

function say_logic(message) {
    if(message.length == 1){
        message = "냐~!";
    }else if (message.length % 2 == 1) {
        message = "냐" + "아".repeat(message.length - 2) 
                    + "~".repeat(Math.ceil((Math.random()*10)%10)) 
                    + "앙~!";
    }else{
        message = "냐아 ".repeat(message.length) + "~" + "!".repeat(Math.ceil((Math.random()*10)%10));
    }
    return message;
}