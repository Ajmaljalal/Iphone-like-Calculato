const btnsSilver = document.getElementsByClassName('btnSilver');
const btnsOrange = document.getElementsByClassName('btnOrang');
const btnsGray = document.getElementsByClassName('btnGray');

const resultP = document.getElementById('currNum');
const storedNumP = document.getElementById('storedNum');


let result = 0;
let currentNum = 0;
let storedNum = 0;
let arithmatic;

Array.from(btnsSilver).forEach((btn) => {
    btn.addEventListener('click', function(e){
        if (e.target.innerHTML === 'AC'){
            resultP.innerHTML = '';
        }

        if(e.target.innerHTML === "+/-"){
            resultP.innerHTML = '-' + resultP.innerHTML;
        }

        if (e.target.innerHTML === '%'){
            result = currentNum/100;
            resultP.innerHTML = result;
        }
    });
}); 


/* Typing the numbers into the scree */
Array.from(btnsGray).forEach((btn) => {
    btn.addEventListener('click', function(e){
        if (e.target.innerHTML === 'del'){
            resultP.innerHTML = '';
        } else {
            currentNum = e.target.innerHTML;
            resultP.innerHTML += currentNum;
        }
    });
});

/* add, sub, mult, and dividing the numbers */
Array.from(btnsOrange).forEach((btn) => {
    btn.addEventListener('click', function(e){
        if (e.target.innerHTML === '/'){
            storedNum = resultP.innerHTML;
            storedNumP.innerHTML = storedNum;
            resultP.innerHTML = '';
            arithmatic = '/';
        }
        

        if (e.target.innerHTML === 'x'){
            storedNum = resultP.innerHTML;
            storedNumP.innerHTML = storedNum;
            resultP.innerHTML = '';
            arithmatic = 'x';
        }
        

        if (e.target.innerHTML === '-'){
            storedNum = resultP.innerHTML;
            storedNumP.innerHTML = storedNum;
            resultP.innerHTML = '';
            arithmatic = '-';
        }
        
        if (e.target.innerHTML === '+'){
            storedNum = resultP.innerHTML;
            storedNumP.innerHTML = storedNum;
            resultP.innerHTML = '';
            arithmatic = '+';
        } 

        /* showing the result in the screen */
        if (e.target.innerHTML === '='){            
                switch(arithmatic){
                    case '/':
                        currentNum = Number(resultP.innerHTML);
                        result = Number(storedNum) / currentNum;
                        resultP.innerHTML = result;
                        storedNumP.innerHTML = '';
                    break;

                    case 'x':
                    console.log(arithmatic);
                        currentNum = Number(resultP.innerHTML);
                        result = Number(storedNum) * currentNum;
                        resultP.innerHTML = result;
                        storedNumP.innerHTML = '';
                    break;

                    case '+':
                    console.log(arithmatic);
                        currentNum = Number(resultP.innerHTML);
                        result = Number(storedNum) + currentNum;
                        resultP.innerHTML = result;
                        storedNumP.innerHTML = '';
                    break;

                    case '-':
                    console.log(arithmatic);
                        currentNum = Number(resultP.innerHTML);
                        result = Number(storedNum) - currentNum;
                        resultP.innerHTML = result;
                        storedNumP.innerHTML = '';
                    break;
                    default: resultP.innerHTML = "(-_-)";
                }
        }  
    });
});