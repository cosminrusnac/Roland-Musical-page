function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } 

    if (input == "What is the best Roland Product") {
        return "AIRA Compact";
    } else if (input == "Shipping to?") {
        return "All over the world!";
    } else {
        return "Try asking something else!";
    }

}
