(function () {
    // When you click on your PFP, your PFP will interact and say something. !
    let textEntries = ["Hi there, click me!",
        "do it again!",
        "*clears throat*",
        "Hi! I'm Roshanell!",
        "I'm an educator turned software engineer.",
        "I've been in tech for half a year,",
        "building awesome websites and software with 100Devs Agency.",
        "Nice to meet you, and let's connect!",
        "Ask me how an educator would benefit your company.",
    ];

    let index = 0;
    const bubbleTextElement = document.querySelector(".mainTextBox");
    bubbleTextElement.style.display = "block";
    function nextTextForBubble() {
        textEntries[index] && (bubbleTextElement.innerText = textEntries[index]);
        index++;
    }
    nextTextForBubble();
    
    Array.from(document.querySelectorAll(".mainIconContainer *")).forEach(i=>i.addEventListener("click", function (e) {
        nextTextForBubble();
    }));
}());