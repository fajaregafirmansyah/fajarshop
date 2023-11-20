var username;
var totalProduct;

function login(vUsername) {
    if (vUsername == "") {
        alert("Maaf username tidak boleh kosong");
        return false;
    }

    username = vUsername;
    localStorage.setItem("username", username);

    return true;
}

function logout() {
    localStorage.removeItem('username');
    username = "";
    alert("Berhasil logout");
    loginState(false);
}

function loginState(state = false)
{
    if (state === false) {
        usernameText.innerHTML = "";
        loginAccess.style.display = "block";
        keranjangAccess.style.display = "none";
        logoutAccess.style.display = "none";
    } else {
        usernameText.innerHTML = username;
        loginAccess.style.display = "none";
        keranjangAccess.style.display = "block";
        logoutAccess.style.display = "block";
    }
}