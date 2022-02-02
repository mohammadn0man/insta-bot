(() => {
    const BATCH_DELAY = 300000; // value is in milliseconds
    const BATCH_SIZE = 3;
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
            if (nxt_btn.textContent.toLowerCase() === 'following') {
                nxt_btn.click();
                let name = '';
                try { name = nxt_btn.parentElement.parentElement.childNodes[1].firstElementChild.firstElementChild.textContent; } catch (err){ { name = 'not_found'}}
                const temp1 = document.querySelectorAll('button');
                for (let j = 0; j < temp1.length; j++){
                    const temp = temp1[j];
                    if (temp.textContent.toLowerCase() === 'unfollow') { 
                        temp.click();
                        count++;
                        console.log("Unfollowed : " + (sno++) + ". " + name);
                    }
                }
            }
            i++;
            if(count >= BATCH_SIZE){
                console.log("sleep " + (BATCH_DELAY/1000) + " seconds.");
                count = 0;
                i = 0;
                clearInterval(newInterval);
            }
        }, 1000)
    }
    dosomething();
    setInterval(dosomething, BATCH_DELAY);
})()
