// Function Validasi Form Login
function cekLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username dan password wajib diisi!");
    } else {
        alert("Data login sudah lengkap!");
    }
}

// Function Validasi Form Registrasi
function cekRegister() {
    let nama = document.getElementById("nama").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let konfirmasiPassword = document.getElementById("konfirmasi-password").value;
    let kelas = document.getElementById("kelas").value;

    // Check data kosong dasar
    if (nama === "" || username === "" || email === "" || password === "") {
        alert("Data penting harus diisi!");
    } 
    // Evaluasi 1: Validasi Panjang Password minimal 8 karakter
    else if (password.length < 8) {
        alert("Password minimal 8 karakter!");
    } 
    // Evaluasi Kesesuaian Password
    else if (password !== konfirmasiPassword) {
        alert("Password dan konfirmasi password tidak sama!");
    } 
    // Evaluasi 2: Validasi Dropdown Kelas
    else if (kelas === "") {
        alert("Silakan pilih kelas!");
    } 
    else {
        alert("Data registrasi valid!");
    }
}

// Evaluasi 3: Function baru bernama tampilkanPesan()
function tampilkanPesan() {
    alert("Selamat belajar JavaScript!");
}

// Evaluasi 4: Tantangan Logika Nilai
let nilai = 75;
if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Belum Lulus");
}