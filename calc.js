let a = 2
let b = 5

function sum(){
    console.log(a + b)
}
function sub(){
    console.log(a - b)
}

function mult(){
    console.log(a * b)
}

function div(){
    console.log(a / b)
}

function sqrtA(){
    console.log(parseFloat(Math.sqrt(a).toFixed(2)))
}

function sqrtB(){
    console.log(parseFloat(Math.sqrt(b).toFixed(2)))
}

function cbrtA(){
    console.log(parseFloat(Math.sqrt(a).toFixed(2)))
}

function cbrtB(){
    console.log(parseFloat(Math.cbrt(b).toFixed(2)))
}

sum()
sub()
mult()
div()
sqrtA()
sqrtB()
cbrtA()
cbrtB()