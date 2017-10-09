// es5

var box = {
    _width: 0,
    _height: 0,
    _size: 0,

    set width(width) {
        if (width <= 10)
            this._width = width;
    },

    get width() {
        return this._width;
    },

    set height(height) {
        if (height <= 10)
            this._height = height;
    },

    get height() {
        return this._height;
    },

    setSize: function(size) {
        this._size = size;
    },

    getSize: function() {
        return this._size;
    }
};

box.width = 20;
box._width = 20;
box.height = 10;

console.log(box);

// es6

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    set width(width) {
        if (width <= 10)
            this._width = width;
    }

    get width() {
        return this._width;
    }

    set height(height) {
        if (height <= 10)
            this._height = height;
    }

    get height() {
        return this._height;
    }
}

const rect = new Rectangle(1, 1)

rect.width = 10
rect.height = 30

console.log(rect)

//
