const fizzbuzz = (n) => Array(n).fill(1).map((m, i) => !((i + 1) % 3) && !((i + 1) % 5) ? "FizzBuzz" 
                              : !((i + 1) % 3) ? "Fizz" : !((i + 1) % 5) ? "Buzz" : i + 1)