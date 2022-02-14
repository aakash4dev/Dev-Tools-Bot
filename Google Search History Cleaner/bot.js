let allRemove = document.getElementsByClassName("sbai");
setInterval(() => {
    for (let i = 0; i < allRemove.length; i++) {
        setTimeout(() => {
            allRemove[i].click();
        }, 1000);
    }
}, 5000);
