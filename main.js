// var iceLand = 'bbq';

// iceLand = '1123dkk';

// const iceLand2 = '사과나무안에 있는 번데기';

// iceLand2 = '오렌지나무 안에 있는 작은 곤충';

// console.log(iceLand);

// console.log(iceLand2);

// let b = 3;
// let a = 5;

//  let temp = a;
// a = b;
// b = a;

// let condition1 = true;
// let condition2 = false;
// let value = condition1 ? (condition2 ? '둘 다 참' : 'condition만 참') : 'condition1이 거짓';

// console.log(value);

// let cond = true;
// let value = '';

// if (cond) {
//     value = '참';
// } else {
//     value = '거짓';
// }



// switch(cond) {
//     case true:
//         value = ('참');
//         break;
        
//      case false: 
//         value = ('거짓');
// }
// console.log(value);

// let cond = true;
// let value = cond ? '참' : '거짓';

// console.log(cond);


// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     for(let j = 0; j < 10; j++) {
//         console.log(i, j);
//     }
// }


// for (let i = 0; i < 5; i++){
//     if(i % 2 === 0) continue;
//     for (let j = 0; j < 5; j++) {
//         if(j % 2 === 0) continue;
//         for(let k = 0; k < 5; k++){
//             if(k % 2 === 0) continue;
//             console.log(i, j, k);
//         }
//     }
// }

// for (let i = 1; i < 10; i++){
//     if(i % 2 === 0) continue;
//     for (let j = 1; j < 10; j++){
//         if(j % 2 === 0) continue;
//         console.log(i, '*', j,'=', i*j);
//     }
// }


// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         if(i % 2 === 0 || j % 2 === 0) continue;
//         console.log(i, '*', j,'=', i*j);
//     }
// }


// const arr = ['가', '나', '다', '라', '바'];
// arr[arr.length] = '마'
// console.log(arr);


// const arr = ['가', '라', '다', '라', '마', '라'];

// let index = arr.indexOf('라');

// while (index > -1) {

//     arr.splice(index, 1);

//     index = arr.indexOf('라');
// }


// function a(w, x, y, z){
//     console.log(w, x, y, z);
//     console.log(arguments);
// }

// a('Hello', 'Parameter', 'Argument');

// function add(x, y) {
//    return x + y;
// }

// console.log(add(3, 5));

// const c =(x, y, z) => {
// return x * y * z;
// }


// console.log(c(3, 5, 6));

// const zerocho = {
//     name: {
//         first: '현영',
//         last: '조',
//     },
//     gender: 'm',

    
// };


// prompt('몇 명이 참가하나요?');

// const number = prompt('몇 명이 참가하나요?');

// const realNumber = Number(number);
// console.log(typeof realNumber);

// const $input = document.querySelector('input');
// console.log($input);

// const $button = document.querySelector('button');
// console.log($button);


// 자바스크립트 이벤트 리스너

// const onClickButton = () => {
//     console.log('버튼 클릭');
// };

// const $button = document.querySelector('button');
// $button.addEventListener('click',onClickButton);

// // 이때 event 는 매개변수이기 때문에 사용자가 원하는 어떠한 값을 넣어도 상관없다.
// // 그러나 전혀 상관없는 단어는 가독성을 떨어뜨리기 때문에 event와 같이 접근성있는 단어로 하는것이 좋다.

// const onInput = (event) => {
//     console.log('글자 입력', event.target.value);
// };
// const $input = document.querySelector('input');
// $input.addEventListener('input',onInput);

const number = Number(prompt('몇 명이 참가하나요?'));
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word; //제시어
let newWord; // 현재 단어

const onClickButton = () => {
    // word 에 아무런 값을 넣지 않았으니 undefined 이다ㅏ if 문안에 들어가면 false로 취급되기 때문에
    // !word 로 true로 취급되게끔 만들었다.
    if(!word) { // 제시어가 비어 있는가?
       word = newWord; // 입력한 단어가 제시어가 된다.
       $word.textContent = word; // 화면에 제시어 표시

       const order = Number($order.textContent);
       if(order + 1 > number) {
           $order.textContent = 1;
       } else {
           $order.textContent = order + 1;
       }
       $input.value = '';
        $input.focus();
    }
    else {
        // 비어 있지 않다.
        if(word[word.length - 1] === newWord[0]) { // 입력한 단어가 올바른가?
        // 올바르다.
        word = newWord; // 현재 단어를 제시어에 저장한다.
        $word.textContent = word; // 화면에 제시어 표시
        const order = Number($order.textContent);
        if (order + 1 > number) {
            $order.textContent = 1;
        }
        else {
            $order.textContent = order + 1;
        }
        $input.value = '';
        $input.focus();

        } else {
            alert('올바르지 않은 단어입니다!')  // 올바르지 않다.
            $input.value = '';
        $input.focus();
        }
    }

};
const onInput = (event) => {
   newWord = event.target.value; // 입력한 단어를 현재 단어로
};

$button.addEventListener('click',onClickButton);
$input.addEventListener('input',onInput);






















