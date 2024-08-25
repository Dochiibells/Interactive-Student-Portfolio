//for the title changing typewriter.
const titles = ["Web Developer", "Student", "Apprentice", "IT"];
let titleIndex = 0, charIndex = 0;
const typewriterElement = document.getElementById('typewriter');

const longestTitleLength = Math.max(...titles.map(title => title.length));
typewriterElement.style.minWidth = `${longestTitleLength}ch`;

// Function to start typing
function type() {
    if (charIndex < titles[titleIndex].length) {
        typewriterElement.textContent += titles[titleIndex].charAt(charIndex++);
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000); // Wait for 2 seconds before starting to erase
    }
}

// Function to start erasing
function erase() {
    if (charIndex > 0) {
        typewriterElement.textContent = titles[titleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 60); // Speed of erasing
    } else {
        titleIndex = (titleIndex + 1) % titles.length; // Move to next title
        setTimeout(type, 100); // Start typing the next title
    }
}

// Start the typing effect
type();


