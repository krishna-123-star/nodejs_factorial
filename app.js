const factorial = (number) => {
    if(number == 1) {
        return 1
    }else if(number == 0) {
        return 0
    } else {
        return number * factorial(number - 1)
    }
}


const number = 0
const result = factorial(number)

console.log(`The factorial of ${number} is: ${result}`);
