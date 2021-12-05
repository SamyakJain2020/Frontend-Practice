let start=document.getElementById('start')
let pause=document.getElementById('pause')
function print(val){
    let el=document.createElement('p')
    el.innerText=val
    document.body.appendChild(el)
}

const startC=Rx.Oberservable.fromEvent(start,'click')
const pauseC=Rx.Oberservable.fromEvent(pause,'click')
let i=0
startC.subscribe(() => {
    i+=1
    let interval=Rx.Oberservable.interval(1000)
    console.log(i);
    print(i)
  });
  pauseC.subscribe(() => {
    i-=1
    console.log(i);
    print(i);
  });