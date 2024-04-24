// import FizzBuzz from "../FizzBuzz";
import isPalindrome from "../isPalindrome";

// FizzBuzz test
// test('returns "1" when input is 1', () => {
// expect(FizzBuzz(1)[0]).toBe('1');
// });
// 
// test('returns "Fizz" when input is a multiple of 3', () => {
// expect(FizzBuzz(3)[2]).toBe('Fizz');
// });
// 
// test('returns "Buzz" when input is a multiple of 5', () => {
// expect(FizzBuzz(5)[4]).toBe('Buzz');
// });
// 
// test('returns "FizzBuzz" when input is a multiple of both 3 and 5', () => {
// expect(FizzBuzz(15)[14]).toBe('FizzBuzz');
// });
// 
// test('returns the input number as string when input is neither a multiple of 3 nor 5', () => {
// expect(FizzBuzz(2)[1]).toBe('2');
// });
// 
// Palindrome test
test('returns "radar" to be true', () => {
    expect(isPalindrome("radar")).toBe(true);
});
test('return "A man, a plan, a canal, Panama!" to be true', () => {
    expect(isPalindrome("A man, a plan, a canal, Panama!")).toBe(true);
});

test('return "hello" to be false', () => {
    expect(isPalindrome("hello")).toBe(false);
});
