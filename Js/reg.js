const reg =document.getElementById('reg');
const cancel =document.getElementById('cancel');
const fname=document.getElementById('firstname');
const lname=document.getElementById('lastname');
const userEmail = document.getElementById('email');
const address=document.getElementById('address');
const age=document.getElementById('age');
const adminkey = document.getElementById('adminkey');
const adminacckey = 'mahmoudsaad97';
const logAdmin=document.getElementById('admin');
const logEmployee=document.getElementById('employee');
const images=['images/avatar.png','images/avatar1.png','images/avatar2.png','images/avatar3.png','images/avatar4.png','images/avatar5.png','images/avatar6.png','images/avatar7.png','images/avatar8.png','images/avatar9.png','images/avatar10.png']
//Start ForgetPassword
const resetPassword=document.getElementById('resetPassword');
const forgetedEmail =document.getElementById('forgetedEmail')
//End ForgetPassword
//remove currentUser from local storage
  localStorage.removeItem('currentUser');


class User {
    //fields
    constructor(fullName, userName, password, age, address,email) {
    this.fullName = fullName;
    this.userName = userName;
    this.password = password;
    this.age = age;
    this.address = address;
    this.email=email;
  }
  workedhours(){};
}


class Employee extends User {

  //Constructor
  constructor(fullName, userName, password, age, email, address,type,profileimg) {
    super(fullName,userName,password,age,address,email);
  this.role='employee';
  this.pending = true;
  this.banned = false;
  this.signin =[];
  this.absentDays=[];
  this.excuseDays=[];
  this.lastSignin ='';
  this.type = type;
  this.profileimg=profileimg;
  }
  //Methods
  workedhours(){
    let total =0;
    this.signin.forEach(function(ele){
      if(ele.end){
        let start = new Date(ele.date + ' ' + ele.start);
        let end = new Date(ele.date + ' ' + ele.end);
        let diff = end.getTime() - start.getTime();
        total += diff;
      }
    })
    let hoursdiff = total / 3600000;
    let hours = Math.floor(hoursdiff);
    let minutes = Math.floor((hoursdiff - hours) * 60)
    return hours + ' hours and ' + minutes + ' minutes';
  }
}

class Admin extends User {
  //fields
  role ='admin';

  constructor(fullName, userName, password, age, address,email) {
    super(fullName,userName,password,age,address,email);
  }
}
let users = JSON.parse(localStorage.getItem('users')) || []
if(users.length === 0){
  users = [new Admin("Mahmoud Saad","admin","sa3d123",26,"elshnwany St","mahmoud.s3d97@gmail.com")];
    localStorage.setItem("users",JSON.stringify(users));
}
function sendEmail(useremail,message,sub){
  Email.send({
    SecureToken : "889520bc-883a-4000-9411-bcbfb0ce866d",
    To : useremail,
    From : "srofox20@gmail.com",
    Subject : sub,
    Body : message
}).then(function(response) {
  console.log(response);
  alert('Message sent successfully!');
  window.location.href="login.html"
}, function(error) {
  console.log(error);
  alert('Message failed to send.');
});
}


//Validation for Forms 
function validName(name){
  let namepattern = /^[a-zA-Z]{4,12}$/;
  return (name.value.match(namepattern));
}

function validEmail(){
  let emailpattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return userEmail.value.match(emailpattern);
}

function validAge(){
  return (age.value >= 20 && age.value < 70);
}

function ValidUserType(){
  let flag = false;
    if(position.value === 'Security' || position.value === 'user'){
      flag =true;
    }
    return flag;
}

function Adminvalid(){
  if(logAdmin.checked){
    if(adminkey.value === adminacckey){
      return true;
    }else{
      return false;
    }
  }else{
    return true;
  }
}
//End OF Validation 

if(cancel){
  cancel.addEventListener('click',(e)=>{
    if(!confirm("Are You Sure You Want to clear data")){
      e.preventDefault();
    }
  });
}


if(reg){
  fname.focus();
  fname.addEventListener('blur',()=>{
    if(validName(fname)){
      fname.classList.add('is-valid');
      fname.classList.remove('is-invalid');
      fname.nextElementSibling.textContent ='valid';
      fname.nextElementSibling.className ='text-success'
    }else{
      fname.classList.add('is-invalid');
      fname.classList.remove('is-valid');
      fname.nextElementSibling.textContent ='Please Enter Valid Name';
      fname.nextElementSibling.className ='text-danger'
    }
  })
  lname.addEventListener('blur',()=>{
    if(validName(lname)){
      lname.classList.add('is-valid');
      lname.classList.remove('is-invalid');
      lname.nextElementSibling.textContent ='valid';
      lname.nextElementSibling.className ='text-success'
    }else{
      lname.classList.add('is-invalid');
      lname.classList.remove('is-valid');
      lname.nextElementSibling.textContent ='Please Enter Valid Name';
      lname.nextElementSibling.className ='text-danger'
    }
  })
  userEmail.addEventListener('blur',()=>{
    if(validEmail()){
      userEmail.classList.add('is-valid');
      userEmail.classList.remove('is-invalid');
      userEmail.nextElementSibling.textContent = 'valid';
      userEmail.nextElementSibling.className ='text-success'
    }else{
      userEmail.classList.add('is-invalid');
      userEmail.classList.remove('is-valid');
      userEmail.nextElementSibling.textContent = 'Please Enter Valid Email';
      userEmail.nextElementSibling.className ='text-danger'
    }
  })
  reg.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!(validAge() && validEmail() && validName(fname) && validName(lname) &&ValidUserType() )){
    validAge() ? age.classList.add('is-valid') : age.classList.add('is-invalid');
    age.nextElementSibling.textContent = validAge() ? 'valid' : 'Not valid';
    age.nextElementSibling.className = validAge() ? 'text-success' : 'text-danger';
    ValidUserType() ? position.classList.add('is-valid'):position.classList.add('is-invalid');
    position.previousElementSibling.textContent = ValidUserType()? 'valid':'Select Your Position';
    position.previousElementSibling.className = ValidUserType()? 'tex-success':'text-danger';
    }
  else {
      // Validation succeeded, check if email already exists
      let usersEmails = JSON.parse(localStorage.getItem('emails')) || [];
      if (usersEmails.indexOf(userEmail.value) !== -1) {
        // Email already exists, display error message
        console.log(userEmail.nextElementSibling.innerHTML)
        userEmail.nextElementSibling.innerHTML = `<p class="text-danger">This Email Already Exist Enter another One </p>`
      } else {
        // Generate random username and password
        const username = `${fname.value.toLowerCase()}_${lname.value.toLowerCase()}${Math.random().toString().substring(2, 4)}`;
        const password = Math.random().toString(36).substring(2, 10);
        let users = JSON.parse(localStorage.getItem('users')) || [];
        //Check UserName is Unique
        while (users.some(user => user.userName === username)) {
          username = Math.random().toString(36).substring(2, 10);
        }
        let fullName = fname.value + " " +lname.value;
        let imgindex =Math.floor((Math.random() * images.length));
        let emp = new Employee(fullName,username,password,age.value,userEmail.value,address.value,position.value,images[imgindex]);
        //Send Email
        let message=`
          Hi ${fname.value} ${lname.value},<br><br>Here is your username and password:<br>
          Username: ${username}<br>
          Password: ${password}<br>
          <br>Thanks,<br>Mahmoud Saad`
        sendEmail(userEmail.value,message,'Your Username and Password');
        //End Email
        // Email does not exist, add to array and store in local storage
        usersEmails.push(userEmail.value);
        localStorage.setItem('emails', JSON.stringify(usersEmails));
        users.push(emp);
        localStorage.setItem('users',JSON.stringify(users))
      }
    }
  });
}



//Start ForgetPassword Script
if(resetPassword){
  let allEmails = JSON.parse(localStorage.getItem('emails')) || [];
  let allUsers = JSON.parse(localStorage.getItem('users')) || [];
  function getUser(email){
    for(let i=0; i<allUsers.length;i++){
      if (allUsers[i].email === email) {
      return allUsers[i];
    }
    }
  }
  resetPassword.addEventListener('click',(e)=>{
    e.preventDefault();
    if(allEmails.includes(forgetedEmail.value)){
      let user = getUser(forgetedEmail.value);
      let message = `Hi ${user.fullname},,<br><br>Here is your username and password:<br>
          Username: ${user.userName}<br>
          Password: ${user.password}<br>
          <br>Thanks,<br>Mahmoud Saad`
      sendEmail(forgetedEmail.value,message,'Your Password');
    }else{
      let warn = document.createElement('div');
      warn.innerHTML=`
      <p class='text-danger'>Wrong Email</p>
      `
      forgetedEmail.insertAdjacentElement("afterend",warn)
    }
  })
}
//End ForgetPassword Script




