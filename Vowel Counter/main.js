const word = document.querySelector('#text');
const btn = document.querySelector('#btn');
const view = document.querySelector('.outcome');
const submit = document.querySelector('.box-model');

btn.addEventListener('click', () => {
let count = 0;
let vowel = word.value.toLowerCase();

for (let i = 0; i < vowel.length; i++) {
    const element = vowel[i];
    if(element.match(/([a,e,i,o,u])/)){
        count++;
    }
}
view.innerHTML = `${word.value.toUpperCase()} has ${count} vowels`
});
