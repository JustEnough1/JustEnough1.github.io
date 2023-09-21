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

class ArticleModal {
    modalTitle = document.getElementById("article-title");
    modalText = document.getElementById("article-text");
    modalImage = document.getElementById("article-image");
    modalTechnologies = document.getElementById("article-technologies");
    modalLinks = document.getElementById("article-links");

    constructor(target) {
        this.articleId = target.getAttribute("data-open-article");
        this.setLanguage();
    }

    async getArticle() {
        const response = await fetch("../articles.json");
        const responseJson = await response.json();

        const article = responseJson.articles.find(
            ({ id }) => id === this.articleId
        );

        return article;
    }

    clearPreviousArticle() {
        this.modalTitle.innerText = "";
        this.modalText.innerHTML = "";
        this.modalImage.src = "";
        this.modalTechnologies.innerHTML = "";
        this.modalLinks.innerHTML = "";
    }

    async setArticle() {
        this.clearPreviousArticle();
        const article = await this.getArticle();

        this.modalTitle.innerText = article.content[this.language].title;
        article.content[this.language].body.forEach(
            (line) => (this.modalText.innerHTML += line)
        );
        this.modalImage.src = article.image;
        article.technologies.forEach((technology) => {
            this.modalTechnologies.innerHTML += `<small class="rounded p-2 bg-light">${technology}</small>`;
        });
        article.links.forEach(({ name, url }) => {
            this.modalLinks.innerHTML += `<a href="${url}" target="_blank">${name}</a>`;
        });
    }

    setLanguage() {
        const path = window.location.pathname;
        const page = path.split("/").pop();
        switch (page) {
            case "russian.html":
                this.language = "RUS";
                break;
            case "estonian.html":
                this.language = "EST";
                break;
            default:
                this.language = "ENG";
                break;
        }
    }
}
