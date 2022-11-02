const card11 = document.querySelector(".card2");
let x;


for(let i = 1 ; i < 101 ; i++ ) {
    if ((i % 3 === 0) && (i % 5 === 0)){
        
    x = `FizzBizz`;
    } else if (i % 3 === 0 ) {
        
        x = `Fizz`;
    } else if(i % 5 === 0){
        
        x = `bizz`;
    } else { 
        
        x = i;
     }
    console.log(x);

    card11.innerHTML += `<div class="card1">$( x )</div>`;
}



