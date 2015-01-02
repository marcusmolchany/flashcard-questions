var main = function() {
  console.log("jQuery running");
  var flashcards = flashcardGenerator;
  flashcards.getFlashcards();

  console.log(flashcards);
};

$(document).ready(main);