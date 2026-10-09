const noButton = document.getElementById("noBtn");
const yesButton = document.getElementById("yesBtn");
const questionBox = document.getElementById("questionBox");
const successMessage = document.getElementById("successMessage");
const hint = document.getElementById("hint");

let noClicks = 0;

if (noButton) {

noButton.addEventListener("click", function () {

    noClicks++;

    // Make the NO button smaller every time it is clicked
    let newSize = Math.max(0.15, 1 - (noClicks * 0.15));

    noButton.style.transform = `scale(${newSize})`;

    // Make YES slightly bigger
    let yesSize = 1 + (noClicks * 0.08);

 yesButton.style.transform = `scale(${yesSize})`;

    // Change the messages
    if (noClicks === 1) {
        hint.textContent = "Are you sure? ";
    }

    else if (noClicks === 2) {
        hint.textContent = "please reconsider.";
    }

    else if (noClicks === 3) {
        hint.textContent = "";
    }

    else if (noClicks === 4) {
        hint.textContent = "";
    }

    else if (noClicks >= 5) {
        hint.textContent = "";
    }

});


}

if (yesButton) {

yesButton.addEventListener("click", function () {

    questionBox.style.display = "none";

    successMessage.style.display = "block";

    // Confetti effect
    createConfetti();

});


}

function createConfetti() {


for (let i = 0; i < 70; i++) {

    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.background =
        ["#247b4c", "#f2c94c", "#e76f51", "#5b8def"][Math.floor(Math.random() * 4)];

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.borderRadius = "2px";
    confetti.style.zIndex = "9999";

    document.body.appendChild(confetti);

    const fallDuration = 2000 + Math.random() * 2500;

    confetti.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 1
            },
            {
                transform:
                    `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                opacity: 0
            }
        ],
        {
            duration: fallDuration,
            easing: "linear"
        }
    );

    setTimeout(() => {
        confetti.remove();
    }, fallDuration);

}


}
