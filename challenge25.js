// Valid Braces

function validBraces(braces) {
    const stack = [];
    const openingBraces = ['(', '[', '{'];
    const closingBraces = [')', ']', '}'];
    const bracePairs = { ')': '(', ']': '[', '}': '{' };

    for (const char of braces) {
        if (openingBraces.includes(char)) {
            stack.push(char);
        } else if (closingBraces.includes(char)) {
            const top = stack.pop();
            if (top !== bracePairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}