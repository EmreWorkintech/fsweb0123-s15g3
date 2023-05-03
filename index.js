function foo() {
    return "foo returns bar";
}


function sum(a,b){
    return a+b;
}

async function multiply(a,b) {
    return a*b;
}

module.exports = {
    foo,
    sum,
    multiply
}