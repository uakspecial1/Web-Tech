/*ARRAY CALLBACK FUNCTIONS*/

/*
    1. find()       : RETURNS FIRST VALUE OF ARRAY THAT PASSES TEST
    2. findIndex()  : RETURNS FIRST INDEX OF ARRAY THAT PASSES TEST
    3. foreach()    : CALLS A FUNCTION FOR EACH ELEMENT
    4. map()        : CREATES A NEW ARRAY WITH THE RESULTS OF A CALLING FUNCTION WITH EVERY ARRAY ELEMENT  
    5. filter()     : RETURNS A NEW ARRAY WITH ALL ELEMENTS THAT PASSES TEST DEFINED BY GIVEN FUNCTION 
    6. every()      : CHECKS IF ALL ELEMENTS IN ARRAY SATISFY THE GIVEN CONDITION OR NOT
    7. some()       : CHECKS WHEATHER ATLEAST ONE OF THE ELEMENT FROM ARRAY SATISFY THE GIVEN CONDITION OR NOT 


*/


let arr = [10,20,30,40,50,60,80,90,100];

const first = (num)=>{
    return num>10;
}

const result=arr.find(first);            // gives the element 
console.log(result);

const res = arr.findIndex(first);        // gives index of that element, if test passes
console.log(res);

arr.forEach((num)=>{
    console.log("array num :",num);
});



