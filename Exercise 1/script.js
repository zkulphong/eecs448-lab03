function validate(){
    var password = document.getElementById("password").value;
    var retype = document.getElementById("retype").value;
    if(password != retype){
        alert("Passwords do not match");
    }
    if(password.length < 8){
        alert("Password must be of minimum length 8")
    }

    if(retype.length < 8){
        alert("Retyped password must be of minimum length 8");
    }

    if(password == retype && password.length >= 8 ){
        alert("Passwords are valid!")
    }
}

