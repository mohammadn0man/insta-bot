(() => {
    const BATCH_DELAY = 3600000; // value is in milliseconds
    const BATCH_SIZE = 30;
    let sno = 1;
    let i = 0;
    let count = 0;
    let old_length = 0;
    function dosomething() {
        const newInterval = setInterval(() => {
            const btn = document.querySelectorAll('button');
            if(old_length != btn.length){
                i = 0;
                old_length = btn.length;
            }
            let nxt_btn = btn[i];
            if (nxt_btn !== undefined && nxt_btn.textContent.toLowerCase() === 'follow') {
                nxt_btn.click();
                console.log("LF: Followed : " + (sno++) + ". ");
                count++;
            }
            i++;
            if(count >= BATCH_SIZE){
                console.log("LF: sleep for 1 hrs ");
                count = 0;
                i = 0;
                let currentDate = new Date();
                let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
                console.log("LF: AT : " + time);
                clearInterval(newInterval);
            }
        }, 500)
    }
    dosomething();
    setInterval(dosomething, BATCH_DELAY);
})()
