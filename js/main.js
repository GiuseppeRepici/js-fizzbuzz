const prov = document.getElementById("riquadro");
let x;


for(let i = 1 ; i < 101 ; i++ ) {
    if ((i % 3 === 0) && (i % 5 === 0)){
        prov.innerHTML += `FizzBizz`;
    x = `FizzBizz`;
    } else if (i % 3 === 0 ) {
        prov.innerHTML += `Fizz`;
        x = `Fizz`;
    } else if(i % 5 === 0){
        prov.innerHTML += `bizz`;
        x = `bizz`;
    } else { 
        prov.innerHTML += i;
        x = i;
     }
    console.log(x);
}



