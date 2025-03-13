let result = document.getElementById("display");

function equal() {
    result.innerHTML = eval(result.innerHTML);
}

function reset() {
    result.innerHTML ="0";
}

function clickbutton(target){
  let input = target.innerHTML;
    if(result.innerHTML == "0" || result.innerHTML == "00") {
        result.innerHTML = input;
    }else{
        result.innerHTML +=input;
    }
}

function edit(target){
    let input = target.innerHTML;

    if(result.innerHTML.slice(-1) == "-") {
        return;
    }else if(result.innerHTML.slice(-1) == "+"){
        return;
    }else if(result.innerHTML.slice(-1) == "*"){
        return;
    }else if(result.innerHTML.slice(-1) == "/"){
        return;
    }else if(result.innerHTML.slice(-1) == "."){
        return;
    }else{
        result.innerHTML += input;
        return "E";
    }


}