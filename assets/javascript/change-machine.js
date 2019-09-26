document.write("hello from change-machine.js");

let amount = 47
let changes = [1,5,10,20]
let result = [0,0,0,0]

if (amount > 20){
    // amount divided by 20
    let bill = Math.floor(amount / 20) 
    result[0]=bill
    console.log(result)
}

if (amount > 10){
    // amount divided by 10
    let bill = Math.floor(amount / 10) 
    result[0]=bill
    console.log(result)

  
}

if (amount > 5){
    // amount divided by 10
    let bill = Math.floor(amount / 5) 
    result[0]=bill
    console.log(result)
}

if (amount > 1){
    // amount divided by 1
    let bill = Math.floor(amount / 1) 
    result[0]=bill
    console.log(result)
}

console.log(changes)