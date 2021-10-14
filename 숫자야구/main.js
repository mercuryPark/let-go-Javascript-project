
// html 에서 불러와 변수선언을 한다.

const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

// numbers 는 1~9 까지라는 것을 반복문을 사용해 정의한다.
const numbers = []; // 1, 2, 3, 4, 5, 6, 7, 8, 9
for(let n = 0; n < 9; n++) { // 9번 반복한다.
    numbers.push(n + 1);
}

// 정답을 정하는 변수 answer 정답은 4개이다. 반복문 4번 반복
// 
const answer = []; // [3, 1, 4, 6]
for (let n = 0; n < 4; n += 1) { // 네번 반복
    const index = Math.floor(Math.random() * numbers.length); // 0-8 랜덤정수
    answer.push(numbers[index]); // 여기서 [index]안에 있는 수는 numbers의 순서를 의미한다.
    numbers.splice(index, 1); // (index = 시작순서/ ,1 = 제거갯수)
}
console.log(answer);


// 도전 횟수 
const tries = [];

function checkInput(input) {
    if(input.length !== 4){ // 길이는 4가 아닌가
        return alert('4자리 숫자를 입력해 주세요.');

    }
    if(new Set(input).size !== 4) {// 중복된 숫자가 있는가
    return alert('중복되지 않게 입력해 주세요.');
}
    if(tries.includes(input)) { // 이미 시도한 값은 아닌가
    return alert('이미 시도한 값입니다.');
}
    
return true;
    }

    function defeated() {
        const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
        $logs.appendChild(message);
    }



let out = 0;
 // 올바르게 작성했는지 체크하겠다.
$form.addEventListener('submit', (event) => { // submit 은 엔터를 쳐도 입력이되므로 사용
    event.preventDefault(); // 새로고침시 적용되는 기본 동작 막기
    const value = $input.value; // 현재값을 value 값에 저장한다.
    $input.value = ''; // 엔터를 쳤을땐 현재 값을 초기화 시킨다. 그래야 다음값을 작성할수있으니까
    const valid = checkInput(value); // 현재 값을 검증한다. valid 변수 안에서
    if(!valid) return; // 현재값을 검증하는 변수가 거짓이면 if문을 멈춘다.
    if(answer.join('') === value) { // [3, 1, 4, 6] -> 3146 join은 숫자열을 문자열로 바꿔주는역할을 한다. join(숫자들 사이에 어떤 기호를 넣을것인가 : , . ' 등등) 
        $logs.textContent = '홈런!' // 이겼을때 승리를 출력
        return; // 스탑
    }

    // 최대 도전횟수를 10회로 하는 함수

    if(tries.length >= 9) { // 10이 아니라 9인 이유는 마지막 (패배! 정답은 **** 까지가 10번의 기회이기 때문이다.)

        defeated();
        return;
    }
    
    // 아웃카운트 함수

    // 몇 스트라이크 몇 볼인지 검사
    let strike = 0; // 초기값은 0
    let ball = 0;
   
    for (let i = 0; i < answer.length; i++){ // 0~3 까지 총 4글자인데 하나씩 늘어나는 반복문
        const index = value.indexOf(answer[i]); // indexOf는 문자열을 찾는 메소드이다.
        // 기본형식은 indexOf(찾고자하는것, 순서)이다.
        // value는 현재값이다 현재값에서 찾는다 결과값의 첫번째 순서를 찾은것을 index에 넣는다.
        // **indexOf라는 메소드는 찾고자하는 문자열이 나타난 포지션의 첫번째 위치를 리턴한다.

        // 현재값에서 찾는다 결과값의(1번째) 숫자를 이걸 index에 넣고 
        // i 가 2일때 index의 값도 2이다.

        // 1. 네번 반복한다.
        // 2. 찾는다
        // 3. index까지 갔나?
        // 4. 스트라이크 or 볼
        // 5. 다시 반복문으로 올라간다.

        if(index > -1 ) { // 일치하는 숫자 발견
        if(index === i) { // 자릿수도 같음
            // 첫번째 턴일때 index의 첫번째 숫자가 현재 i번째(첫번째)와 같이 똑같다면 스트라이크이다.
            // index는 4글자의 값이다. 그중에서 i번째(2)값과 
          strike += 1;
        } else { // 숫자만 같음
        ball += 1;
        }
        }
    }
if(strike === 0 && ball === 0) {
    out++;
    $logs.append(`${value}:아웃`, document.createElement('br'));
} else {
    $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
}
if (out === 3) {
    defeated();
        return;
}

tries.push(value);
    //form태그 및 div(logs)에.append(마지막에 추가하는 함수)
    // 현재값 : (몇 스트라이크) 스트라이크 (몇 볼) 볼/ 줄바꿈 br ;
    // 이까지 실행했을때 도전횟수에 현재값을 기준으로 하나씩 추가
});



