function init() {
    const slider = document.getElementById("weightSlider");

    slider.oninput = onSliderInput;

    updateProgress(slider);
    updateValue(slider);
    updateValuePosition(slider);
    updateLabels(slider);
    setTicks(slider);

    const slider2 = document.getElementById("weightSlider2");

    // slider1.oninput = onSliderInput;
    slider2.oninput = onSliderInput2;


    updateProgress2(slider2);
    updateValue2(slider2);
    updateValuePosition2(slider2);
    updateLabels2(slider2);
    setTicks2(slider2);
    
}


function onSliderInput(event) {
    updateValue(event.target);
    updateValuePosition(event.target);
    updateLabels(event.target);
    updateProgress(event.target);
}

function updateValue(slider) {
    let value = document.getElementById(slider.dataset.valueId);
    let imageContainer = document.getElementById("imageContainer");

    // Array of image URLs for desktop view
    const desktopImageUrls = [
        'imgs/pg-3-normal-d.png',
        'imgs/pg-3-dry-d.png',
        'imgs/pg-3-microwrinkles-d.png',
        'imgs/pg-3-scaly-d.png',
        'imgs/pg-3-itchy-d.png',
        'imgs/pg-3-crepey-d.png'
    ];

    // Array of image URLs for mobile view
    const mobileImageUrls = [
        'imgs/pg-3-normal-m.jpg',
        'imgs/pg-3-dry-m.jpg',
        'imgs/pg-3-microwrinkles-m.jpg',
        'imgs/pg-3-scaly-m.jpg',
        'imgs/pg-3-itchy-m.jpg',
        'imgs/pg-3-crepey-m.jpg'
    ];

    let valueToolTip = '';

    switch (parseInt(slider.value)) {
        case 0:
            valueToolTip = 'Normal Skin';
            break;
        case 1:
            valueToolTip = 'Dry Skin';
            break;
        case 2:
            valueToolTip = 'Microwrinkles';
            break;
        case 3:
            valueToolTip = 'Scaly, Rough Skin';
            break;
        case 4:
            valueToolTip = 'Itchy Irritated Skin';
            break;
        case 5:
            valueToolTip = 'Crepey Skin';
            break;
    }

    value.innerHTML = "<div>" + valueToolTip + "</div>";


    // Update the image source based on the slider's value
    imageContainer.querySelector("#mobile_img").src = mobileImageUrls[parseInt(slider.value)];
    imageContainer.querySelector("#desktop_img").src = desktopImageUrls[parseInt(slider.value)];
}



function updateValuePosition(slider) {
    let value = document.getElementById(slider.dataset.valueId);

    const percent = getSliderPercent(slider);

    const sliderWidth = slider.getBoundingClientRect().width;
    const valueWidth = value.getBoundingClientRect().width;
    const handleSize = slider.dataset.handleSize;

    let left = percent * (sliderWidth - handleSize) + handleSize / 2 - valueWidth / 2;

    left = Math.min(left, sliderWidth - valueWidth);

    value.style.left = left + "px";
}

function updateLabels(slider) {
    const value = document.getElementById(slider.dataset.valueId);
    const minLabel = document.getElementById(slider.dataset.minLabelId);
    const maxLabel = document.getElementById(slider.dataset.maxLabelId);

    const valueRect = value.getBoundingClientRect();
    const minLabelRect = minLabel.getBoundingClientRect();
    const maxLabelRect = maxLabel.getBoundingClientRect();

    const minLabelDelta = valueRect.left - (minLabelRect.left);
    const maxLabelDelta = maxLabelRect.left - valueRect.left;

    const deltaThreshold = 32;

    if (minLabelDelta < deltaThreshold) minLabel.classList.add("hidden");
    else minLabel.classList.remove("hidden");

    if (maxLabelDelta < deltaThreshold) maxLabel.classList.add("hidden");
    else maxLabel.classList.remove("hidden");
}

function updateProgress(slider) {
    let progress = document.getElementById(slider.dataset.progressId);
    const percent = getSliderPercent(slider);

    progress.style.width = percent * 100 + "%";
}

function getSliderPercent(slider) {
    const range = slider.max - slider.min;
    const absValue = slider.value - slider.min;

    return absValue / range;
}

function setTicks(slider) {
    let container = document.getElementById(slider.dataset.tickId);
    const spacing = parseFloat(slider.dataset.tickStep);
    const sliderRange = slider.max - slider.min;
    const tickCount = sliderRange / spacing + 1; // +1 to account for 0

    for (let ii = 0; ii < tickCount; ii++) {
        let tick = document.createElement("span");

        tick.className = "tick-slider-tick";

        container.appendChild(tick);
    }
}

function onSliderInput2(event) {
    updateValue2(event.target);
    updateValuePosition2(event.target);
    updateLabels2(event.target);
    updateProgress2(event.target);
}

function updateValue2(slider) {
    let value = document.getElementById(slider.dataset.valueId);
    let header = document.getElementById('level-header');
    let description = document.getElementById('level-description');

    let valueHeader = '';
    let valueDescription = '';

    switch (parseInt(slider.value)) {
        case 1:
            valueHeader = 'Newcommer';
            valueDescription = 'Whenever I touch my skin it feels flaky, but I leave it alone';
            break;
        case 2:
            valueHeader = 'Newcommer';
            valueDescription = 'I have applied lotion before to my dry, crepey skin (Rarely)';
            break;
        case 3:
            valueHeader = 'Newcommer';
            valueDescription = 'I do apply lotion/cream sometimes on dry skin';
            break;
        case 4:
            valueHeader = 'Newcommer';
            valueDescription = 'I do apply lotion/cream to my skin to feel moisturized';
            break;
        case 5:
            valueHeader = 'Amateur';
            valueDescription = 'I try to apply lotion/cream but still not regularly';
            break;
        case 6:
            valueHeader = 'Amateur';
            valueDescription = 'I apply lotion/cream fairly regularly, at least once a week';
            break;
        case 7:
            valueHeader = 'Amateur';
            valueDescription = 'I apply lotion/cream after every shower consistently for the last 1-3 monts';
            break;
        case 8:
            valueHeader = 'Pro';
            valueDescription = "I'm commited to moisturize my skin whenever I can";
            break;
        case 9:
            valueHeader = 'Pro';
            valueDescription = 'Oh, trust me. I deeply hydrate my skin but I want to take it the next level';
            break;
        case 10:
            valueHeader = 'Pro';
            valueDescription = "I'm on fire. Deeply hydrating my skin everyday is a must to stimulate collagen/elastin";
            break;
    }

    value.innerHTML = "<div>" + slider.value + "</div>";
    header.textContent = valueHeader;
    description.textContent = valueDescription;

}



function updateValuePosition2(slider) {
    let value = document.getElementById(slider.dataset.valueId);

    const percent = getSliderPercent2(slider);

    const sliderWidth = slider.getBoundingClientRect().width;
    const valueWidth = value.getBoundingClientRect().width;
    const handleSize = slider.dataset.handleSize;

    let left = percent * (sliderWidth - handleSize) + handleSize / 2 - valueWidth / 2;

    left = Math.min(left, sliderWidth - valueWidth);

    value.style.left = left + "px";
}

function updateLabels2(slider) {
    const value = document.getElementById(slider.dataset.valueId);
    const minLabel = document.getElementById(slider.dataset.minLabelId);
    const maxLabel = document.getElementById(slider.dataset.maxLabelId);

    const valueRect = value.getBoundingClientRect();
    const minLabelRect = minLabel.getBoundingClientRect();
    const maxLabelRect = maxLabel.getBoundingClientRect();

    const minLabelDelta = valueRect.left - (minLabelRect.left);
    const maxLabelDelta = maxLabelRect.left - valueRect.left;

    const deltaThreshold = 32;

    if (minLabelDelta < deltaThreshold) minLabel.classList.add("hidden");
    else minLabel.classList.remove("hidden");

    if (maxLabelDelta < deltaThreshold) maxLabel.classList.add("hidden");
    else maxLabel.classList.remove("hidden");
}

function updateProgress2(slider) {
    let progress = document.getElementById(slider.dataset.progressId);
    const percent = getSliderPercent2(slider);

    progress.style.width = percent * 100 + "%";
}

function getSliderPercent2(slider) {
    const range = slider.max - slider.min;
    const absValue = slider.value - slider.min;

    return absValue / range;
}

function setTicks2(slider) {
    let container = document.getElementById(slider.dataset.tickId);
    const spacing = parseFloat(slider.dataset.tickStep);
    const sliderRange = slider.max - slider.min;
    const tickCount = sliderRange / spacing + 1; // +1 to account for 0

    for (let ii = 0; ii < tickCount; ii++) {
        let tick = document.createElement("span");

        tick.className = "tick-slider-tick2";

        container.appendChild(tick);
    }
}

function onResize() {
    const sliders = document.getElementsByClassName("tick-slider-input");

    for (let slider of sliders) {
        updateValuePosition(slider);
    }
}

window.onload = init;
window.addEventListener("resize", onResize);