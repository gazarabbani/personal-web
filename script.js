function validasiForm() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    if (nama.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("Semua field harus diisi!");
        return false;
    }

    if (password.length < 6) {
        alert("Password harus terdiri dari minimal 6 karakter!");
        return false;
    }

    console.log("Validasi berhasil, data dikirim ke server.");
    return true;
}