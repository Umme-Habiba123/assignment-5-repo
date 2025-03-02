
function multipleColor(){
    const colors = ['red', 'blue', 'yellow', 'green', 'pink']
    let c = 0;
    document.getElementById('theme-changing').addEventListener('click', function(){
        document.body.style.backgroundColor = colors[c];
        c = (c + 1) % colors.length;
    })
}

multipleColor()


// function makeGreen(){
//     document.body.style.backgroundColor = 'green';
// }