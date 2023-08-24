// Sets up the interactive behavior for the skills section.
const setupSkillsSection = () => {
    const programmingLanguagesSkills = document.getElementById(
        "programming-languages"
    );
    const technologiesSkills = document.getElementById("technologies");
    const softwareSkills = document.getElementById("software");

    const skillsButtons = document.getElementById("skills-buttons");

    skillsButtons.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            const clickedButton = event.target;
            const selectedSkill = clickedButton.id;

            const skillBlocks = [
                programmingLanguagesSkills,
                technologiesSkills,
                softwareSkills,
            ];
            const buttonsArray = Array.from(skillsButtons.children);

            buttonsArray.forEach((btn) => btn.classList.remove("clicked"));
            clickedButton.classList.add("clicked");

            skillBlocks.forEach((skillBlock) =>
                skillBlock.classList.add("skill-blur")
            );

            switch (selectedSkill) {
                case "programming-languages-btn":
                    programmingLanguagesSkills.classList.remove("skill-blur");
                    break;
                case "technologies-btn":
                    technologiesSkills.classList.remove("skill-blur");
                    break;
                case "software-btn":
                    softwareSkills.classList.remove("skill-blur");
                    break;
            }
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

setupSkillsSection();
updateFeedbackCharacterCount();
