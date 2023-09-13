let continueLink = document.getElementById('continueLink');
continueLink.classList.add('disabled'); // Disable the link
continueLink.removeAttribute('href'); // Remove the href attribute
continueLink.classList.add('disabled'); // Disable the link
continueLink.removeAttribute('href'); // Remove the href attribute

// Add event listeners for page 1 choices
const page1Choices = document.querySelectorAll(".content#page1 .choice");

page1Choices.forEach(choice => {
    choice.addEventListener("click", () => {
        // Remove the "selected" class from all choices on Page 1
        page1Choices.forEach(c => c.classList.remove("selected"));
        continueLink.classList.remove('disabled'); // Enable the link
        continueLink.href = "step2.html";
        // Set the newly selected choice
        choice.classList.add("selected");
    });
});

// Add event listeners for page 2 choices with checkboxes
const page2Choices = document.querySelectorAll(".content#page2 .choice.with-checkbox input[type='checkbox']");
const page2Buttons = document.querySelectorAll('.content#page2 .choice');
const page2Labels = document.querySelectorAll(".content#page2 .choice.with-checkbox label");

page2Choices.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        // Toggle the "selected" class on the parent button
        const parentButton = page2Buttons[index];
        parentButton.classList.toggle("selected");

        
        updateContinueLinkState(page2Buttons,'step3.html');
        // Toggle a highlight class on the label for better visual feedback
        page2Labels[index].classList.toggle("highlighted");
    });
});

// Add event listeners for page 3 choices with checkboxes
const page3Choices = document.querySelectorAll(".content#page3 .choice.with-checkbox input[type='checkbox']");
const page3Buttons = document.querySelectorAll('.content#page3 .choice');
const page3Labels = document.querySelectorAll(".content#page3 .choice.with-checkbox label");

page3Choices.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        // Toggle the "selected" class on the parent button
        const parentButton = page3Buttons[index];
        parentButton.classList.toggle("selected");

        updateContinueLinkState(page3Buttons,'step4.html');
        // Toggle a highlight class on the label for better visual feedback
        page3Labels[index].classList.toggle("highlighted");
    });
});

// Add event listeners for page 4 choices with checkboxes
const page4Choices = document.querySelectorAll(".content#page4 .choice.with-checkbox input[type='checkbox']");
const page4Buttons = document.querySelectorAll('.content#page4 .choice');
const page4Labels = document.querySelectorAll(".content#page4 .choice.with-checkbox label");

page4Choices.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        // Toggle the "selected" class on the parent button
        const parentButton = page4Buttons[index];
        parentButton.classList.toggle("selected");

        updateContinueLinkState(page4Buttons,'submit');
        // Toggle a highlight class on the label for better visual feedback
        page4Labels[index].classList.toggle("highlighted");
    });
});

// Function to submit the quiz
function submitQuiz() {
    // Your code to process the quiz results goes here
    const hiddenContent = document.getElementById('hiddenContent');
    hiddenContent.style.display = 'flex';
    hiddenContent.scrollIntoView({ behavior: 'smooth' });
}


// Function to enable/disable the continue link based on choice selection
function updateContinueLinkState(pagebuttons,next) {
    // Check if any choice button is selected
    const anyChoiceSelected = Array.from(pagebuttons).some(button => button.classList.contains('selected'));
    // Disable or enable the continue link accordingly
    if (anyChoiceSelected) {
        continueLink.classList.remove('disabled'); // Enable the link
        if(next!='submit'){
            continueLink.href = `${next}`; // Set the href attribute to the target page
        }
    } else {
        continueLink.classList.add('disabled'); // Disable the link
        continueLink.removeAttribute('href'); // Remove the href attribute
    }
}
