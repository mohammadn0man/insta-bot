(() => {
    let i = 0;
    let count = 0;
    function dosomething() {
        const newInterval = setInterval(() => {
            const btn = document.querySelectorAll('button');
            const nxt_btn = btn[i];
            if (nxt_btn !== undefined && nxt_btn.textContent.toLowerCase() === 'follow') {
                nxt_btn.click();
                console.log("Followed : " + (count+1) + ". " + nxt_btn.parentElement.parentElement.childNodes[1].firstElementChild.firstElementChild.firstElementChild.firstElementChild.text);
                count++;
            }
            i++;
            if(count >= 30){
                console.log("sleep for 1 hrs ");
                count = 0;
                i = 0;
                clearInterval(newInterval);
            }
        }, 1000)
    }
    dosomething();
    setInterval(dosomething, 360000);
})()