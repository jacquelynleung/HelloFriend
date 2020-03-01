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
    }else if (message.includes('sad') || message.includes('unhappy')){
        response = level1Sad.concat(" ");
    }else if (message.includes('hurt') || message.includes('pain') || message.includes('injured')){
        response = studentHealthCenter;
    }else if (message.includes('mental health') || message.includes('breakdown') ){
        response = counselingAndPsy;
    }else if (message.includes('stalking') || message.includes('domestic violence')){
        response = cares;
    }else if (message.includes('too late') || message.includes('offices closed')){
        response = afterHours;
    }else if (message.includes('conflict') || message.includes('workplace')){
        response = ombuds;
    }else if (message.includes('men') && message.includes('uncomfortable')){
        response = centerForWomenGender;
    }else if (message.includes('religion') || message.includes('spiritual')){
        response = centerForRegligion;
    }else if (message.includes('immediate danger') || message.includes('help')){
        response = publicSafety;
    }else if (message.includes('report') && message.includes('want')){
        response = "These place are MANDATORY reporters" + Reporting + "If you wish to remain anonymous, type anonymous";
    }else if (message.includes('anonymous')){
        response = "These are the places where you can anonymously report: " + NonReporting;
    }else if (message.includes('sleep') && !(message.includes("i'm") || message.includes('i'))){
        change()
    }else if (message.includes('hi') || message.includes("good morning") || message.includes('hello')) {
        response = "GOOD MORNING!";
    } else if (message.includes('stop')){
        response = "Okay, i'll stop";
    }else if (message.includes('bye') && !(message.includes('end') || message.includes('forever'))){
        response = 'good bye'
    }else if (message.includes('suicide') || message.includes('alone') || message.includes('end it')){
        response = NSPL;
    }
    addText(response, "friend")

}
