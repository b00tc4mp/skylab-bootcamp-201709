// function isArray(input) {
//  return Array.isArray(input);
// }

// function isArray(input) {
//     return Object.prototype.toString.call(input).indexOf('Array') !== -1;
// }

function isArray(input) {
    return input instanceof Array;
}

/* wtf!

    function checkIsAnArray(input) {
        if (input.indexOf([]))
            return true;
        else
            return false;
    }

    'hello world'.indexOf([]); // returns 0!!! what!??? [1]
    [1, 2, 3].indexOf([]); // -1

    TODO analyse why [1]!?

    */