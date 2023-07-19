// Function to check if an element is currently visible within the viewport
function checkVisible(element) {
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// Function to set typing animation for headings
const setHeadingsTypingAnimation = () => {
    const headlines = Array.from(
        document.getElementsByClassName("typing-text")
    );

    window.addEventListener("scroll", () => {
        headlines.map((headline) => {
            if (!checkVisible(headline)) return;

            const arrayIndex = headlines.indexOf(headline);
            if (arrayIndex > -1) {
                headlines.splice(arrayIndex, 1);
            }

            let headlineText = Array.from(
                headline.getElementsByClassName("heading-text")
            )[0];

            let text = headlineText.textContent;

            headlineText.textContent = "";
            let index = 0;

            function typeNextLetter() {
                if (index < text.length) {
                    const nextLetter = text[index];
                    headlineText.textContent += nextLetter;

                    index++;
                } else {
                    clearInterval(typingInterval);
                }
            }

            const typingInterval = setInterval(typeNextLetter, 100);
        });
    });

    window.scrollTo(window.scrollX, window.scrollY - 1);
    window.scrollTo(window.scrollX, window.scrollY + 1);
};

setHeadingsTypingAnimation();
