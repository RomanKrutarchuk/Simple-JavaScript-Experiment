const heading0 = document.querySelector('.firstPrew')
setTimeout(()=>{
  addFirstHeading(heading0,' ')
}, 2500);
function addFirstHeading(heading0,text){
  heading0.textContent = text;
  heading0.style.color = '#ffff00';

}


const heading = document.getElementById("h1-id");
setTimeout(() => {
  addStylesTo(heading,'JAVA SCRIPT');
}, 3000);

const heading2 = document.querySelector(".h2-class");
setTimeout(() => {
  addStylesTo(heading2,'Учись и упражняйся');
}, 5000);

const heading3 = document.querySelector('#h2-id');
setTimeout(()=>{
  addStylesTo(heading3,'Практикуйся и развивайся')

},5500)


function addStylesTo(node,text) {
  node.textContent = text;
  node.style.color = "black";
  node.style.textAlign = "center";
  node.style.backgroundColor = "rgb(255, 225, 55)";
  node.style.marginLeft = "200px";
  node.style.marginRight = "200px";
  node.style.borderRadius = "5px";
  
}
const body = document.querySelector("#body");
setTimeout(()=>{
    body.style.backgroundColor = "black";
}, 2800)

