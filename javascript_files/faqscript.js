const FAQ = document.querySelectorAll(".faq") //selects all elements with the class "faq" and stores them in a variable

FAQ.forEach(faq => { //iterates over each element
    faq.addEventListener("click", () => { //adding a click event listener
        faq.classList.toggle("active"); //toggles into the active class when the arrow is clicked
    })
})