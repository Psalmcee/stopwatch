const container = document.querySelector('container');
const start = document.getElementById('start')
const pause = document.getElementById('pause')
const reset = document.getElementById('reset')

const timeDisplay = document.getElementById('timer')
let [hour, minute, second, millisecond] = [0,0,0,0]
let int = null;




//create timer
function displayTimer() {
    

    millisecond += 10;
    /* [hour, minute, second, millisecond] = [00,00,00,00]; */
    if (millisecond == 1000) {
        millisecond = 0;
        second ++;
        second = (second < 10 ? '0' + second : second)
        
        
    
        if (second == 60) {
            second = 1;
            minute ++;
            minute = (minute < 10 ? '0' + minute : minute);

            if (minute == 60) {
                minute = 1;
                hour ++;
                hour = (hour < 10 ? '0' + hour : hour);  
            }
        }
    }


    setInterval(() => {
        
    }, 100);
   
    
    

    timeDisplay.innerHTML = `${hour}:${minute}:${second}:${millisecond}`
    

}

start.addEventListener('click', ()=> {
    if (int!==null) {
        clearInterval(int)
    }
    int = setInterval(displayTimer, 10)
    
})

pause.addEventListener('click', ()=> {
    clearInterval(int)
    
});

reset.addEventListener('click', ()=> {
    clearInterval(int);
    [hour, minute, second, millisecond] = [00,00,00,00];
    timeDisplay.innerHTML = '00:00:00:00'
})




