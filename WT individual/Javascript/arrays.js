const words = ['apple','banana','grapes'];              // Creating an array 
console.log(words); 

let arr = [10,20,30,50,100];
console.log(arr[0]);                                // Index based accessing
console.log(arr[4]); 

const name = ['cow', 
                10,                                // Mixed data types array
                true,
                {
                    me:'anuj'
                },
                function hello(){
                    console.log("Hello world");
                } ];

console.log(name[3]);
console.log(name[4]);

console.log(name.length);                 // length is a property which specifies the length of an array

const newNAME= name;                    // Copying the name array into another array 
newNAME [1] = 'Cherry';                // updating the array index
console.log(newNAME);



//                     METHODS IN ARRAY ARE  USED TO CALCULATE DIFFERENT THINGS 

// SOME COMMON ARRAY METHODS ARE : -
        //                              1] indexOf()   : SEARCHES AN ELEMENT OF AN ARRAY AND RETURN ITS POSITION 
        //                              2] includes()  : CHECKS IF AN ARRAY CONTAINS A SPECIFIED ELEMENT 
        //                              3] push()      : ADDS AN NEW ELEMENT TO END OF AN ARRAY & RETURNS NEW LENGTH OF THAT ARRAY 
        //                              4] unshift()  : ADDS NEW ELEMENT TO BEGINNING OF ARRAY & RETURNS NEW ELEMENT OF THAT ARRAY 
        //                              5] pop()      : REMOVES THE LAST ELEMENT OF ARRAY AND RETURNS THE REMOVED ARRAY 
        //                              6] shift()    : REMOVES THE FIRST ELEMENT OF ARRAY AND RETURNS THE REMOVED ARRAY 
        //                              7] sort()     : SORTS THE ELEMENT ALPHABETICALLY IN STRINGS AND IN ASCENDING ORDER
        //                              8] slice()    : SELECTS THE PART OF AN ARRAY AND RETURNS THE NEW ARRAY 
                

const nums = [10,20,20,40,50,20];
console.log(nums.indexOf(40));         // tells the index of element
console.log(nums.includes(10));        // gives a boolean value TRUE or FALSE
nums.push('bye');                     // push element at end of array
console.log(nums)
nums.pop();                         // deletes the last element from array
console.log(nums);
nums.unshift('hii');                 // adds element in starting
console.log(nums);
nums.shift('hii');                // removes element form start
console.log(nums);
nums.sort();                     // sorted array
console.log(nums);
const sub = nums.slice(2 ,5);         // creating an sub array
console.log(sub);