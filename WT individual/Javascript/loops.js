// FOR LOOP IS USED WHEN THE NUMBER OF ITERATIONS ARE KNOWN

for(let i = 0;i<=4;i++){
    console.log("Looping",i);
}


// WHILE LOOP IS USED WHEN NUMBER OF ITERATIONS ARE NOT KNOWN

let step = 0;
while(step<5){                             // first checks the condition then executes
    console.log("while looping",step);
    step++;
}

// DO WHILE LOOP AND WHILE LOOP ARE SIMILAR BUT HERE THE BODY OF LOOP IS EXECUTED ATLEST ONCE

let hii = 6;
do{
    
    console.log("Hello loops"); 
        hii++;                            // first executes and then checks the condition 
}while(hii<5);



// break is used to come out of the loop 
let o = 0;
while(0<5){
    console.log(o);
    o++;
    if(o==2){                          // loop stops at 2
        break;
    }
}

// continue is used to skip an iteration

for(let x = 0; x<5;x++){
   
    if(x==3){                          // count 3 is skipped 
        continue;
    }
    console.log("count",x);
    
}