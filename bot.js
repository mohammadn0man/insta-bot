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
                // nxt_btn.click();
                let name = nxt_btn.parentElement.parentElement.childNodes[1];
                // try {
                //     name= nxt_btn.parentElement.parentElement.childNodes[1].firstElementChild.firstElementChild.firstElementChild.firstElementChild.text;
                // } catch (err) {
                //     name = undefined;
                // }
                // if (name === undefined){
                    // name = nxt_btn.parentElement.parentElement.childNodes[1].firstElementChild.firstElementChild.textContent;
                // }
                console.log("Followed : " + (sno++) + ". ");
                console.log(name);
                count++;
            }
            i++;
            if(count >= BATCH_SIZE){
                console.log("sleep for 1 hrs ");
                count = 0;
                i = 0;
                clearInterval(newInterval);
            }
        }, 1000)
    }
    dosomething();
    setInterval(dosomething, BATCH_DELAY);
})()
