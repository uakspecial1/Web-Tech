//DataTypes in javascript are :- String , Number , Boolean , Undefined , Object 

let a = 30;              //Number
console.log(a);
console.log(typeof(a));

let name = 'utkarsh'   //String
console.log(name);
console.log(typeof(name));

const b = false;      //Boolean
console.log(b);
console.log(typeof(b));

let h;           // Undefined
console.log(h);
console.log(typeof(h));

const u = null;   //Null
console.log(u);
console.log(typeof(u));

// Type Conversion
        //Number()
        //String()
        //Boolean()

a = String(a);
console.log("The type of a is", a);    //30 value bcoz its a String now

a = Boolean(a);
console.log("The type of a is",a); // true as it is non-zero value

a=Number(a);
console.log("The type of a is",a);  // 1 value bcoz it was boolean before 



