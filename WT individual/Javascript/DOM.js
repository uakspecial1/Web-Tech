// WHEN A WEB PAGE IS LOADED THE BROWSER CREATES A [DOCUMENT OBJECT MODEL] i.e DOM OF THE PAGE 
// THE HTML DOM MODEL IS CONSTRUCTED AS A TREE OF OBJECTS 


                                        // ACCESSING THE ELEMENTS
                                            
                                                     


// FINDING THE HTML ELEMENT BY id : - document.getElementByid("intro");

const box1 = document.getElementById("box-1");
console.log(box1);

// FINDING HTML ELEMENT BY TAG NAME : - document.getElementByTagName("p");

const divs = document.getElementsByTagName("div");
console.log(divs);

// FINDING HTML ELEMENT BY CLASS NAME : - document.getElementByClassName("intro");

const classname = document.getElementsByClassName("container");
console.log(classname);

// FINDING HTML ELEMENT BY CSS SELECTOR : - document.querySelectorAll("p.intro");

const random = document.querySelectorAll(".container .random");
console.log(random);


                                        // MODIFYING THE ELEMENTS 

// CHANGING HTML CONTENT USING [innerHTML] :  - document.getElementByid(id).innerHTML = new HTML


const boxy1 = document.getElementById("box-1");
boxy1.innerHTML = "Hello world";




/** CHANGING HTML ATTRIBUTES VALUE : - 
                    document.getElementByid("myIMage").src = "landscape.jpg";
                    document.getElementByid("p").style.color = blue;
 */

boxy1.style.backgroundColor = "lime";


// MODIFYING CLASS IN HTML : - 
// element.classList.add("mystyle");
// element.classList.remove("mystyle");
// element.classList.toggle("mystyle");


const boxes = document.getElementsByClassName("box");
for(let i=0;i<boxes.length;i++){
    boxes[i].classList.add("round-border");

}

                                            /* Creating and Appending HTML*/ 

/* We can create a new element using createElement() method of the document. We can also append this new element
inside any other element

1.document.createElement();
2.const element = document.getElementByid("id");
3.element.appendChild(para);

*/ 

const para = document.createElement("p");
para.innerText = "This is the new paragragh";
const display = document.getElementById("box-2");
display.appendChild(para);
para.style.color="blue";