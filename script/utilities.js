function getInputValueById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}


function getInnerTextByIdandValue(){
    const value = document.getElementById(id).innerText
    const convertedValue = parseFloat(value);
    return convertedValue;
}