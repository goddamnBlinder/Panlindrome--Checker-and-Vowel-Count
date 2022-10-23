const word = document.querySelector('#text');
const btn = document.querySelector('#btn');
const view = document.querySelector('.outcome');

btn.addEventListener('click', () => {
 let count = 0;
let takeOff = word.value.toLowerCase();
// alert(takeOff);
for (let i = 0; i < takeOff.length; i++) {
    const element = takeOff[i];
    if(element.match(([a,e,i,o,u]))){
      Number = element;
      
    }
}

});
