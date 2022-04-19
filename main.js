document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("newuser").disabled= true;
    document.getElementById("existinguser").disabled= true;

    document.getElementById("button1").addEventListener("click", function () {

        document.getElementById("welcome").disabled= true;
        document.getElementById("newuser").disabled= false;
        document.getElementById("existinguser").disabled= true;
    });
    document.getElementById("button2").addEventListener("click", function (){
        document.getElementById("welcome").disabled= true;
        document.getElementById("newuser").disabled= true;
        document.getElementById("existinguser").disabled= false;
    });
});
function newAlert(){
    let name = document.getElementById("username").value;
    alert("welcome " + name);
}
function existAlert(){
    let name = document.getElementById("existusername").value;
    alert("welcome back " + name);
}