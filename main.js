function changeText(i, string){
    document.getElementsByClassName('typing')[i].innerHTML = "";
    console.log(i)
    var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = string;
    typingTxt=typingTxt.split("");
    if(typingBool==false){ 
        typingBool=true;     
        var tyInt = setInterval(typing,100);
    } 
    function typing(){ 
        if(typingIdx<typingTxt.length){ 
            document.getElementsByClassName('typing')[i].append(typingTxt[typingIdx]);
            typingIdx++; 
        } else{ 
            clearInterval(tyInt); 
        } 
    }
    document.getElementsByClassName('typing')[i].setAttribute("disabled","disabled")
}