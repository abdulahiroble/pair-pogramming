// isPrime.ts

export function isPrime(num: number): boolean {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    // Check divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If the number is divisible by any number between 2 and its square root, it's not prime
        }
    }

    return true; // If the number is not divisible by any number between 2 and its square root, it's prime
}
