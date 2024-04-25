export function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return ''; // Handle empty input array

    let prefix = ''; // Initialize the common prefix

    // Iterate through the characters of the first string
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]; // Get the character at position i in the first string

        // Check if the character matches with the corresponding character in other strings
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return prefix; // Return the current prefix if characters don't match or if we reach the end of any string
            }
        }

        prefix += char; // Append the character to the prefix
    }

    return prefix; // Return the longest common prefix
}
