function showMessage(isYes) {
    if (isYes) {
        document.getElementById("message").innerText = "I'm so happy you said yes! Happy Valentine's Day!";
        document.getElementById("message").style.backgroundColor = "#ffc0cb";
    } else {
        document.getElementById("angryEmoji").style.display = "block";
    }
    document.getElementById("message").style.display = "block";
}