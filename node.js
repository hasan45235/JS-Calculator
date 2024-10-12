var mainDiv = document.getElementById("main")


function proceed(value){
    switch(value){
        case '':
            mainDiv.innerText = ''
            break;
        case '=':
            var res = eval(mainDiv.innerText);
            mainDiv.innerText = res;
            break;
        case 'de':
            mainDiv.innerText = mainDiv.innerText.slice(0,mainDiv.innerText.length-1)    
            break;
        default : 
            mainDiv.innerText += value;
            break;
    }
}