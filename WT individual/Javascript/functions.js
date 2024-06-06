// A FUNCTION IS A BLOCK OF CODE THAT PERFORMS A SPECIFIC TASK. 
// DIVIDING A COMPLEX PROBLEM INTO SMALLER CHUNKS, MAKING YOUR PROBLEMS EASY TO UNDERSTAND AND REUSABLE

let a = 5;
let b = 10;
const result = ADD(a,b);     // HOISTING : - SPACE IS CREATED INSIDE THE MEMORY      
// const x = a+b;
// console.log("The result is :",x);
console.log("Returned Result is :",result);                                                            

let w = 9;
let u = 4;
// const y = u+w;
// console.log("The result is : ",y);
ADD(w,u);                                            // Hoisting is created and function is called through this hoisting

let h = 30;
let j = 8;
// const z = h+j;
// console.log("The result is :",z);
ADD(h,j);                                            // Hoisting is created and function is called through this hoisting
  

// CREATING A FUNCTION WITH A USER DEFINED NAME "ADD" IN WHICH :-
                                                                // 1.PASSING THE REQUIRED PARAMETERS 
                                                                // 2.WRITING THE CODE TO BE EXECUTED 
                                                                // 3.RETURN SOMETHING
function ADD (a,b){
    const sum = a+b;
    console.log("The result is :",sum);
    return sum

}

                                    // FUNCTION EXPRESSION 
             //   (THERES NO HOISTING i.e CANT BE DETERMINED FROM ANYWHERE LIKE FUNCTION DOES)

// THE MAIN DIFF BETWEEN A FUNCTION EXPRESSION AND A FUNCTION DECLARATION IS THAT WE DONT DEFINE FUNCTION NAME,
// WHICH CAN BE OMITTED IN FUNCTION EXPRESSION 
// TO CREATE ANOYNOMOUS FUNCTIONS

const sq = function (num){       // function expression created by assigning the function into a variable
    return num*num;

};
console.log(sq);        // calling the function expression

console.log(sq(3));



                                            // NESTED FUNCTIONS 

                    // FUNCTION DEFINED INSIDE ANOTHER FUNCTION AND INSIDE FUNCTION IS PRIVATE


function mul (n,m){        // mul is outer function
   
   const i = division(n);
   const L = division(m);
    
    function division(num){    // division is inner funtion which is private
        return num*num;
    }

    return i+L;
}
// division(8,2);                           cant be called bcoz interanl function is private 

console.log(mul(8,2));


// sub fucntion is created

function sub(y,p){
    const minus = y-p;
    console.log("Subtracted no is",minus);
    return minus;
}

// Hoisting for sub function is done
let y = 50;
let p = 10;
sub(y,p);

// conditional statement in fucntion
function daa (i){
    if(i<5){
        console.log("This is a function");
    }else{
        console.log("value =",i);
    }
    return i;
}
let l = 10;
daa (l);

