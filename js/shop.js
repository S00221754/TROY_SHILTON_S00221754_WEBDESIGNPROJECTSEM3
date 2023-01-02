
//adding event listeners to add to basket buttons
let addPro = document.getElementById('addPro');
let addpixel = document.getElementById('addPixel');
let adds22 = document.getElementById('addS22');
let addoneplus = document.getElementById('addOnePlus');
let addzflip = document.getElementById('Zflip');
let addiphone14 = document.getElementById('addIphone14');

addpixel.addEventListener("click", addToCart);
addPro.addEventListener("click", addToCart);
adds22.addEventListener("click", addToCart);
addoneplus.addEventListener("click", addToCart);
addzflip.addEventListener("click", addToCart);
addiphone14.addEventListener("click", addToCart);


//adds to the checkout
function addToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}

//search function 
function searchPhone()
{
    // reference: https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
    let input = document.getElementById('searchbar').value //gets userinput
    input=input.toLowerCase(); //sets to lower case
    let x = document.getElementsByClassName('phone'); //makes an array of all the cards with the class "phone".
      
    //loops through all phones to see if userinput has a similar word
    for (i = 0; i < x.length; i++) { 
        //if not hides the card
        if (!x[i].innerHTML.toLowerCase().includes(input)) 
        {
            x[i].style.display="none";
        }
        //if it does shows the card
        else 
        {
            x[i].style.display="Phones-item";                 
        }
    }
}
