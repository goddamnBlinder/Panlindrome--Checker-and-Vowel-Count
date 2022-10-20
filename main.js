alert(`PANLINDROME
/ˈpalɪndrəʊm/

noun
a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam `);


var btn = document.querySelector('.btn');
var view = document.querySelector('.outcome');



btn.addEventListener('click', palindrome);

function palindrome(){
    var input = document.querySelector('#text').value;
    let length = input.length;

    let start = input.substring(0, Math.floor(length / 2)).
    toLowerCase();
    
    let end =  input.substring(length - Math.floor(length / 2)).
    toLowerCase();

    // let flip = end.split("").reverse().join();
    let flip = [...end].reverse().join("");

    // alert(flip)
  if (start == flip) {
    view.innerHTML = `${input.toUpperCase()} ✔`
  } else {
     view.innerHTML = `${input.toUpperCase()} ❌`
    
  }
    
}

