if(!localStorage.getItem('currentUser')){
  window.location.href='login.html'
}
let allUsers=JSON.parse(localStorage.getItem('users'));
let userdata=JSON.parse(localStorage.getItem('currentUser'));
let userindex = allUsers.findIndex(user => user.userName === userdata.userName);
const navbar =`
  <div class="logo">
    <img src="istockphoto-1325438663-612x612.jpg" alt="Logo" class="d-inline-block align-text-center">
  </div>
  <div class="infom d-flex align-items-center gap-2">
    <span class="p-1 mx-1" id="adminRole">Admin</span>
    <span class="p-1 mx-1" id="employeeRole">Employee</span>
    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#news-collapse" aria-expanded="false" aria-controls="news-collapse">
      <i class="fa-regular fa-bell fa-lg mx-1"></i>
    </button>
    <div class="collapse" id="news-collapse">
      <div class="card card-body">
        Here you can display the last news 
      </div>
    </div>

    <div data-bs-toggle="collapse" data-bs-target="#userControl" class="drop-down">
    <img src="images/avatar.png" alt="profile" >
    <span class='d-none d-md-inline-block'>${allUsers[userindex].fullName}</span>
    <div class="collapse" id="userControl">
    <a href="home.html">
    <i class="fa-solid fa-house fa-fw"></i>
      <span>Home</span>
    </a>
      <a href="profile.html">
      <i class="fa-solid fa-user fa-fw"></i>
        <span>Profile</span>
      </a>
      <a href="settings.html">
      <i class="fa-solid fa-gear fa-fw"></i>
        <span>Settings</span>
      </a>
      <a href="login.html">
      <i class="fa-solid fa-arrow-right-from-bracket fa-fw"></i>
        <span>Logout</span>
      </a>
    </div>
    </div>
  </div>
`
const mainContent=document.getElementById('head')

mainContent.innerHTML=navbar;
//start Home Page
const images=['images/avatar.png','images/avatar1.png','images/avatar2.png','images/avatar3.png','images/avatar4.png','images/avatar5.png','images/avatar6.png','images/avatar7.png','images/avatar8.png','images/avatar9.png','images/avatar10.png']
const welcomeText=document.getElementById('welcome-text');
const adminRole=document.getElementById('adminRole');
const employeeRole=document.getElementById('employeeRole');
//Start Profile Page
const displayUserData =document.getElementById('displayUserData');
const displayWorkedHours =document.getElementById('displayWorkedHours');
const displaylastsign =document.getElementById('displayUserData');
const reports = document.getElementById('reports');
//End Profile Page
//Start Attendence Page
const signin = document.getElementById('signin');
const signinbtn = document.getElementById('signbtn');
const attendanceTable = document.getElementById('attendanceTable')
//End Attendance Page 
// Start Settings Page
const changePassword = document.getElementById('changePassword');
const confirmpassword = document.querySelector('input[name="confirm-password"]');
const newpassword = document.querySelector('input[name="new-password"]');
const oldpassword = document.querySelector('input[name="old-password"]');
const changeAddress =document.getElementById('changeAddress');
const newAddress = document.getElementById('newAddress');
// End Settings Page
// Start Admin Panel
const displayall=document.querySelector('#allusers-table tbody');
const penddinguser=document.getElementById('penddinguserstable');
const ban =document.querySelector('#banusers-table tbody');
const unban =document.getElementById('unbanusers-table');
const fullreportTable = document.querySelector('#fullreport-table tbody')
//End Admin Panel

//HTML Structures
const sidebar =document.getElementById('sidebar');
const usersidebar =`
<h3 class="text-start text-md-center">M.<span>Saad</span></h3>
      <img src="images/avatar.png" width="50px" height="50p" class="d-block mx-auto my-3 active-img" alt="profile">
      <ul class="list-unstyled">
        <li class="py-3">
          <a href="home.html">
            <i class="fa-solid fa-house fa-fw"></i>
            <span class="d-none d-md-inline">Home</span>
          </a>
        </li>
        <li class="py-3">
          <a href="profile.html">
            <i class="fa-solid fa-user fa-fw"></i>
            <span class="d-none d-md-inline">profile</span>
          </a>
        </li>
        <li class="py-3">
          <a href="Reports.html">
            <i class="fas fa-file fa-fw "></i>
            <span class="d-none d-md-inline">Reports</span>
          </a>
        </li>
        <li class="py-3">
          <a href="settings.html">
            <i class="fa-solid fa-gear fa-fw"></i>
            <span class="d-none d-md-inline">Settings</span>
          </a>
        </li>
      </ul>
`
const securtiysidebar =`
<h3 class="text-start text-md-center">M.<span>Saad</span></h3>
      <img src="images/avatar.png" alt="profile" width="50px" height="50p" class="d-block mx-auto my-3 active-img">
      <ul class="list-unstyled">
        <li class="py-3">
          <a href="home.html">
            <i class="fa-solid fa-house fa-fw"></i>
            <span class="d-none d-md-inline">Home</span>
          </a>
        </li>
        <li class="py-3">
          <a href="profile.html">
            <i class="fa-solid fa-user fa-fw"></i>
            <span class="d-none d-md-inline">profile</span>
          </a>
        </li>
        <li class="py-3">
          <a href="attendance.html">
            <i class="fa-sharp fa-solid fa-calendar-check fa-fw "></i>
            <span class="d-none d-md-inline">Attendance</span>
          </a>
        </li>
        <li class="py-3">
          <a href="Reports.html">
            <i class="fas fa-file fa-fw "></i>
            <span class="d-none d-md-inline">Reports</span>
          </a>
        </li>
        <li class="py-3">
          <a href="settings.html">
            <i class="fa-solid fa-gear fa-fw"></i>
            <span class="d-none d-md-inline">Settings</span>
          </a>
        </li>
      </ul>
`

const adminSideBar = `
<h3 class="text-start text-md-center">M.<span>Saad</span></h3>
  <img src="images/avatar.png" width="50px" height="50p" class="d-block mx-auto my-3 active-img" alt="profile">
  <ul class="list-unstyled">
    <li class="py-3">
      <a href="home.html">
        <i class="fa-solid fa-house fa-fw"></i>
        <span class="d-none d-md-inline">Home</span>
      </a>
    </li>
    <li class="py-3">
      <a href="profile.html">
        <i class="fa-solid fa-user fa-fw"></i>
        <span class="d-none d-md-inline">profile</span>
      </a>
    </li>
    <li class="py-3">
      <a href="settings.html">
        <i class="fa-solid fa-gear fa-fw"></i>
        <span class="d-none d-md-inline">Settings</span>
      </a>
    </li>
  </ul>
<div class="admin-toggle my-3" data-bs-toggle="collapse" data-bs-target="#admin-menu">
<i class="fa-solid fa-user-tie fa-fw"></i>
<span class="d-none d-md-inline fs-6">Admin Pannel</span> 
</div>
<ul class="list-unstyled collapse" id="admin-menu">
  <li class="py-3">
    <a href="allUsers.html">
      <i class="fa-solid fa-users fa-fw"></i>
      <span class="d-none d-md-inline">All Employees</span>
    </a>
  </li>
  <li class="py-3">
    <a href="UsersReports.html">
      <i class="fa-solid fa-user-pen fa-fw"></i>
      <span class="d-none d-md-inline">Users Reports</span>
    </a>
  </li>
</ul>
`

//End html Structures

// Main functions 

//functions To Count Late || On time || Absent Days
function countLateDays(user){
  let late=0;
  user.signin.forEach(day => {
    if(day.state === 'late' && new Date(day.date).getMonth() === new Date().getMonth()){
      late++
    }
  });
  return late
}

function countOnTime(user){
    let ontime=0;
  user.signin.forEach(element => {
    if(element.state === 'on time' && new Date(day.date).getMonth() === new Date().getMonth()){
      ontime++
    }
  });
  return ontime;
}
function countAbsent(user){
  let absent = 0;
  user.absentDays.forEach((day)=>{
    if(new Date(day.date).getMonth() === new Date().getMonth()){
      absent++
    }
  })
  return absent;
}
function countExcuse(user){
  let excused=0;
  if(user.excuseDays){
    user.excuseDays.forEach((day)=>{
      day.excuse ? excused++ :excused;
    })
    
  }
  return excused;
}
function countWorkedDays(user){
  let total=0;
  user.signin.forEach((day)=>{
    if(new Date(day.date).getMonth() === new Date().getMonth() && day.start){
      total++
    }
  });
  return total;
}

function countTotalLateMin(user){
    let latemin=0;
  user.signin.forEach(day => {
    if(day.state === 'late' && new Date(day.date).getMonth() === new Date().getMonth()){
      latemin += day.lateMinutes;
    }
  });
  let hours = Math.floor(latemin / 60);
  let min = Math.floor(((latemin/60)-hours) * 60);
  return `${hours} hours and ${min} Minutes`;
}
//function to check if user Already Excused 
function checkExcuse(user){
  let flag = false;
  if(user.excuseDays){
    user.excuseDays.forEach((day)=>{
      if((day.date === new Date().toLocaleDateString())){
        flag = true;
      }
    })
  }
  return flag;
}

function displayAbsentDays(user){
  let absentarr =[]
  if(user.hireDate){
    user.absentDays.forEach((day)=>{
      absentarr.push(day.date);
    })
    if(absentarr.length > 0){
      return `(${absentarr.join(') / (')})`;
    }else{
      return 'none';
    }
  }else{
    return 'not Signed As Employee yet'
  }
  }

function displayExcuseDays(user){
  user.excuseDays = user.excuseDays || []
  let excusearr =[]
    if(user.hireDate){
  user.excuseDays.forEach((day)=>{
    if(day.excuse){
      excusearr.push(day.date);
    }
  })
  if(excusearr.length > 0){
    return `(${excusearr.join(') / (')})`;
  }else{
    return 'none'
  }
  }else{
    return 'not Signed As Employee yet'
  }
}

function AttendanceHistory(user){

}

function countAcceptedExcuse(user){
  let excused = 0;
  user.excuseDays.forEach((day)=>{
    day.excuse ? excused++ :excused;
  })
  return excused;
}
function countRejectedExcuse(user){
  let rejected = 0;
  user.excuseDays.forEach((day)=>{
    !day.excuse ? rejected++ :rejected;
  })
  return rejected;
}

// let allUsers=JSON.parse(localStorage.getItem('users'));
for(let i=0; i<allUsers.length; i++){
  if(allUsers[i].role === 'employee'){
    allUsers[i].workedhours = function() {
    let total =0;
    this.signin.forEach(function(ele){
      if(ele.start && ele.end){
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
  
}
localStorage.setItem('users', JSON.stringify(allUsers));

//function for Displaying All users to Admin Panel
function displayAllUsers() {
  for (let i = 0; i < allUsers.length; i++) {
    if(allUsers[i].role === "employee"){
      let row = document.createElement('tr');
      row.classList.add('text-center');
row.innerHTML = `
  <td><img src="${allUsers[i].profileimg || ''}" width="50"></td>
  <td class="py-3">${allUsers[i].fullName}</td>
  <td>${allUsers[i].userName}</td>
  <td>${allUsers[i].age}</td>
  <td>${allUsers[i].type}</td>
  <td>${allUsers[i].address}</td>
  <td class="${allUsers[i].pending ? 'text-danger': 'text-success'}">${allUsers[i].pending ? 'Needs Confirm': 'Confirmed'}</td>
  <td class="${allUsers[i].banned ? 'text-danger': 'text-success'}">${allUsers[i].banned ? 'banned': 'Available'}</td>
`;

  displayall.appendChild(row);
  let promoteRow =document.createElement('tr');
  promoteRow.classList.add('text-center');
promoteRow.innerHTML=`
  <td><img src="${allUsers[i].profileimg || ''}" width="50"></td>
  <td class="py-3">${allUsers[i].fullName}</td>
  <td>${allUsers[i].userName}</td>
  <td><button class="btn btn-outline-success px-4 py-1">Promote</button></td>
`
promoteTabel.appendChild(promoteRow);
  const promoteBtn = promoteRow.querySelector('button');
promoteBtn.addEventListener('click',()=>{
  allUsers[i].role = 'admin'
  console.log(allUsers[i]);
  promoteRow.remove();
  localStorage.setItem('users', JSON.stringify(allUsers));
})


  if(!allUsers[i].banned){
    let banRow = document.createElement('tr');
  banRow.classList.add('text-center');
  banRow.innerHTML=`
  <td><img src="${allUsers[i].profileimg || ''}" width="50"></td>
  <td class="p-3">${allUsers[i].fullName}</td>
  <td class="p-3">
  <button class="btn btn-outline-danger px-4 py-1">Ban</butto>
  </td>
  `
  ban.appendChild(banRow);
  // Attach a click event listener to the "Ban" button
  const banBtn = banRow.querySelector('button');
  banBtn.addEventListener('click', () => {
    // Update the user's ban status
    allUsers[i].banned = true;
    // Save the updated user data back to local storage
    localStorage.setItem('users', JSON.stringify(allUsers));
    // Remove the user row from the "ban" table
    banRow.remove();
    
  });
  }else{
  let unbanRow = document.createElement('tr');
  unbanRow.classList.add('text-center');
  unbanRow.innerHTML=`
  <td><img src="${allUsers[i].profileimg || ''}" width="50"></td>
  <td class="p-3">${allUsers[i].fullName}</td>
  <td class="p-3">
  <button class="btn btn-outline-success px-4 py-1">Unban</button>
  </td>
  `
  unban.appendChild(unbanRow);
  const unbanBtn = unbanRow.querySelector('button');
  unbanBtn.addEventListener('click', () => {
    // Update the user's ban status
    allUsers[i].banned = false;
    // Save the updated user data back to local storage
    localStorage.setItem('users', JSON.stringify(allUsers));
    // Remove the user row from the "unban" table
    unbanRow.remove();
    // Refresh the ban table to show the updated user data
  });
  }
    }

    if(allUsers[i].pending){
      let penddingRow = document.createElement('tr');
      penddingRow.classList.add('text-center');
      penddingRow.innerHTML=`
      <td><img src="${allUsers[i].profileimg || ''}" width="50"></td>
      <td class="p-3">${allUsers[i].fullName} & ${allUsers[i].userName}</td>
      <td class="p-3">
      <button class="btn btn-outline-success py-1 px-4 confirm">Confirm</butto>
      </td>
      `
      penddinguser.appendChild(penddingRow);
      // Attach a click event listener to the "Confirm" button
      const confirmBtn = penddingRow.querySelector('button');
      confirmBtn.addEventListener('click', () => {
        // update their status to "confirmed"
        allUsers[i].pending = false;
        allUsers[i].hireDate = (new Date()).toLocaleDateString();
        // Save the updated user data back to local storage
        localStorage.setItem('users', JSON.stringify(allUsers));
        // Remove the user row from the pending users table
        penddingRow.remove();
        // Refresh the all users table to show the updated user data
        // displayAllUsers();
      });
    }
    if(allUsers[i].excuse){
      let row =document.createElement('tr');
        row.innerHTML=`
        <td>${allUsers[i].fullName}</td>
        <td>${allUsers[i].excuse.reason}</td>
        <td><button class="btn btn-outline-success" id="accept">Accept</button></td>
        <td><button class="btn btn-outline-danger" id="reject">Reject</button></td>
        `
        const excuseDays = allUsers[i].excuseDays || []
        excusetable.appendChild(row);
        const accept = document.querySelector('button');
        const reject = document.querySelector('#reject');
        accept.addEventListener('click',()=>{
          if(!checkExcuse(allUsers[i])){
            excuseDays.push({
              date:(new Date()).toLocaleDateString(),
              excuse:true
            });
            allUsers[i].excuseDays = excuseDays;
            delete allUsers[i].excuse;
            localStorage.setItem('users', JSON.stringify(allUsers));
            row.remove()
          }else{
            if(allUsers[i].excuseDays[allUsers[i].excuseDays.length - 1].excuse){
              alert('you Already Accepted an Excuse for This User');
            }else{
              alert('you have Already rejected this user');
            }
          }
        });
        reject.addEventListener('click',()=>{
          if(!checkExcuse(allUsers[i])){
            excuseDays.push({
              date:(new Date()).toLocaleDateString(),
              excuse:false
            });
            allUsers[i].excuseDays = excuseDays;
            delete allUsers[i].excuse;
            localStorage.setItem('users', JSON.stringify(allUsers));
            row.remove()
          }else{
            if(!allUsers[i].excuseDays[allUsers[i].excuseDays.length - 1].excuse){
              alert('you have Already rejected this user')
            }else{
              alert('you Already Accepted an Excuse for This User');
            }
          }

        })
    }
  }
}
//function for Displaying All Users for Security To Attend them
function displayUserToAttend(){
  for(let i=0; i<allUsers.length;i++){
    if(allUsers[i].role === "employee" && !allUsers[i].pending){
      let row = document.createElement('tr');
      row.classList.add('text-center');
      row.innerHTML = `
        <td class="py-3"><img src="${allUsers[i].profileimg || ''}" width="40">${allUsers[i].fullName}</td>
        <td>${allUsers[i].userName}</td>
        <td>${allUsers[i].type}</td>
        <td>
        <button class="btn btn-outline-success py-2 px-3">Sign in</button>
        </td>
      `;

  attendanceTable.appendChild(row);
  // Add event listener to button
  const attendButton = row.querySelector('button');
if (allUsers[i].signin && allUsers[i].signin.length > 0) {
  const lastSigninDate = new Date(allUsers[i].signin[allUsers[i].signin.length - 1].date);
  const todayDate = new Date();
  if (lastSigninDate.toDateString() === todayDate.toDateString()) {
    // User has already signed in today, disable the button
    // Check if user has signed out today
    if (allUsers[i].signin[allUsers[i].signin.length - 1].end) {
      attendButton.disabled = true;
      attendButton.innerText = 'Signed out';
    } else {
      attendButton.innerText = 'Sign out';
      attendButton.classList.add('btn-outline-danger');
      attendButton.classList.remove('btn-outline-success');
    }
  }
  else{
    // User has not signed in today, enable the button
    attendButton.disabled = false;
    attendButton.innerText = 'Sign in';
  }

}
if(new Date(allUsers[i].lastSignin).toLocaleDateString() !== (new Date()).toLocaleDateString()){
    if(new Date() > (new Date()).setHours(15,30) && !allUsers[i].excuseDays.some(day => day.excuse && day.date === new Date().toLocaleDateString())){
    attendButton.disabled = true;
    attendButton.innerText = 'Missed Attend';
    attendButton.classList.add('btn-danger')
    attendButton.classList.remove('btn-outline-success')
  }else if(new Date() < (new Date()).setHours(8,30)){
    attendButton.disabled = true;
    attendButton.innerText = 'Day not Started';
    attendButton.classList.add('btn-outline-danger')
    attendButton.classList.remove('btn-outline-success')
  }else if (
  allUsers[i].excuseDays &&
  allUsers[i].excuseDays.some(day => day.excuse && day.date === new Date().toLocaleDateString())
) {
  attendButton.disabled = true;
  attendButton.innerText = 'Excused';
  attendButton.classList.add('btn-outline-primary');
  attendButton.classList.remove('btn-outline-success');
}
}else{
  let timeout= (new Date());
  let date = (new Date(timeout.getFullYear(),timeout.getMonth(),timeout.getDate(),16,00));
  if(timeout.toLocaleTimeString() >= date.toLocaleTimeString()){
    if(!allUsers[i].signin[allUsers[i].signin.length - 1].end && !allUsers[i].signin[allUsers[i].signin.length - 1].excuse){
      allUsers[i].lastSignout = date;
      allUsers[i].signin[allUsers[i].signin.length - 1].end =new Date(date).toLocaleTimeString();
        localStorage.setItem('users', JSON.stringify(allUsers));
    }
  }

}


  attendButton.addEventListener('click', () => {
  let now = new Date();
  let today = now.toLocaleDateString();
  let lastSignin = user.signin[user.signin.length - 1];
  let lastSignout = lastSignin ? lastSignin.end : null;

if (lastSignin && lastSignin.date === today && !lastSignout) {
    // User has signed in but not signed out today, sign them out
    lastSignin.end = now.toLocaleTimeString();
    user.lastSignout = now;
    allUsers[i].signin[allUsers[i].signin.length - 1].end = now.toLocaleTimeString();
    localStorage.setItem('users', JSON.stringify(allUsers));
    attendButton.innerText = 'Signed out';
    attendButton.disabled='true';
  } else {
    // User has not signed in today, sign them in
    let signtime = {
      start: now.toLocaleTimeString(),
      date: today,
      lateMinutes: 0,
      state:''
    };
    // check if user is late
    let timetocompare = new Date();
    timetocompare.setHours(8, 30, 0, 0);
    if (new Date() > timetocompare) {
      signtime.state='late';
      signtime.lateMinutes =Math.floor(((new Date() - timetocompare) / 60000));
    }else if(Math.floor(((new Date() - timetocompare) / 60000)) <= 15){
      signtime.state='on time';
    }
    user.lastSignin = now;
    allUsers[i].signin.push(signtime);
    localStorage.setItem('users', JSON.stringify(allUsers));
    
    attendButton.innerText = 'Sign Out';
    attendButton.classList.add('btn-outline-danger');
    attendButton.classList.remove('btn-outline-success');
  }
});

  }
}
}
// Function to displaying all reports Aboyut Users To Admin
function displayUsersreports(){
  for(let i=0; i<allUsers.length;i++){
    if(allUsers[i].role=== 'employee'){
      let row =document.createElement('tr');
      row.setAttribute('data-bs-toggle', 'modal');
      row.setAttribute('data-bs-target', `#exampleModal${i}`);
      row.innerHTML=`
      <td><img src="${allUsers[i].profileimg || ''}" width="50"></td>
      <td>${allUsers[i].fullName}</td>
      <td>${allUsers[i].userName}</td>
      <td class=${(new Date(allUsers[i].lastSignin).toLocaleDateString() === (new Date()).toLocaleDateString())?'text-success': 'text-danger'}>
      ${countWorkedDays(allUsers[i])} days
      </td>
      <td>${countAbsent(allUsers[i])} days</td>
      <td>${allUsers[i].hireDate}</td>
      <td>
    <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel${i}" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel${i}">
            <img src="${allUsers[i].profileimg || ''}" width="50">
            ${allUsers[i].fullName} Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Absent: ${displayAbsentDays(allUsers[i])}</p>
            <p>lastSignin: ${allUsers[i].lastSignin ? new Date(allUsers[i].lastSignin).toLocaleString() : 'none'}</p>
            <p>Excused: ${displayExcuseDays(allUsers[i])}</p>
            <p>Type: ${allUsers[i].type}</p>
            <p>Worked Days: ${allUsers[i].signin ? countWorkedDays(allUsers[i]) +' days':'--'}</p>
          </div>
        </div>
      </div>
    </div>
  </td>
      `
      fullreportTable.appendChild(row);
      if(allUsers[i].excuseDays.length >0){
      let row =document.createElement('tr');
        row.innerHTML=`
        <td>${allUsers[i].fullName}</td>
        <td>${allUsers[i].excuseDays ? allUsers[i].excuseDays.length : 'none'} day${allUsers[i].excuseDays.length > 1?'s':''}</td>
        <td>${countAcceptedExcuse(allUsers[i])}</td>
        <td>${countRejectedExcuse(allUsers[i])}</td>
        `
        excusetable.appendChild(row);
      }
      let lDays = 0;
      let lDaysArr=[];
      allUsers[i].signin.forEach((day)=>{
        day.lateMinutes > 0 ?lDays++:lDays;
        lDaysArr.push(`${day.date} => ${day.lateMinutes} min`);
      })
      function lateDetails(){
        lDaysArr.forEach((date)=>{
          
        })
      }
      if(countLateDays(allUsers[i]) > 0){
        let lateRow = document.createElement('tr');
        lateRow.setAttribute('data-bs-toggle', 'modal');
        lateRow.setAttribute('data-bs-target', `#lateReport${i}`);
        lateRow.innerHTML=`
        <td>${allUsers[i].fullName}</td>
        <td>${allUsers[i].userName}</td>
        <td>${countTotalLateMin(allUsers[i])}</td>
        <td>${lDays} day${lDays>1 ?'s':''}</td>
        <td>${Math.floor(allUsers[i].signin[allUsers[i].signin.length - 1].lateMinutes) || '0' } Min</td>
        <td>${allUsers[i].signin[allUsers[i].signin.length - 1].date || '-' }</td>
        <div class="modal fade" id="lateReport${i}" tabindex="-1" aria-labelledby="lateReportLabel${i}" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="lateReportLabel${i}">
                  <img src="${allUsers[i].profileimg || ''}" width="50">
                  ${allUsers[i].fullName} Details
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p><h5>Late Days:</h5> (${lDaysArr.join(") (")})</p>
              </div>
            </div>
        `
        lateTable.appendChild(lateRow);
      }
    }
  }
}


//Start Pages Script
  // let userdata=JSON.parse(localStorage.getItem('currentUser'));
  // let userindex = allUsers.findIndex(user => user.userName === userdata.userName);
  // checkType
switch(allUsers[userindex].type){
  case 'Security':
    employeeRole.innerHTML=`Security`;
    break;
  case 'user':
    employeeRole.innerHTML=`User`;
  break;
}
  addEventListener('load',()=>{
  if(allUsers[userindex].role === 'employee'){
    if(allUsers[userindex].type === 'Security'){
      sidebar.innerHTML = securtiysidebar;
    }else{
      sidebar.innerHTML=usersidebar;
    }
    const profileimg=document.querySelectorAll('img[alt="profile"]');
    profileimg.forEach((img)=>{
    img.src= allUsers[userindex].profileimg;
  })
  }else{
    sidebar.innerHTML = adminSideBar;
    const profileimg=document.querySelectorAll('img[alt="profile"]');
    profileimg.forEach((img)=>{
    img.src='images/admin.png' ;
  })
  }
});

    switch(allUsers[userindex].role){
    case "admin":
      employeeRole.classList.remove('active');
      adminRole.classList.add('active');
      break;
    case "employee":
      employeeRole.classList.add('active');
      adminRole.classList.remove('active');
      break;
  }
  //Start Home Script
  if(welcomeText){
    welcomeText.innerHTML=`<div class"text-center">
    <h3 class="text-success text-center">Welcome ${allUsers[userindex].fullName}</h3>
    </div>`;
    let data=document.createElement('div');
    if(allUsers[userindex].role ==='employee'){
      data.classList.add('w-50','mx-auto','text-center','my-5')
      data.innerHTML=`
      <h5>Send An Excuse </h5>
      <button class ='btn btn-outline-primary' data-bs-toggle='collapse' data-bs-target='#excuse'>Send Excuse</button>
      <div class="form-floating w-50 collapse mx-auto my-3" id="excuse">
      <textarea class="form-control" placeholder="Leave Your Excuse Here" id="excuseReason"></textarea>
      <label for="floatingTextarea">Excuse</label>
      <div></div>
      <button class ='btn btn-outline-success px-5 my-3' id="excuseBtn">Send </button>
      
      </div>
      `
      welcomeText.insertAdjacentElement("afterend",data);
      const excuseBtn=document.getElementById('excuseBtn');
      //add Event to Send Excuse
      excuseBtn.addEventListener('click',()=>{
        if(excuseReason.value.trim().length > 0){
          if(!allUsers[userindex].excuse && !checkExcuse(allUsers[userindex])){
            let excuse ={
              reason:excuseReason.value.trim(),
              accpeted:false
            }
            allUsers[userindex].excuse=excuse;
            excuseReason.nextElementSibling.nextElementSibling.innerHTML=`<p class="text-success">Done</p>`
            localStorage.setItem('users', JSON.stringify(allUsers));
            excuseReason.value='';
          }else{
            excuseReason.nextElementSibling.nextElementSibling.innerHTML=`<p class="text-danger">you Already Sent An Excuse</p>`
          }

        }else{
            excuseReason.nextElementSibling.nextElementSibling.innerHTML=`<p class="text-danger">Enter An Excuse Reason</p>`
        }
      })
    }

  }

//End Home Script
// Start Profile 
  if(displayUserData){
    if(allUsers[userindex].role ==='employee'){
      displayUserData.innerHTML=`
      <div class="userinfo flex-grow-1">
      <h3>your Info</h3>
      <p>UserName: <span>${allUsers[userindex].userName}</span></p>
      <p>FullName: <span>${allUsers[userindex].fullName}</span></p>
      <p>Address: <span>${allUsers[userindex].address}</span></p>
      <p>LastSignIn: <span>${new Date(allUsers[userindex].lastSignin).toLocaleString()}</span></p>
      <p>LastSignOut: <span>${new Date(allUsers[userindex].lastSignout).toLocaleString()}</span></p>
      <p>Total Worked Hours: <span>${allUsers[userindex].workedhours() ? allUsers[userindex].workedhours() : '-'} </span></p>
      </div>
      <div id="myChart" style="width: 100%; max-width: 500px;"> 
      </div>
      `;
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        
        function drawChart() {
        const data = google.visualization.arrayToDataTable([
          ['attendence', 'Mhl'],
          ['on time',countOnTime(allUsers[userindex])],
          ['Late',countLateDays(allUsers[userindex])],
          ['absent',countAbsent(allUsers[userindex])],
          ['excused',countExcuse(allUsers[userindex])]
        ]);
        
        const options = {
          title:'Attendence States',
          is3D:true
        };
        
        const chart = new google.visualization.PieChart(document.getElementById('myChart'));
          chart.draw(data, options);
    }
      }else{
      displayUserData.innerHTML=`
      <div class="userinfo flex-grow-1">
      <h3>your Info</h3>
      <p>FullName: <span>${allUsers[userindex].fullName}</span></p>
      <p>UserName: <span>${allUsers[userindex].userName}</span></p>
      <p>Position: <span>${allUsers[userindex].role}</span></p>
      <p>Users in Your Company: <span>${allUsers.length} User</span></p>
      `
      }
  }
//End Profile
// Start Report
if(reports){
  if(allUsers[userindex].role === 'employee'){
    let prog = Math.floor(Math.random() * 51) + 50;
    reports.innerHTML =`
    <div class="row p-5 mx-1 gap-4">
    <div class='monthlyReport col-9 col-xl-5 p-3 card'>
      <h3>Monthly Report</h3>
      <p>Total Worked Hours ${(allUsers[userindex].workedhours())}</p>
      <p>Total Days Worked ${countWorkedDays(allUsers[userindex])} Days</p>
      <p>Total Days Worked ${countAbsent(allUsers[userindex])} Days</p>
      <p>Total Work Done</p>
      <div>
      <span style="width:${prog}%;" data-progress="${prog}%"></span>
      </div>
    </div>
    <div class="col-9 col-xl-5 card p-4 dailyreports">
      <h3>Daily Report</h3>
      <p>Last Sign In:  ${new Date(allUsers[userindex].lastSignin).toLocaleString()}</p>
      <p>Last Sign out:  ${new Date(allUsers[userindex].lastSignout).toLocaleString()}</p>
      <h5>Daily Work Done</h5>
      <div>
      <span style="width:${prog}%;" data-progress="${prog}%"></span>
      </div>
      <h5>Daily Work remain</h5>
      <div>
      <span style="width:${100-prog}%;" data-progress="${100-prog}%"></span>
      </div>
    </div>
    </div>
    `
  }else{
    reports.innerHTML=``;
  }
}
// End Report

// Start Attendance Page
if(attendanceTable){
  displayUserToAttend();
}
//End Attendance Page



// Start Settings Page
if(changePassword){
  let message = document.createElement('div')
  changePassword.addEventListener('click',()=>{
    if(oldpassword.value === allUsers[userindex].password){
      if(newpassword.value === confirmpassword.value){
        if(newpassword.value.trim().length >= 8){
          allUsers[userindex].password = newpassword.value;
          localStorage.setItem('users',JSON.stringify(allUsers));
          alert('done');
          message.innerHTMl=`<p class="text-success">Done</p>`
          confirmpassword.insertAdjacentElement("afterend",message);
        }else{
          alert('enter Password more than 8 chars')
        }
      }else{
        alert('new password not matched');
        message.innerHTMl=`<p class="text-danger">new password not matched</p>`
        confirmpassword.insertAdjacentElement("afterend",message);
      }
    }else{
      alert('wrong old password');
        message.innerHTMl=`<p class="text-danger">wrong old password</p>`
        oldpassword.insertAdjacentElement("afterend",message);
    }
  })
}
if(changeAddress){
    changeAddress.addEventListener('click',()=>{
      allUsers[userindex].address = newAddress.value;
      localStorage.setItem('users',JSON.stringify(allUsers));
      newAddress.value ='';
  })
}
// End Settings Page

//Start Admin Pages
if(fullreportTable){
  const startDate = document.getElementById('startDate');
  const endDate = document.getElementById('endDate');
  const getInfoBtn = document.getElementById('getInfo');
getInfoBtn.addEventListener('click',()=>{
  console.log(startDate.value)
  console.log(endDate.value)
  displayUsersReportsByDate(startDate.value,endDate.value);
});
  displayUsersreports();
  function displayUsersReportsByDate(startDate,endDate) {
    fullreportTable.innerHTML=``;
   // If no date range is provided, display all reports
  if (!startDate && !endDate) {
    displayUsersreports();
    return;
  }

  // If only start date is provided, set end date to be the same as start date
  if (startDate && !endDate) {
    endDate = startDate;
    console.log(new Date(endDate +1))
  }

  // Convert start and end dates to Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Loop through all users and their reports to check attendance
  let flag=false;
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].role === 'employee') {
      let worked = false;
      let absent = false;
      let late = false;
      let lateMin = 0;
      let absentDays = 0;
      let lateDays = 0;
      let workDays =0;
      let absentDaysarr=[];
      for (let j = 0; j < allUsers[i].signin.length; j++) {
        const signinDate = new Date(allUsers[i].signin[j].date);

        // Check if signinDate is within the date range
        if (signinDate >= start && signinDate <= end) {
          // User attended on this date
          worked = true;
          workDays++;
          // Check if user was late on this date
          if (allUsers[i].signin[j].lateMinutes > 0) {
            late = true;
            lateMin += allUsers[i].signin[j].lateMinutes;
            lateDays++;
          }
        }
      }

      // Calculate number of absent days within the date range
      for (let j = 0; j < allUsers[i].absentDays.length; j++) {
        const absentDate = new Date(allUsers[i].absentDays[j].date);

        if (absentDate >= start && absentDate <= end) {
          absent = true;
          absentDays++;
          absentDaysarr.push(absentDate.toLocaleDateString());
        }
      }
      if(absent || worked){
        flag = true;
        let row = document.createElement('tr');
        row.setAttribute('data-bs-toggle', 'modal');
        row.setAttribute('data-bs-target', `#exampleModal${i}`);
        row.innerHTML = `
          <td><img src="${allUsers[i].profileimg || ''}" width="50"></td>
          <td>${allUsers[i].fullName}</td>
          <td>${allUsers[i].userName}</td>
          <td class="${worked ? 'text-success' : 'text-danger'}">${worked ? `${workDays} day ${workDays !== 1 ? 's' : ''}`: 'none'}</td>
          <td>${absentDays} day${absentDays !== 1 ? 's' : ''}</td>
          <td>${allUsers[i].hireDate}</td>
          <td>
            <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel${i}" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel${i}">
                      <img src="${allUsers[i].profileimg || ''}" width="50">
                      ${allUsers[i].fullName} Details
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p>Absent: (${absentDaysarr.join(") (")})</p>
                    <p>Late: ${late ? 'Yes' : 'No'}</p>
                    <p>LateMinutes: ${late ? lateMin : '0 min'}</p>
                    <p>LateDays: ${late ? `${lateDays} day ${lateDays !== 1 ? 's' : ''}`: '0 days'}</p>
                    <p>worked Days: ${worked ? `${workDays} day ${workDays !== 1 ? 's' : ''}`: '0 days'}</p>
                    <p>Type: ${allUsers[i].type}</p>
                  </div>
                </div>
            `
            fullreportTable.appendChild(row);
          }
      }
    }
    if(!flag){
      fullreportTable.innerHTML=`<tr class="text-center my-5"><td w-100>No Data In the Selected Date</td></tr>`
    }
  }
}

if(displayall){
  displayAllUsers();
}
//End Admin Pages


//End of Pages 

function countUnWorkedDayss(user) {
  let lastSigninDate =user.lastSignin? new Date(user.lastSignin):new Date(user.hireDate);
  let currentDate = new Date();
  let daysDiff = Math.floor((currentDate - lastSigninDate) / (1000 * 60 * 60 * 24));
  console.log(daysDiff)
  console.log(lastSigninDate)
  if(new Date() < new Date().setHours(15,30) ){
    daysDiff -= 1;
  }
  console.log(daysDiff)
  // Create an object for each absent day with date and absent properties
  let absentDays = [];
  for (let i = 1; i <= daysDiff; i++) {
    let date = new Date(lastSigninDate.getTime() + (i * 24 * 60 * 60 * 1000));
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    // let dateString = `${day}/${month}/${year}`;
    let dateString = new Date(year,month,day).toLocaleDateString();
    let dateExists = user.absentDays.some(day => day.date === dateString) || user.excuseDays.some(day => day.date === dateString && day.excuse) ||  user.signin.some(day => day.date === dateString);
    if (!dateExists) {
      absentDays.push({ date: dateString, absent: true });
    }
  }
  
  // Push the absent days object 
  user.absentDays = user.absentDays || [];
  user.absentDays.push(...absentDays);
  
  // return daysDiff;
}

allUsers.forEach((user)=>{
  if(user.role==='employee'){
    countUnWorkedDayss(user)
  }
})
// allUsers[9].absentDays.pop();
localStorage.setItem('users',JSON.stringify(allUsers))