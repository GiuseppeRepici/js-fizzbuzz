const prov = document.getElementById("riquadro");



for(let i = 1 ; i < 101 ; i++ ) {
    if (i % 3 === 0 ) {
        prov.innerHTML += `Fizz`;
    } else if(i % 5 === 0){
        prov.innerHTML += `bizz`;
    } else { prov.innerHTML += i; }
    console.log(i);
}



