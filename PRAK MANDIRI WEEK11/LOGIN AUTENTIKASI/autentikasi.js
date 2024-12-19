// buat fungsi
// nilai username
// nilai password
// cek username dan password
// benar beri alert berahasil login
// username dan password kosong di berikan alert  
// username dan password salah 
// maka akan di berikan alert username dan pass salah

function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "admin" && password == "123456"){
        alert("Berhasil login");
        window.location="index.html"
        return false;
    }
    else if(username=="" || password==""){
        alert("username dan password tidak boleh kosong");
    }
    else{
        alert("Username dan password salah");
    }
}