let says = document.querySelector(".cat_says")
let body = document.body
var app = document.getElementById("typed");
var json = 
[
	{
		"question" : "안녕!",
		"answer" : "안냥!"
	},
	{
		"question" : "나이?",
		"answer" : "비밀이다 삐까..."
	},
	{
		"question" : "이름?",
		"answer" : "삐까...츄..."
	}
]
let key = 0;
let question = "";
let message = document.getElementById("console").value;
let answer = "";

function push_json(){
	json.push({question: `${question}`, answer: `${answer}`}); 
	says.innerHTML = "말을 배웠다 냥!";
	key = 0; //키 값 0으로 초기화
}
function text_check(){
    message = document.getElementById("console").value;
	if(key == 1){
		if(message == "네"){
			says.innerHTML = "대답을 입력해주세요!";
			key = 2;
		}
		else{
			says.innerHTML = "삐까...";
			key = 0;
		}
		return;
	}

	if(key == 2){
		answer = message;
		push_json();
		return;
	}

	for(let i = 0; i < json.length; i++){
		if(message == json[i].question){
			says.innerHTML = json[i].answer;
			return;
		}
	}
	
	says.innerHTML = "말을 가르쳐 주실래요?(네 or 아니요)";
	question = message;
	key = 1;
}

