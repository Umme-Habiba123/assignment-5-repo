document.getElementById('next-sec').style.display = 'none';

document.getElementById("linear-card").addEventListener('click',function(){
    handleToggle("main-section", 'none')
    handleToggle("next-sec", 'block')
})


function handleToggle(id, status){
   document.getElementById(id).style.display = status;
}

document.getElementById('back-button').addEventListener('click', function(){
    handleToggle("main-section", 'block')
    handleToggle("next-sec", 'none')
})
