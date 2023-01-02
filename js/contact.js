let submitQuery = document.getElementById('querySubmit');
//add an event listener to the submit button


//once clicked the function is called
submitQuery.addEventListener("click", () => {
    event.preventDefault();
    let firstName=document.getElementById('firstname').value;
    let lastName=document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let textarea = document.getElementById('contactText').value;

    //if all form is filled it will say success
    if (firstName == "" || lastName == "" || email == "" || textarea == "")
     {
        let success = document.getElementById("payment-success");
        success.classList.add("d-none");
        let fail = document.getElementById("payment-failure");
        fail.classList.remove("d-none");

    } 
    else 
    {
        //when not it will say error
        let fail = document.getElementById("payment-failure");
        fail.classList.add("d-none");
        let success = document.getElementById("payment-success");
        success.classList.remove("d-none");

   
    }
    
    
})