
    const maxNotesLimit = 40;

    let xhr = new XMLHttpRequest();

    xhr.open('GET', './data/atm-info.json');

    xhr.onload = function(){

        const ATMInfo = JSON.parse(this.response);

        console.log(ATMInfo);

        /* Вы можете разместить свой код здесь */

    }

    xhr.send();