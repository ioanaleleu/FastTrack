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

while (degete) {
    degete--;
    suma ++;
    console.info (suma + ' - there are '+ degete + ' fingers left');
}
console.info('summ is '+ suma);
}

/*var count1 = addNumbers(2,6);
var count2 = addNumbers(12, 30);*/
function isNumberPrime(n) {
    for(var i = 2; i< n; i++){
        if(n%i == 0){
            return false;
        }
    }
return true;
}

function PrimeNumbers(n) {
    for(var i =1; i<=n; i++) {
        if (isNumberPrime(i)){
            console.info(i);

        }
    }
}
PrimeNumbers(25);