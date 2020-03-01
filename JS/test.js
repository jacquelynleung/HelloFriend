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
    let message = document.getElementById('message').value;
    let element = document.getElementById('messageHolder');
    console.log(message);
    if (message.toLowerCase().includes('dance')){
        console.log("should dance");
        document.getElementById('friend').src = "Images/dancer.gif";
    } else{
        document.getElementById('friend').src = "Images/ourfriend.png";
    }
    let newMessage = document.createElement('p');
    newMessage.textContent = message;
    element.appendChild(newMessage);
    element.scrollTop = element.scrollHeight;
    document.getElementById('message').value = "";

}
