function display(value){
    document.getElementById('textarea').value += value;
}

function Calculate(){
    var equation = document.getElementById('textarea').value;
    var answer = eval(equation);
    document.getElementById('textarea').value = answer;
}

function Clear(){
    document.getElementById('textarea').value = ' ';
}