                                                /* ADVANCED FUNCTION CONCEPTS*/ 

                            


/*                                                       ARROW FUNCTION 
SYMBOL :- ()=>

IT ALLOWS YOU TO CREATE FUNCTIONS IN CLEANER WAY THAN YOUR REGULAR FUNCTIONS 

THERE'S NO NEED OF WRITING "return" AS WE DO IN NORMAL FUNCTION 


*/  

const greet = (count)=> {                                 //greet is a function expression and ()=> is arrow function
    //count is passed within arrow function
    for(i=0;i<count;i++){
        console.log("Hello World");
    }
    
}
greet(3);  //calling count 3 times





 /*                        CALLBACK FUNCTIONS : PASS A FUNCTION INSIDE A FUNCTION AS A PARAMETER                  */


 const calculate = (a,b,op)=>{
    return op (a,b);
 }

            ///// Method 1

 const addition = calculate(3,4,function(num1,num2){              // function is passed inside another function 
    return num1+num2;            
 });

 console.log(addition);

        ///// Method 2

const sub = (a,b) => a-b;                  //function "sub" is created which returns a-b
const subResult = calculate(4,2,sub)  // subResult is holding a callback function i.e calculate function consists 2 parameters and sub function
console.log(subResult);  //calling the variable
   

const mul = (a,b) => a*b;
const mulResult = calculate (50,2,mul);   //we are just passing mul not calling it 
console.log(mulResult);




function calci (a,b,operation){
    return operation(a,b);
    
}
function add(num1,num2){
    const sum= num1+num2;
    console.log(sum);
}
console.log(add);

function subtraction(num1,num2){
    const sub = num1-num2;
    console.log(sub);
}
console.log(subtraction);

function multiply (num1,num2){
   const value = num1*num2;
    console.log(value);
}
console.log(multiply);

function div (num1,num2){
    const division = num1/num2;
    console.log(division);
}
console.log(div);

function square(num1,num2){
    const pow = num1*num1;
    console.log(pow);
    
}
console.log(square);

calci(16,0,square);
