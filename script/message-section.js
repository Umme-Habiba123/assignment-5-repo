function getCurrentTimes(){
    const time = new Date();
    const currenTime = time.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric',  second: 'numeric', hour12: true})
    return(currenTime)
}

function messageText(textMessage){
    const textContainer = document.getElementById('text-container');
    const text = document.createElement('div');
    text.classList.add('text');
    const currenTime = getCurrentTimes()
    text.innerHTML = ` 
    ${textMessage} ${currenTime} 
    `
    textContainer.appendChild(text);
    textContainer.style.display = 'block'
  }

 const completeBtn = document.querySelectorAll('.complete-btn')
 for (let i = 0; i < completeBtn.length; i++) {
    const completeButton = completeBtn[i]
     completeButton.addEventListener('click', function(event){
      let parentDiv = this.closest("#big-card");
      
      if (parentDiv) {
        let titleText = parentDiv.querySelector("#title-text")?.
        textContent || "Title not found";
        console.log(titleText);
        const textMessage ="You have Complete The Task " + titleText;
        messageText(textMessage)
    }
        
     })
    }


    // card a current time---
  const updateTime = document.querySelector('.current-time')

  if(updateTime){
    updateTime.innerText = presentTime;
  }


