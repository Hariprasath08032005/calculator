let currentinput='';
let operation='';
let firstnumber='';
let pinput='';
function appendnumber(number){
    currentinput +=number;
    updatedisplay();
}
function setoperation(op){
    firstnumber=currentinput;
    operation=op;
    currentinput+=operation;
    updatedisplay();
    currentinput='';
    
}

function calculateresult(){
    if(firstnumber&&operation&&currentinput){
        currentinput=eval(firstnumber+operation+currentinput);
        updatedisplay();
        operation='';
        firstnumber='';
    }
}
function cleardisplay(){
    currentinput='';
    firstnumber='';
    operation='';
    updatedisplay();
}
function updatedisplay(){
        document.getElementById('display').value =currentinput;
}