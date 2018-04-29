// NOMER 1 //
console.log("------soal no.1------------------------------------"); 
console.log("Looping pertama")

var a = 2;
var b = 20;

while (a < 20) {
    console.log(a + " - I love coding")
    a += 2;
}

console.log("Looping kedua")
while (b > 0) {
    console.log(b + " - I will become fullstack developer")
    b -= 2;
}

// NOMER 2 //
console.log("------soal no.2------------------------------------"); 

console.log("Looping pertama")

for (var a = 2; a < 20; a ++) {
    console.log(a + " - I love coding")
}

console.log("Looping kedua")
for (var b = 20; b > 0; b --) {
    console.log(b + " - I will become fullstack developer")
} 

// NOMER 3 //
console.log("------soal no.3------------------------------------"); 

console.log("------soal no.3.1------------------------------------"); 
for( var a=0; a<100; a++) {
    console.log (a);
}

console.log("------soal no.3.2------------------------------------"); 
for (var a = 0; a < 100; a++) {
    if (a%2 === 0) {
        console.log(a+" Genap")
    }
    else {
        console.log(a +" Ganjil")
    }
} 

console.log("------soal no.3.3------------------------------------"); 
for (var a = 0; a < 100; a+=2) {
    console.log(a)
}

for (var a = 0; a < 100; a += 5) {
    console.log(a)
}

for (var a = 0; a < 100; a += 9) {
    console.log(a)
} 

console.log("------soal no.3.4------------------------------------"); 
for (a=0; a<100 ; a+=2) {
    if (a%3 === 0) {
        console.log(a+ " KELIPATAN 3") 
    }
    else {
        console.log(a)
    }
} 

for (a = 0; a < 100; a += 5) {
    if (a % 6 === 0) {
        console.log(a + " KELIPATAN 6")
    }
    else {
        console.log(a)
    }
} 

for (a = 0; a < 100; a += 9) {
    if (a % 10 === 0) {
        console.log(a + " KELIPATAN 10")
    }
    else {
        console.log(a)
    } 
}