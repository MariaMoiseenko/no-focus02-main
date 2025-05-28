function dayModeOn(){
    document.querySelector('body').classList.remove('neon');
    document.querySelector('body').classList.add('light');
    document.querySelector('.rec-container').style.display = 'none';
}

function neonModeOn(){
    document.querySelector('body').classList.remove('light');
    document.querySelector('body').classList.add('neon');
    document.querySelector('.rec-container').style.display = 'block';
}
 
function autoModeOn(){
    let currentDate = new Date();
    let time = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    if (time >= "14:00"){
        neonModeOn();
    } else if (time >= "04:00"){
        dayModeOn();
    }
 };