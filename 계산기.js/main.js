let numOne = '';
let operator = '';
let numTwo = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber = (event) => {

    if(!operator) { // 비어있다.
        numOne += event.target.textContent;
        $result.value += event.target.textContent;
        return;
        }
        if(!numTwo) { // 비어있지 않다.
            $result.value = '';
           } 
        numTwo += event.target.textContent;
        $result.value += event.target.textContent;  
       
};

const onClickOperator = (event1) => () => {
    if(numOne) {
        operator = event1;
        $operator.value = event1;
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
}

document.querySelector('#num-0').addEventListener('click',onClickNumber);
document.querySelector('#num-1').addEventListener('click',onClickNumber);
document.querySelector('#num-2').addEventListener('click',onClickNumber);
document.querySelector('#num-3').addEventListener('click',onClickNumber);
document.querySelector('#num-4').addEventListener('click',onClickNumber);
document.querySelector('#num-5').addEventListener('click',onClickNumber);
document.querySelector('#num-6').addEventListener('click',onClickNumber);
document.querySelector('#num-7').addEventListener('click',onClickNumber);
document.querySelector('#num-8').addEventListener('click',onClickNumber);
document.querySelector('#num-9').addEventListener('click',onClickNumber);



document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
    if(numTwo) {
        switch (operator) {
            case '+':
            $result.value = parseInt(numOne) + parseInt(numTwo);
            break;

            case '-':
            $result.value = numOne - numTwo;
            break;

            case '*':
            $result.value = numOne * numTwo;
            break;

            case '/':
            $result.value = numOne / numTwo;
            break; 
        }
        $operator.value = '';
        numOne = $result.value;
        numTwo = '';
        // operator = '';
        }
        else{
            alert('숫자를 먼저 입력하세요.')
        }
        
    }
);
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    operator = '';
    numTwo = '';
    $operator.value = '';
    $result.value = '';
});

