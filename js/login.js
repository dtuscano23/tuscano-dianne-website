function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var real_username ="dianne"
    var real_password ="143pogi"

    if (username === "" || password == "") {
        document.getElementById("error").innerHTML = "All textboxes are required";
    }

    else {
        if(username === real_username && password === real_password) {
            document.getElementById('error').innerHTML = "Welcome " + username+"!";
        }
        else {
            document.getElementById('error').innerHTML = "Invalid username or password";
        }

    }
}

function forgot() {
    alert("You clicked forgot password");
}