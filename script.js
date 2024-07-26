const toggleButton = document.querySelector(".toggle__label");
console.log(toggleButton);

toggleButton.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        e.currentTarget.click();
    }
});