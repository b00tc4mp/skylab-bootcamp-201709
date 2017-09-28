 function getPerfectNumbers(n) {
     var divisors = 0;

     for (var i = 0; i < n - 1; i++) {
         if (n % i === 0) {
             divisors += i;
         }
     }

     if (divisors === n) {
         return (n + ' is a perfect number');
     } else {
         return (n + 'is not a perfect number for a non-perfect number input');
     }
 }
