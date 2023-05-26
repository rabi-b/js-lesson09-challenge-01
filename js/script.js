// dish assignment
const assignButton = document.querySelector(".assign")
const assignedItems = document.querySelector(".assigned-items")

// invite button
const addGuestButton = document.querySelector(".invite");
addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    //console.log(guest); 
    if (guest !== "") {
        addToList(guest);
        clearInput();
    }
    updateGuestCount();
});

////??extra code for "enter" keydown event on addGuestButton

const clearInput = function () {
    guestInput.value = "";
};

const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
        assignButton.classList.remove("hide");
    }
};

// dish assignment cont.
const assignItems = function () {
    const potluckItems = ["potato salad", "hummus", "cookies", "fruit", "chicken", "lasagna", "artichoke dip", "quiche", "fried rice", "spaghetti", "dumplings", "plantain"];
    const allGuests = document.querySelectorAll(".guest-list li");
    for (let guest of allGuests) { //?? can we use the same variable names since it's in a block and using the "let" keyword?
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length) //no need to make it a function
        let randomPotluckItem = potluckItems[randomPotluckIndex]; //??
        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`; //guest.innerText to grab the name inside the "li" element rather than the element itself
        assignedItems.append(listItem);
        potluckItems.splice(randomPotluckIndex, 1); //remove a dish that was already assigned
    }
}

assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disabled = true //prevents repeating the dish assignment function (i.e. assignItems)
});

// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
