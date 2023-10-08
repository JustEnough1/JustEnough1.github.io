// Sets up the interactive behavior for the skills section.
const setupSkillsSection = () => {
    const skillsButtons = document.getElementById("skills-buttons");

    skillsButtons.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target.tagName === "A") {
            const clickedButton = event.target;
            const target = document.getElementById(
                clickedButton.getAttribute("data-target")
            );

            const buttonsArray = Array.from(skillsButtons.children);

            buttonsArray.forEach((btn) => btn.classList.remove("clicked"));
            clickedButton.classList.add("clicked");

            target.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    });
};

// Updates the characters count and color based on user input in a feedback textarea.
const updateFeedbackCharacterCount = () => {
    const textarea = document.getElementById("contact-textarea");
    const symbolCounter = document.getElementById("symbols-counter");

    textarea.addEventListener("input", () => {
        const currentLength = textarea.value.length;
        const maxLimit = 250;

        let symbolCounterText = symbolCounter.innerText
            .split(" ")
            .slice(1)
            .join(" ");
        let newCount = `${currentLength} ${symbolCounterText}`;

        symbolCounter.innerText = newCount;

        symbolCounter.style.color =
            currentLength === maxLimit ? "#f85a5a" : "#25d14b";
    });
};

// Sets up the article modal
const openArticle = async (event) => {
    const target = event.currentTarget;
    const articleModal = new ArticleModal(target);

    articleModal.setArticle();
};

setupSkillsSection();
updateFeedbackCharacterCount();
