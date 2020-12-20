var txt;

function popup(){
  var person = prompt("Please enter your name:");
  txt = person ;
  }

 
class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  let questions = [
    new Question("Dans quelle manga retrouvons nous Monkey D Luffy ?", ["SNK", "One Piece", "Tokyo Ghoul", "Dragon boule"], "One Piece"),
    new Question("Qui etait le roi des pirates?", ["Rayleigh","Ace", "Gold D Roger", "Monkey D Luffy"], "Gold D Roger"),
    new Question("Qui est un grand corsaire ?", ["Baggy le clown","Killer", "Shanks le roux", "Eustass Kid"], "Baggy le clown"),
    new Question("Qui est le musicien des chapeaux de paille ?", ["Bepo","Sanji", "Brook", "Roronoa Zoro"], "Brook")
  ];
  

  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  
  const display = {

    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      endQuizHTML = `
        <h1>Bravo vous avez complété le Quizz !</h1>
        <h3>  ${txt} ton score est de : ${quiz.score * 25} / 100 </h3>`;
      this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }

      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  

  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  
  let quiz = new Quiz(questions);
  quizApp();
  

  
