window.onload = function() {
    let msg = new SpeechSynthesisUtterance();
    msg.text = "Welcome to our website! How can we assist you today?";
    msg.lang = "en-US";  // Change the language if needed
    msg.volume = 1; // Volume (0 to 1)
    msg.rate = 1; // Speed (0.1 to 10)
    msg.pitch = 1; // Pitch (0 to 2)
    
    speechSynthesis.speak(msg);
};

