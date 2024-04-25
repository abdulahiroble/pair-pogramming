// isPrime.test.ts

import { isPrime } from '../isPrime';

describe('isPrime', () => {
    test('should return true for prime numbers', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBe(true);
        expect(isPrime(11)).toBe(true);
        expect(isPrime(13)).toBe(true);
    });

    test('should return false for non-prime numbers', () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(8)).toBe(false);
        expect(isPrime(9)).toBe(false);
        expect(isPrime(10)).toBe(false);
    });
});
