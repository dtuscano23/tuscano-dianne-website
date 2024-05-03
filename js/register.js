function register() {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var password = document.getElementById("password").value;

    if (username === "" || name == "" || gender == ""  || password == "" ) {
        document.getElementById("error").innerHTML = "Error Message";
    }

    else {
        document.getElementById('error').innerHTML = "Registered Successfully ";
    }
}

function forgot() {
    alert("You clicked forgot password");
}