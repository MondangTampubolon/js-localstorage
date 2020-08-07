
// buat function login
function login(){
    // kita ambil data dari form input HTML
    let inputUser = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;

    // kita ambil data dari localstorage
    let username = localStorage.getItem('username')
    let password = localStorage.getItem('password')

    // cek apakah kondisi username yg di input sesuai dengan localstorage kita
    // jika iya
    if(inputUser == username && inputPassword == password){
        alert("login berhasil")
        window.location.replace('./profile.html')
    } else {
        // jika tidak
        alert('login gagal')
        window.location.replace('./index.html')
    }

 
}

