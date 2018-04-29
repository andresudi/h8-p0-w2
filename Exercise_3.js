var nama = "Andre";
var peran = "";
var c = "Pilih salah satu peranmu untuk memulai game! \n" + "1. Ksatria \n" + "2. Tabib \n" + "3. Penyhir\n"

if (nama === ""){
console.log ("Nama harus diisi!");
}
else if (peran ===""){
console.log (
  "Halo" + " " + nama + " ", "Pilih peranmu untuk memulai game!");
}
else if (peran === "Ksatria") {
console.log (
  "Selamat datang di Dunia Proxytia" + " " + nama + ", \n" +
  "Halo Ksatria"  + " " + nama + "," + " " + "kamu dapat menyerang dengan senjatamu!")
}
else if (peran === "Tabib") {
console.log (
  "Selamat datang di Dunia Proxytia" + " " + nama + ", \n" +
  "Tabib"  + " " + nama + "," + " " + "kamu akan membantu temanmu yang terluka.")
}
else if (peran === "Penyihir") {
console.log (
  "Selamat datang di Dunia Proxytia" + " " + nama + ", \n" +
  "Penyihir"  + " " + nama + "," + " " + "ciptakan keajaiban yang membantu kemenanganmu!")
}
else {
  console.log(c)
}
