const data = (event) => {
    event.preventDefault()
    // mengambil data dari form input untuk dimasukan ke local storage
    let username = document.getElementById("username").value
    localStorage.setItem("username",username);
    let inputEmail = document.getElementById("inputEmail").value
    localStorage.setItem("inputEmail",inputEmail);
    let inputName = document.getElementById('inputName').value
    localStorage.setItem('inputName',inputName);
    let password = document.getElementById('password').value
    localStorage.setItem("password",password)
    // lempar ke halaman login
    window.location.replace("./login.html")
}
