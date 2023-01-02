

//sets the checkout to 0 when its null
if (localStorage.getItem('checkout') == null) {  
    localStorage.setItem('checkout',0);
}
let checkout=localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML=checkout;


let logout = document.getElementById('loginlogout');

//adds an event listner when the logout button is clicked
logout.addEventListener("click", Logout);



//logs the user out
function Logout() {

    let loggedin=localStorage.getItem('loggedIn'); 
    if (loggedin==1) 
    {
        localStorage.setItem('loggedIn',0);
        window.location.href = "home.html";
    } else 
    {
        window.location.href = "login.html";
    }
}


//everytime a page is run it will check if the user is logged in, if they are it will show userdetail button and logout button, if not login button will only show.
checkLoginStatus()

function checkLoginStatus() {
    
    let loggedin=localStorage.getItem('loggedIn'); 
    let element = document.getElementById("userdetails");
    if (loggedin==1) 
    {

        document.querySelector('#loginlogout').innerHTML="Logout";
        element.classList.remove("d-none");        
        element.classList.add("d-show");      
    } 
    else
    {

        element.classList.add("d-none");        
        element.classList.remove("d-show");
        document.querySelector('#loginlogout').innerHTML="Login"; 
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "login.html");
    } 

}





