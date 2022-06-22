let seconds = 0;

function displaySeconds(){
    seconds++;
    document.getElementById('secondsDisplay').innerHTML = `This page will be redirected to the main page in ${seconds} seconds`
}

setInterval(displaySeconds, 1000);

function redirectMainPage(){
    window.location="index.html";
}

setTimeout('redirectMainPage()', 4000);