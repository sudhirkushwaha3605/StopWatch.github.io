let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

flag = false;

function start(){
    flag = true;
    stopwatch();
}

function stop(){
    flag = false;
}
function reset(){
    flag = false;
    
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById('count').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('hr').innerHTML = "00";
    
}

function stopwatch(){
    if(flag == true){
        count = count + 1;

        if(count == 100){
            count = 0;
            sec = sec + 1;
        }
        if(sec == 60){
            sec = 0;
            min = min + 1;
        }
        if(min == 60){
            min = 0;
            sec = 0;
            hr = hr + 1;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;

        if(hr < 10){
            hrString = "0" + hrString;
        }
        if(min < 10){
            minString = "0" + minString;
        }
        if(sec < 10){
            secString = "0" + secString;
        } 
        if(count < 10){
            countString = "0" + countString;
        }

        document.getElementById('count').innerHTML = countString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('hr').innerHTML = hrString;



        setTimeout(stopwatch, 10);
    }
}