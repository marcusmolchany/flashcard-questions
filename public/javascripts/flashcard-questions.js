var flashcardGenerator = (function() {
  var flashcardURL = "assets/flashcards.json";
  var flashcards = [];
  return {
    getFlashcards: function() {
      // checks cache otherwise gets flashcards from server
      if (!this.hasFlashcards()) {
        $.getJSON(flashcardURL, function(data) {
          console.log("success");
          flashcards = data.flashcards;
        });
      } else {
        // flashcards is already populated
        console.log("flashcards already populated");
      }
    },
    getRandomFlashcard: function() {
      // gets a random flashcard from flashcard cache array
      var randomFlashcardIndex = Math.floor(Math.random() * flashcards.length);
      return flashcards[randomFlashcardIndex];
    },
    hasFlashcards: function() {
      return flashcards.length > 0;
    }
  };
})();;var main = function() {
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