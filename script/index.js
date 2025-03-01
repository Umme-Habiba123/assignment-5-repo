const completeButton = document.querySelectorAll(".complete-btn");

// console.log(completeButton);

// for (let i= 0; i <completeButton.length ; i++){
//     const completeBtn = completeButton[i];
//     console.log(completeBtn);
//      completeBtn.addEventListener('click', function(){
//        alert('Board update succesfully')
//     })
// }

const completeBtns = document.querySelectorAll('.task-num');
const taskNum = document.getElementById('task-num');
const navAmount = document.getElementById('nav-ammount');
let taskNumber = parseInt(taskNum.textContent) || 0;
let navNumber = parseInt(navAmount.textContent) || 0;

for (let i= 0; i <completeButton.length ; i++){
  const completeBtns = completeButton[i];
  console.log(completeBtns);
   completeBtns.addEventListener('click', function(){
     alert('Board update succesfully')
     completeBtns.disabled = true

     navNumber++
     navAmount.textContent = navNumber;
   if(taskNumber > 0){
    taskNumber--
    taskNum.textContent = taskNumber;
   }
else{
      alert('congratess!! You have completed all the current task.')
   }
  })
}


