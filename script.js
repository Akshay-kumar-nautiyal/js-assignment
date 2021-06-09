var firstName=document.getElementById('fname');
var lastName=document.getElementById('lname');
var emailCheck=document.getElementById('email');
var numberCheck=document.getElementById('number');
var DOB=document.getElementById('date');
var Gender=document.getElementById('gender');
var form=document.getElementById('form');
var clear=document.getElementById('clear');
var reset=document.getElementById('reset');

var ptr = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var ptr1 = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

    
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    if(ptr.test(emailCheck.value)){
        document.getElementById('email').style.border=" 2px solid lightgreen";//True if border green
      
  }
  else{
      document.getElementById('email').style.border="2px solid red";//false if border red
      return;
  }

  if(ptr1.test(numberCheck.value)){
      document.getElementById('number').style.border="2px solid lightgreen";//True if border green
  }
  else{
      document.getElementById('number').style.border="2px solid red";//false if border red
      return;
  }

    let x; // undefined
    x = document.getElementById('date').value;
  
    var date = new Date();
    var newDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDay()}`;
    
    if (Date.parse(newDate)- Date.parse(x) >= 568024668000){
        
    }else{
        alert('age is less than 18');
        return;
    }
   
    let formData={
        First_name:firstName.value,
        Last_name:lastName.value,
        Email:emailCheck.value,
        Number:numberCheck.value,
        DOB:DOB.value,
        Gender:Gender.value
    }

    localStorage.setItem('formData',JSON.stringify(formData));
    dispData();

  })
    
function dispData(){
    let{First_name,Last_name,Email,Number,DOB,Gender}=JSON.parse(localStorage.getItem('formData'));
    var output =document.getElementById('output')
    output.innerHTML=`
    <table>
        <tbody>
            <tr>
                <td>First Name</td>
                <td>${First_name}</td>
            </tr>
            <tr>
                <td>last Name</td>
                <td>${Last_name}</td>
            </tr>
            <tr>
                <td>email</td>
                <td>${Email}</td>
            </tr>
            <tr>
                <td>Number</td>
                <td>${Number}</td>
            </tr>
            <tr>
                <td>Date of Birth</td>
                <td>${DOB}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>${Gender}</td>
            </tr>
        </tbody>
    </table>`

}

clear.addEventListener("click",()=>{
    location.reload();
    localStorage.clear();
    
})

reset.addEventListener("click",()=>{
    firstName.value="";
    lastName.value="";
    emailCheck.value="";
    numberCheck.value="";
    DOB.value="";
    Gender.value="";
    
})