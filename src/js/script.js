var main = function() {
  console.log("jQuery running");
  var flashcards = flashcardGenerator;
  flashcards.getFlashcards();

  $(".start").click(function() {
    getNextQuestion(flashcards);
    $(this).hide();
  });

  $(".flip").click(function() {
    $(".answer").addClass("show");
  });

  $(".next").click(function() {
    getNextQuestion(flashcards);
    $(".answer").removeClass("show");
  });
};

var getNextQuestion = function(flashcards) {
  var flashcard = flashcards.getRandomFlashcard();
  $(".question").text(flashcard.question);
  $(".answer").text(flashcard.answer);
};

$(document).ready(main);