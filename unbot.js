(() => {
    let i = 0;
    const unfollowInterval = setInterval(() => {
        if (i >= 30) clearInterval(unfollowInterval);
        const buttons = document.querySelectorAll('button');
        const nextButton = buttons[i];
        if (nextButton.textContent.toLowerCase() === 'following') {
            nextButton.click();
            const temp1 = document.querySelectorAll('button');
            for (let j = 0; j < temp1.length; j++){
                const temp = temp1[j];
                if (temp.textContent.toLowerCase() === 'unfollow') { 
                    temp.click();
                }
            }
        }
        i++;
    }, 500)
})()