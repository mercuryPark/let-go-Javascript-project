const number = Number(prompt('몇 명이 참가하나요?'));
const $order = document.querySelector('#order');
const $word = document.querySelector('#word');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

let word;
let newWord;

const onClickButton = () => {

    if(newWord.length === 3 && (!word || word[word.length-1] === newWord[0])){
        word = newWord;
        $word.textContent = word;
        const order = Number($order.textContent);

        if (order + 1 > number) {
            $order.textContent = 1
        }

        else{
            $order.textContent = order + 1;
         
        }

    }
    else{
        alert('잘못된 값을 입력하셨습니다!');
    

    }
}

const onInput = (event) => {
    newWord = event.target.value;
}

$button.addEventListener('click',onClickButton);
$input.addEventListener('input',onInput);






















