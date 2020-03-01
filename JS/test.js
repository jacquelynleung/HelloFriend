var isOn;
isOn = "false";
document.getElementById('chatter').style.display = 'none';
function change() {
    if (isOn === "false") {
        document.getElementById('wakeUp').src = "Images/HelloOnBlue.png";
        document.getElementById('sleeping').style.display = 'none';
        document.getElementById('chatter').style.display = 'grid';
        isOn = "true";
    } else{
        document.getElementById('wakeUp').src = "Images/HelloOffBlue.png";
        document.getElementById('sleeping').style.display = 'block';
        document.getElementById('chatter').style.display = 'none';
        isOn = "false";
    }
}

function makeDance(){
    var isDance = document.getElementById('message').value;
    console.log(isDance);
    if (isDance.includes('dance')){
        console.log("should dance");
        document.getElementById('friend').src = "Images/dancer.gif";
    }

}
