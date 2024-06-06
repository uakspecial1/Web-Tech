// EVENT LISTENER 
const one = document.getElementById("box-1");         // click actions
one.addEventListener("click",function(){
    console.log("Cliked");
});

const two = document.getElementById("box-2");           // acting like hover effect
two.addEventListener("mousemove",function(){
    two.style.backgroundColor = "pink";

two.addEventListener("mouseleave",function(){
    two.style.backgroundColor = "lime";

});
});


const form = document.getElementById("in");           
form.addEventListener("keypress",function(e){
    console.log("The key pressed is",e.key);          //gives which key is pressed
})


// BUBBLING & CAPTURE 

const four = document.getElementById("box-4");  // Bubbling is a bydefault nature where inner most element is accessed first  
four.addEventListener("click",function(){
    console.log("Box is clicked");
});

const five = document.getElementById("contain"); // Capture : passed a 3rd parameter "true" to access outermost element
four.addEventListener("click",()=>{
    console.log("container is clicked");
},true);

