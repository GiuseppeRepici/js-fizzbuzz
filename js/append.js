   function myFunction(){ 
    let x;
    for(let i = 1 ; i < 101 ; i++ ) {
        if ((i % 3 === 0) && (i % 5 === 0)){  
        x = `FizzBizz`;
        const node = document.createElement(`div`);
        let textnode = document.createTextNode(`${x}`);
        node.append(textnode);
        document.getElementById("scheda").append(node);
        } else if (i % 3 === 0 ) {
            x = `Fizz`;
            const node = document.createElement(`div`);
            let textnode = document.createTextNode(`${x}`);
            node.append(textnode);
            document.getElementById("scheda").append(node);
        } else if(i % 5 === 0){
            x = `bizz`;
            const node = document.createElement(`div`);
            let textnode = document.createTextNode(`${x}`);
            node.append(textnode);
            document.getElementById("scheda").append(node);
        } else { 
            x = i;
            const node = document.createElement(`div`);
            let textnode = document.createTextNode(`${x}`);
            node.append(textnode);
            document.getElementById("scheda").append(node);
         }
    }
   }