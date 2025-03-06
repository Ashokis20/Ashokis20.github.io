window.onload = function() {
    let msg = new SpeechSynthesisUtterance();
    msg.text = "Welcome to our website! How can we assist you today?";
    msg.lang = "en-US";  
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    
    speechSynthesis.speak(msg);
};
