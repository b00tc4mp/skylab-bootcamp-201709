    // function calculator(operation, num1, num2) {
    //  if (isNaN(num1) || isNaN(num2))
    //      throw new Error('one or both operands is not a number');

    //     if (operation === 'sum') {
    //         return num1 + num2
    //     } else if (operation === 'sub') {
    //         return num1 - num2
    //     } else if (operation === 'mul') {
    //         return num1 * num2
    //     } else if (operation === 'div') {
    //         return num1 / num2
    //     } else {
    //         console.log("Introduce dos números")
    //     }
    // }

    function calculator(operation, a, b) {
        if (typeof a !== 'number' || typeof b !== 'number')
            throw new Error('"calculator" need numbers as arguments.');

        switch (operation.toLowerCase()) {
            case 'sum':
                return a + b;
            case 'sub':
                return a - b;
            case 'mul':
                return a * b;
            case 'div':
                return a / b;
            default:
                return null;
        }
    }