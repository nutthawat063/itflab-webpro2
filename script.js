function username(){
    document.getElementById("changename").innerHTML = document.getElementById("username").value + "'s Gallery"
}
function profile(){
    document.getElementById("changeprofile").style.backgroundImage = "url(" + document.getElementById("image").value + ")";
}