"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }
    sub(obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    mod() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        if (this.imaginary >= 0) {
            return `${this.real}+${this.imaginary}` + 'i';
        }
        else {
            return `${this.real}${this.imaginary}` + 'i';
        }
    }
}
let firstCplx = new Complex(2, 7);
let secondCplx = new Complex(-4, 5);
let sumResult = firstCplx.add(secondCplx);
let subResult = firstCplx.sub(secondCplx);
let modResult = firstCplx.mod();
console.log(sumResult.toString());
console.log(subResult.toString());
console.log(modResult);
