function validateForm() {
    if (document.myForm.remember.checked) {
        alert("Hai deciso di essere ricordato per i prossimi accessi");
    } 
    else {
        alert("Hai deciso di NON essere ricordato per i prossimi accessi");
    }
}