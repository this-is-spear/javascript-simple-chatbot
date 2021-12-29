let timestamp;
let da = document.querySelector('.board');
const color = ['aquamarine', 'white','aliceblue', 'white', 'antiquewhite', 'white', 'aqua'];
let count = 0
let self_count = 0;
let k = '이 것이 바로 전광판!!'.split('')

reply()

 
function resetcolor(one_color){
    da.style.color = one_color;
}

function reply(){
    count += 1
    count %= color.length
    resetcolor(color[count])
    setTimeout(reply, 100)
}

function btn_click() {
    if (self_count < k.length){
        if(k[self_count] == ' '){
            da.append(k[self_count])
            self_count += 1
        }
        da.append(k[self_count])
        self_count += 1
    }else{
        da.innerHTML = ""
        self_count = 0
    }
}