    // ambil data dari localstorage
let username = localStorage.getItem("username");
let inputEmail = localStorage.getItem("inputEmail");
let inputName = localStorage.getItem('inputName');

// menampilkan data ke browser didalam div id show, dari localstorage
document.getElementById('show').innerHTML = `Username: ${username} <br>
                                             Email :${inputEmail} <br>
                                             Full Name :${inputName} <br>
                                             <hr>`

function logout(){
    window.location.replace('./login.html')
}