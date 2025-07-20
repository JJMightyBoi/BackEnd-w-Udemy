

var fibGenerator = function*() {
    let a=0;
    let b=1;
    while(true){
        yield a;
        let temp = b;
        b = b+a;
        a= temp;
    }
};
// const gen = fibGenerator();
const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);