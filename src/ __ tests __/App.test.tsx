import { longestCommonPrefix } from "../longestCommonPrefix";

describe('longestCommonPrefix', () => {
    test('should return "fl" for ["flower","flow","flight"]', () => {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    });

    test('should return "" for ["dog","racecar","car"]', () => {
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
    });
});