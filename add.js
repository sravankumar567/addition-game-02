let firstInput=document.getElementById('firstInput');
let secondInput=document.getElementById('secondInput');
let userResult=document.getElementById('userResult');
let gameResult=document.getElementById('gameResult');

let successElement="congragulations! you got the right";
let wrongElement="please try again!";

function ResetValue(){
    let initalNumber= Math.random() * 100;
    let finalNumber= Math.random() * 100;
    firstInput.textContent = Math.ceil(initalNumber);
    secondInput.textContent = Math.ceil(finalNumber);
    console.log(firstInput);
    console.log(secondInput);
    gameResult.textContent="";
    userResult.value="";
}
ResetValue();


function  CheckValue(){



    let first_EnteredNUmber=parseInt(firstInput.textContent);
    let second_EnteredNUmber=parseInt(secondInput.textContent);
    let userDEtails=parseInt(userResult.value);



    let sumOfNumbers= first_EnteredNUmber + second_EnteredNUmber;
    if(sumOfNumbers === userDEtails){
        gameResult.textContent=successElement;
        gameResult.style.background="blue";

    }
    else{
        gameResult.textContent=wrongElement;
        gameResult.style.background="red";

    }





}
