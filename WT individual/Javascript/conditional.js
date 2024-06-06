const age = 18;
const sal = 5000;
if (age <18){
    console.log("Child");
}else if(age==18){
    console.log("Teen");
    if(sal>1000){
        console.log(sal);
    }
}else{
    console.log("Adult");
}

//TURNARY OPERATION

const marks = 100;

const result = (marks>=100) ? "passed" : "failed";
console.log("RSEULT :",result);