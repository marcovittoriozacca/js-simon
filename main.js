const clockHtml = document.getElementById('clockhtml')

//associamo a questa variabile il giorno e l'orario di domani (deadline) in millisecondi
const targetData = new Date("Jan 19, 2024, 09:30:00").getTime();


//variabile che conterrà la giornata e l'orario attuale, sempre in millisecondi
let today;
//variabile che conterrà la differenza di tempo in millisecondi tra la giornata di oggi e la giornata target
let countDown;

//funzione temporale (attualmente senza parametri di tempo per rendere più visibile lo scalare dei millisecondi)
const clockJS = setInterval(function(){

    if(countDown < 0){
        clearInterval(clockJS);
        clockHtml.innerHTML = "Tempo della correzione!"

    }else{
        //prendiamo la data di oggi in millisecondi, la sottraiamo al valore in millisecondi del giorno target e il risultato lo trasformiano nuovamente in formato originale.
        today = new Date().getTime();
        countDown = targetData - today;
        let hours = Math.trunc((countDown) / 1000 / 60 / 60);

        countDown = new Date(countDown);
        //output dei valori che ci interessano per il countdown
        clockHtml.innerHTML = `${hours}:${countDown.getMinutes()}:${countDown.getSeconds()}`;
    }

}, 1000)


