var btn = document.querySelector('.btn');
var view = document.querySelector('.outcome');


btn.addEventListener('click', palindrome);

function palindrome(){
    var input = document.querySelector('#text').value;
    let length = input.length;

    let start = input.substring(0, Math.floor(length / 2)).
    toLowerCase();
    alert(start);

    
}
