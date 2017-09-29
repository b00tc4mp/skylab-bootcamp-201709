describe("isPrime", function() {
  it("should be defined", function() {
    expect(isPrime).toBeDefined();
  });

  it("should return true on prime input", function() {
    var res = isPrime(3);

    expect(res).toBe(true);
  });

  it("should be false on non-prime input", function() {
    var res = isPrime(8)

    expect(res).toBe(false);
  });

  it("should be error", function() {
    expect(function() {
      isPrime('text');
    }).toThrowError();
  });
});
