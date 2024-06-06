

// setTimeout function is used for setting the delay


function getcheese(user){                    //user function 

    console.log("Go and fetch the cheese");    

    setTimeout( function() {
        const cheese = "🧀";
        console.log("You will get the cheese after 3 sec delay");
        user(cheese);
        return cheese;

    }, 3000);
}
// A callback function (user) is created which is passed in (getcheese)
// This user function holds (cheese) & will give an acknowledgement that
// we have Got the cheese 


function makeDough(cheese,callback){                // callback is added for acknowledgement of dough 

    console.log("Make some dough");

    setTimeout(function(){
        const dough = cheese + "🍩";
        console.log("Preparing dough",dough);
        callback(dough);
        return dough;
        
    },4000);
}


function bakePizza (dough,callback){              //acknowledgement for pizza 

    console.log("Prepare a delecious Pizza");

    setTimeout(function() {
        const pizza = dough + "🍕";
        console.log("Pizza is Ready",pizza);
        callback(pizza);
        return dough;
    }, 6000);
}

getcheese (function user(cheese){ 
   console.log("Obtained",cheese);
});
makeDough (function callback(dough){
    console.log("Obtained",dough);
});
bakePizza (function callback(pizza){
    console.log("Obtained",pizza);
})

    
// Pizza => dough => cheese