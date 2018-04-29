function konversiMenit(number) {
    var hours = Math.trunc(number / 60);
    var minutes = number % 60;
    if (minutes < 10) {
        return hours + ":" + "0" + minutes
    }
    else {
        return hours + ":" + minutes
    }
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00


// Math.trunc DEFINITION

/* The Math.trunc() function returns the integer part of a number 
by removing any fractional digits.

console.log(Math.trunc(13.37));
// expected output: 13

console.log(Math.trunc(42.84));
// expected output: 42

console.log(Math.trunc(0.123));
// expected output: 0

console.log(Math.trunc(-0.123));
// expected output: 0 */