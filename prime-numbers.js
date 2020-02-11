// Print all primes numbers up to NUM.
// Sieve of Erathostenes
// 2 3 4 5 6 7 8 9 10
// 2 3 x 5 x 7 x 9 x

const NUM = 10;

for (let i = 2; i <= NUM; i++){
    let isPrime = i%2 != 0;
    if (isPrime){
        console.log(i);
    }
}