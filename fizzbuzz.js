// Write a fizzbuzz() function that takes in a number, n, and returns an array of the numbers from 1 to n. For multiples of three, use "Fizz" instead of the number, and for the multiples of five, use "Buzz". For numbers that are multiples of both three and five, use "FizzBuzz" (capitalization matters).
// For example, fizzbuzz(16) should return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16].
//
// function fizzbuzz(n)
//return [...arr] numbers 
// if n%3 ===0 return 'Fizz'
// if n% 5 === return 'Buzz'
// if n% 15 === 0 return FizzBuzz'

const fizzbuzz = (n) =>{
    for (let i = 1; i <= n; i++){
        if (i % 15 === 0) console.log('FizzBuzz');
        else if(i % 3 === 0) console.log('Fizz')
        else if ( i % 5 === 0) console.log('Buzz')
        else console.log(i)

    }
}
console.log(fizzbuzz(15))

