let left=document.getElementById('remaining');
let used=document.getElementById('used');

let itemsList = document.querySelectorAll('.items');
// console.log(itemsList);
itemsList.forEach((element)=>{
  element.addEventListener('click',()=>{
    let styles = window.getComputedStyle(element);
  if(styles.backgroundColor == "rgb(250, 235, 215)")
  {
    //seat booked
    element.style.backgroundColor="rgb(221, 185, 138)";
     left.innerText= Number(left.innerText)-1;
     used.innerText= Number(used.innerText)+1;
  }
  else{
  // seat unbooked
    element.style.backgrooundClor="rgb(250, 235, 215)"; 
    left.innerText= Number(left.innerText)+1;
     used.innerText= Number(used.innerText)-  1;
  }
  })
})