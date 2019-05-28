'use strict';

let m;
let n;
let c=null;

do {
    m = +prompt('Enter first number: ');
} while ((m % 1)>0 ||(m === "")|| (m === null) || (isNaN(m)===true) ||(Boolean(m)===false));
do {
    n = +prompt('Enter second number: ');
} while ((n % 1)>0 || (n === "") || (n === null) || (isNaN(n)===true) || (Boolean(n)===false));
if (m>n) {
    [n, m] = [m, n];
}

let i;
let j;
let k;
k=0;
for (i=m;i<=n;i++){
    for(j=1;j<=i;j++) {
        if (i % j == 0)
            k++;
    }
    if (k == 2) console.log(i);
    k=0;
}