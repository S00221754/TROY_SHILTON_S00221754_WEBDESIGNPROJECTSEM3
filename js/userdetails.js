//when the userdetails have nothing inthem this will activate and provide the details in the json data
if (localStorage.getItem('userdetails') === null) 
{  
    let userDetails = {firstName:"Fred", lastName:"Santos", dob:"1990-03-05",address1:"Great Manchester", address2:"Manchester", address3:"Co. Sligo"};
    localStorage.setItem('userdetails',JSON.stringify(userDetails));
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    document.getElementById("dobID").setAttribute('value',userDetails.dob);
    document.getElementById("address1ID").setAttribute('value',userDetails.address1);       
    document.getElementById("address2ID").setAttribute('value',userDetails.address2);
    document.getElementById("address3ID").setAttribute('value',userDetails.address3);
} 
else 
{
    //inputs the data in the forms
    userDetails=JSON.parse(localStorage.getItem('userdetails'));
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    document.getElementById("dobID").setAttribute('value',userDetails.dob);
    document.getElementById("address1ID").setAttribute('value',userDetails.address1);       
    document.getElementById("address2ID").setAttribute('value',userDetails.address2);
    document.getElementById("address3ID").setAttribute('value',userDetails.address3);
}


let userDetailsUpdate = document.getElementById('udetails');
//event listener for the update details button
userDetailsUpdate.addEventListener("submit", UpdateUserDetails);

//when the user clicks update details button a new json data is created with the values inputed.
function UpdateUserDetails() 
{

    let userDetails={};
    userDetails.firstName=document.getElementById('firstNameID').value;
    userDetails.lastName=document.getElementById('lastNameID').value;
    userDetails.dob=document.getElementById('dobID').value;
    userDetails.address1=document.getElementById('address1ID').value;   
    userDetails.address2=document.getElementById('address2ID').value;
    userDetails.address3=document.getElementById('address3ID').value; 
  
    localStorage.setItem('userdetails',JSON.stringify(userDetails));

    event.preventDefault();


}
