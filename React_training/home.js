function changeText(){
    let title = document.getElementById("title")
    console.log(document.getElementById("title"));
    console.log(document.getElementsByClassName("message"));
    title.innerHTML="Welcome Inchara"
    title.style.color="red"
    
}

function greet(){
    alert("Good afternoon")
}

function validateName(){
    alert("Hello");
    let name = document.getElementById("username").value;
    console.log(name);
    if(name.length <= 3){
        // alert("Name should be more than 3 characters");
        document.getElementById("userErrorID").innerHTML = "Name should be more than 3 characters"
    }
    else{
        document.getElementById("userErrorID").innerHTML = ""
    }
    }
    

