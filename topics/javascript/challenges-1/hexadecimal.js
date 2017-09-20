function getRGB(hexColor) {
    if (/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(hexColor) === false)
        return;

    var r = parseInt(hexColor.substring(1, 3), 16);
    var g = parseInt(hexColor.substring(3, 5), 16);
    var b = parseInt(hexColor.substring(5, 7), 16);
    var rgbColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    return rgbColor;
}