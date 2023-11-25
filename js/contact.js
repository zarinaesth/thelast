function animate() {
    var messageDisplay = document.getElementById("messageDisplay");
    messageDisplay.textContent = "Your message is sent";
      }
      document.getElementById("sendButton").addEventListener("click", animate);
    
     
      document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          animate();
        }
      });
    