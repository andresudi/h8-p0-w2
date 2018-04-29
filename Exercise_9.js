// soal nomer 1 //
console.log("------soal no.1------------------------------------"); 
function shoutOut () {
    return "Halo Function!"
}
console.log(shoutOut())

// soal nomer 2 //
console.log("------soal no.2------------------------------------"); 
function calculateMultiply () {
    return num1 * num2
}

var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

// soal nomer 3 //
console.log("------soal no.3------------------------------------"); 
function processSentence () {
    return ("Nama saya " + nama + "," + " umur saya " + umur + " tahun" + ","
+ " alamat saya di " + alamat + "," + " dan saya punya hobby yaitu " + hobby + "!")
}

var nama = "Agus";
var umur = 30;
var alamat = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(nama,umur,alamat,hobby);
console.log(fullSentence);