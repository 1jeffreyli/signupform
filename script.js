var firstName = document.getElementById("fname");

firstName.addEventListener("keyup", function() {
    if(this.value.length > 0) {
        this.className = "";
    }
}, false);