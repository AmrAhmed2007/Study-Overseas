function validationform(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    if(name==="" || email==="" ||phone==="" || message===""){
        alert('please filled all feilds')
        return false
    }
    if(email.indexOf('@') ===-1 || email.indexOf('.') ===-1){
        alert('please write valid email')
        return false
    }
    return true
}