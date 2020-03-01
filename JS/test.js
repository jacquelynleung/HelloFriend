var isOn;
isOn = "false";
lastResponse = "";
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
    document.getElementById('friend').src = "Images/dancer.gif";
}

function addText(message, who){
    let element = document.getElementById('messageHolder');
    let newMessage = document.createElement('p');
    if (who === "you"){
        newMessage.classList.add("yourText");
    } else {
        newMessage.classList.add("friendText");
    }
    newMessage.textContent = message;
    element.appendChild(newMessage);
    element.scrollTop = element.scrollHeight;
    document.getElementById('message').value = "";
}

function interpretText(){
    document.getElementById('friend').src = "Images/ourfriend.png";
    let message = document.getElementById('message').value;
    addText(message, "you");
    message = message.toLowerCase();
    let response = "Can you clarify that for me, friend?";
    if (message.includes('dance') && !message.includes('stop')){
        makeDance();
        response = "I LOVE DANCING!"
    }else if (message.includes('title ix')){
        response = titleIX;
    }else if ((message.includes('you') || message.includes('sleep') &&
        !(message.includes('i ') || message.includes('i\'m')))){
        response = 'Good night!';
        change();
    }
    addText(response, "friend")

}
