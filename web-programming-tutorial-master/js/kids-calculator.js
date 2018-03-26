function countTo(n) {
    var i = 1;
    for (; i <= n; i++) {
        console.info(i);

    }
}
function addNumbers(a,b) {
    console.info('first number is '+ a);
    console.info('second number is ' + b);
    var suma = a;/*numarul cel mai mare*/
    var degete = b; /*numarul minim*/
if (a < b ) {
    suma = b;
    degete = a;
}

for (; degete > 0; ) {
    degete--;
    suma ++;
    console.info (suma + ' - au mai ramas '+ degete + ' degetele');
}
console.info('summ is '+ suma);
}

var count = addNumbers(2,6);