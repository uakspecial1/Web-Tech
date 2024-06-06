//  IN JAVASCRIPT OPERATORS ARE THE SPECIAL SYMBOLS USED TO PERFORM THE OPERATIONS ON OPERANDS (VALUES AND VARIABLES) 

//  TYPES OF OPERANDS :-
//                           1] ASSIGNMENT OPERATORS : To ASSIGN VALUES TO VARIABLES [= += -= *= /= %= **=]

//                           2] ARITHMATIC OPERATORS : USED FOR ARITHMATIC OPERATIONS [+ - / * %(REMAINDER) ++(INCREMENT) --(DECREMENT) **(POWER)]

//                           3] COMPARISON OPERATOR : COMPARES TWO VALUES & RETURN BOOLEAN VALUE (TRUE OR FALSE) [== != !== ==- < > <= >=]
                   
//                           4] LOGICAL OPERATOR : USED FOR LOGICAL OPERATIONS & RETURN BOOLEAN VALUES [&& || !]





// ARITHMATIC OPERATORS
let a = 20;
let b = 20;
z = a+b;
console.log(z);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a++);
console.log(b--);
console.log(a**b);

// ASSIGNMENT OPERATORS

let h = 3;
h+=4;
console.log(h);
h-=4;
console.log(h);
h*=4;
console.log(h);
h/=4;
console.log(h);
h%=4;
console.log(h);
h**4;
console.log(h);

// COMPARISON OPERATORS

let x = 10;
let y = '10';

console.log(x==y); // TRUE EVEN TYPES ARE DIFFERENT 
console.log(x!=y);
console.log(x<=y);
console.log(x>=y);
console.log(x!==y); // STRICT NOT EQUAL TO 
console.log(x===y); // STRICT EQUAL TO (TRUE ONLY WHEN BOTH VARIABLES HAVE SAME TYPE)
console.log(x<y);
console.log(x>y);

// LOGICAL OPERATORS 

let u = false;
let r = true;

console.log(u&&r); // TRUE WHEN BOTH ARE TRUE 
console.log(u||r); // TRUE WHEN ONE OF THE TWO IS TRUE
console.log(!u);
console.log(!r);