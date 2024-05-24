// Basic Mathematical Operations

function basicOp(op, v1, v2) {
    switch (op) {
        case '+':
            return v1 + v2;
        case '-':
            return v1 - v2;
        case '/':
            return v1 / v2;
        case '*':
            return v1 * v2;
        default:
            return 0;
    }
}