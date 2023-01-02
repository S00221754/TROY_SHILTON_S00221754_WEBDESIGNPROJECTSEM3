
let user = document.getElementById('userdetails');
let buy = document.getElementById('buy-now');

//this is used to make sure the user is logged in before making a purchase
(function(){
    if(user.classList.contains('d-none'))
    {
        window.location.href = 'login.html'
    }
}());

// add a listener so that we run this code and preventdefault for submit...
buy.addEventListener("click", () => {
    event.preventDefault();
    let cardnumber=document.getElementById('cardNumber').value;
    let cardcvv=document.getElementById('cardCvv').value;

    if (cardnumber=="1235 6758 9034 6503" && cardcvv=="987") {
        let fail = document.getElementById("payment-failure");
        fail.classList.add("d-none");
        let success = document.getElementById("payment-success");
        success.classList.remove("d-none");

        let total=0;
        localStorage.setItem('checkout',total); 
    } else {
        let success = document.getElementById("payment-success");
        success.classList.add("d-none");
        let fail = document.getElementById("payment-failure");
        fail.classList.remove("d-none");
   
    }
    return false;  

    
    
})


