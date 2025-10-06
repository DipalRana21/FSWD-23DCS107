const votes = {
    Javascript: 0,
    Python: 0,
    Java: 0
};

const buttons = document.querySelectorAll(".btn button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.textContent;
        votes[lang]++;
        updateVotes();
    });
});

function updateVotes() {
    document.getElementById("Javascript-count").textContent = votes['Javascript'];
    document.getElementById("Python-count").textContent = votes['Python'];
    document.getElementById("Java-count").textContent = votes['Java'];
}


setInterval(() => {
    const languages = Object.keys(votes);
    const randomIndex = Math.floor(Math.random() * languages.length);
    const randomLanguage = languages[randomIndex];

    votes[randomLanguage]++;
    updateVotes();
}, 2000);
