function selectTopic() {

    if (topics[randomTopic] === "HTML"){
        console.log("Let's study HTML");
    } else if (topics[randomTopic] === "CSS") {
        console.log("Let's study CSS");
    } else if (topics[randomTopic] === "Git") {
        console.log("Let's study Git");
    } else if (topics[randomTopic] === "Javascript") {
        console.log("Let's study Javascript");
    } else {
        console.log("Try Again");
    }
}

var topics = ["HTML", "CSS", "Git", "Javascript"];

function listTopics() {

    for (var x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
}

var randomTopic = Math.floor(Math.random() * topics.length);

console.log("Here are the topics we are going to study:");
listTopics();

console.log("What topic should we study?");
selectTopic();