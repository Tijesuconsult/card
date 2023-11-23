let form1 = document.getElementById('form1')
let name = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('numb')
let dateOfBirth = document.getElementById('dateOfBirth') 
let pass = document.getElementById('password')
let conpass = document.getElementById('confirmPassword')

let nameErr = document.getElementById('nameErr')
let emailErr = document.getElementById('emailErr')
let phoneErr = document.getElementById('phoneErr')
let dateErr = document.getElementById('dateErr')
let passErr = document.getElementById('passErr')
let conPassErr = document.getElementById('conPassErr')

let nameDisplay = document.getElementById('nameDisplay')
let emailDisplay = document.getElementById('emailDisplay')
let phoneDisplay = document.getElementById('phoneDisplay')
let ageDisplay = document.getElementById('ageDisplay')

let print1 = document.getElementById('print1')
let display = document.getElementById('display')
let formFill = document.getElementById('formFill')

// let d1 = dateOfBirth.getDate();
// let m1 = dateOfBirth.getMonth() +1;
// let y1 = dateOfBirth.getFullYear();

// let today = new date1();

// let d2 = dateOfBirth.getDate();
// let m2 = dateOfBirth.getMonth() +1;
// let y2 = dateOfBirth.getFullYear();

// let d3, m3, y3;

// y3 = y2 - y1;
// if(m2 <= m1){
//    m3 = m2 - m1;
// }
// else{
//    y3--;
//    m3 = 12 + m1 - m2
// }

// if(d2 <= d1){
//    d3 = d2 - d1;
// }
// else{
//    y3--;
//    d3 = 12 + d1 - d2
// }

// if(y2 <= y1){
//    y3 = y2 - y1;
// }
// else{
//    y3--;
//    y3 = 12 + y1 - y2
// }

form1.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(name.value == "" || name.value == null){
    nameErr.innerHTML = "Name is required"
    }
   if(email.value == "" || email.value == null){
    emailErr.innerHTML = "Email is required"
   }
   else if(!(email.value.endsWith('@gmail.com') || email.value.endsWith('@yahoo.com') || email.value.endsWith('@hotmail.com'))){
    emailErr.innerHTML = "Invalid Email"
   }
   if(phone.value == "" || phone.value == null){
    phoneErr.innerHTML = "Phone number is required"
   }
   else if (!(phone.value.startsWith('080') || phone.value.startsWith('070') || phone.value.startsWith('090') || phone.value.startsWith('081')
   || phone.value.startsWith('091')) !==11) {
  
    phoneErr.innerHTML = "Invalid phone number"
   }
   if(dateOfBirth.value == "" || dateOfBirth.value == null){
      dateErr.innerHTML = "Date of Birth is required"
   }

   if(pass.value == "" || pass.value == null){
    passErr.innerHTML = "Password is required"
    
   }
   if(conpass.value =="" || conpass.value == null){
    conPassErr.innerHTML = "Password is required"
   }
   else if(conpass.value !== pass.value){
    conPassErr.innerHTML = "Password deos not match"
   }
//    else if(pass.value(!('A-Z')&&('a-z')&&('0-9'))){
//     passErr.innerHTML = "wrong password"
//    }
   else{
    nameDisplay.innerHTML = name.value
    emailDisplay.innerHTML = email.value
    display.style.display = "block" 
    phoneDisplay.innerHTML = phone.value 
   //  print1.style.display = "block" 
    formFill.style.display = "none"
    let dob = new Date(dateOfBirth.value)
    let today = new Date()
    let age = today.getFullYear() - dob.getFullYear()
    ageDisplay.innerHTML = age
   }
})
