const isPalindrome = (s: string): boolean => {
    // Remove spaces and punctuation and convert to lowercase
    const normalizedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Use two pointers to compare characters from start and end of string
    let left = 0;
    let right = normalizedString.length - 1;

    while (left < right) {
        // If characters at current pointers are not equal, it's not a palindrome
        if (normalizedString[left] !== normalizedString[right]) {
            return false;
        }
        // Move pointers towards each other
        left++;
        right--;
    }

    // If the loop completes without finding any unequal characters, it's a palindrome
    return true;
};

export default isPalindrome;
