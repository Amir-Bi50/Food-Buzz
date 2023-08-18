

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    
    // اون تاریخی که قراره بهش برسیم
    let countDown = new Date('Aug 20, 2023 00:00:00').getTime();
    
    function MyRacing() {
    let nowDate = new Date().getTime(),
    distance = countDown - nowDate;
    document.getElementById('days').innerText = Math.floor(distance / (day)),
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
          
    // وقتی تاریخ و زمان گذشته بود
    if (distance < 0) {
     clearInterval(MyTimer);
     alert("مسابقه شروع شده است");
    }
    
    }
    
    MyTimer = setInterval( MyRacing , 1000);
    