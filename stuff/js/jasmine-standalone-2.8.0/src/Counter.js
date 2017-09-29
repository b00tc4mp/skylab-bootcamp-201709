function Counter() {
    this.value = 0;
}

Counter.prototype.count = function() {
    this.value++;
};