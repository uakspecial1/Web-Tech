let a = 10;
let b = 20;
sum(a,b);

function sum (a,b){
    const add = a+b;
    console.log("result is :", add);
}

const c = 15;
const d = 10;
sum(c,d);


// Function Expression
            // (no hoisting)

const square = function (num){
    return num*num;
}
console.log("Square:",square(3));


// Nested Function

function addCubes (a,b,c){
    const sa = cube(a);
    const sb = cube(b);
    const sc = cube(c);

    const sum = sa+sb+sc;

    function cube(num){
        const add = num*num*num;
        return add;
    }

    return sum;
    
}

console.log ("Addition of Cube's is" ,addCubes(2,2,1));