let says = document.querySelector(".cat_says")
let body = document.body
var app = document.getElementById("typed");


function check_text() {
    // body.style.backgroundColor="white"
    says.innerHTML = ""
    let message = document.getElementById("console").value;
    apply_chat(message);
}

function apply_chat(message) {
    if(message == "불꺼줘"){
        document.body.style.backgroundColor="gray"
        says.innerHTML = "삐까(OK)!"
    }else if(message.includes("안녕")){
        says.innerHTML = "삐까🙌"
    }else if(message.includes("따라")){
        says.innerHTML = message + "삐까😊"
    }else if(message.includes("?")){
        says.innerHTML = "...??"
    }else if(message == ""){
        says.innerHTML = "대답해줘"
    }else{
        says.innerHTML = say_logic(message);
    }
}

function say_logic(message) {
    let typewriter = new Typewriter(app, { loop: false, });
    
    typewriter
    .typeString("삐까츄가 알아듣지 못한 것 같다.")
    .pauseFor(1300)
    .deleteAll()
    .typeString("다시 한 번 말해보자.")
    .pauseFor(2500)
    .start();


    if(message.length == 1){
        message = "냐~!";
    }else if (message.length % 2 == 1) {
        message = "삐" + "이".repeat(message.length - 2) 
                    + "~".repeat(Math.ceil((Math.random()*10)%10)) 
                    + "까~!";
    }else{
        message = "삐까 ".repeat(message.length) + "~" + "!".repeat(Math.ceil((Math.random()*10)%10));
    }
    return message;
}