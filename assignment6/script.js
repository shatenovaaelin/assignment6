// TASK 6

let count = 0;

let counter = document.getElementById("counter");

function updateCounter() {
    counter.textContent = count;
}

document.getElementById("increase").addEventListener("click", function() {
    count++;
    updateCounter();
});

document.getElementById("decrease").addEventListener("click", function() {
    if (count > 0) {
        count--;
    }

    updateCounter();
});

document.getElementById("reset").addEventListener("click", function() {
    count = 0;
    updateCounter();
});
// TASK 7

let textInput = document.getElementById("textInput");
let preview = document.getElementById("preview");
let charCount = document.getElementById("charCount");

textInput.addEventListener("input", function() {

    preview.textContent = textInput.value;

    charCount.textContent = textInput.value.length;

    if (textInput.value === "") {
        preview.textContent = "Your text will appear here";
    }

});

document.getElementById("clear").addEventListener("click", function() {

    textInput.value = "";

    preview.textContent = "Your text will appear here";

    charCount.textContent = 0;

    textInput.focus();

});

// TASK 8

let animalSelect = document.getElementById("animalSelect");
let animalImage = document.getElementById("animalImage");
let caption = document.getElementById("caption");

animalSelect.addEventListener("change", function() {

    if (animalSelect.value === "cat") {
        animalImage.src = "images/cat.jpg";
        animalImage.alt = "A cat";
        caption.textContent = "Cat";
    }

    if (animalSelect.value === "dog") {
        animalImage.src = "images/dog.jpg";
        animalImage.alt = "A dog";
        caption.textContent = "Dog";
    }

    if (animalSelect.value === "rabbit") {
        animalImage.src = "images/rabbit.jpg";
        animalImage.alt = "A rabbit";
        caption.textContent = "Rabbit";
    }

});

// TASK 9

let keyboardInput = document.getElementById("keyboardInput");
let keyStatus = document.getElementById("keyStatus");
let keyResult = document.getElementById("keyResult");

keyboardInput.addEventListener("keydown", function(event) {

    keyStatus.textContent = "Pressed key: " + event.key;

    if (event.key === "Enter") {
        event.preventDefault();
        keyResult.textContent = keyboardInput.value;
    }

    if (event.key === "Escape") {
        keyboardInput.value = "";
        keyResult.textContent = "";
    }

});
// TASK 10

let card = document.getElementById("card");
let instruction = document.getElementById("instruction");

function updateCard() {
    if (card.matches(":hover") || card.matches(":focus")) {
        card.classList.add("highlight");
    } else {
        card.classList.remove("highlight");
    }
}

card.addEventListener("mouseenter", function() {
    instruction.textContent = "Mouse is over the card";
    updateCard();
});

card.addEventListener("mouseleave", function() {
    instruction.textContent = "Hover over the card or focus it with Tab.";
    updateCard();
});

card.addEventListener("focus", function() {
    instruction.textContent = "Card is focused";
    updateCard();
});

card.addEventListener("blur", function() {
    instruction.textContent = "Hover over the card or focus it with Tab.";
    updateCard();
});