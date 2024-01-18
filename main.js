const clockHtml = document.getElementById('clockhtml')

//associamo a questa variabile il giorno e l'orario di domani (deadline) in millisecondi
const targetData = new Date("Jan 19, 2024, 09:30:00").getTime();

//variabile che conterrà la giornata e l'orario attuale, sempre in millisecondi
let today;

//variabile che conterrà la differenza di tempo in millisecondi tra la giornata di oggi e la giornata target
let countDown;

//funzione temporale (attualmente senza parametri di tempo per rendere più visibile lo scalare dei millisecondi)
const clockJS = setInterval(timer, 1000)

//funzione timer per il conteggio dei millisecondi
function timer(){
    

    if(countDown < 0){
        clearInterval(clockJS);
        clockHtml.innerHTML = "Tempo della correzione!"
    }else{
        today = new Date().getTime();
        countDown = targetData - today;
        
        countDown = new Date(countDown);
        let dateTransform = new Date(countDown)        
        console.log(dateTransform);
        
        clockHtml.innerHTML = `${dateTransform.getHours()}:${dateTransform.getMinutes()}:${dateTransform.getSeconds()}`;

    }
}

