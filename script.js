//generateQuestion <- button
// questionArea <- question space


$("#generateQuestion").on('click', function() {
    document.getElementById("questionArea").innerHTML = (questions[Math.floor(Math.random() * questions.length)]);
    $('#openingQuestion').hide();
});

$("#generateQuestionSm").on('click', function() {
    document.getElementById("questionArea").innerHTML = (questions[Math.floor(Math.random() * questions.length)]);
    $('#openingQuestion').hide();
});

var questions = [
    "1",
    "2",
    "3"
];

