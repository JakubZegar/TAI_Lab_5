var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.sub = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.mod = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        if (this.imaginary >= 0) {
            return this.real + "+" + this.imaginary + 'i';
        }
        else {
            return "" + this.real + this.imaginary + 'i';
        }
    };
    return Complex;
}());
var firstCplx = new Complex(2, 7);
var secondCplx = new Complex(-4, 5);
var sumResult = firstCplx.add(secondCplx);
var subResult = firstCplx.sub(secondCplx);
var modResult = firstCplx.mod();
console.log(sumResult.toString());
console.log(subResult.toString());
console.log(modResult);
