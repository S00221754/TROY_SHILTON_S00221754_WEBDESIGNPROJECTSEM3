
let loginStatus = document.getElementById('user-login');
//add event listener to the submit button
loginStatus.addEventListener("submit", loginUser);

event.preventDefault();
//once clicked it will check if the username and password are correct
function loginUser() {

   
    let email = document.getElementById('emailAddressID').value;
    let password= document.getElementById('passwordID').value;
    if (email=="fred@email.com" && password=="fredgoat")  
    {   
        //when loggedIn is 1 it will tell the rest of the website that the user is logged in.
        localStorage.setItem('loggedIn',1);    
        window.location.href = "shop.html";  
    }
    else {
        //when zero it will say they are not logged in.
        localStorage.setItem('loggedIn',0);
        let element = document.getElementById("loginerror");
        element.classList.remove("d-none");
    }
    event.preventDefault();
}

