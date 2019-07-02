$(document).ready(() => {

    //Front page to explain the game  
    myMessage =
        'You have total 10 questions. <br>' +
        'Total time is 100 sec. <br>' +
        'Each question you have 10 sec to anwser. <br>' +
        'Good luck!';
    
    document.getElementById('message').innerHTML = myMessage;
            
    
    
    
    let myQuestion = []
    myQuestion[1] = 'How many provinces in Canada?';
    myQuestion[2] = 'Which is the largest province in Canada?';
    myQuestion[3] = 'abc';
    
    
    /*let myQuestionsLength = myQuestions.length;*/
    function showQuestion() {
        for (let i = 0; i < myQuestion.length; i++) {
            let randomQuestion = Math.floor(Math.random() * (myQuestion.length));
            document.getElementById('question').innerHTML = myQuestion[randomQuestion];
        }
        
    };
    
    // Onclick start button
    $('#start').click(()=> {
        // Question show
        $('#question').show(showQuestion);
        // Messages and Start Button hide
        $('#message').hide();
        $('#start').hide();
        
        
    });
});


           /* function quizQuestions() {
                let showQuestion = document.getElementById('question').innerHTML = myQuestions.show();
            }
            
            // Click for Start Button
            
            
                
            })
            
            gameIndex = 0;
            myScore = 0;
            timeIndex = 10;
        gameQuestions = [];

/*$('#question').show();

    for (let i = 0; i < showQuestion.length; i++) {
        let randomQuestion = showQuestion(Math.floor(Math.random() * 4));

     
       
    }
});



    /*let myAnswers = [
            ['a: Seven', 'b: Eight', 'c: Nine', 'd: Ten'],
            ['a: Nunavut', 'b: Northwest Territories', 'c: Ontario', 'd: Newfoundland and labrador'],

        ],

        correctAnswer = [3, 1];
    gameAnswer = [];







        /*mySetUp._initialize = function () {
            mySetUp.windowLoad();
            startButton.addEventListener('click', mySetUp.gamePlay);
            /*for (let i = 0; i < myQuestions.length; i++) {
                myQuestions = Math.random();
            }*/

            // Click for Answer Buttons
          //  for (var i = 0; i < buttonArray.length; i++) {
        //buttonArray[i].addEventListener('click', mySetUp.answerClicked, false);
   // }

    // Score and Timer      
    /*mySetUp.gamePlayData = function () {
            mySetUp.gameIndex();
            mySetUp.gameData();
            score[0].textContent = myScore;
            timer[0].textContent = timeIndex;
        }

    //Anwser Buttons
    mySetUp.interfaceForGamePlay = function () {
            let findAnswer = myAnswer[quizQuestions[gameIndex]];
            for (let i = 0; i < findAnswer.length; i++) {
                let a = ans[i];
                buttonArray[i].textContent = a;
            }
        }

    mySetUp.randomQuestionAndAnswer = function () {
            let randomQuestion = Math.floor(Math.random() * 14);
            if (gameQuestions.indexOf(randomQuestion) == -1) {
                gameQuestions.push(randomQuestion);
                gameAnswer.push(correctAnswer[randomQuestion]);
            }

        }



}
            
            }*/
    
    
        
   
        
    

