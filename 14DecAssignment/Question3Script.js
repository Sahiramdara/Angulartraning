let result = (a) => {
    const len = a.length;
    for (let i = 0; i < len / 2; i++) {
        if (a[i] !== a[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
};
console.log(result('level'));
//# sourceMappingURL=Question3Script.js.map