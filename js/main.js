const card11 = document.querySelector(".card2");
let x;


for(let i = 1 ; i < 101 ; i++ ) {
    if ((i % 3 === 0) && (i % 5 === 0)){
        
    x = `FizzBizz`;
    card11.innerHTML += `<div class="card1 blu"> ${x} </div>`;
    } else if (i % 3 === 0 ) {
        
        x = `Fizz`;
        card11.innerHTML += `<div class="card1 giallo"> ${x} </div>`;
    } else if(i % 5 === 0){
        
        x = `bizz`;
        card11.innerHTML += `<div class="card1 bianco"> ${x} </div>`;
    } else { 
        
        x = i;
        card11.innerHTML += `<div class="card1"> ${x} </div>`;
     }
    console.log(x);

    
}



