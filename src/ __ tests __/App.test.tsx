import FizzBuzz from "../FizzBuzz";

test('returns "1" when input is 1', () => {
    expect(FizzBuzz(1)[0]).toBe('1');
});

test('returns "Fizz" when input is a multiple of 3', () => {
    expect(FizzBuzz(3)[2]).toBe('Fizz');
});

test('returns "Buzz" when input is a multiple of 5', () => {
    expect(FizzBuzz(5)[4]).toBe('Buzz');
});

test('returns "FizzBuzz" when input is a multiple of both 3 and 5', () => {
    expect(FizzBuzz(15)[14]).toBe('FizzBuzz');
});

test('returns the input number as string when input is neither a multiple of 3 nor 5', () => {
    expect(FizzBuzz(2)[1]).toBe('2');
});

