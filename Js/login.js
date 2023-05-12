//Login Form
const logName = document.getElementById('username');
const logPass = document.getElementById('userpassword');
const login=document.getElementById('login');
const reject =document.getElementById('rej');
const logAdmin=document.getElementById('admin');
const logEmployee=document.getElementById('employee');
//End Login Form

//Start Login Form Script
let allUsers=JSON.parse(localStorage.getItem('users'));
function checkUserAccount(){
  let flag=false;
  let txt=false;
  if(allUsers){
    for(let i=0;i<allUsers.length;i++){
      if(logName.value === allUsers[i].userName && logPass.value ===  allUsers[i].password){
        if(!allUsers[i].pending && !allUsers[i].banned){
          flag = true;
          localStorage.setItem('currentUser',JSON.stringify(allUsers[i]));
          txt = true;
          break;
        }else{
          if(allUsers[i].pending === true){
            login.previousElementSibling.innerHTML=`<p class="text-danger"> You Cant Login Right Now Wait Admin Confirm</p>`;
            txt=true;
          }else if(allUsers[i].banned){
            login.previousElementSibling.innerHTML=`<p class="text-danger"> You Got Banned</p>`;
            txt=true;
          }
        }
      }
    }
    if(!txt){
      login.previousElementSibling.innerHTML =`<p class="text-danger"> Your User Name Or Password is incorrect</p>`;
    }
  }else{
    login.previousElementSibling.innerHTML =`<p class="text-danger"> No Users Founded</p>`;
  }
  return flag;
  }


if(login){
  localStorage.removeItem('currentUser');
  login.addEventListener('click',(e)=>{
    if(!checkUserAccount()){
      e.preventDefault();
    }
  })
}

//End Login Form Script