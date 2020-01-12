// allows the document to load before js starts
$(document).ready(function(){
    
  })
  
  var trivia = {
    // trivia properties
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timerId : '',
    // questions options and answers data
    questions: {
      q1: 'Jamie a McKenzie?',
      q2: 'Claire is a widow ',
      q3: 'Culloden Moor is a war',
    },
    options: {
      q1: ['True', 'False'],
      q2: ['True', 'False'],
      q3: ['True', 'False'],
    },
    answers: {
      q1: 'True',
      q2: 'False',
      q3: 'True',
    },
    // trivia methods
    // method to initialize game
    startGame: function(){
      // restarting game results
      trivia.currentSet = 0;
      trivia.correct = 0;
      trivia.incorrect = 0;
      trivia.unanswered = 0;
      clearInterval(trivia.timerId);
      
      // show game section
      
      // show timer
      
    // method to loop through and display questions and options 
 
      // set timer 
      
      // to prevent timer speed up

      
      // gets all the questions 
    
      
    // method to decrement counter and count unanswered if timer runs out
    
      // if timer still has time left and there are still questions left to ask
     
      // the time has run out and increment unanswered, run result
      
      // if all the questions have been shown end the game, show results
     
        // adds results of game to the page
      
      
      // timer ID for gameResult setTimeout
 
      // the answer to the current question being asked
      
      // if the text of the option picked matches the answer of the current question, increment correct

    
      // else the user picked the wrong option, increment incorrect
  
  }