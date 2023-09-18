const progressBar = document.getElementById("progressBar");
const pages = document.querySelectorAll('.content');
const progressHeader = document.querySelector("#header_progress");
let currentPage = 0;

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.display = 'none';
        currentPage++;
        pages[currentPage].style.display = 'block';
        currentPage == 4 ? progressHeader.style.display = "none" : progressHeader.style.display = "flex";
        // Update the progress bar
        const progressBar = document.getElementById("progressBar");
        progressBar.style.width = `${((currentPage + 1) / pages.length) * 100}%`;

        // Update the page indicator
        const pageIndicator = document.querySelector(".page-indicator");
        pageIndicator.textContent = `${currentPage + 1}/${pages.length}`;
        console.log(`${currentPage + 1}/${pages.length}`)
    }
}

function goBack() {
    if (currentPage > 0) {
        pages[currentPage].style.display = 'none';
        currentPage--;
        currentPage == 0 ? pages[currentPage].style.display = 'flex' : pages[currentPage].style.display = 'block';
        currentPage == 0 || currentPage == 4 ? progressHeader.style.display = "none" : "";

        // Update the progress bar
        const progressBar = document.getElementById("progressBar");
        progressBar.style.width = `${((currentPage + 1) / pages.length) * 100}%`;

        // Update the page indicator
        const pageIndicator = document.querySelector(".page-indicator");
        pageIndicator.textContent = `${currentPage + 1}/${pages.length}`;
        console.log(`${currentPage + 1}/${pages.length}`)
    }
}

// Add event listeners for page 1 choices
const page1Choices = document.querySelectorAll(".content#page1 .choice");

page1Choices.forEach(choice => {
    choice.addEventListener("click", () => {
        // Remove the "selected" class from all choices on Page 1
        page1Choices.forEach(c => c.classList.remove("selected"));
        // Set the newly selected choice
        choice.classList.add("selected");
        const progressHeader = document.querySelector("#header_progress");

        progressHeader.style.display = "flex";
        
        nextPage();

    });
});

// Add event listeners for page 2 choices with checkboxes
const page2Choices = document.querySelectorAll(".content#page2 .choice.with-checkbox input[type='checkbox']");
const page2Buttons = document.querySelectorAll('.content#page2 .choice');
const page2Labels = document.querySelectorAll(".content#page2 .choice.with-checkbox label");
const continueLink2 = document.querySelector("#page2 #continueLink");

page2Choices.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        // Toggle the "selected" class on the parent button
        const parentButton = page2Buttons[index];
        parentButton.classList.toggle("selected");
        
        // Toggle a highlight class on the label for better visual feedback
        page2Labels[index].classList.toggle("highlighted");

        // Update the continue button state
        updateContinueButtonState(page2Choices, continueLink2);
    });
});

// Add event listeners for page 3 choices with checkboxes
const page3Choices = document.querySelectorAll(".content#page3 .choice.with-checkbox input[type='checkbox']");
const page3Buttons = document.querySelectorAll('.content#page3 .choice');
const page3Labels = document.querySelectorAll(".content#page3 .choice.with-checkbox label");
const continueLinkPage3 = document.querySelector("#page3 #continueLink");

page3Choices.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        // Toggle the "selected" class on the parent button
        const parentButton = page3Buttons[index];
        parentButton.classList.toggle("selected");
        
        // Toggle a highlight class on the label for better visual feedback
        page3Labels[index].classList.toggle("highlighted");
        
        // Update the continue button state
        updateContinueButtonState(page3Choices, continueLinkPage3);
    });
});

// Add event listeners for page 3 choices with radio
const page7Choices = document.querySelectorAll(".content#page7 .choice.with-radio input[type='radio']");
const page7Buttons = document.querySelectorAll('.content#page7 .choice');
const page7Labels = document.querySelectorAll(".content#page7 .choice.with-radio label");
const continueLinkPage7 = document.querySelector("#page7 #continueLink");

page7Choices.forEach((radio, index) => {
    radio.addEventListener("change", () => {
        // Toggle the "selected" class on the parent button
        const parentButton = page7Buttons[index];
        page7Buttons.forEach(c => c.classList.remove("selected"));
        parentButton.classList.toggle("selected");
        
        // Toggle a highlight class on the label for better visual feedback
        page7Labels[index].classList.toggle("highlighted");
        
        // Update the continue button state
        updateContinueButtonState(page7Choices, continueLinkPage7);
    });
});

// Add event listeners for page 8 choices with checkboxes
const page8Choices = document.querySelectorAll(".content#page8 .choice.with-checkbox input[type='checkbox']");
const page8Buttons = document.querySelectorAll('.content#page8 .choice');
const page8Labels = document.querySelectorAll(".content#page8 .choice.with-checkbox label");
const continueLinkPage8 = document.querySelector("#page8 #continueLink");

page8Choices.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        // Toggle the "selected" class on the parent button
        const parentButton = page8Buttons[index];
        parentButton.classList.toggle("selected");
        
        // Toggle a highlight class on the label for better visual feedback
        page8Labels[index].classList.toggle("highlighted");
        
        // Update the continue button state
        updateContinueButtonState(page8Choices, continueLinkPage8);
    });
});

// Function to submit the quiz
function submitQuiz() {
    console.log('submitted')
    // Your code to process the quiz results goes here
    const hiddenContent = document.getElementById('hiddenContent');
    hiddenContent.style.display = 'flex';
    hiddenContent.scrollIntoView({ behavior: 'smooth' });
}

// Function to update the continue button state on Page 3
function updateContinueButtonState(pageCheckboxes, continueLink) {
    // Check if at least one checkbox on the page is selected
    const atLeastOneCheckboxSelected = Array.from(pageCheckboxes).some(checkbox => checkbox.checked);

    // Enable or disable the continue button on the current page accordingly
    if (atLeastOneCheckboxSelected) {
        continueLink.classList.remove('disabled'); // Enable the button
        continueLink.disabled = false;
    } else {
        continueLink.classList.add('disabled'); // Disable the button
        continueLink.disabled = true;
    }
}