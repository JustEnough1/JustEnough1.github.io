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
            const selectedSkill = clickedButton.textContent.trim();

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
                case "Programming Languages":
                    programmingLanguagesSkills.classList.remove("skill-blur");
                    break;
                case "Technologies":
                    technologiesSkills.classList.remove("skill-blur");
                    break;
                case "Software":
                    softwareSkills.classList.remove("skill-blur");
                    break;
            }
        }
    });
};

setupSkillsSection();
