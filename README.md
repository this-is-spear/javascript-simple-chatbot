# [SimpleChatBot](https://imaspear.github.io/SimpleChatBot/)
 자바스크립트를 이용한 간단한 챗봇 구현입니다.

## 2021-12-27
> 자바 스크립트를 이용해 사칙연산 로그로 출력하기

오늘 공부를 통해 찾아보던 중 let과 var의 차이가 궁금해서 검색해봤다. 

**let과 var의 차이는 호이스팅 시에 변수를 초기화하는지 안하는지의 차이였다.** 
var 같은 경우에는 처음 시작될 때(호이스팅 할때), 변수가 undefined 라는 값으로 초기화 된다. 

>즉, 제일 뒤에 선언이 되어 있어도 인터프리터가 var 변수를 미리 초기화 해줘 앞에서 인자를 호출해도 오류가 나지 읺는다.

다르게 let은 시작할 때, 초기화 되지 않아서 선언보다 호출이 먼저 나온다면 error가 나온다.

>순차적으로 인자를 생성하고 함수를 호출할 때, 예외적인 상황이 발생하지 않도록 let과 같은 변수 선언을 하는 게 좋아 보인다.

## 2021-12-28
> 자바스크립트를 이용해 스톱워치 만들기

setTiemout() 함수와, clearTimeout() 함수를 이용해 스톱워치를 만들었다.
작동 원리는 시작 버튼을 누르고 나면 setTiemout() 함수로 재귀 호출을 하여 시간을 지속시켰다. 그 후, 멈춤 버튼 안에 clearTimeout() 함수를 통해 재귀 호출을 중단 시키고 시간을 멈췄다.
마지막으로 초기화는 모든 값을 재설정해 초기화가 되도록 만들었다.

## 2021-12-31
> 자바스크립트 함수 이용하기

함수를 이용해 간단하게 화면을 변환시키는 공부를 했다.
각 이벤트 마다 함수를 만들고, 특정한 변화에 따라 화면이 변하도록 설정했다. 

position 속성이 relative이고 display 속성이 inline-block인 아이템에 아래와 같은 속성을 줘 중앙으로 배치되도록 설정했다. 
```css
#name{
  left: 50%;
  transform: translateX(-50%);
  }
```

해당 hover 이벤트를 통해 커서가 위에 머물 때, 색이 천천히 변하도록 설정해 애니메이션 효과를 줬다.
```css

#click_event:hover{
  background-color: green;
  transition: all 0.5s;
}

```

해당 함수들은 각 이벤트 마다 분리해 설정해 관리하기 쉽게 설계했다.

```javascript
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

```

원래는 html에 바로 onclick="" 속성을 통해 연결 해줬지만 이 방법은 유지보수에 좋지 않은 방법이니 자바스크립트에서 클릭 이벤트를 설정해줬다. 

html은 오로지 보여주기 위해 설정하는 페이지이고, 로직들은 자바스크립트에서 짜야 후에 관리하기 쉽다.

```javascript
let click_event = document.getElementById('click_event');
click_event.addEventListener('click', click_me);
```

