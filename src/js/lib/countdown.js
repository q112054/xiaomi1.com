let countdown = function () {
    let count = 5400;
    let hours, min, sec;
    let timer = setInterval(() => {//600 7 40
        hours = parseInt(count / 3600);
        min = parseInt(count / 60) % 60;
        sec = count % 60;
        if (hours < 10) {
            hours = '0' + hours;
        } 
        if (min < 10) {
            min = '0' + min;
        } 
        if(sec < 10) {
            sec = "0"+sec;
        }
        $('.hours').html(hours);
        $('.min').html(min);
        $('.sec').html(sec);

        count--;
        if(count == 0) {
            $('.sec').html('00');
            clearInterval(timer);
        }
    }, 1000);

}

export { countdown };